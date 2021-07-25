class Ship {
  constructor(length) {
    this.length = length;
    this.hits = Array(length).fill(null);
    this.sunk = false;
  }
  hit(part) {
    this.hits[part] = 'hit';
    this.isSunk();
  }
  isSunk() {
    if (this.hits.length === this.length) this.sunk = true;
  }
}

class Gameboard {
  constructor() {
    this.board;
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

class Player {
  constructor(name) {
    this.name = name;
  }
  randomAttack(gameboard) {
    const legalAttacks = gameboard.board.reduce(function (cells, curr, index) {
      if (curr === null || curr.isHit !== true || curr.isMissed !== true)
        cells.push(index);
      return cells;
    }, []);
    const randomLegal =
      legalAttacks[Math.floor(Math.random() * legalAttacks.length)];
    gameboard.receiveAttack(randomLegal);
  }
}

export { Ship, Gameboard, Player };
