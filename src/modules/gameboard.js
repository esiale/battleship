import Ship from './ship';

class Gameboard {
  constructor(name) {
    this.name = name;
    this.ships = [];
  }

  init() {
    this.board = Array(100).fill(null);
  }

  addShip(coordinates, length) {
    this.ships.push(new Ship(length));
    coordinates.forEach((item, index) => {
      this.board[item] = {
        id: this.ships.length - 1,
        part: index,
        isHit: false,
      };
    });
  }

  receiveAttack(coordinate) {
    if (this.board[coordinate] === null)
      return (this.board[coordinate] = { isMissed: true });
    this.ships[this.board[coordinate].id].hit(this.board[coordinate].part);
    this.board[coordinate].isHit = true;
  }

  reportAllSunk() {
    return this.ships.every((ship) => ship.sunk === true);
  }
}

const leftBorder = () => {
  const border = [];
  for (let i = 0; i <= 90; i += 10) {
    border.push(i);
  }
  console.log(border);
  return border;
};

const rightBorder = () => {
  const border = [];
  for (let i = 9; i <= 99; i += 10) {
    border.push(i);
  }
  console.log(border);
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

const placeShipRandomly = (length, gameboard) => {
  const randomCell = getRandomCell(gameboard);
  const coordinates = [];
  const vertical = Math.random() < 0.5;
  if (vertical === true) {
    coordinates.push(randomCell);
    let belowCell = randomCell + 10;
    let aboveCell = randomCell - 10;
    for (let i = 1; i < length; i += 1) {
      if (gameboard.board[belowCell] === null && belowCell < 99) {
        coordinates.push(belowCell);
        belowCell += 10;
      } else if (gameboard.board[aboveCell] === null && aboveCell > 0) {
        coordinates.push(aboveCell);
        aboveCell -= 10;
      } else return placeShipRandomly(length, gameboard);
    }
  }
  if (vertical === false) {
    coordinates.push(randomCell);
    let leftCell = randomCell - 1;
    let rightCell = randomCell + 1;
    for (let i = 1; i < length; i += 1) {
      if (
        gameboard.board[leftCell] === null &&
        !rightBorder().includes(leftCell)
      ) {
        coordinates.push(leftCell);
        leftCell -= 1;
      } else if (
        gameboard.board[rightCell] === null &&
        !leftBorder().includes(rightCell)
      ) {
        coordinates.push(rightCell);
        rightCell += 1;
      } else return placeShipRandomly(length, gameboard);
    }
  }
  return gameboard.addShip(coordinates, length);
};

const randomizeShips = (gameboard) => {
  placeShipRandomly(5, gameboard);
  placeShipRandomly(4, gameboard);
  placeShipRandomly(3, gameboard);
  placeShipRandomly(3, gameboard);
  placeShipRandomly(2, gameboard);
};

export { Gameboard, placeShipRandomly, randomizeShips };
