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
    this.data.players = new Player('human', 'gameboard1');
    this.data.players = new Player('ai', 'gameboard2');
  },

  placeComputerShips() {
    const gameboard = this.data.gameboards.gameboard2;
    gameboard.addShip(gameboard.findRandomShipLocation(5), 5);
    gameboard.addShip(gameboard.findRandomShipLocation(4), 4);
    gameboard.addShip(gameboard.findRandomShipLocation(3), 3);
    gameboard.addShip(gameboard.findRandomShipLocation(2), 2);
    gameboard.addShip(gameboard.findRandomShipLocation(2), 2);
  },
};

// eslint-disable-next-line import/prefer-default-export
export { logic };
