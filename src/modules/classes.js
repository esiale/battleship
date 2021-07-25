class Ship {
  constructor(length) {
    this.length = length;
    this.hits = Array(length).fill(null);
    this.sunk = false;
  }
  hit(hitLocation) {
    this.hits[hitLocation] = 'hit';
    this.isSunk();
  }
  isSunk() {
    if (this.hits.every((location) => location === 'hit')) this.sunk = true;
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
    coordinates.forEach((item) => {
      this.board[item] = this.ships.length - 1;
    });
  }
  getLocation(coordinate) {
    const shipCoordinates = this.board.reduce(function (
      cords,
      curr,
      index,
      arr
    ) {
      if (curr === arr[coordinate]) cords.push(index);
      return cords;
    },
    []);
    return shipCoordinates;
  }
  receiveAttack(coordinate) {
    if (this.board[coordinate] === null)
      return (this.board[coordinate] = 'missed');
    const hitLocation = this.getLocation(coordinate).indexOf(coordinate);
    const shipIndex = this.board[coordinate];
    this.ships[shipIndex].hit(hitLocation);
  }
  reportAllSunk() {
    return this.ships.every((ship) => ship.sunk === true);
  }
}

export { Ship, Gameboard };
