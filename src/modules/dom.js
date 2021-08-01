/* eslint-disable no-prototype-builtins */
import { logic } from './logic';

const concludeGame = (player) => {
  alert(`${player} has lost!`);
};

const updateBoard = (action, target, board) => {
  const gameboard = document.querySelector(`.${board}`);
  const cell = gameboard.querySelector(`[data-index='${target}']`);
  switch (action) {
    case 'hit':
      cell.classList.remove('ship');
      cell.classList.add('hit');
      break;
    case 'missed':
      cell.classList.add('missed');
      break;
    case 'sunk':
      target.forEach((item) => {
        const sunkCell = gameboard.querySelector(`[data-index='${item}']`);
        sunkCell.classList.remove('hit');
        sunkCell.classList.add('sunk');
      });
      break;
    default:
  }
};

const initiateAttack = (e) => {
  const cell = e.target.dataset.index;
  const board = document.querySelector(`.gameboard2`);
  const cells = board.querySelectorAll('div');
  const feedback = logic.processAttack(cell, 'gameboard2');
  updateBoard(feedback.action, feedback.cell, feedback.board);
  cells.forEach((item) => {
    item.removeEventListener('click', initiateAttack);
  });
  const computerFeedback = logic.initiateComputerMove();
  setTimeout(() => {
    updateBoard(
      computerFeedback.action,
      computerFeedback.cell,
      computerFeedback.board
    );
    cells.forEach((item) => {
      if (
        !item.classList.contains('hit') &&
        !item.classList.contains('missed') &&
        !item.classList.contains('sunk')
      ) {
        item.addEventListener('click', initiateAttack);
      }
    });
  }, 500);
};

const drawShips = (gameboard) => {
  gameboard.board.forEach((item, index) => {
    if (item === null) return;
    const domBoard = document.querySelector(`.${gameboard.name}`);
    const shipCell = domBoard.querySelector(`[data-index='${index}']`);
    shipCell.classList.add('ship');
  });
};

const renderBoard = (gameboard) => {
  const board = document.createElement('div');
  board.className = gameboard.name;
  for (let i = 0; i < gameboard.board.length; i += 1) {
    const newCell = document.createElement('div');
    newCell.className = 'cell';
    newCell.dataset.index = i;
    newCell.textContent = i;
    board.append(newCell);
  }
  const wrapper = document.querySelector('.boards-wrapper');
  wrapper.append(board);
};

const renderDragShip = (ship, length) => {
  const shipContainer = document.querySelector('.ship-container');
  for (let i = 0; i < length; i += 1) {
    const grid = document.createElement('div');
    grid.className = ship;
    grid.dataset.index = i;
    shipContainer.appendChild(grid);
  }
};

const rotateShip = () => {
  const shipContainer = document.querySelector('.ship-container');
  const rotateButton = document.querySelector('.rotate-btn');
  if (shipContainer.dataset.orientation === 'horizontal') {
    shipContainer.dataset.orientation = 'vertical';
    rotateButton.textContent = 'Vertical';
    shipContainer.style.flexDirection = 'column';
  } else {
    shipContainer.dataset.orientation = 'horizontal';
    rotateButton.textContent = 'Horizontal';
    shipContainer.style.flexDirection = 'row';
  }
};

const resetShips = () => {
  const gameboard = logic.data.gameboards.gameboard1;
  gameboard.ships = [];
  gameboard.board.forEach((item, index) => {
    if (item !== null) gameboard.board[index] = null;
  });
  const cells = document.querySelectorAll('.gameboard1 .cell');
  cells.forEach((item) => {
    if (item.classList.contains('ship')) item.classList.remove('ship');
  });
  const shipContainer = document.querySelector('.ship-container');
  while (shipContainer.firstChild) {
    shipContainer.firstChild.remove();
  }
  renderDragShip('carrier', 5);
};

const prepareStart = () => {
  const shipContainer = document.querySelector('.ship-container');
  shipContainer.className = 'ship-container-hidden';
  const buttons = document.querySelector('.buttons');
  buttons.className = 'buttons-hidden';
  const computerCells = document.querySelectorAll('.gameboard2 .cell');
  computerCells.forEach((item) => {
    item.addEventListener('click', initiateAttack);
  });
};

const nextShip = () => {
  const shipContainer = document.querySelector('.ship-container');
  const grids = shipContainer.querySelectorAll('div');
  const currentShip = grids[0].className;
  while (shipContainer.firstChild) {
    shipContainer.removeChild(shipContainer.firstChild);
  }
  if (currentShip === 'carrier') {
    renderDragShip('battleship', 4);
  } else if (currentShip === 'battleship') {
    renderDragShip('submarine', 3);
  } else if (currentShip === 'submarine') {
    renderDragShip('cruiser', 3);
  } else if (currentShip === 'cruiser') {
    renderDragShip('destroyer', 2);
  } else if (currentShip === 'destroyer') {
    prepareStart();
  }
};

const handleShipPlacement = (cell) => {
  const shipContainer = document.querySelector('.ship-container');
  const { orientation } = shipContainer.dataset;
  const { length } = shipContainer.querySelectorAll('div');
  if (
    logic.data.gameboards.gameboard1.placePlayerShip(cell, length, orientation)
  ) {
    drawShips(logic.data.gameboards.gameboard1);
    nextShip();
  }
};

const applyListeners = () => {
  const rotateButton = document.querySelector('.rotate-btn');
  rotateButton.addEventListener('click', rotateShip);
  const resetButton = document.querySelector('.reset-btn');
  resetButton.addEventListener('click', resetShips);
};

const renderAll = () => {
  renderBoard(logic.data.gameboards.gameboard1);
  renderBoard(logic.data.gameboards.gameboard2);
  renderDragShip('carrier', 5);
  // FOR STYLING - REMOVE BEFORE PUBLISHING //
  drawShips(logic.data.gameboards.gameboard2);
  applyListeners();
};

export { renderAll, resetShips, handleShipPlacement };
