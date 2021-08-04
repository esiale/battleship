/* eslint-disable no-param-reassign */
/* eslint-disable no-prototype-builtins */
class Player {
  constructor(name) {
    this.name = name;
  }

  static attackRandom(gameboard) {
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
    const referenceArray = [...array, cell];
    if (rightBorder.includes(cell)) {
      const illegal = referenceArray.filter((number) =>
        rightBorder.some((item) => number === item + 1)
      );
      if (illegal.length !== 0) {
        referenceArray.splice(referenceArray.indexOf(illegal[0]), 1);
      }
    }
    if (leftBorder.includes(cell)) {
      const illegal = referenceArray.filter((number) =>
        leftBorder.some((item) => number === item - 1)
      );
      if (illegal.length !== 0) {
        referenceArray.splice(referenceArray.indexOf(illegal[0]), 1);
      }
    }
    referenceArray.splice(referenceArray.indexOf(cell), 1);
    const revisedCells = referenceArray.filter(
      (number) => number <= 99 && number >= 0
    );
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
    if (flatArray.length === 0) return this.attackRandom(gameboard);
    return flatArray[Math.floor(Math.random() * flatArray.length)];
  }

  static groupTrendsByOrientation(hits) {
    const groupLastDigits = hits.reduce((list, current) => {
      const last = current % 10;
      list[last] ??= [];
      list[last].push(current);
      return list;
    }, {});
    const groupFirstDigits = hits.reduce((list, current) => {
      let first = Math.floor(current / 10);
      if (first === current) first = 0;
      list[first] ??= [];
      list[first].push(current);
      return list;
    }, {});
    const getNumbers = (obj) =>
      Object.values(obj)
        .filter((arr) => arr.length > 1)
        .flat();
    const yTrend = getNumbers(groupLastDigits);
    const xTrend = getNumbers(groupFirstDigits);
    return [xTrend, yTrend];
  }

  static analyzeTrends(hits) {
    const trends = this.groupTrendsByOrientation(hits);
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
    const horizontalTrends = trends[0].reduce(analyze, {
      ...horizontalConditions,
      list: [],
    }).list;
    const verticalTrends = trends[1].reduce(analyze, {
      ...verticalConditions,
      list: [],
    }).list;
    return { horizontalTrends, verticalTrends };
  }

  static attackTrend(horizontalTrends, verticalTrends, gameboard) {
    const potentialTargets = [];
    if (horizontalTrends.length !== 0) {
      horizontalTrends.forEach((item) => {
        const highest = Math.max(...item);
        const lowest = Math.min(...item);
        if (
          this.checkForLegalAttacks(highest, [highest + 1], gameboard)
            .length !== 0
        )
          potentialTargets.push(highest + 1);
        if (
          this.checkForLegalAttacks(lowest, [lowest - 1], gameboard).length !==
          0
        )
          potentialTargets.push(lowest - 1);
      });
    }
    if (verticalTrends.length !== 0) {
      verticalTrends.forEach((item) => {
        const highest = Math.max(...item);
        const lowest = Math.min(...item);
        if (
          this.checkForLegalAttacks(highest, [highest + 10], gameboard)
            .length !== 0
        )
          potentialTargets.push(highest + 10);
        if (
          this.checkForLegalAttacks(lowest, [lowest - 10], gameboard).length !==
          0
        )
          potentialTargets.push(lowest - 10);
      });
    }
    if (potentialTargets.length) {
      const removeDuplicates = [...new Set(potentialTargets)];
      return removeDuplicates;
    }
    return null;
  }

  static findBestMove(gameboard) {
    const hits = this.detectShips(gameboard);
    if (hits.length === 0) return this.attackRandom(gameboard);
    if (hits.length >= 2) {
      const { horizontalTrends, verticalTrends } = this.analyzeTrends(hits);
      if (horizontalTrends.length || verticalTrends.length) {
        const potentialTrendTargets = this.attackTrend(
          horizontalTrends,
          verticalTrends,
          gameboard
        );
        if (potentialTrendTargets === null) {
          return this.attackSurroundingCells(hits, gameboard);
        }
        return potentialTrendTargets[
          Math.floor(Math.random() * potentialTrendTargets.length)
        ];
      }
    }
    return this.attackSurroundingCells(hits, gameboard);
  }
}

export default Player;
