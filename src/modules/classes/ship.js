class Ship {
  constructor(length, vertical) {
    this.length = length;
    this.hits = Array(length).fill(null);
    this.sunk = false;
    this.vertical = vertical;
  }

  hit(part) {
    this.hits[part] = 'hit';
    this.isSunk();
  }

  isSunk() {
    if (this.hits.length === this.length) this.sunk = true;
  }
}

export default Ship;
