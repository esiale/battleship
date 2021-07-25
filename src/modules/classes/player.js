class Player {
  constructor(name, gameboard) {
    this.name = name;
    this.gameboard = gameboard;
  }

  randomAttack() {
    const legalAttacks = this.gameboard.board.reduce((cells, curr, index) => {
      if (curr === null || curr.isHit !== true || curr.isMissed !== true)
        cells.push(index);
      return cells;
    }, []);
    const randomLegal =
      legalAttacks[Math.floor(Math.random() * legalAttacks.length)];
    this.gameboard.receiveAttack(randomLegal);
  }
}

export default Player;
