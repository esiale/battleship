import './styles/main.css';
import './styles/gameboard.css';
// eslint-disable-next-line import/named
import { logic } from './modules/logic';
import { renderAll } from './modules/dom';
import dragndrop from './modules/dragndrop';

logic.initalizeGame();
logic.placeComputerShips();
renderAll();
dragndrop.applyListeners();
