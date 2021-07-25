import Gameboard from './classes/gameboard';
import Player from './classes/player';

const newGame = () => {
  const gameboard1 = new Gameboard();
  const gameboard2 = new Gameboard();
  const player1 = new Player(human);
  const player2 = new Player(ai);
};

const leftBorder = () => {
  const border = [];
  for (let i = 0; i < 9; i += 1) {
    border.push(i);
  }
  return border;
};

const rightBorder = () => {
  const border = [];
  for (let i = 9; i < 99; i += 10) {
    border.push(i);
  }
  return border;
};

const getRandomCell = (gameboard) => {
  const freeCells = gameboard.board.reduce((cells, curr, index) => {
    if (curr === null) cells.push(index);
    return cells;
  }, []);
  const randomCell = freeCells[Math.floor(Math.random() * freeCells.length)];
  return randomCell;
};

const placeShipRandomly = (length, vertical, gameboard) => {
  const randomCell = getRandomCell(gameboard);
  const coordinates = [];
  if (vertical === true) {
    coordinates.push(randomCell);
    for (let i = 1; i < length; i += 1) {
      const belowCell = randomCell + 10 * i;
      const aboveCell = randomCell - 10 * i;

      if (gameboard.board[belowCell] === null && belowCell < 99) {
        coordinates.push(belowCell);
      } else if (gameboard.board[aboveCell] === null && aboveCell > 0) {
        coordinates.push(aboveCell);
      } else return placeShipRandomly(length, vertical, gameboard);
    }
  }
  if (vertical === false) {
    coordinates.push(randomCell);
    for (let i = 1; i < length; i += 1) {
      const leftCell = randomCell + 1 * i;
      const rightCell = randomCell - 1 * i;

      if (
        gameboard.board[leftCell] === null &&
        !rightBorder().includes(leftCell)
      ) {
        coordinates.push(leftCell);
      } else if (
        gameboard.board[rightCell] === null &&
        !leftBorder().includes(rightCell)
      ) {
        coordinates.push(rightCell);
      } else return placeShipRandomly(length, vertical, gameboard);
    }
  }
  return gameboard.addShip(coordinates);
};

export { newGame, placeShipRandomly };
