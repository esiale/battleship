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
    if (this.board[coordinate] === null) {
      this.board[coordinate] = { isMissed: true };
      return 'missed';
    }
    this.ships[this.board[coordinate].id].hit(this.board[coordinate].part);
    this.board[coordinate].isHit = true;
    return 'hit';
  }

  reportAllSunk() {
    return this.ships.every((ship) => ship.sunk === true);
  }

  checkForConflicts(location) {
    if (location.some((item) => item > 99)) return false;

    const rightBorder = [9, 19, 29, 39, 49, 59, 69, 79, 89];
    if (
      // eslint-disable-next-line arrow-body-style
      rightBorder.some((number) => {
        return [number, number + 1].every((item) => location.includes(item));
      })
    ) {
      return false;
    }

    if (location.some((item) => this.board[item] !== null)) {
      return false;
    }
    return true;
  }

  findRandomShipLocation(length) {
    const vertical = Math.random() > 0.5;
    const validLocations = [];

    for (let i = 0; i < 100 - length; i += 1) {
      const possibleLocations = [];
      if (vertical === true) {
        for (let y = 0; y < length; y += 1) {
          possibleLocations.push(i + y * 10);
        }
      } else if (vertical === false) {
        for (let y = 0; y < length; y += 1) {
          possibleLocations.push(y + i);
        }
      }
      if (this.checkForConflicts(possibleLocations))
        validLocations.push(possibleLocations);
    }
    return validLocations[Math.floor(Math.random() * validLocations.length)];
  }

  placePlayerShip(target, preview) {
    const locationArray = [];
    if (preview.dataset.vertical === 'false') {
      for (let i = 0; i < preview.dataset.length; i += 1) {
        locationArray.push(parseInt(target.dataset.index, 10) + i);
      }
    }
    if (preview.dataset.vertical === 'true') {
      for (let i = 0; i < preview.dataset.length; i += 1) {
        locationArray.push(parseInt(target.dataset.index, 10) + i * 10);
      }
    }
    if (this.checkForConflicts(locationArray) === true) {
      this.addShip(locationArray, parseInt(preview.dataset.length, 10));
      return true;
    }
    return false;
  }

  processAttack(index) {
    const feedback = {
      result: null,
      isSunk: false,
      reportAllSunk: false,
    };
    feedback.result = this.receiveAttack(index);
    if (
      this.board[index] !== null &&
      // eslint-disable-next-line no-prototype-builtins
      !this.board[index].hasOwnProperty('isMissed')
    ) {
      feedback.isSunk = this.ships[this.board[index].id].sunk;
      feedback.reportAllSunk = this.reportAllSunk();
    }
    return feedback;
  }
}

export default Gameboard;
