/* eslint-disable no-prototype-builtins */
import Gameboard from './gameboard';
import Player from './player';

const logic = {
  data: {
    gameboards: {},
    players: {},
  },

  initalizeGame() {
    this.data.gameboards.gameboard1 = new Gameboard('gameboard1');
    this.data.gameboards.gameboard2 = new Gameboard('gameboard2');
    this.data.gameboards.gameboard1.init();
    this.data.gameboards.gameboard2.init();
    this.data.players.player1 = new Player('human', 'gameboard1');
    this.data.players.player2 = new Player('ai', 'gameboard2');
  },

  placeComputerShips() {
    const gameboard = this.data.gameboards.gameboard2;
    gameboard.addShip(gameboard.findRandomShipLocation(5), 5);
    gameboard.addShip(gameboard.findRandomShipLocation(4), 4);
    gameboard.addShip(gameboard.findRandomShipLocation(3), 3);
    gameboard.addShip(gameboard.findRandomShipLocation(3), 3);
    gameboard.addShip(gameboard.findRandomShipLocation(2), 2);
  },

  processAttack(cell, board) {
    const gameboard = this.data.gameboards[board];
    const result = this.data.gameboards[board].receiveAttack(cell);
    const feedback = {
      action: null,
      cell: null,
      board: null,
      allSunk: false,
    };
    const shipIndex = gameboard.board[cell].id;
    if (result === 'missed') {
      feedback.action = 'missed';
      feedback.cell = cell;
      feedback.board = gameboard.name;
      return feedback;
    }
    if (gameboard.ships[shipIndex].sunk) {
      const allShipsCords = gameboard.board.reduce((acc, element, index) => {
        if (element !== null && !element.hasOwnProperty('isMissed'))
          acc.push(index);
        return acc;
      }, []);
      const sunkShipCords = allShipsCords.reduce((acc, element) => {
        if (gameboard.board[element].id === shipIndex) acc.push(element);
        return acc;
      }, []);
      feedback.action = 'sunk';
      feedback.cell = sunkShipCords;
      if (gameboard.reportAllSunk() === true) {
        feedback.allSunk = true;
      }
    } else if (result === 'hit') {
      feedback.action = 'hit';
      feedback.cell = cell;
    }
    feedback.board = gameboard.name;
    return feedback;
  },

  initiateComputerMove() {
    const playerBoard = this.data.gameboards.gameboard1;
    const bestMove = Player.findBestMove(playerBoard);
    return this.processAttack(bestMove, 'gameboard1');
  },

  resetLogic() {
    const { gameboard1, gameboard2 } = this.data.gameboards;
    gameboard1.ships = [];
    gameboard1.board.forEach((item, index) => {
      if (item !== null) gameboard1.board[index] = null;
    });
    gameboard2.ships = [];
    gameboard2.board.forEach((item, index) => {
      if (item !== null) gameboard2.board[index] = null;
    });
  },
};

// eslint-disable-next-line import/prefer-default-export
export { logic };
