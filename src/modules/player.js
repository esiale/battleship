/* eslint-disable no-prototype-builtins */
class Player {
  constructor(name) {
    this.name = name;
  }

  static randomAttack(gameboard) {
    const legalAttacks = gameboard.board.reduce((cells, curr, index) => {
      if (curr !== null && curr.hasOwnProperty('isMissed')) return cells;
      if (curr === null || curr.isHit === false) cells.push(index);
      return cells;
    }, []);
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

  static checkForLegalAttacks(cell, array, gameboard) {
    const rightBorder = [9, 19, 29, 39, 49, 59, 69, 79, 89];
    const leftBorder = [0, 10, 20, 30, 40, 50, 60, 70, 90];
    if (rightBorder.some((number) => number === cell)) {
      array.splice(array.indexOf(cell + 1), 1);
    }
    if (leftBorder.some((number) => number === cell)) {
      array.splice(array.indexOf(cell - 1), 1);
    }
    const revisedCells = array.filter((number) => number < 99 && number > 0);
    const legalAttacks = revisedCells.reduce((cells, curr) => {
      if (
        gameboard.board[curr] !== null &&
        gameboard.board[curr].hasOwnProperty('isMissed')
      )
        return cells;
      if (
        gameboard.board[curr] === null ||
        gameboard.board[curr].isHit === false
      )
        cells.push(curr);
      return cells;
    }, []);
    return legalAttacks;
  }

  static findSurroundingCells(cell, gameboard) {
    const number = parseInt(cell, 10);
    const surroundingCells = [];
    const cellAbove = number - 10;
    const cellBelow = number + 10;
    const cellLeft = number - 1;
    const cellRight = number + 1;
    surroundingCells.push(cellAbove, cellBelow, cellLeft, cellRight);
    return this.checkForLegalAttacks(number, surroundingCells, gameboard);
  }

  static attackSurroundingCells(hits, gameboard) {
    const possibleTargets = [];
    hits.forEach((hit) => {
      possibleTargets.push(this.findSurroundingCells(hit, gameboard));
    });
    const flatArray = possibleTargets.flat();
    return flatArray[Math.floor(Math.random() * flatArray.length)];
  }

  static detectTrends(hits) {
    const analyze = (trend, item, index, array) => {
      const { getPredecessor, getSuccessor, list } = trend;
      if (getPredecessor(item) === array[index - 1]) {
        list[list.length - 1].push(item);
      } else if (getSuccessor(item) === array[index + 1]) {
        list.push([item]);
      }
      return trend;
    };
    const horizontalConditions = {
      getPredecessor: (item) => item - 1,
      getSuccessor: (item) => item + 1,
    };
    const verticalConditions = {
      getPredecessor: (item) => item - 10,
      getSuccessor: (item) => item + 10,
    };
    const horizontalTrends = hits.reduce(analyze, {
      ...horizontalConditions,
      list: [],
    }).list;
    const verticalTrends = hits.reduce(analyze, {
      ...verticalConditions,
      list: [],
    }).list;
    return [horizontalTrends, verticalTrends];
  }

  static trendAttack(trends, gameboard) {
    const potentialTargets = [];
    if (trends[0].length) {
      trends[0].forEach((item) => {
        const highest = Math.max(...item);
        const lowest = Math.min(...item);
        potentialTargets.push(highest + 1, lowest - 1);
      });
    }
    if (trends[1].length) {
      trends[1].forEach((item) => {
        const highest = Math.max(...item);
        const lowest = Math.min(...item);
        potentialTargets.push(highest + 10, lowest - 10);
      });
    }
    potentialTargets.forEach((target) => {
      this.checkForLegalAttacks(target, potentialTargets, gameboard);
    });
    if (potentialTargets.length) return potentialTargets;
    return this.attackSurroundingCells(this.detectShips(gameboard), gameboard);
  }

  static findBestMove(gameboard) {
    const hits = this.detectShips(gameboard);
    if (hits.length === 0) return this.randomAttack(gameboard);
    const trends = this.detectTrends(hits);
    if (trends[0].length || trends[1].length) {
      const potentialTrendTargets = this.trendAttack(trends, gameboard);
      return potentialTrendTargets[
        Math.floor(Math.random() * potentialTrendTargets.length)
      ];
    }
    if (this.attackSurroundingCells(hits, gameboard).length === 0) {
      return this.randomAttack(gameboard);
    }
  }
}

export default Player;
