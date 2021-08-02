class Player {
  constructor(name) {
    this.name = name;
  }

  static findLegalAttacks(gameboard) {
    const legalAttacks = gameboard.board.reduce((cells, curr, index) => {
      if (curr === null || (curr.isHit !== true && curr.isMissed !== true))
        cells.push(index);
      return cells;
    }, []);
    return legalAttacks;
  }

  static randomAttack(gameboard) {
    const legalAttacks = this.findLegalAttacks(gameboard);
    const randomLegal =
      legalAttacks[Math.floor(Math.random() * legalAttacks.length)];
    return randomLegal;
  }

  static detectShips(gameboard) {
    const hits = gameboard.board.reduce((cells, curr, index) => {
      if (
        curr !== null &&
        !curr.isMissed === true &&
        curr.isHit === true &&
        gameboard.ships[curr.id].sunk === false
      )
        cells.push(index);
      return cells;
    }, []);
    return hits;
  }

  static findSurroundingCells(cell, gameboard) {
    const surroundingCells = [];
    const cellAbove = cell - 10;
    const cellBelow = cell + 10;
    const cellLeft = cell - 1;
    const cellRight = cell + 1;
    surroundingCells.push(cellAbove, cellBelow, cellLeft, cellRight);
    const rightBorder = [9, 19, 29, 39, 49, 59, 69, 79, 89];
    const leftBorder = [0, 10, 20, 30, 40, 50, 60, 70, 90];
    if (rightBorder.some((number) => number === cell)) {
      surroundingCells.splice(surroundingCells.indexOf(cell + 1), 1);
    }
    if (leftBorder.some((number) => number === cell)) {
      surroundingCells.splice(surroundingCells.indexOf(cell - 1), 1);
    }
    const revisedCells = surroundingCells.filter(
      (number) => number < 99 && number > 0
    );
    const legalAttacks = revisedCells.reduce((cells, curr) => {
      if (
        gameboard.board[curr] === null ||
        (gameboard.board[curr].isHit !== true &&
          gameboard.board[curr].isMissed !== true)
      )
        cells.push(curr);
      return cells;
    }, []);
    return legalAttacks;
  }

  static findBestMove(gameboard) {
    const hits = this.detectShips(gameboard);
    if (hits.length === 0) return this.randomAttack(gameboard);
    const possibleTargets = [];
    hits.forEach((hit) => {
      possibleTargets.push(this.findSurroundingCells(hit, gameboard));
    });
    const flatArray = possibleTargets.flat();
    return flatArray[Math.floor(Math.random() * flatArray.length)];
  }
}

export default Player;
