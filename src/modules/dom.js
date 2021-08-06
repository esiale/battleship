/* eslint-disable no-use-before-define */
/* eslint-disable consistent-return */
/* eslint-disable no-prototype-builtins */
import cross from '../img/x.svg';
import { logic } from './logic';

const updateBoard = (action, target, board) => {
  const gameboard = document.querySelector(`.${board}`);
  const cell = gameboard.querySelector(`[data-index='${target}']`);
  switch (action) {
    case 'hit':
      cell.classList.add('hit');
      break;
    case 'missed':
      cell.classList.add('missed');
      break;
    case 'sunk':
      target.forEach((item) => {
        const sunkCell = gameboard.querySelector(`[data-index='${item}']`);
        sunkCell.classList.add('sunk');
        const xIcon = new Image();
        xIcon.src = cross;
        xIcon.className = 'sunk-x';
        sunkCell.append(xIcon);
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
  if (feedback.allSunk === true) return concludeGame('You');
  const computerFeedback = logic.initiateComputerMove();
  setTimeout(() => {
    updateBoard(
      computerFeedback.action,
      computerFeedback.cell,
      computerFeedback.board,
      computerFeedback.allSunk
    );
    if (computerFeedback.allSunk === true) return concludeGame('Computer');
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

const reset = () => {
  logic.resetLogic();
  const cells = document.querySelectorAll('.boards-wrapper .cell');
  cells.forEach((item) => {
    if (item.classList.contains('ship')) item.classList.remove('ship');
    if (item.classList.contains('hit')) item.classList.remove('hit');
    if (item.classList.contains('missed')) item.classList.remove('missed');
    if (item.classList.contains('sunk')) {
      item.classList.remove('sunk');
      item.removeChild(item.lastChild);
    }
  });
  const shipDrag = document.querySelector('.ship-drag');
  shipDrag.classList.remove('remove');
  const instructions = document.querySelector('.instructions');
  instructions.classList.remove('remove');
  const legend = document.querySelector('.legend');
  legend.classList.add('remove');
  const rotateButton = document.querySelector('.rotate-btn');
  rotateButton.classList.remove('remove');
  const legendButton = document.querySelector('.legend-btn');
  legendButton.classList.add('remove');
  const resetButton = document.querySelector('.reset-btn');
  resetButton.textContent = 'Reset';
  const sidePanel = document.querySelector('.side-panel');
  if (sidePanel.classList.contains('collapse'))
    sidePanel.classList.remove('collapse');
  const shipContainer = document.querySelector('.ship-container');
  while (shipContainer.firstChild) {
    shipContainer.firstChild.remove();
  }
  renderDragShip('carrier', 5);
  const message = document.querySelector('.message');
  message.textContent = '';
};

const prepareStart = () => {
  const shipDrag = document.querySelector('.ship-drag');
  shipDrag.classList.add('remove');
  const rotateButton = document.querySelector('.rotate-btn');
  rotateButton.classList.add('remove');
  const legendButton = document.querySelector('.legend-btn');
  legendButton.classList.remove('remove');
  const instructions = document.querySelector('.instructions');
  instructions.classList.add('remove');
  const sidePanel = document.querySelector('.side-panel');
  sidePanel.classList.add('collapse');
  const computerCells = document.querySelectorAll('.gameboard2 .cell');
  computerCells.forEach((item) => {
    item.addEventListener('click', initiateAttack);
  });
  logic.placeComputerShips();
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

const displayLegend = () => {
  const legend = document.querySelector('.legend');
  const sidePanel = document.querySelector('.side-panel');
  if (legend.classList.contains('remove')) {
    legend.classList.remove('remove');
    sidePanel.classList.remove('collapse');
  } else {
    legend.classList.add('remove');
    sidePanel.classList.add('collapse');
  }
};

const applyListeners = () => {
  const rotateButton = document.querySelector('.rotate-btn');
  rotateButton.addEventListener('click', rotateShip);
  const resetButton = document.querySelector('.reset-btn');
  resetButton.addEventListener('click', reset);
  const legendButton = document.querySelector('.legend-btn');
  legendButton.addEventListener('click', displayLegend);
};

const renderAll = () => {
  renderBoard(logic.data.gameboards.gameboard1);
  renderBoard(logic.data.gameboards.gameboard2);
  renderDragShip('carrier', 5);
  applyListeners();
};

function concludeGame(player) {
  const message = document.querySelector('.message');
  message.textContent = `${player} won! Click the button on the side panel to play again.`;
  const resetButton = document.querySelector('.reset-btn');
  resetButton.textContent = 'Play again!';
  const computerCells = document.querySelectorAll('.gameboard2 .cell');
  computerCells.forEach((item) => {
    item.removeEventListener('click', initiateAttack);
  });
}

export { renderAll, handleShipPlacement };
