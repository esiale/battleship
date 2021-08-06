import './styles/main.css';
import xIcon from './img/x.svg';
// eslint-disable-next-line import/named
import { logic } from './modules/logic';
import { renderAll } from './modules/dom';
import dragndrop from './modules/dragndrop';

logic.initalizeGame();
renderAll();
dragndrop.applyListeners();
