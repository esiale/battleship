class Player {
  constructor(name) {
    this.name = name;
  }

  static randomAttack(gameboard) {
    const legalAttacks = gameboard.board.reduce((cells, curr, index) => {
      if (curr === null || (curr.isHit !== true && curr.isMissed !== true))
        cells.push(index);
      return cells;
    }, []);
    const randomLegal =
      legalAttacks[Math.floor(Math.random() * legalAttacks.length)];
    return randomLegal;
  }
}

export default Player;
