import Ship from './ship';

class Gameboard {
  constructor(name) {
    this.board = name;
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

export default Gameboard;
