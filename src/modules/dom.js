import { logic } from './logic';

const concludeGame = (player) => {
  alert(`${player} has lost!`);
};

const mark = (action, target, gameboardName) => {
  const gameboard = document.querySelector(`.${gameboardName}`);
  const cell = gameboard.querySelector(`[data-index='${target}']`);
  if (action === 'hit') {
    cell.classList.remove('ship');
    cell.classList.add('hit');
  }
  if (action === 'missed') {
    cell.classList.add('missed');
  }
  if (action === 'sunk') {
    target.forEach((item) => {
      const sunkCell = gameboard.querySelector(`[data-index='${item}']`);
      sunkCell.classList.remove('hit');
      sunkCell.classList.add('sunk');
    });
  }
};

const handleAttack = (e) => {
  const gameboardName = e.target.parentNode.className;
  const cell = +e.target.dataset.index;
  const playerNames = Object.keys(logic.data.players);
  const player = playerNames.filter(
    (item) => logic.data.players[item].gameboard === gameboardName
  )[0];
  const gameboard = logic.data.gameboards[gameboardName];
  const feedback = gameboard.processAttack(cell);
  if (feedback.isSunk === true) {
    const shipIndex = gameboard.board[cell].id;
    const allShips = gameboard.board.reduce((acc, element, index) => {
      if (element !== null && !element.hasOwnProperty('isMissed'))
        acc.push(index);
      return acc;
    }, []);
    const sunkShip = allShips.reduce((acc, element) => {
      if (gameboard.board[element].id === shipIndex) acc.push(element);
      return acc;
    }, []);
    mark('sunk', sunkShip, gameboardName);
    const gameboardDom = document.querySelector(`.${gameboardName}`);
    sunkShip.forEach((item) => {
      const sunkCell = gameboardDom.querySelector(`[data-index='${item}']`);
      sunkCell.removeEventListener('click', handleAttack);
    });
    if (feedback.reportAllSunk === true) return concludeGame(player);
  } else if (feedback.result === 'hit') {
    mark('hit', cell, gameboardName);
    e.target.removeEventListener('click', handleAttack);
  } else if (feedback.result === 'missed') {
    mark('missed', cell, gameboardName);
    e.target.removeEventListener('click', handleAttack);
  }
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

const renderPreview = (length) => {
  const shipPreview = document.querySelector('.ship-preview');
  shipPreview.dataset.length = length;
  shipPreview.dataset.vertical = false;
  for (let i = 0; i < length; i += 1) {
    const shipDrag = document.querySelector('.ship-drag');
    const cell = document.createElement('div');
    cell.className = 'preview-cell';
    shipDrag.appendChild(cell);
  }
};

const rotateShip = () => {
  const shipPreview = document.querySelector('.ship-preview');
  const shipDrag = document.querySelector('.ship-drag');
  const rotateButton = document.querySelector('.rotate-btn');
  if (shipPreview.dataset.vertical === 'false') {
    shipPreview.dataset.vertical = 'true';
    rotateButton.textContent = 'Vertical';
    shipDrag.style.flexDirection = 'column';
  } else {
    shipPreview.dataset.vertical = 'false';
    rotateButton.textContent = 'Horizontal';
    shipDrag.style.flexDirection = 'row';
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
  const shipPreview = document.querySelector('.ship-preview');
  while (shipPreview.firstChild) {
    shipPreview.firstChild.remove();
  }
  shipPreview.dataset.length = 5;
  renderPreview(5);
};

const nextShip = () => {
  const shipPreview = document.querySelector('.ship-preview');
  const shipDrag = document.querySelector('.ship-drag');
  if (+shipPreview.dataset.length === 5) {
    shipDrag.removeChild(shipDrag.lastChild);
    shipPreview.dataset.length = 4;
  } else if (+shipPreview.dataset.length === 4) {
    shipDrag.removeChild(shipDrag.lastChild);
    shipPreview.dataset.length = 3;
  } else if (
    +shipPreview.dataset.length === 3 &&
    logic.data.gameboards.gameboard1.ships.length === 4
  ) {
    shipDrag.removeChild(shipDrag.lastChild);
    shipPreview.dataset.length = 2;
  } else if (logic.data.gameboards.gameboard1.ships.length === 5) {
    // eslint-disable-next-line no-use-before-define
    prepareStart();
  }
};

const handleShipPlacement = (e) => {
  const targetCell = e.target;
  const shipPreview = document.querySelector('.ship-preview');
  if (logic.data.gameboards.gameboard1.ships.length === 5) return;
  if (
    logic.data.gameboards.gameboard1.placePlayerShip(targetCell, shipPreview)
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
  renderPreview(5);
  // FOR STYLING - REMOVE BEFORE PUBLISHING //
  drawShips(logic.data.gameboards.gameboard2);
  applyListeners();
};

function prepareStart() {
  const shipPreview = document.querySelector('.ship-preview');
  shipPreview.className = 'ship-preview-hidden';
  const buttons = document.querySelector('.buttons');
  buttons.className = 'buttons-hidden';
  const playerCells = document.querySelectorAll('.gameboard1 .cell');
  playerCells.forEach((cell) => {
    cell.removeEventListener('click', handleShipPlacement);
    if (cell.classList.contains('highlight'))
      cell.classList.remove('highlight');
  });
  const computerCells = document.querySelectorAll('.gameboard2 .cell');
  computerCells.forEach((item) => {
    item.addEventListener('click', handleAttack);
  });
}

export { renderAll, resetShips, handleShipPlacement };
