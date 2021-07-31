import { handleShipPlacement } from './dom';

const highlightPlacement = (e) => {
  const cells = document.querySelectorAll('.gameboard1 .cell');
  const shipPreview = document.querySelector('.ship-preview');
  const length = +shipPreview.dataset.length;
  const highlightedCells = [];
  const cellIndex = +e.target.dataset.index;
  if (shipPreview.dataset.vertical === 'false') {
    for (let i = 0; i < length; i += 1) {
      highlightedCells.push(cellIndex + i);
    }
    const rightBorder = [9, 19, 29, 39, 49, 59, 69, 79, 89];
    const borderCell = rightBorder.filter((number) =>
      [number, number + 1].every((item) => highlightedCells.includes(item))
    );
    if (borderCell.length === 1) {
      const index = highlightedCells.indexOf(borderCell[0]) + 1;
      highlightedCells.splice(index);
    }
  } else if (shipPreview.dataset.vertical === 'true') {
    for (let i = 0; i < length; i += 1) {
      highlightedCells.push(cellIndex + i * 10);
    }
  }
  cells.forEach((cell, index) => {
    if (highlightedCells.includes(index) && !cell.classList.contains('ship'))
      cell.classList.add('highlight');
  });
};

const removeHighlightPlacement = () => {
  const cells = document.querySelectorAll('.gameboard1 .cell');
  cells.forEach((cell) => cell.classList.remove('highlight'));
};

const dragndrop = {
  applyListeners() {
    const shipDrag = document.querySelector('.ship-drag');
    shipDrag.addEventListener('dragstart', dragndrop.handleDragStart);
    shipDrag.addEventListener('dragend', dragndrop.handleDragEnd);
    const cells = document.querySelectorAll('.gameboard1 .cell');
    cells.forEach((cell) => {
      cell.addEventListener('dragenter', dragndrop.handleDragEnter);
      cell.addEventListener('dragover', dragndrop.handleDragOver);
      cell.addEventListener('dragleave', dragndrop.handleDragLeave);
      cell.addEventListener('drop', dragndrop.handleDrop);
    });
  },

  handleDragStart(e) {
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  },

  handleDragEnter(e) {
    e.preventDefault();
    highlightPlacement(e);
  },

  handleDragOver(e) {
    e.preventDefault();
    highlightPlacement(e);
  },

  handleDragLeave(e) {
    e.preventDefault();
    setTimeout(() => {
      removeHighlightPlacement(e);
    }, 10);
  },

  handleDragEnd() {
    const shipDrag = document.querySelector('.ship-drag');
    shipDrag.classList.remove('hide');
  },

  handleDrop(e) {
    removeHighlightPlacement(e);
    handleShipPlacement(e);
  },
};

export default dragndrop;
