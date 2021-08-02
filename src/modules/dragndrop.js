import { handleShipPlacement } from './dom';

// eslint-disable-next-line no-unused-vars
let ship;
let shipIndex;

const dragndrop = {
  applyListeners() {
    const shipContainer = document.querySelector('.ship-container');
    shipContainer.addEventListener('dragstart', dragndrop.handleDragStart);
    shipContainer.addEventListener('dragend', dragndrop.handleDragEnd);
    shipContainer.addEventListener('mousedown', dragndrop.getShipIndex);
    const cells = document.querySelectorAll('.gameboard1 .cell');
    cells.forEach((cell) => {
      cell.addEventListener('dragenter', dragndrop.handleDragEnter);
      cell.addEventListener('dragover', dragndrop.handleDragOver);
      cell.addEventListener('dragleave', dragndrop.handleDragLeave);
      cell.addEventListener('drop', dragndrop.handleDrop);
    });
  },

  getShipIndex(e) {
    shipIndex = +e.target.dataset.index;
  },

  handleDragStart(e) {
    ship = e.target;
    setTimeout(() => {
      e.target.classList.add('hide');
    }, 0);
  },

  handleDragEnter(e) {
    e.preventDefault();
    // highlightPlacement(e);
  },

  handleDragOver(e) {
    e.preventDefault();
    // highlightPlacement(e);
  },

  handleDragLeave(e) {
    e.preventDefault();
    // setTimeout(() => {
    //   removeHighlightPlacement(e);
    // }, 10);
  },

  handleDragEnd() {
    const shipContainer = document.querySelector('.ship-container');
    shipContainer.classList.remove('hide');
  },

  handleDrop(e) {
    // removeHighlightPlacement(e);
    const { orientation } = document.querySelector('.ship-container').dataset;
    const cell = e.target;
    if (orientation === 'horizontal') {
      const adjustedCell = +cell.dataset.index - shipIndex;
      handleShipPlacement(adjustedCell);
    } else if (orientation === 'vertical') {
      const adjustedCell = +cell.dataset.index - shipIndex * 10;
      handleShipPlacement(adjustedCell);
    }
  },
};

export default dragndrop;
