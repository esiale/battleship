import { Gameboard, randomizeShips } from './gameboard';
import { renderBoard, drawShips } from './dom';
import Player from './player';

const initializeGame = () => {
  const gameboard1 = new Gameboard('gameboard1');
  gameboard1.init();
  renderBoard(gameboard1);
  const gameboard2 = new Gameboard('gameboard2');
  gameboard2.init();
  renderBoard(gameboard2);
  const player1 = new Player('human', gameboard1);
  const player2 = new Player('ai', gameboard2);
  randomizeShips(gameboard1);
  randomizeShips(gameboard2);
  drawShips(gameboard1);
  drawShips(gameboard2);
};

export default initializeGame;
