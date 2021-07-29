import { logic } from './logic';

const drawShips = (gameboard) => {
  gameboard.board.forEach((item, index) => {
    if (item === null) return;
    const domBoard = document.querySelector(`.${gameboard.name}`);
    const shipCell = domBoard.querySelector(`[data-index='${index}']`);
    shipCell.classList.add('ship');
  });
};

const handleShipPlacement = (e) => {
  const targetCell = e.target;
  const shipPreview = document.querySelector('.ship-preview');
  if (
    logic.data.gameboards.gameboard1.placePlayerShip(targetCell, shipPreview)
  ) {
    drawShips(logic.data.gameboards.gameboard1);
  }
};

const renderBoard = (gameboard) => {
  const board = document.createElement('div');
  board.className = gameboard.name;
  for (let i = 0; i < gameboard.board.length; i += 1) {
    const newCell = document.createElement('div');
    newCell.className = 'cell';
    newCell.dataset.index = i;
    newCell.addEventListener('click', handleShipPlacement);
    board.append(newCell);
  }
  const wrapper = document.querySelector('.boards-wrapper');
  wrapper.append(board);
};

const renderPreview = (length) => {
  const shipPreview = document.querySelector('.ship-preview');
  shipPreview.dataset.length = length;
  shipPreview.dataset.vertical = false;
  for (let i = 0; i < length; i += 1) {
    const cell = document.createElement('div');
    cell.className = 'preview-cell';
    shipPreview.appendChild(cell);
  }
};

const renderAll = () => {
  renderBoard(logic.data.gameboards.gameboard1);
  renderBoard(logic.data.gameboards.gameboard2);
  renderPreview(5);
  // FOR STYLING - REMOVE BEFORE PUBLISHING //
  drawShips(logic.data.gameboards.gameboard2);
};

export default renderAll;
