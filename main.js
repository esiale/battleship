/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayLikeToArray)
/* harmony export */ });
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _arrayWithoutHoles)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/classCallCheck.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _classCallCheck)
/* harmony export */ });
function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/createClass.js":
/*!****************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/createClass.js ***!
  \****************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _createClass)
/* harmony export */ });
function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/defineProperty.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _defineProperty)
/* harmony export */ });
function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js":
/*!********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/iterableToArray.js ***!
  \********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _iterableToArray)
/* harmony export */ });
function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _nonIterableSpread)
/* harmony export */ });
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js ***!
  \**********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _toConsumableArray)
/* harmony export */ });
/* harmony import */ var _arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayWithoutHoles.js */ "./node_modules/@babel/runtime/helpers/esm/arrayWithoutHoles.js");
/* harmony import */ var _iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./iterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/iterableToArray.js");
/* harmony import */ var _unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./unsupportedIterableToArray.js */ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js");
/* harmony import */ var _nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./nonIterableSpread.js */ "./node_modules/@babel/runtime/helpers/esm/nonIterableSpread.js");




function _toConsumableArray(arr) {
  return (0,_arrayWithoutHoles_js__WEBPACK_IMPORTED_MODULE_0__.default)(arr) || (0,_iterableToArray_js__WEBPACK_IMPORTED_MODULE_1__.default)(arr) || (0,_unsupportedIterableToArray_js__WEBPACK_IMPORTED_MODULE_2__.default)(arr) || (0,_nonIterableSpread_js__WEBPACK_IMPORTED_MODULE_3__.default)();
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js":
/*!*******************************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js ***!
  \*******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _unsupportedIterableToArray)
/* harmony export */ });
/* harmony import */ var _arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./arrayLikeToArray.js */ "./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js");

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return (0,_arrayLikeToArray_js__WEBPACK_IMPORTED_MODULE_0__.default)(o, minLen);
}

/***/ }),

/***/ "./src/modules/dom.js":
/*!****************************!*\
  !*** ./src/modules/dom.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderAll": () => (/* binding */ renderAll),
/* harmony export */   "handleShipPlacement": () => (/* binding */ handleShipPlacement)
/* harmony export */ });
/* harmony import */ var _img_x_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../img/x.svg */ "./src/img/x.svg");
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logic */ "./src/modules/logic.js");
/* eslint-disable no-use-before-define */

/* eslint-disable consistent-return */

/* eslint-disable no-prototype-builtins */



var updateBoard = function updateBoard(action, target, board) {
  var gameboard = document.querySelector(".".concat(board));
  var cell = gameboard.querySelector("[data-index='".concat(target, "']"));

  switch (action) {
    case 'hit':
      cell.classList.add('hit');
      break;

    case 'missed':
      cell.classList.add('missed');
      break;

    case 'sunk':
      target.forEach(function (item) {
        var sunkCell = gameboard.querySelector("[data-index='".concat(item, "']"));
        sunkCell.classList.add('sunk');
        var xIcon = new Image();
        xIcon.src = _img_x_svg__WEBPACK_IMPORTED_MODULE_0__;
        xIcon.className = 'sunk-x';
        sunkCell.append(xIcon);
      });
      break;

    default:
  }
};

var initiateAttack = function initiateAttack(e) {
  var cell = e.target.dataset.index;
  var board = document.querySelector(".gameboard2");
  var cells = board.querySelectorAll('div');
  var feedback = _logic__WEBPACK_IMPORTED_MODULE_1__.logic.processAttack(cell, 'gameboard2');
  updateBoard(feedback.action, feedback.cell, feedback.board);
  cells.forEach(function (item) {
    item.removeEventListener('click', initiateAttack);
  });
  if (feedback.allSunk === true) return concludeGame('You');
  var computerFeedback = _logic__WEBPACK_IMPORTED_MODULE_1__.logic.initiateComputerMove();
  setTimeout(function () {
    updateBoard(computerFeedback.action, computerFeedback.cell, computerFeedback.board, computerFeedback.allSunk);
    if (computerFeedback.allSunk === true) return concludeGame('Computer');
    cells.forEach(function (item) {
      if (!item.classList.contains('hit') && !item.classList.contains('missed') && !item.classList.contains('sunk')) {
        item.addEventListener('click', initiateAttack);
      }
    });
  }, 500);
};

var drawShips = function drawShips(gameboard) {
  gameboard.board.forEach(function (item, index) {
    if (item === null) return;
    var domBoard = document.querySelector(".".concat(gameboard.name));
    var shipCell = domBoard.querySelector("[data-index='".concat(index, "']"));
    shipCell.classList.add('ship');
  });
};

var renderBoard = function renderBoard(gameboard) {
  var board = document.createElement('div');
  board.className = gameboard.name;

  for (var i = 0; i < gameboard.board.length; i += 1) {
    var newCell = document.createElement('div');
    newCell.className = 'cell';
    newCell.dataset.index = i;
    board.append(newCell);
  }

  var wrapper = document.querySelector('.boards-wrapper');
  wrapper.append(board);
};

var renderDragShip = function renderDragShip(ship, length) {
  var shipContainer = document.querySelector('.ship-container');

  for (var i = 0; i < length; i += 1) {
    var grid = document.createElement('div');
    grid.className = ship;
    grid.dataset.index = i;
    shipContainer.appendChild(grid);
  }
};

var rotateShip = function rotateShip() {
  var shipContainer = document.querySelector('.ship-container');
  var rotateButton = document.querySelector('.rotate-btn');

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

var reset = function reset() {
  _logic__WEBPACK_IMPORTED_MODULE_1__.logic.resetLogic();
  var cells = document.querySelectorAll('.boards-wrapper .cell');
  cells.forEach(function (item) {
    if (item.classList.contains('ship')) item.classList.remove('ship');
    if (item.classList.contains('hit')) item.classList.remove('hit');
    if (item.classList.contains('missed')) item.classList.remove('missed');

    if (item.classList.contains('sunk')) {
      item.classList.remove('sunk');
      item.removeChild(item.lastChild);
    }
  });
  var shipDrag = document.querySelector('.ship-drag');
  shipDrag.classList.remove('remove');
  var instructions = document.querySelector('.instructions');
  instructions.classList.remove('remove');
  var legend = document.querySelector('.legend');
  legend.classList.add('remove');
  var rotateButton = document.querySelector('.rotate-btn');
  rotateButton.classList.remove('remove');
  var legendButton = document.querySelector('.legend-btn');
  legendButton.classList.add('remove');
  var resetButton = document.querySelector('.reset-btn');
  resetButton.textContent = 'Reset';
  var sidePanel = document.querySelector('.side-panel');
  if (sidePanel.classList.contains('collapse')) sidePanel.classList.remove('collapse');
  var shipContainer = document.querySelector('.ship-container');

  while (shipContainer.firstChild) {
    shipContainer.firstChild.remove();
  }

  renderDragShip('carrier', 5);
  var message = document.querySelector('.message');
  message.textContent = '';
};

var prepareStart = function prepareStart() {
  var shipDrag = document.querySelector('.ship-drag');
  shipDrag.classList.add('remove');
  var rotateButton = document.querySelector('.rotate-btn');
  rotateButton.classList.add('remove');
  var legendButton = document.querySelector('.legend-btn');
  legendButton.classList.remove('remove');
  var instructions = document.querySelector('.instructions');
  instructions.classList.add('remove');
  var sidePanel = document.querySelector('.side-panel');
  sidePanel.classList.add('collapse');
  var computerCells = document.querySelectorAll('.gameboard2 .cell');
  computerCells.forEach(function (item) {
    item.addEventListener('click', initiateAttack);
  });
  _logic__WEBPACK_IMPORTED_MODULE_1__.logic.placeComputerShips();
};

var nextShip = function nextShip() {
  var shipContainer = document.querySelector('.ship-container');
  var grids = shipContainer.querySelectorAll('div');
  var currentShip = grids[0].className;

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

var handleShipPlacement = function handleShipPlacement(cell) {
  var shipContainer = document.querySelector('.ship-container');
  var orientation = shipContainer.dataset.orientation;

  var _shipContainer$queryS = shipContainer.querySelectorAll('div'),
      length = _shipContainer$queryS.length;

  if (_logic__WEBPACK_IMPORTED_MODULE_1__.logic.data.gameboards.gameboard1.placePlayerShip(cell, length, orientation)) {
    drawShips(_logic__WEBPACK_IMPORTED_MODULE_1__.logic.data.gameboards.gameboard1);
    nextShip();
  }
};

var displayLegend = function displayLegend() {
  var legend = document.querySelector('.legend');
  var sidePanel = document.querySelector('.side-panel');

  if (legend.classList.contains('remove')) {
    legend.classList.remove('remove');
    sidePanel.classList.remove('collapse');
  } else {
    legend.classList.add('remove');
    sidePanel.classList.add('collapse');
  }
};

var applyListeners = function applyListeners() {
  var rotateButton = document.querySelector('.rotate-btn');
  rotateButton.addEventListener('click', rotateShip);
  var resetButton = document.querySelector('.reset-btn');
  resetButton.addEventListener('click', reset);
  var legendButton = document.querySelector('.legend-btn');
  legendButton.addEventListener('click', displayLegend);
};

var renderAll = function renderAll() {
  renderBoard(_logic__WEBPACK_IMPORTED_MODULE_1__.logic.data.gameboards.gameboard1);
  renderBoard(_logic__WEBPACK_IMPORTED_MODULE_1__.logic.data.gameboards.gameboard2);
  renderDragShip('carrier', 5);
  applyListeners();
};

function concludeGame(player) {
  var message = document.querySelector('.message');
  message.textContent = "".concat(player, " won! Click the button on the side panel to play again.");
  var resetButton = document.querySelector('.reset-btn');
  resetButton.textContent = 'Play again!';
  var computerCells = document.querySelectorAll('.gameboard2 .cell');
  computerCells.forEach(function (item) {
    item.removeEventListener('click', initiateAttack);
  });
}



/***/ }),

/***/ "./src/modules/dragndrop.js":
/*!**********************************!*\
  !*** ./src/modules/dragndrop.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _dom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dom */ "./src/modules/dom.js");
 // eslint-disable-next-line no-unused-vars

var ship;
var shipIndex;
var dragndrop = {
  applyListeners: function applyListeners() {
    var shipContainer = document.querySelector('.ship-container');
    shipContainer.addEventListener('dragstart', dragndrop.handleDragStart);
    shipContainer.addEventListener('dragend', dragndrop.handleDragEnd);
    shipContainer.addEventListener('mousedown', dragndrop.getShipIndex);
    var cells = document.querySelectorAll('.gameboard1 .cell');
    cells.forEach(function (cell) {
      cell.addEventListener('dragenter', dragndrop.handleDragEnter);
      cell.addEventListener('dragover', dragndrop.handleDragOver);
      cell.addEventListener('dragleave', dragndrop.handleDragLeave);
      cell.addEventListener('drop', dragndrop.handleDrop);
    });
  },
  getShipIndex: function getShipIndex(e) {
    shipIndex = +e.target.dataset.index;
  },
  handleDragStart: function handleDragStart(e) {
    ship = e.target;
    setTimeout(function () {
      e.target.classList.add('hide');
    }, 0);
  },
  handleDragEnter: function handleDragEnter(e) {
    e.preventDefault();
  },
  handleDragOver: function handleDragOver(e) {
    e.preventDefault();
  },
  handleDragLeave: function handleDragLeave(e) {
    e.preventDefault();
  },
  handleDragEnd: function handleDragEnd() {
    var shipContainer = document.querySelector('.ship-container');
    shipContainer.classList.remove('hide');
  },
  handleDrop: function handleDrop(e) {
    var orientation = document.querySelector('.ship-container').dataset.orientation;
    var cell = e.target;

    if (orientation === 'horizontal') {
      var adjustedCell = +cell.dataset.index - shipIndex;
      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.handleShipPlacement)(adjustedCell);
    } else if (orientation === 'vertical') {
      var _adjustedCell = +cell.dataset.index - shipIndex * 10;

      (0,_dom__WEBPACK_IMPORTED_MODULE_0__.handleShipPlacement)(_adjustedCell);
    }
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (dragndrop);

/***/ }),

/***/ "./src/modules/gameboard.js":
/*!**********************************!*\
  !*** ./src/modules/gameboard.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");




var Gameboard = /*#__PURE__*/function () {
  function Gameboard(name) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Gameboard);

    this.name = name;
    this.ships = [];
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Gameboard, [{
    key: "init",
    value: function init() {
      this.board = Array(100).fill(null);
    }
  }, {
    key: "addShip",
    value: function addShip(coordinates) {
      var _this = this;

      var length = coordinates.length;
      this.ships.push(new _ship__WEBPACK_IMPORTED_MODULE_2__.default(length));
      coordinates.forEach(function (item, index) {
        _this.board[item] = {
          id: _this.ships.length - 1,
          part: index,
          isHit: false
        };
      });
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(coordinate) {
      if (this.board[coordinate] === null) {
        this.board[coordinate] = {
          isMissed: true
        };
        return 'missed';
      }

      this.ships[this.board[coordinate].id].hit(this.board[coordinate].part);
      this.board[coordinate].isHit = true;
      return 'hit';
    }
  }, {
    key: "reportAllSunk",
    value: function reportAllSunk() {
      return this.ships.every(function (ship) {
        return ship.sunk === true;
      });
    }
  }, {
    key: "checkForConflicts",
    value: function checkForConflicts(location) {
      var _this2 = this;

      if (location.some(function (item) {
        return item > 99;
      })) return false;
      var rightBorder = [9, 19, 29, 39, 49, 59, 69, 79, 89];

      if ( // eslint-disable-next-line arrow-body-style
      rightBorder.some(function (number) {
        return [number, number + 1].every(function (item) {
          return location.includes(item);
        });
      })) {
        return false;
      }

      if (location.some(function (item) {
        return _this2.board[item] !== null;
      })) {
        return false;
      }

      return true;
    }
  }, {
    key: "findRandomShipLocation",
    value: function findRandomShipLocation(length) {
      var vertical = Math.random() > 0.5;
      var validLocations = [];

      for (var i = 0; i < 100 - length; i += 1) {
        var possibleLocations = [];

        if (vertical === true) {
          for (var y = 0; y < length; y += 1) {
            possibleLocations.push(i + y * 10);
          }
        } else if (vertical === false) {
          for (var _y = 0; _y < length; _y += 1) {
            possibleLocations.push(_y + i);
          }
        }

        if (this.checkForConflicts(possibleLocations)) validLocations.push(possibleLocations);
      }

      return validLocations[Math.floor(Math.random() * validLocations.length)];
    }
  }, {
    key: "placePlayerShip",
    value: function placePlayerShip(cell, length, orientation) {
      var locationArray = [];

      if (orientation === 'horizontal') {
        for (var i = 0; i < length; i += 1) {
          locationArray.push(cell + i);
        }
      }

      if (orientation === 'vertical') {
        for (var _i = 0; _i < length; _i += 1) {
          locationArray.push(cell + _i * 10);
        }
      }

      if (this.checkForConflicts(locationArray) === true) {
        this.addShip(locationArray, length);
        return true;
      }

      return false;
    }
  }]);

  return Gameboard;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "logic": () => (/* binding */ logic)
/* harmony export */ });
/* harmony import */ var _gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./gameboard */ "./src/modules/gameboard.js");
/* harmony import */ var _player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./player */ "./src/modules/player.js");
/* eslint-disable no-prototype-builtins */


var logic = {
  data: {
    gameboards: {},
    players: {}
  },
  initalizeGame: function initalizeGame() {
    this.data.gameboards.gameboard1 = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.default('gameboard1');
    this.data.gameboards.gameboard2 = new _gameboard__WEBPACK_IMPORTED_MODULE_0__.default('gameboard2');
    this.data.gameboards.gameboard1.init();
    this.data.gameboards.gameboard2.init();
    this.data.players.player1 = new _player__WEBPACK_IMPORTED_MODULE_1__.default('human', 'gameboard1');
    this.data.players.player2 = new _player__WEBPACK_IMPORTED_MODULE_1__.default('ai', 'gameboard2');
  },
  placeComputerShips: function placeComputerShips() {
    var gameboard = this.data.gameboards.gameboard2;
    gameboard.addShip(gameboard.findRandomShipLocation(5), 5);
    gameboard.addShip(gameboard.findRandomShipLocation(4), 4);
    gameboard.addShip(gameboard.findRandomShipLocation(3), 3);
    gameboard.addShip(gameboard.findRandomShipLocation(3), 3);
    gameboard.addShip(gameboard.findRandomShipLocation(2), 2);
  },
  processAttack: function processAttack(cell, board) {
    var gameboard = this.data.gameboards[board];
    var result = this.data.gameboards[board].receiveAttack(cell);
    var feedback = {
      action: null,
      cell: null,
      board: null,
      allSunk: false
    };
    var shipIndex = gameboard.board[cell].id;

    if (result === 'missed') {
      feedback.action = 'missed';
      feedback.cell = cell;
      feedback.board = gameboard.name;
      return feedback;
    }

    if (gameboard.ships[shipIndex].sunk) {
      var allShipsCords = gameboard.board.reduce(function (acc, element, index) {
        if (element !== null && !element.hasOwnProperty('isMissed')) acc.push(index);
        return acc;
      }, []);
      var sunkShipCords = allShipsCords.reduce(function (acc, element) {
        if (gameboard.board[element].id === shipIndex) acc.push(element);
        return acc;
      }, []);
      feedback.action = 'sunk';
      feedback.cell = sunkShipCords;

      if (gameboard.reportAllSunk() === true) {
        feedback.allSunk = true;
      }
    } else if (result === 'hit') {
      feedback.action = 'hit';
      feedback.cell = cell;
    }

    feedback.board = gameboard.name;
    return feedback;
  },
  initiateComputerMove: function initiateComputerMove() {
    var playerBoard = this.data.gameboards.gameboard1;
    var bestMove = _player__WEBPACK_IMPORTED_MODULE_1__.default.findBestMove(playerBoard);
    return this.processAttack(bestMove, 'gameboard1');
  },
  resetLogic: function resetLogic() {
    var _this$data$gameboards = this.data.gameboards,
        gameboard1 = _this$data$gameboards.gameboard1,
        gameboard2 = _this$data$gameboards.gameboard2;
    gameboard1.ships = [];
    gameboard1.board.forEach(function (item, index) {
      if (item !== null) gameboard1.board[index] = null;
    });
    gameboard2.ships = [];
    gameboard2.board.forEach(function (item, index) {
      if (item !== null) gameboard2.board[index] = null;
    });
  }
}; // eslint-disable-next-line import/prefer-default-export



/***/ }),

/***/ "./src/modules/player.js":
/*!*******************************!*\
  !*** ./src/modules/player.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable no-param-reassign */

/* eslint-disable no-prototype-builtins */
var Player = /*#__PURE__*/function () {
  function Player(name) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Player);

    this.name = name;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Player, null, [{
    key: "attackRandom",
    value: function attackRandom(gameboard) {
      var legalAttacks = gameboard.board.reduce(function (cells, curr, index) {
        if (curr !== null && curr.hasOwnProperty('isMissed')) return cells;
        if (curr === null || curr.isHit === false) cells.push(index);
        return cells;
      }, []);
      var randomLegal = legalAttacks[Math.floor(Math.random() * legalAttacks.length)];
      return randomLegal;
    }
  }, {
    key: "detectShips",
    value: function detectShips(gameboard) {
      var hits = gameboard.board.reduce(function (cells, curr, index) {
        if (curr !== null && !curr.isMissed === true && curr.isHit === true && gameboard.ships[curr.id].sunk === false) cells.push(index);
        return cells;
      }, []);
      return hits;
    }
  }, {
    key: "checkForLegalAttacks",
    value: function checkForLegalAttacks(cell, array, gameboard) {
      var rightBorder = [9, 19, 29, 39, 49, 59, 69, 79, 89];
      var leftBorder = [0, 10, 20, 30, 40, 50, 60, 70, 90];
      var referenceArray = [].concat((0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(array), [cell]);

      if (rightBorder.includes(cell)) {
        var illegal = referenceArray.filter(function (number) {
          return rightBorder.some(function (item) {
            return number === item + 1;
          });
        });

        if (illegal.length !== 0) {
          referenceArray.splice(referenceArray.indexOf(illegal[0]), 1);
        }
      }

      if (leftBorder.includes(cell)) {
        var _illegal = referenceArray.filter(function (number) {
          return leftBorder.some(function (item) {
            return number === item - 1;
          });
        });

        if (_illegal.length !== 0) {
          referenceArray.splice(referenceArray.indexOf(_illegal[0]), 1);
        }
      }

      referenceArray.splice(referenceArray.indexOf(cell), 1);
      var revisedCells = referenceArray.filter(function (number) {
        return number <= 99 && number >= 0;
      });
      var legalAttacks = revisedCells.reduce(function (cells, curr) {
        if (gameboard.board[curr] !== null && gameboard.board[curr].hasOwnProperty('isMissed')) return cells;
        if (gameboard.board[curr] === null || gameboard.board[curr].isHit === false) cells.push(curr);
        return cells;
      }, []);
      return legalAttacks;
    }
  }, {
    key: "findSurroundingCells",
    value: function findSurroundingCells(cell, gameboard) {
      var number = parseInt(cell, 10);
      var surroundingCells = [];
      var cellAbove = number - 10;
      var cellBelow = number + 10;
      var cellLeft = number - 1;
      var cellRight = number + 1;
      surroundingCells.push(cellAbove, cellBelow, cellLeft, cellRight);
      return this.checkForLegalAttacks(number, surroundingCells, gameboard);
    }
  }, {
    key: "attackSurroundingCells",
    value: function attackSurroundingCells(hits, gameboard) {
      var _this = this;

      var possibleTargets = [];
      hits.forEach(function (hit) {
        possibleTargets.push(_this.findSurroundingCells(hit, gameboard));
      });
      var flatArray = possibleTargets.flat();
      if (flatArray.length === 0) return this.attackRandom(gameboard);
      return flatArray[Math.floor(Math.random() * flatArray.length)];
    }
  }, {
    key: "groupTrendsByOrientation",
    value: function groupTrendsByOrientation(hits) {
      var groupLastDigits = hits.reduce(function (list, current) {
        var _list$last;

        var last = current % 10;
        (_list$last = list[last]) !== null && _list$last !== void 0 ? _list$last : list[last] = [];
        list[last].push(current);
        return list;
      }, {});
      var groupFirstDigits = hits.reduce(function (list, current) {
        var _first, _list$_first;

        var first = Math.floor(current / 10);
        if (first === current) first = 0;
        (_list$_first = list[_first = first]) !== null && _list$_first !== void 0 ? _list$_first : list[_first] = [];
        list[first].push(current);
        return list;
      }, {});

      var getNumbers = function getNumbers(obj) {
        return Object.values(obj).filter(function (arr) {
          return arr.length > 1;
        }).flat();
      };

      var yTrend = getNumbers(groupLastDigits);
      var xTrend = getNumbers(groupFirstDigits);
      return [xTrend, yTrend];
    }
  }, {
    key: "analyzeTrends",
    value: function analyzeTrends(hits) {
      var trends = this.groupTrendsByOrientation(hits);

      var analyze = function analyze(trend, item, index, array) {
        var getPredecessor = trend.getPredecessor,
            getSuccessor = trend.getSuccessor,
            list = trend.list;

        if (getPredecessor(item) === array[index - 1]) {
          list[list.length - 1].push(item);
        } else if (getSuccessor(item) === array[index + 1]) {
          list.push([item]);
        }

        return trend;
      };

      var horizontalConditions = {
        getPredecessor: function getPredecessor(item) {
          return item - 1;
        },
        getSuccessor: function getSuccessor(item) {
          return item + 1;
        }
      };
      var verticalConditions = {
        getPredecessor: function getPredecessor(item) {
          return item - 10;
        },
        getSuccessor: function getSuccessor(item) {
          return item + 10;
        }
      };
      var horizontalTrends = trends[0].reduce(analyze, _objectSpread(_objectSpread({}, horizontalConditions), {}, {
        list: []
      })).list;
      var verticalTrends = trends[1].reduce(analyze, _objectSpread(_objectSpread({}, verticalConditions), {}, {
        list: []
      })).list;
      return {
        horizontalTrends: horizontalTrends,
        verticalTrends: verticalTrends
      };
    }
  }, {
    key: "attackTrend",
    value: function attackTrend(horizontalTrends, verticalTrends, gameboard) {
      var _this2 = this;

      var potentialTargets = [];

      if (horizontalTrends.length !== 0) {
        horizontalTrends.forEach(function (item) {
          var highest = Math.max.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(item));
          var lowest = Math.min.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(item));
          if (_this2.checkForLegalAttacks(highest, [highest + 1], gameboard).length !== 0) potentialTargets.push(highest + 1);
          if (_this2.checkForLegalAttacks(lowest, [lowest - 1], gameboard).length !== 0) potentialTargets.push(lowest - 1);
        });
      }

      if (verticalTrends.length !== 0) {
        verticalTrends.forEach(function (item) {
          var highest = Math.max.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(item));
          var lowest = Math.min.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(item));
          if (_this2.checkForLegalAttacks(highest, [highest + 10], gameboard).length !== 0) potentialTargets.push(highest + 10);
          if (_this2.checkForLegalAttacks(lowest, [lowest - 10], gameboard).length !== 0) potentialTargets.push(lowest - 10);
        });
      }

      if (potentialTargets.length) {
        var removeDuplicates = (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_1__.default)(new Set(potentialTargets));

        return removeDuplicates;
      }

      return null;
    }
  }, {
    key: "findBestMove",
    value: function findBestMove(gameboard) {
      var hits = this.detectShips(gameboard);
      if (hits.length === 0) return this.attackRandom(gameboard);

      if (hits.length >= 2) {
        var _this$analyzeTrends = this.analyzeTrends(hits),
            horizontalTrends = _this$analyzeTrends.horizontalTrends,
            verticalTrends = _this$analyzeTrends.verticalTrends;

        if (horizontalTrends.length || verticalTrends.length) {
          var potentialTrendTargets = this.attackTrend(horizontalTrends, verticalTrends, gameboard);

          if (potentialTrendTargets === null) {
            return this.attackSurroundingCells(hits, gameboard);
          }

          return potentialTrendTargets[Math.floor(Math.random() * potentialTrendTargets.length)];
        }
      }

      return this.attackSurroundingCells(hits, gameboard);
    }
  }]);

  return Player;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Player);

/***/ }),

/***/ "./src/modules/ship.js":
/*!*****************************!*\
  !*** ./src/modules/ship.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Ship = /*#__PURE__*/function () {
  function Ship(length, vertical) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Ship);

    this.length = length;
    this.hits = Array(length).fill(null);
    this.sunk = false;
    this.vertical = vertical;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Ship, [{
    key: "hit",
    value: function hit(part) {
      this.hits[part] = 'hit';
      this.isSunk();
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      if (this.hits.every(function (hit) {
        return hit === 'hit';
      })) this.sunk = true;
    }
  }]);

  return Ship;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css":
/*!*******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/main.css ***!
  \*******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/cssWithMappingToString.js */ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_cssWithMappingToString_js__WEBPACK_IMPORTED_MODULE_0___default()));
___CSS_LOADER_EXPORT___.push([module.id, "@import url(https://fonts.googleapis.com/css2?family=Contrail+One&family=Roboto&display=swap);"]);
// Module
___CSS_LOADER_EXPORT___.push([module.id, ":root {\n  --background: hsl(240, 20%, 80%);\n  --primary: hsl(240, 20%, 50%);\n  --secondary: hsl(240, 22%, 20%);\n  --side: hsl(240, 20%, 60%);\n  --outline: hsl(240, 20%, 30%);\n  --hit: hsl(12, 100%, 35%);\n  --sunk: hsl(12, 100%, 20%);\n  --brighttext: hsl(240, 22%, 85%);\n}\n\nhtml {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\n\nbody {\n  background-color: var(--background);\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n  color: var(--secondary);\n  font-family: 'Roboto', sans-serif;\n}\n\n.wrapper {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template:\n    '. top'\n    'side boards';\n  justify-items: center;\n  justify-content: center;\n}\n\n.top {\n  grid-area: top;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-direction: column;\n  padding-bottom: 1rem;\n}\n\n.top-header {\n  font-size: 3rem;\n  font-family: 'Contrail One', cursive;\n}\n\n.message {\n  height: 1.5rem;\n}\n\n.side-panel {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  grid-area: side;\n  height: 20rem;\n  width: 15rem;\n  margin-top: 2.5rem;\n  background-color: var(--side);\n  border-radius: 0.5rem;\n  padding: 0.2rem;\n}\n\n.collapse {\n  height: 6rem;\n}\n\n.side-footer {\n  margin-top: auto;\n  margin-bottom: 0.2rem;\n}\n\n.side-footer a {\n  font-weight: 600;\n}\n\n.instructions {\n  margin-bottom: 0.3rem;\n}\n\n.legend {\n  display: flex;\n  height: 100%;\n}\n\n.legend-icons {\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.5rem;\n}\n\n.legend-icons div {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0.3rem 0;\n}\n\n.legend-desc {\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.3rem;\n  margin-left: 1rem;\n}\n\n.ship-drag {\n  display: flex;\n  justify-content: center;\n  margin-top: auto;\n}\n\n.ship-container {\n  display: flex;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.remove {\n  display: none;\n}\n\n.carrier,\n.battleship,\n.submarine,\n.cruiser,\n.destroyer {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: var(--secondary);\n  border: 0.2rem var(--outline) ridge;\n  border-radius: 0.2rem;\n  outline: 0.1rem var(--primary) solid;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.buttons button {\n  background-color: var(--outline);\n  color: var(--brighttext);\n  border-radius: 0.2rem;\n  border: 0.1rem var(--outline) outset;\n  padding: 0.4rem;\n  margin: 0.4rem;\n  font-family: 'Roboto', sans-serif;\n  font-size: 0.9rem;\n  width: 40%;\n}\n\n.reset-btn {\n  order: 1;\n}\n\n.boards-wrapper {\n  grid-area: boards;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template:\n    'title1 title2'\n    'board1 board2';\n  justify-items: center;\n  align-self: start;\n}\n\n.gameboard1-title,\n.gameboard2-title {\n  align-self: end;\n  font-size: 1.5rem;\n  font-family: 'Contrail One', cursive;\n}\n\n.gameboard1-title {\n  grid-area: title1;\n}\n.gameboard2-title {\n  grid-area: title2;\n}\n\n.gameboard1 {\n  grid-area: board1;\n}\n\n.gameboard2 {\n  grid-area: board2;\n}\n\n.gameboard1,\n.gameboard2 {\n  display: grid;\n  outline: 0.2rem var(--outline) solid;\n  width: 27rem;\n  height: 27rem;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 1rem;\n}\n\n.cell {\n  outline: 0.1rem var(--primary) solid;\n}\n\n.ship,\n.hit,\n.sunk {\n  border: 0.2rem var(--outline) ridge;\n  border-radius: 0.2rem;\n}\n\n.ship {\n  background-color: var(--secondary);\n}\n\n.hit {\n  background-color: var(--hit);\n}\n\n.missed {\n  background-color: gray;\n  border: 0.1rem var(--outline) ridge;\n}\n\n.sunk {\n  background-color: var(--sunk);\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sunk-x {\n  width: 3rem;\n  height: 3rem;\n}\n\n@media only screen and (max-width: 1200px) {\n  .boards-wrapper {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    grid-template:\n      'title1'\n      'board1'\n      'title2'\n      'board2';\n  }\n}\n\n@media only screen and (max-width: 710px) {\n  .wrapper {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template:\n      'side top'\n      'boards boards';\n  }\n  .top {\n    justify-content: flex-start;\n    margin-top: 2.5rem;\n  }\n  .boards-wrapper {\n    margin-top: 1rem;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  html {\n    font-size: 11px;\n  }\n  .message {\n    width: 9rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"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","sourcesContent":["@import url('https://fonts.googleapis.com/css2?family=Contrail+One&family=Roboto&display=swap');\n\n:root {\n  --background: hsl(240, 20%, 80%);\n  --primary: hsl(240, 20%, 50%);\n  --secondary: hsl(240, 22%, 20%);\n  --side: hsl(240, 20%, 60%);\n  --outline: hsl(240, 20%, 30%);\n  --hit: hsl(12, 100%, 35%);\n  --sunk: hsl(12, 100%, 20%);\n  --brighttext: hsl(240, 22%, 85%);\n}\n\nhtml {\n  box-sizing: border-box;\n}\n*,\n*:before,\n*:after {\n  box-sizing: inherit;\n}\n\na,\na:hover,\na:focus,\na:active {\n  text-decoration: none;\n  color: inherit;\n}\n\nbody {\n  background-color: var(--background);\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n  color: var(--secondary);\n  font-family: 'Roboto', sans-serif;\n}\n\n.wrapper {\n  height: 100%;\n  width: 100%;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template:\n    '. top'\n    'side boards';\n  justify-items: center;\n  justify-content: center;\n}\n\n.top {\n  grid-area: top;\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  flex-direction: column;\n  padding-bottom: 1rem;\n}\n\n.top-header {\n  font-size: 3rem;\n  font-family: 'Contrail One', cursive;\n}\n\n.message {\n  height: 1.5rem;\n}\n\n.side-panel {\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: center;\n  grid-area: side;\n  height: 20rem;\n  width: 15rem;\n  margin-top: 2.5rem;\n  background-color: var(--side);\n  border-radius: 0.5rem;\n  padding: 0.2rem;\n}\n\n.collapse {\n  height: 6rem;\n}\n\n.side-footer {\n  margin-top: auto;\n  margin-bottom: 0.2rem;\n}\n\n.side-footer a {\n  font-weight: 600;\n}\n\n.instructions {\n  margin-bottom: 0.3rem;\n}\n\n.legend {\n  display: flex;\n  height: 100%;\n}\n\n.legend-icons {\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.5rem;\n}\n\n.legend-icons div {\n  width: 2.5rem;\n  height: 2.5rem;\n  margin: 0.3rem 0;\n}\n\n.legend-desc {\n  display: flex;\n  flex-direction: column;\n  margin-top: 0.3rem;\n  margin-left: 1rem;\n}\n\n.ship-drag {\n  display: flex;\n  justify-content: center;\n  margin-top: auto;\n}\n\n.ship-container {\n  display: flex;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.remove {\n  display: none;\n}\n\n.carrier,\n.battleship,\n.submarine,\n.cruiser,\n.destroyer {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: var(--secondary);\n  border: 0.2rem var(--outline) ridge;\n  border-radius: 0.2rem;\n  outline: 0.1rem var(--primary) solid;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n  width: 100%;\n}\n\n.buttons button {\n  background-color: var(--outline);\n  color: var(--brighttext);\n  border-radius: 0.2rem;\n  border: 0.1rem var(--outline) outset;\n  padding: 0.4rem;\n  margin: 0.4rem;\n  font-family: 'Roboto', sans-serif;\n  font-size: 0.9rem;\n  width: 40%;\n}\n\n.reset-btn {\n  order: 1;\n}\n\n.boards-wrapper {\n  grid-area: boards;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  grid-template-rows: 1fr 1fr;\n  grid-template:\n    'title1 title2'\n    'board1 board2';\n  justify-items: center;\n  align-self: start;\n}\n\n.gameboard1-title,\n.gameboard2-title {\n  align-self: end;\n  font-size: 1.5rem;\n  font-family: 'Contrail One', cursive;\n}\n\n.gameboard1-title {\n  grid-area: title1;\n}\n.gameboard2-title {\n  grid-area: title2;\n}\n\n.gameboard1 {\n  grid-area: board1;\n}\n\n.gameboard2 {\n  grid-area: board2;\n}\n\n.gameboard1,\n.gameboard2 {\n  display: grid;\n  outline: 0.2rem var(--outline) solid;\n  width: 27rem;\n  height: 27rem;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 1rem;\n}\n\n.cell {\n  outline: 0.1rem var(--primary) solid;\n}\n\n.ship,\n.hit,\n.sunk {\n  border: 0.2rem var(--outline) ridge;\n  border-radius: 0.2rem;\n}\n\n.ship {\n  background-color: var(--secondary);\n}\n\n.hit {\n  background-color: var(--hit);\n}\n\n.missed {\n  background-color: gray;\n  border: 0.1rem var(--outline) ridge;\n}\n\n.sunk {\n  background-color: var(--sunk);\n  overflow: hidden;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n\n.sunk-x {\n  width: 3rem;\n  height: 3rem;\n}\n\n@media only screen and (max-width: 1200px) {\n  .boards-wrapper {\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr 1fr 1fr;\n    grid-template:\n      'title1'\n      'board1'\n      'title2'\n      'board2';\n  }\n}\n\n@media only screen and (max-width: 710px) {\n  .wrapper {\n    grid-template-columns: 1fr 1fr;\n    grid-template-rows: 1fr 1fr;\n    grid-template:\n      'side top'\n      'boards boards';\n  }\n  .top {\n    justify-content: flex-start;\n    margin-top: 2.5rem;\n  }\n  .boards-wrapper {\n    margin-top: 1rem;\n  }\n}\n\n@media only screen and (max-width: 450px) {\n  html {\n    font-size: 11px;\n  }\n  .message {\n    width: 9rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join("");
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === "string") {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, ""]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/cssWithMappingToString.js":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/cssWithMappingToString.js ***!
  \************************************************************************/
/***/ ((module) => {



function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

module.exports = function cssWithMappingToString(item) {
  var _item = _slicedToArray(item, 4),
      content = _item[1],
      cssMapping = _item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    // eslint-disable-next-line no-undef
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/styles/main.css":
/*!*****************************!*\
  !*** ./src/styles/main.css ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var style = document.createElement("style");
  options.setAttributes(style, options.attributes);
  options.insert(style);
  return style;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(style) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    style.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute("media", media);
  } else {
    style.removeAttribute("media");
  }

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, style);
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


function domAPI(options) {
  var style = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(style, options, obj);
    },
    remove: function remove() {
      removeStyleElement(style);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, style) {
  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/img/x.svg":
/*!***********************!*\
  !*** ./src/img/x.svg ***!
  \***********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "img/x.svg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _img_x_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./img/x.svg */ "./src/img/x.svg");
/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/logic */ "./src/modules/logic.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");
/* harmony import */ var _modules_dragndrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dragndrop */ "./src/modules/dragndrop.js");

 // eslint-disable-next-line import/named




_modules_logic__WEBPACK_IMPORTED_MODULE_2__.logic.initalizeGame();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderAll)();
_modules_dragndrop__WEBPACK_IMPORTED_MODULE_4__.default.applyListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kcmFnbmRyb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9nbG9iYWwiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsidXBkYXRlQm9hcmQiLCJhY3Rpb24iLCJ0YXJnZXQiLCJib2FyZCIsImdhbWVib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNlbGwiLCJjbGFzc0xpc3QiLCJhZGQiLCJmb3JFYWNoIiwiaXRlbSIsInN1bmtDZWxsIiwieEljb24iLCJJbWFnZSIsInNyYyIsImNyb3NzIiwiY2xhc3NOYW1lIiwiYXBwZW5kIiwiaW5pdGlhdGVBdHRhY2siLCJlIiwiZGF0YXNldCIsImluZGV4IiwiY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmVlZGJhY2siLCJsb2dpYyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJhbGxTdW5rIiwiY29uY2x1ZGVHYW1lIiwiY29tcHV0ZXJGZWVkYmFjayIsInNldFRpbWVvdXQiLCJjb250YWlucyIsImFkZEV2ZW50TGlzdGVuZXIiLCJkcmF3U2hpcHMiLCJkb21Cb2FyZCIsIm5hbWUiLCJzaGlwQ2VsbCIsInJlbmRlckJvYXJkIiwiY3JlYXRlRWxlbWVudCIsImkiLCJsZW5ndGgiLCJuZXdDZWxsIiwid3JhcHBlciIsInJlbmRlckRyYWdTaGlwIiwic2hpcCIsInNoaXBDb250YWluZXIiLCJncmlkIiwiYXBwZW5kQ2hpbGQiLCJyb3RhdGVTaGlwIiwicm90YXRlQnV0dG9uIiwib3JpZW50YXRpb24iLCJ0ZXh0Q29udGVudCIsInN0eWxlIiwiZmxleERpcmVjdGlvbiIsInJlc2V0IiwicmVtb3ZlIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJzaGlwRHJhZyIsImluc3RydWN0aW9ucyIsImxlZ2VuZCIsImxlZ2VuZEJ1dHRvbiIsInJlc2V0QnV0dG9uIiwic2lkZVBhbmVsIiwiZmlyc3RDaGlsZCIsIm1lc3NhZ2UiLCJwcmVwYXJlU3RhcnQiLCJjb21wdXRlckNlbGxzIiwibmV4dFNoaXAiLCJncmlkcyIsImN1cnJlbnRTaGlwIiwiaGFuZGxlU2hpcFBsYWNlbWVudCIsImRpc3BsYXlMZWdlbmQiLCJhcHBseUxpc3RlbmVycyIsInJlbmRlckFsbCIsInBsYXllciIsInNoaXBJbmRleCIsImRyYWduZHJvcCIsImhhbmRsZURyYWdTdGFydCIsImhhbmRsZURyYWdFbmQiLCJnZXRTaGlwSW5kZXgiLCJoYW5kbGVEcmFnRW50ZXIiLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZURyYWdMZWF2ZSIsImhhbmRsZURyb3AiLCJwcmV2ZW50RGVmYXVsdCIsImFkanVzdGVkQ2VsbCIsIkdhbWVib2FyZCIsInNoaXBzIiwiQXJyYXkiLCJmaWxsIiwiY29vcmRpbmF0ZXMiLCJwdXNoIiwiU2hpcCIsImlkIiwicGFydCIsImlzSGl0IiwiY29vcmRpbmF0ZSIsImlzTWlzc2VkIiwiaGl0IiwiZXZlcnkiLCJzdW5rIiwibG9jYXRpb24iLCJzb21lIiwicmlnaHRCb3JkZXIiLCJudW1iZXIiLCJpbmNsdWRlcyIsInZlcnRpY2FsIiwiTWF0aCIsInJhbmRvbSIsInZhbGlkTG9jYXRpb25zIiwicG9zc2libGVMb2NhdGlvbnMiLCJ5IiwiY2hlY2tGb3JDb25mbGljdHMiLCJmbG9vciIsImxvY2F0aW9uQXJyYXkiLCJhZGRTaGlwIiwiZGF0YSIsImdhbWVib2FyZHMiLCJwbGF5ZXJzIiwiaW5pdGFsaXplR2FtZSIsImdhbWVib2FyZDEiLCJnYW1lYm9hcmQyIiwiaW5pdCIsInBsYXllcjEiLCJQbGF5ZXIiLCJwbGF5ZXIyIiwicGxhY2VDb21wdXRlclNoaXBzIiwiZmluZFJhbmRvbVNoaXBMb2NhdGlvbiIsInByb2Nlc3NBdHRhY2siLCJyZXN1bHQiLCJyZWNlaXZlQXR0YWNrIiwiYWxsU2hpcHNDb3JkcyIsInJlZHVjZSIsImFjYyIsImVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInN1bmtTaGlwQ29yZHMiLCJyZXBvcnRBbGxTdW5rIiwiaW5pdGlhdGVDb21wdXRlck1vdmUiLCJwbGF5ZXJCb2FyZCIsImJlc3RNb3ZlIiwicmVzZXRMb2dpYyIsImxlZ2FsQXR0YWNrcyIsImN1cnIiLCJyYW5kb21MZWdhbCIsImhpdHMiLCJhcnJheSIsImxlZnRCb3JkZXIiLCJyZWZlcmVuY2VBcnJheSIsImlsbGVnYWwiLCJmaWx0ZXIiLCJzcGxpY2UiLCJpbmRleE9mIiwicmV2aXNlZENlbGxzIiwicGFyc2VJbnQiLCJzdXJyb3VuZGluZ0NlbGxzIiwiY2VsbEFib3ZlIiwiY2VsbEJlbG93IiwiY2VsbExlZnQiLCJjZWxsUmlnaHQiLCJjaGVja0ZvckxlZ2FsQXR0YWNrcyIsInBvc3NpYmxlVGFyZ2V0cyIsImZpbmRTdXJyb3VuZGluZ0NlbGxzIiwiZmxhdEFycmF5IiwiZmxhdCIsImF0dGFja1JhbmRvbSIsImdyb3VwTGFzdERpZ2l0cyIsImxpc3QiLCJjdXJyZW50IiwibGFzdCIsImdyb3VwRmlyc3REaWdpdHMiLCJmaXJzdCIsImdldE51bWJlcnMiLCJvYmoiLCJPYmplY3QiLCJ2YWx1ZXMiLCJhcnIiLCJ5VHJlbmQiLCJ4VHJlbmQiLCJ0cmVuZHMiLCJncm91cFRyZW5kc0J5T3JpZW50YXRpb24iLCJhbmFseXplIiwidHJlbmQiLCJnZXRQcmVkZWNlc3NvciIsImdldFN1Y2Nlc3NvciIsImhvcml6b250YWxDb25kaXRpb25zIiwidmVydGljYWxDb25kaXRpb25zIiwiaG9yaXpvbnRhbFRyZW5kcyIsInZlcnRpY2FsVHJlbmRzIiwicG90ZW50aWFsVGFyZ2V0cyIsImhpZ2hlc3QiLCJtYXgiLCJsb3dlc3QiLCJtaW4iLCJyZW1vdmVEdXBsaWNhdGVzIiwiU2V0IiwiZGV0ZWN0U2hpcHMiLCJhbmFseXplVHJlbmRzIiwicG90ZW50aWFsVHJlbmRUYXJnZXRzIiwiYXR0YWNrVHJlbmQiLCJhdHRhY2tTdXJyb3VuZGluZ0NlbGxzIiwiaXNTdW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1JxRDtBQUN0QztBQUNmLGlDQUFpQyw2REFBZ0I7QUFDakQsQzs7Ozs7Ozs7Ozs7Ozs7QUNIZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z1RDtBQUNKO0FBQ3NCO0FBQ2xCO0FBQ3hDO0FBQ2YsU0FBUyw4REFBaUIsU0FBUyw0REFBZSxTQUFTLHVFQUEwQixTQUFTLDhEQUFpQjtBQUMvRyxDOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUQ7QUFDdEM7QUFDZjtBQUNBLG9DQUFvQyw2REFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNG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V0NQRCx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7V0NOQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxrQzs7Ozs7Ozs7Ozs7Ozs7OztBQ2ZBO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUFwRSwrREFBQTtBQUNBaUQsdURBQVM7QUFDVEcsc0VBQUEsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby11c2UtYmVmb3JlLWRlZmluZSAqL1xuLyogZXNsaW50LWRpc2FibGUgY29uc2lzdGVudC1yZXR1cm4gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuaW1wb3J0IGNyb3NzIGZyb20gJy4uL2ltZy94LnN2Zyc7XG5pbXBvcnQgeyBsb2dpYyB9IGZyb20gJy4vbG9naWMnO1xuXG5jb25zdCB1cGRhdGVCb2FyZCA9IChhY3Rpb24sIHRhcmdldCwgYm9hcmQpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Ym9hcmR9YCk7XG4gIGNvbnN0IGNlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7dGFyZ2V0fSddYCk7XG4gIHN3aXRjaCAoYWN0aW9uKSB7XG4gICAgY2FzZSAnaGl0JzpcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaXNzZWQnOlxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3N1bmsnOlxuICAgICAgdGFyZ2V0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vua0NlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aXRlbX0nXWApO1xuICAgICAgICBzdW5rQ2VsbC5jbGFzc0xpc3QuYWRkKCdzdW5rJyk7XG4gICAgICAgIGNvbnN0IHhJY29uID0gbmV3IEltYWdlKCk7XG4gICAgICAgIHhJY29uLnNyYyA9IGNyb3NzO1xuICAgICAgICB4SWNvbi5jbGFzc05hbWUgPSAnc3Vuay14JztcbiAgICAgICAgc3Vua0NlbGwuYXBwZW5kKHhJY29uKTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhdGVBdHRhY2sgPSAoZSkgPT4ge1xuICBjb25zdCBjZWxsID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZWJvYXJkMmApO1xuICBjb25zdCBjZWxscyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xuICBjb25zdCBmZWVkYmFjayA9IGxvZ2ljLnByb2Nlc3NBdHRhY2soY2VsbCwgJ2dhbWVib2FyZDInKTtcbiAgdXBkYXRlQm9hcmQoZmVlZGJhY2suYWN0aW9uLCBmZWVkYmFjay5jZWxsLCBmZWVkYmFjay5ib2FyZCk7XG4gIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5pdGlhdGVBdHRhY2spO1xuICB9KTtcbiAgaWYgKGZlZWRiYWNrLmFsbFN1bmsgPT09IHRydWUpIHJldHVybiBjb25jbHVkZUdhbWUoJ1lvdScpO1xuICBjb25zdCBjb21wdXRlckZlZWRiYWNrID0gbG9naWMuaW5pdGlhdGVDb21wdXRlck1vdmUoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdXBkYXRlQm9hcmQoXG4gICAgICBjb21wdXRlckZlZWRiYWNrLmFjdGlvbixcbiAgICAgIGNvbXB1dGVyRmVlZGJhY2suY2VsbCxcbiAgICAgIGNvbXB1dGVyRmVlZGJhY2suYm9hcmQsXG4gICAgICBjb21wdXRlckZlZWRiYWNrLmFsbFN1bmtcbiAgICApO1xuICAgIGlmIChjb21wdXRlckZlZWRiYWNrLmFsbFN1bmsgPT09IHRydWUpIHJldHVybiBjb25jbHVkZUdhbWUoJ0NvbXB1dGVyJyk7XG4gICAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICAhaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ2hpdCcpICYmXG4gICAgICAgICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnbWlzc2VkJykgJiZcbiAgICAgICAgIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzdW5rJylcbiAgICAgICkge1xuICAgICAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5pdGlhdGVBdHRhY2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9LCA1MDApO1xufTtcblxuY29uc3QgZHJhd1NoaXBzID0gKGdhbWVib2FyZCkgPT4ge1xuICBnYW1lYm9hcmQuYm9hcmQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaXRlbSA9PT0gbnVsbCkgcmV0dXJuO1xuICAgIGNvbnN0IGRvbUJvYXJkID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgLiR7Z2FtZWJvYXJkLm5hbWV9YCk7XG4gICAgY29uc3Qgc2hpcENlbGwgPSBkb21Cb2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHtpbmRleH0nXWApO1xuICAgIHNoaXBDZWxsLmNsYXNzTGlzdC5hZGQoJ3NoaXAnKTtcbiAgfSk7XG59O1xuXG5jb25zdCByZW5kZXJCb2FyZCA9IChnYW1lYm9hcmQpID0+IHtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgYm9hcmQuY2xhc3NOYW1lID0gZ2FtZWJvYXJkLm5hbWU7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgZ2FtZWJvYXJkLmJvYXJkLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgbmV3Q2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIG5ld0NlbGwuY2xhc3NOYW1lID0gJ2NlbGwnO1xuICAgIG5ld0NlbGwuZGF0YXNldC5pbmRleCA9IGk7XG4gICAgYm9hcmQuYXBwZW5kKG5ld0NlbGwpO1xuICB9XG4gIGNvbnN0IHdyYXBwZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuYm9hcmRzLXdyYXBwZXInKTtcbiAgd3JhcHBlci5hcHBlbmQoYm9hcmQpO1xufTtcblxuY29uc3QgcmVuZGVyRHJhZ1NoaXAgPSAoc2hpcCwgbGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IGdyaWQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBncmlkLmNsYXNzTmFtZSA9IHNoaXA7XG4gICAgZ3JpZC5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICBzaGlwQ29udGFpbmVyLmFwcGVuZENoaWxkKGdyaWQpO1xuICB9XG59O1xuXG5jb25zdCByb3RhdGVTaGlwID0gKCkgPT4ge1xuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtYnRuJyk7XG4gIGlmIChzaGlwQ29udGFpbmVyLmRhdGFzZXQub3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgIHNoaXBDb250YWluZXIuZGF0YXNldC5vcmllbnRhdGlvbiA9ICd2ZXJ0aWNhbCc7XG4gICAgcm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgICBzaGlwQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgfSBlbHNlIHtcbiAgICBzaGlwQ29udGFpbmVyLmRhdGFzZXQub3JpZW50YXRpb24gPSAnaG9yaXpvbnRhbCc7XG4gICAgcm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ0hvcml6b250YWwnO1xuICAgIHNoaXBDb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3cnO1xuICB9XG59O1xuXG5jb25zdCByZXNldCA9ICgpID0+IHtcbiAgbG9naWMucmVzZXRMb2dpYygpO1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5ib2FyZHMtd3JhcHBlciAuY2VsbCcpO1xuICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykpIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzZWQnKSkgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdtaXNzZWQnKTtcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3N1bmsnKSkge1xuICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzdW5rJyk7XG4gICAgICBpdGVtLnJlbW92ZUNoaWxkKGl0ZW0ubGFzdENoaWxkKTtcbiAgICB9XG4gIH0pO1xuICBjb25zdCBzaGlwRHJhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWRyYWcnKTtcbiAgc2hpcERyYWcuY2xhc3NMaXN0LnJlbW92ZSgncmVtb3ZlJyk7XG4gIGNvbnN0IGluc3RydWN0aW9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5pbnN0cnVjdGlvbnMnKTtcbiAgaW5zdHJ1Y3Rpb25zLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZScpO1xuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVnZW5kJyk7XG4gIGxlZ2VuZC5jbGFzc0xpc3QuYWRkKCdyZW1vdmUnKTtcbiAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1idG4nKTtcbiAgcm90YXRlQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ3JlbW92ZScpO1xuICBjb25zdCBsZWdlbmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVnZW5kLWJ0bicpO1xuICBsZWdlbmRCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWJ0bicpO1xuICByZXNldEJ1dHRvbi50ZXh0Q29udGVudCA9ICdSZXNldCc7XG4gIGNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLXBhbmVsJyk7XG4gIGlmIChzaWRlUGFuZWwuY2xhc3NMaXN0LmNvbnRhaW5zKCdjb2xsYXBzZScpKVxuICAgIHNpZGVQYW5lbC5jbGFzc0xpc3QucmVtb3ZlKCdjb2xsYXBzZScpO1xuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gIHdoaWxlIChzaGlwQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBzaGlwQ29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgcmVuZGVyRHJhZ1NoaXAoJ2NhcnJpZXInLCA1KTtcbiAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5tZXNzYWdlJyk7XG4gIG1lc3NhZ2UudGV4dENvbnRlbnQgPSAnJztcbn07XG5cbmNvbnN0IHByZXBhcmVTdGFydCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcERyYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1kcmFnJyk7XG4gIHNoaXBEcmFnLmNsYXNzTGlzdC5hZGQoJ3JlbW92ZScpO1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICByb3RhdGVCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gIGNvbnN0IGxlZ2VuZEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sZWdlbmQtYnRuJyk7XG4gIGxlZ2VuZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmUnKTtcbiAgY29uc3QgaW5zdHJ1Y3Rpb25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmluc3RydWN0aW9ucycpO1xuICBpbnN0cnVjdGlvbnMuY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gIGNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLXBhbmVsJyk7XG4gIHNpZGVQYW5lbC5jbGFzc0xpc3QuYWRkKCdjb2xsYXBzZScpO1xuICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDIgLmNlbGwnKTtcbiAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRpYXRlQXR0YWNrKTtcbiAgfSk7XG4gIGxvZ2ljLnBsYWNlQ29tcHV0ZXJTaGlwcygpO1xufTtcblxuY29uc3QgbmV4dFNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcbiAgY29uc3QgZ3JpZHMgPSBzaGlwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xuICBjb25zdCBjdXJyZW50U2hpcCA9IGdyaWRzWzBdLmNsYXNzTmFtZTtcbiAgd2hpbGUgKHNoaXBDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIHNoaXBDb250YWluZXIucmVtb3ZlQ2hpbGQoc2hpcENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuICBpZiAoY3VycmVudFNoaXAgPT09ICdjYXJyaWVyJykge1xuICAgIHJlbmRlckRyYWdTaGlwKCdiYXR0bGVzaGlwJywgNCk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNoaXAgPT09ICdiYXR0bGVzaGlwJykge1xuICAgIHJlbmRlckRyYWdTaGlwKCdzdWJtYXJpbmUnLCAzKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2hpcCA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICByZW5kZXJEcmFnU2hpcCgnY3J1aXNlcicsIDMpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRTaGlwID09PSAnY3J1aXNlcicpIHtcbiAgICByZW5kZXJEcmFnU2hpcCgnZGVzdHJveWVyJywgMik7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNoaXAgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgcHJlcGFyZVN0YXJ0KCk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZVNoaXBQbGFjZW1lbnQgPSAoY2VsbCkgPT4ge1xuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHNoaXBDb250YWluZXIuZGF0YXNldDtcbiAgY29uc3QgeyBsZW5ndGggfSA9IHNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGlmIChcbiAgICBsb2dpYy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMS5wbGFjZVBsYXllclNoaXAoY2VsbCwgbGVuZ3RoLCBvcmllbnRhdGlvbilcbiAgKSB7XG4gICAgZHJhd1NoaXBzKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxKTtcbiAgICBuZXh0U2hpcCgpO1xuICB9XG59O1xuXG5jb25zdCBkaXNwbGF5TGVnZW5kID0gKCkgPT4ge1xuICBjb25zdCBsZWdlbmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVnZW5kJyk7XG4gIGNvbnN0IHNpZGVQYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWRlLXBhbmVsJyk7XG4gIGlmIChsZWdlbmQuY2xhc3NMaXN0LmNvbnRhaW5zKCdyZW1vdmUnKSkge1xuICAgIGxlZ2VuZC5jbGFzc0xpc3QucmVtb3ZlKCdyZW1vdmUnKTtcbiAgICBzaWRlUGFuZWwuY2xhc3NMaXN0LnJlbW92ZSgnY29sbGFwc2UnKTtcbiAgfSBlbHNlIHtcbiAgICBsZWdlbmQuY2xhc3NMaXN0LmFkZCgncmVtb3ZlJyk7XG4gICAgc2lkZVBhbmVsLmNsYXNzTGlzdC5hZGQoJ2NvbGxhcHNlJyk7XG4gIH1cbn07XG5cbmNvbnN0IGFwcGx5TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnRuJyk7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXQpO1xuICBjb25zdCBsZWdlbmRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubGVnZW5kLWJ0bicpO1xuICBsZWdlbmRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkaXNwbGF5TGVnZW5kKTtcbn07XG5cbmNvbnN0IHJlbmRlckFsbCA9ICgpID0+IHtcbiAgcmVuZGVyQm9hcmQobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEpO1xuICByZW5kZXJCb2FyZChsb2dpYy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMik7XG4gIHJlbmRlckRyYWdTaGlwKCdjYXJyaWVyJywgNSk7XG4gIGFwcGx5TGlzdGVuZXJzKCk7XG59O1xuXG5mdW5jdGlvbiBjb25jbHVkZUdhbWUocGxheWVyKSB7XG4gIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubWVzc2FnZScpO1xuICBtZXNzYWdlLnRleHRDb250ZW50ID0gYCR7cGxheWVyfSB3b24hIENsaWNrIHRoZSBidXR0b24gb24gdGhlIHNpZGUgcGFuZWwgdG8gcGxheSBhZ2Fpbi5gO1xuICBjb25zdCByZXNldEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yZXNldC1idG4nKTtcbiAgcmVzZXRCdXR0b24udGV4dENvbnRlbnQgPSAnUGxheSBhZ2FpbiEnO1xuICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDIgLmNlbGwnKTtcbiAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRpYXRlQXR0YWNrKTtcbiAgfSk7XG59XG5cbmV4cG9ydCB7IHJlbmRlckFsbCwgaGFuZGxlU2hpcFBsYWNlbWVudCB9O1xuIiwiaW1wb3J0IHsgaGFuZGxlU2hpcFBsYWNlbWVudCB9IGZyb20gJy4vZG9tJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5sZXQgc2hpcDtcbmxldCBzaGlwSW5kZXg7XG5cbmNvbnN0IGRyYWduZHJvcCA9IHtcbiAgYXBwbHlMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICAgIHNoaXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ25kcm9wLmhhbmRsZURyYWdTdGFydCk7XG4gICAgc2hpcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ25kcm9wLmhhbmRsZURyYWdFbmQpO1xuICAgIHNoaXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ25kcm9wLmdldFNoaXBJbmRleCk7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkMSAuY2VsbCcpO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ25kcm9wLmhhbmRsZURyYWdFbnRlcik7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ25kcm9wLmhhbmRsZURyYWdPdmVyKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ25kcm9wLmhhbmRsZURyYWdMZWF2ZSk7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcmFnbmRyb3AuaGFuZGxlRHJvcCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0U2hpcEluZGV4KGUpIHtcbiAgICBzaGlwSW5kZXggPSArZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgfSxcblxuICBoYW5kbGVEcmFnU3RhcnQoZSkge1xuICAgIHNoaXAgPSBlLnRhcmdldDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9LCAwKTtcbiAgfSxcblxuICBoYW5kbGVEcmFnRW50ZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgfSxcblxuICBoYW5kbGVEcmFnT3ZlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIGhhbmRsZURyYWdMZWF2ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICB9LFxuXG4gIGhhbmRsZURyYWdFbmQoKSB7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9LFxuXG4gIGhhbmRsZURyb3AoZSkge1xuICAgIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpLmRhdGFzZXQ7XG4gICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0O1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBhZGp1c3RlZENlbGwgPSArY2VsbC5kYXRhc2V0LmluZGV4IC0gc2hpcEluZGV4O1xuICAgICAgaGFuZGxlU2hpcFBsYWNlbWVudChhZGp1c3RlZENlbGwpO1xuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNvbnN0IGFkanVzdGVkQ2VsbCA9ICtjZWxsLmRhdGFzZXQuaW5kZXggLSBzaGlwSW5kZXggKiAxMDtcbiAgICAgIGhhbmRsZVNoaXBQbGFjZW1lbnQoYWRqdXN0ZWRDZWxsKTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkcmFnbmRyb3A7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheSgxMDApLmZpbGwobnVsbCk7XG4gIH1cblxuICBhZGRTaGlwKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuc2hpcHMucHVzaChuZXcgU2hpcChsZW5ndGgpKTtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5ib2FyZFtpdGVtXSA9IHtcbiAgICAgICAgaWQ6IHRoaXMuc2hpcHMubGVuZ3RoIC0gMSxcbiAgICAgICAgcGFydDogaW5kZXgsXG4gICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5ib2FyZFtjb29yZGluYXRlXSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlXSA9IHsgaXNNaXNzZWQ6IHRydWUgfTtcbiAgICAgIHJldHVybiAnbWlzc2VkJztcbiAgICB9XG4gICAgdGhpcy5zaGlwc1t0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLmlkXS5oaXQodGhpcy5ib2FyZFtjb29yZGluYXRlXS5wYXJ0KTtcbiAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLmlzSGl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gJ2hpdCc7XG4gIH1cblxuICByZXBvcnRBbGxTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN1bmsgPT09IHRydWUpO1xuICB9XG5cbiAgY2hlY2tGb3JDb25mbGljdHMobG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24uc29tZSgoaXRlbSkgPT4gaXRlbSA+IDk5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcmlnaHRCb3JkZXIgPSBbOSwgMTksIDI5LCAzOSwgNDksIDU5LCA2OSwgNzksIDg5XTtcbiAgICBpZiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyb3ctYm9keS1zdHlsZVxuICAgICAgcmlnaHRCb3JkZXIuc29tZSgobnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBbbnVtYmVyLCBudW1iZXIgKyAxXS5ldmVyeSgoaXRlbSkgPT4gbG9jYXRpb24uaW5jbHVkZXMoaXRlbSkpO1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uc29tZSgoaXRlbSkgPT4gdGhpcy5ib2FyZFtpdGVtXSAhPT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmaW5kUmFuZG9tU2hpcExvY2F0aW9uKGxlbmd0aCkge1xuICAgIGNvbnN0IHZlcnRpY2FsID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcbiAgICBjb25zdCB2YWxpZExvY2F0aW9ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAgLSBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcG9zc2libGVMb2NhdGlvbnMgPSBbXTtcbiAgICAgIGlmICh2ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmd0aDsgeSArPSAxKSB7XG4gICAgICAgICAgcG9zc2libGVMb2NhdGlvbnMucHVzaChpICsgeSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5ndGg7IHkgKz0gMSkge1xuICAgICAgICAgIHBvc3NpYmxlTG9jYXRpb25zLnB1c2goeSArIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja0ZvckNvbmZsaWN0cyhwb3NzaWJsZUxvY2F0aW9ucykpXG4gICAgICAgIHZhbGlkTG9jYXRpb25zLnB1c2gocG9zc2libGVMb2NhdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRMb2NhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRMb2NhdGlvbnMubGVuZ3RoKV07XG4gIH1cblxuICBwbGFjZVBsYXllclNoaXAoY2VsbCwgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IGxvY2F0aW9uQXJyYXkgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBsb2NhdGlvbkFycmF5LnB1c2goY2VsbCArIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgbG9jYXRpb25BcnJheS5wdXNoKGNlbGwgKyBpICogMTApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0ZvckNvbmZsaWN0cyhsb2NhdGlvbkFycmF5KSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRTaGlwKGxvY2F0aW9uQXJyYXksIGxlbmd0aCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgbG9naWMgPSB7XG4gIGRhdGE6IHtcbiAgICBnYW1lYm9hcmRzOiB7fSxcbiAgICBwbGF5ZXJzOiB7fSxcbiAgfSxcblxuICBpbml0YWxpemVHYW1lKCkge1xuICAgIHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEgPSBuZXcgR2FtZWJvYXJkKCdnYW1lYm9hcmQxJyk7XG4gICAgdGhpcy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMiA9IG5ldyBHYW1lYm9hcmQoJ2dhbWVib2FyZDInKTtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLmluaXQoKTtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQyLmluaXQoKTtcbiAgICB0aGlzLmRhdGEucGxheWVycy5wbGF5ZXIxID0gbmV3IFBsYXllcignaHVtYW4nLCAnZ2FtZWJvYXJkMScpO1xuICAgIHRoaXMuZGF0YS5wbGF5ZXJzLnBsYXllcjIgPSBuZXcgUGxheWVyKCdhaScsICdnYW1lYm9hcmQyJyk7XG4gIH0sXG5cbiAgcGxhY2VDb21wdXRlclNoaXBzKCkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDI7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oNSksIDUpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDQpLCA0KTtcbiAgICBnYW1lYm9hcmQuYWRkU2hpcChnYW1lYm9hcmQuZmluZFJhbmRvbVNoaXBMb2NhdGlvbigzKSwgMyk7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oMyksIDMpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDIpLCAyKTtcbiAgfSxcblxuICBwcm9jZXNzQXR0YWNrKGNlbGwsIGJvYXJkKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gdGhpcy5kYXRhLmdhbWVib2FyZHNbYm9hcmRdO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzW2JvYXJkXS5yZWNlaXZlQXR0YWNrKGNlbGwpO1xuICAgIGNvbnN0IGZlZWRiYWNrID0ge1xuICAgICAgYWN0aW9uOiBudWxsLFxuICAgICAgY2VsbDogbnVsbCxcbiAgICAgIGJvYXJkOiBudWxsLFxuICAgICAgYWxsU3VuazogZmFsc2UsXG4gICAgfTtcbiAgICBjb25zdCBzaGlwSW5kZXggPSBnYW1lYm9hcmQuYm9hcmRbY2VsbF0uaWQ7XG4gICAgaWYgKHJlc3VsdCA9PT0gJ21pc3NlZCcpIHtcbiAgICAgIGZlZWRiYWNrLmFjdGlvbiA9ICdtaXNzZWQnO1xuICAgICAgZmVlZGJhY2suY2VsbCA9IGNlbGw7XG4gICAgICBmZWVkYmFjay5ib2FyZCA9IGdhbWVib2FyZC5uYW1lO1xuICAgICAgcmV0dXJuIGZlZWRiYWNrO1xuICAgIH1cbiAgICBpZiAoZ2FtZWJvYXJkLnNoaXBzW3NoaXBJbmRleF0uc3Vuaykge1xuICAgICAgY29uc3QgYWxsU2hpcHNDb3JkcyA9IGdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoKGFjYywgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IG51bGwgJiYgIWVsZW1lbnQuaGFzT3duUHJvcGVydHkoJ2lzTWlzc2VkJykpXG4gICAgICAgICAgYWNjLnB1c2goaW5kZXgpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgW10pO1xuICAgICAgY29uc3Qgc3Vua1NoaXBDb3JkcyA9IGFsbFNoaXBzQ29yZHMucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFtlbGVtZW50XS5pZCA9PT0gc2hpcEluZGV4KSBhY2MucHVzaChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKTtcbiAgICAgIGZlZWRiYWNrLmFjdGlvbiA9ICdzdW5rJztcbiAgICAgIGZlZWRiYWNrLmNlbGwgPSBzdW5rU2hpcENvcmRzO1xuICAgICAgaWYgKGdhbWVib2FyZC5yZXBvcnRBbGxTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgZmVlZGJhY2suYWxsU3VuayA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdoaXQnKSB7XG4gICAgICBmZWVkYmFjay5hY3Rpb24gPSAnaGl0JztcbiAgICAgIGZlZWRiYWNrLmNlbGwgPSBjZWxsO1xuICAgIH1cbiAgICBmZWVkYmFjay5ib2FyZCA9IGdhbWVib2FyZC5uYW1lO1xuICAgIHJldHVybiBmZWVkYmFjaztcbiAgfSxcblxuICBpbml0aWF0ZUNvbXB1dGVyTW92ZSgpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDE7XG4gICAgY29uc3QgYmVzdE1vdmUgPSBQbGF5ZXIuZmluZEJlc3RNb3ZlKHBsYXllckJvYXJkKTtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzQXR0YWNrKGJlc3RNb3ZlLCAnZ2FtZWJvYXJkMScpO1xuICB9LFxuXG4gIHJlc2V0TG9naWMoKSB7XG4gICAgY29uc3QgeyBnYW1lYm9hcmQxLCBnYW1lYm9hcmQyIH0gPSB0aGlzLmRhdGEuZ2FtZWJvYXJkcztcbiAgICBnYW1lYm9hcmQxLnNoaXBzID0gW107XG4gICAgZ2FtZWJvYXJkMS5ib2FyZC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0gIT09IG51bGwpIGdhbWVib2FyZDEuYm9hcmRbaW5kZXhdID0gbnVsbDtcbiAgICB9KTtcbiAgICBnYW1lYm9hcmQyLnNoaXBzID0gW107XG4gICAgZ2FtZWJvYXJkMi5ib2FyZC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGl0ZW0gIT09IG51bGwpIGdhbWVib2FyZDIuYm9hcmRbaW5kZXhdID0gbnVsbDtcbiAgICB9KTtcbiAgfSxcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBsb2dpYyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzdGF0aWMgYXR0YWNrUmFuZG9tKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IGdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoKGNlbGxzLCBjdXJyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGN1cnIgIT09IG51bGwgJiYgY3Vyci5oYXNPd25Qcm9wZXJ0eSgnaXNNaXNzZWQnKSkgcmV0dXJuIGNlbGxzO1xuICAgICAgaWYgKGN1cnIgPT09IG51bGwgfHwgY3Vyci5pc0hpdCA9PT0gZmFsc2UpIGNlbGxzLnB1c2goaW5kZXgpO1xuICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCByYW5kb21MZWdhbCA9XG4gICAgICBsZWdhbEF0dGFja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVnYWxBdHRhY2tzLmxlbmd0aCldO1xuICAgIHJldHVybiByYW5kb21MZWdhbDtcbiAgfVxuXG4gIHN0YXRpYyBkZXRlY3RTaGlwcyhnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBoaXRzID0gZ2FtZWJvYXJkLmJvYXJkLnJlZHVjZSgoY2VsbHMsIGN1cnIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnIgIT09IG51bGwgJiZcbiAgICAgICAgIWN1cnIuaXNNaXNzZWQgPT09IHRydWUgJiZcbiAgICAgICAgY3Vyci5pc0hpdCA9PT0gdHJ1ZSAmJlxuICAgICAgICBnYW1lYm9hcmQuc2hpcHNbY3Vyci5pZF0uc3VuayA9PT0gZmFsc2VcbiAgICAgIClcbiAgICAgICAgY2VsbHMucHVzaChpbmRleCk7XG4gICAgICByZXR1cm4gY2VsbHM7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBoaXRzO1xuICB9XG5cbiAgc3RhdGljIGNoZWNrRm9yTGVnYWxBdHRhY2tzKGNlbGwsIGFycmF5LCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCByaWdodEJvcmRlciA9IFs5LCAxOSwgMjksIDM5LCA0OSwgNTksIDY5LCA3OSwgODldO1xuICAgIGNvbnN0IGxlZnRCb3JkZXIgPSBbMCwgMTAsIDIwLCAzMCwgNDAsIDUwLCA2MCwgNzAsIDkwXTtcbiAgICBjb25zdCByZWZlcmVuY2VBcnJheSA9IFsuLi5hcnJheSwgY2VsbF07XG4gICAgaWYgKHJpZ2h0Qm9yZGVyLmluY2x1ZGVzKGNlbGwpKSB7XG4gICAgICBjb25zdCBpbGxlZ2FsID0gcmVmZXJlbmNlQXJyYXkuZmlsdGVyKChudW1iZXIpID0+XG4gICAgICAgIHJpZ2h0Qm9yZGVyLnNvbWUoKGl0ZW0pID0+IG51bWJlciA9PT0gaXRlbSArIDEpXG4gICAgICApO1xuICAgICAgaWYgKGlsbGVnYWwubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJlZmVyZW5jZUFycmF5LnNwbGljZShyZWZlcmVuY2VBcnJheS5pbmRleE9mKGlsbGVnYWxbMF0pLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxlZnRCb3JkZXIuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAgIGNvbnN0IGlsbGVnYWwgPSByZWZlcmVuY2VBcnJheS5maWx0ZXIoKG51bWJlcikgPT5cbiAgICAgICAgbGVmdEJvcmRlci5zb21lKChpdGVtKSA9PiBudW1iZXIgPT09IGl0ZW0gLSAxKVxuICAgICAgKTtcbiAgICAgIGlmIChpbGxlZ2FsLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZWZlcmVuY2VBcnJheS5zcGxpY2UocmVmZXJlbmNlQXJyYXkuaW5kZXhPZihpbGxlZ2FsWzBdKSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlZmVyZW5jZUFycmF5LnNwbGljZShyZWZlcmVuY2VBcnJheS5pbmRleE9mKGNlbGwpLCAxKTtcbiAgICBjb25zdCByZXZpc2VkQ2VsbHMgPSByZWZlcmVuY2VBcnJheS5maWx0ZXIoXG4gICAgICAobnVtYmVyKSA9PiBudW1iZXIgPD0gOTkgJiYgbnVtYmVyID49IDBcbiAgICApO1xuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IHJldmlzZWRDZWxscy5yZWR1Y2UoKGNlbGxzLCBjdXJyKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGdhbWVib2FyZC5ib2FyZFtjdXJyXSAhPT0gbnVsbCAmJlxuICAgICAgICBnYW1lYm9hcmQuYm9hcmRbY3Vycl0uaGFzT3duUHJvcGVydHkoJ2lzTWlzc2VkJylcbiAgICAgIClcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgICAgaWYgKFxuICAgICAgICBnYW1lYm9hcmQuYm9hcmRbY3Vycl0gPT09IG51bGwgfHxcbiAgICAgICAgZ2FtZWJvYXJkLmJvYXJkW2N1cnJdLmlzSGl0ID09PSBmYWxzZVxuICAgICAgKVxuICAgICAgICBjZWxscy5wdXNoKGN1cnIpO1xuICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gbGVnYWxBdHRhY2tzO1xuICB9XG5cbiAgc3RhdGljIGZpbmRTdXJyb3VuZGluZ0NlbGxzKGNlbGwsIGdhbWVib2FyZCkge1xuICAgIGNvbnN0IG51bWJlciA9IHBhcnNlSW50KGNlbGwsIDEwKTtcbiAgICBjb25zdCBzdXJyb3VuZGluZ0NlbGxzID0gW107XG4gICAgY29uc3QgY2VsbEFib3ZlID0gbnVtYmVyIC0gMTA7XG4gICAgY29uc3QgY2VsbEJlbG93ID0gbnVtYmVyICsgMTA7XG4gICAgY29uc3QgY2VsbExlZnQgPSBudW1iZXIgLSAxO1xuICAgIGNvbnN0IGNlbGxSaWdodCA9IG51bWJlciArIDE7XG4gICAgc3Vycm91bmRpbmdDZWxscy5wdXNoKGNlbGxBYm92ZSwgY2VsbEJlbG93LCBjZWxsTGVmdCwgY2VsbFJpZ2h0KTtcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZvckxlZ2FsQXR0YWNrcyhudW1iZXIsIHN1cnJvdW5kaW5nQ2VsbHMsIGdhbWVib2FyZCk7XG4gIH1cblxuICBzdGF0aWMgYXR0YWNrU3Vycm91bmRpbmdDZWxscyhoaXRzLCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBwb3NzaWJsZVRhcmdldHMgPSBbXTtcbiAgICBoaXRzLmZvckVhY2goKGhpdCkgPT4ge1xuICAgICAgcG9zc2libGVUYXJnZXRzLnB1c2godGhpcy5maW5kU3Vycm91bmRpbmdDZWxscyhoaXQsIGdhbWVib2FyZCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGZsYXRBcnJheSA9IHBvc3NpYmxlVGFyZ2V0cy5mbGF0KCk7XG4gICAgaWYgKGZsYXRBcnJheS5sZW5ndGggPT09IDApIHJldHVybiB0aGlzLmF0dGFja1JhbmRvbShnYW1lYm9hcmQpO1xuICAgIHJldHVybiBmbGF0QXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmxhdEFycmF5Lmxlbmd0aCldO1xuICB9XG5cbiAgc3RhdGljIGdyb3VwVHJlbmRzQnlPcmllbnRhdGlvbihoaXRzKSB7XG4gICAgY29uc3QgZ3JvdXBMYXN0RGlnaXRzID0gaGl0cy5yZWR1Y2UoKGxpc3QsIGN1cnJlbnQpID0+IHtcbiAgICAgIGNvbnN0IGxhc3QgPSBjdXJyZW50ICUgMTA7XG4gICAgICBsaXN0W2xhc3RdID8/PSBbXTtcbiAgICAgIGxpc3RbbGFzdF0ucHVzaChjdXJyZW50KTtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH0sIHt9KTtcbiAgICBjb25zdCBncm91cEZpcnN0RGlnaXRzID0gaGl0cy5yZWR1Y2UoKGxpc3QsIGN1cnJlbnQpID0+IHtcbiAgICAgIGxldCBmaXJzdCA9IE1hdGguZmxvb3IoY3VycmVudCAvIDEwKTtcbiAgICAgIGlmIChmaXJzdCA9PT0gY3VycmVudCkgZmlyc3QgPSAwO1xuICAgICAgbGlzdFtmaXJzdF0gPz89IFtdO1xuICAgICAgbGlzdFtmaXJzdF0ucHVzaChjdXJyZW50KTtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH0sIHt9KTtcbiAgICBjb25zdCBnZXROdW1iZXJzID0gKG9iaikgPT5cbiAgICAgIE9iamVjdC52YWx1ZXMob2JqKVxuICAgICAgICAuZmlsdGVyKChhcnIpID0+IGFyci5sZW5ndGggPiAxKVxuICAgICAgICAuZmxhdCgpO1xuICAgIGNvbnN0IHlUcmVuZCA9IGdldE51bWJlcnMoZ3JvdXBMYXN0RGlnaXRzKTtcbiAgICBjb25zdCB4VHJlbmQgPSBnZXROdW1iZXJzKGdyb3VwRmlyc3REaWdpdHMpO1xuICAgIHJldHVybiBbeFRyZW5kLCB5VHJlbmRdO1xuICB9XG5cbiAgc3RhdGljIGFuYWx5emVUcmVuZHMoaGl0cykge1xuICAgIGNvbnN0IHRyZW5kcyA9IHRoaXMuZ3JvdXBUcmVuZHNCeU9yaWVudGF0aW9uKGhpdHMpO1xuICAgIGNvbnN0IGFuYWx5emUgPSAodHJlbmQsIGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgY29uc3QgeyBnZXRQcmVkZWNlc3NvciwgZ2V0U3VjY2Vzc29yLCBsaXN0IH0gPSB0cmVuZDtcbiAgICAgIGlmIChnZXRQcmVkZWNlc3NvcihpdGVtKSA9PT0gYXJyYXlbaW5kZXggLSAxXSkge1xuICAgICAgICBsaXN0W2xpc3QubGVuZ3RoIC0gMV0ucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoZ2V0U3VjY2Vzc29yKGl0ZW0pID09PSBhcnJheVtpbmRleCArIDFdKSB7XG4gICAgICAgIGxpc3QucHVzaChbaXRlbV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRyZW5kO1xuICAgIH07XG4gICAgY29uc3QgaG9yaXpvbnRhbENvbmRpdGlvbnMgPSB7XG4gICAgICBnZXRQcmVkZWNlc3NvcjogKGl0ZW0pID0+IGl0ZW0gLSAxLFxuICAgICAgZ2V0U3VjY2Vzc29yOiAoaXRlbSkgPT4gaXRlbSArIDEsXG4gICAgfTtcbiAgICBjb25zdCB2ZXJ0aWNhbENvbmRpdGlvbnMgPSB7XG4gICAgICBnZXRQcmVkZWNlc3NvcjogKGl0ZW0pID0+IGl0ZW0gLSAxMCxcbiAgICAgIGdldFN1Y2Nlc3NvcjogKGl0ZW0pID0+IGl0ZW0gKyAxMCxcbiAgICB9O1xuICAgIGNvbnN0IGhvcml6b250YWxUcmVuZHMgPSB0cmVuZHNbMF0ucmVkdWNlKGFuYWx5emUsIHtcbiAgICAgIC4uLmhvcml6b250YWxDb25kaXRpb25zLFxuICAgICAgbGlzdDogW10sXG4gICAgfSkubGlzdDtcbiAgICBjb25zdCB2ZXJ0aWNhbFRyZW5kcyA9IHRyZW5kc1sxXS5yZWR1Y2UoYW5hbHl6ZSwge1xuICAgICAgLi4udmVydGljYWxDb25kaXRpb25zLFxuICAgICAgbGlzdDogW10sXG4gICAgfSkubGlzdDtcbiAgICByZXR1cm4geyBob3Jpem9udGFsVHJlbmRzLCB2ZXJ0aWNhbFRyZW5kcyB9O1xuICB9XG5cbiAgc3RhdGljIGF0dGFja1RyZW5kKGhvcml6b250YWxUcmVuZHMsIHZlcnRpY2FsVHJlbmRzLCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBwb3RlbnRpYWxUYXJnZXRzID0gW107XG4gICAgaWYgKGhvcml6b250YWxUcmVuZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBob3Jpem9udGFsVHJlbmRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaGlnaGVzdCA9IE1hdGgubWF4KC4uLml0ZW0pO1xuICAgICAgICBjb25zdCBsb3dlc3QgPSBNYXRoLm1pbiguLi5pdGVtKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY2hlY2tGb3JMZWdhbEF0dGFja3MoaGlnaGVzdCwgW2hpZ2hlc3QgKyAxXSwgZ2FtZWJvYXJkKVxuICAgICAgICAgICAgLmxlbmd0aCAhPT0gMFxuICAgICAgICApXG4gICAgICAgICAgcG90ZW50aWFsVGFyZ2V0cy5wdXNoKGhpZ2hlc3QgKyAxKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY2hlY2tGb3JMZWdhbEF0dGFja3MobG93ZXN0LCBbbG93ZXN0IC0gMV0sIGdhbWVib2FyZCkubGVuZ3RoICE9PVxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgICAgIHBvdGVudGlhbFRhcmdldHMucHVzaChsb3dlc3QgLSAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodmVydGljYWxUcmVuZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICB2ZXJ0aWNhbFRyZW5kcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGhpZ2hlc3QgPSBNYXRoLm1heCguLi5pdGVtKTtcbiAgICAgICAgY29uc3QgbG93ZXN0ID0gTWF0aC5taW4oLi4uaXRlbSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmNoZWNrRm9yTGVnYWxBdHRhY2tzKGhpZ2hlc3QsIFtoaWdoZXN0ICsgMTBdLCBnYW1lYm9hcmQpXG4gICAgICAgICAgICAubGVuZ3RoICE9PSAwXG4gICAgICAgIClcbiAgICAgICAgICBwb3RlbnRpYWxUYXJnZXRzLnB1c2goaGlnaGVzdCArIDEwKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY2hlY2tGb3JMZWdhbEF0dGFja3MobG93ZXN0LCBbbG93ZXN0IC0gMTBdLCBnYW1lYm9hcmQpLmxlbmd0aCAhPT1cbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgICAgICBwb3RlbnRpYWxUYXJnZXRzLnB1c2gobG93ZXN0IC0gMTApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwb3RlbnRpYWxUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcmVtb3ZlRHVwbGljYXRlcyA9IFsuLi5uZXcgU2V0KHBvdGVudGlhbFRhcmdldHMpXTtcbiAgICAgIHJldHVybiByZW1vdmVEdXBsaWNhdGVzO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kQmVzdE1vdmUoZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgaGl0cyA9IHRoaXMuZGV0ZWN0U2hpcHMoZ2FtZWJvYXJkKTtcbiAgICBpZiAoaGl0cy5sZW5ndGggPT09IDApIHJldHVybiB0aGlzLmF0dGFja1JhbmRvbShnYW1lYm9hcmQpO1xuICAgIGlmIChoaXRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCB7IGhvcml6b250YWxUcmVuZHMsIHZlcnRpY2FsVHJlbmRzIH0gPSB0aGlzLmFuYWx5emVUcmVuZHMoaGl0cyk7XG4gICAgICBpZiAoaG9yaXpvbnRhbFRyZW5kcy5sZW5ndGggfHwgdmVydGljYWxUcmVuZHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbFRyZW5kVGFyZ2V0cyA9IHRoaXMuYXR0YWNrVHJlbmQoXG4gICAgICAgICAgaG9yaXpvbnRhbFRyZW5kcyxcbiAgICAgICAgICB2ZXJ0aWNhbFRyZW5kcyxcbiAgICAgICAgICBnYW1lYm9hcmRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHBvdGVudGlhbFRyZW5kVGFyZ2V0cyA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmF0dGFja1N1cnJvdW5kaW5nQ2VsbHMoaGl0cywgZ2FtZWJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG90ZW50aWFsVHJlbmRUYXJnZXRzW1xuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvdGVudGlhbFRyZW5kVGFyZ2V0cy5sZW5ndGgpXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmF0dGFja1N1cnJvdW5kaW5nQ2VsbHMoaGl0cywgZ2FtZWJvYXJkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCB2ZXJ0aWNhbCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IEFycmF5KGxlbmd0aCkuZmlsbChudWxsKTtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLnZlcnRpY2FsID0gdmVydGljYWw7XG4gIH1cblxuICBoaXQocGFydCkge1xuICAgIHRoaXMuaGl0c1twYXJ0XSA9ICdoaXQnO1xuICAgIHRoaXMuaXNTdW5rKCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cy5ldmVyeSgoaGl0KSA9PiBoaXQgPT09ICdoaXQnKSkgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Db250cmFpbCtPbmUmZmFtaWx5PVJvYm90byZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCI6cm9vdCB7XFxuICAtLWJhY2tncm91bmQ6IGhzbCgyNDAsIDIwJSwgODAlKTtcXG4gIC0tcHJpbWFyeTogaHNsKDI0MCwgMjAlLCA1MCUpO1xcbiAgLS1zZWNvbmRhcnk6IGhzbCgyNDAsIDIyJSwgMjAlKTtcXG4gIC0tc2lkZTogaHNsKDI0MCwgMjAlLCA2MCUpO1xcbiAgLS1vdXRsaW5lOiBoc2woMjQwLCAyMCUsIDMwJSk7XFxuICAtLWhpdDogaHNsKDEyLCAxMDAlLCAzNSUpO1xcbiAgLS1zdW5rOiBoc2woMTIsIDEwMCUsIDIwJSk7XFxuICAtLWJyaWdodHRleHQ6IGhzbCgyNDAsIDIyJSwgODUlKTtcXG59XFxuXFxuaHRtbCB7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbn1cXG4qLFxcbio6YmVmb3JlLFxcbio6YWZ0ZXIge1xcbiAgYm94LXNpemluZzogaW5oZXJpdDtcXG59XFxuXFxuYSxcXG5hOmhvdmVyLFxcbmE6Zm9jdXMsXFxuYTphY3RpdmUge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgY29sb3I6IGluaGVyaXQ7XFxufVxcblxcbmJvZHkge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmFja2dyb3VuZCk7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICAnLiB0b3AnXFxuICAgICdzaWRlIGJvYXJkcyc7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnRvcCB7XFxuICBncmlkLWFyZWE6IHRvcDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nLWJvdHRvbTogMXJlbTtcXG59XFxuXFxuLnRvcC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAzcmVtO1xcbiAgZm9udC1mYW1pbHk6ICdDb250cmFpbCBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG4ubWVzc2FnZSB7XFxuICBoZWlnaHQ6IDEuNXJlbTtcXG59XFxuXFxuLnNpZGUtcGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZ3JpZC1hcmVhOiBzaWRlO1xcbiAgaGVpZ2h0OiAyMHJlbTtcXG4gIHdpZHRoOiAxNXJlbTtcXG4gIG1hcmdpbi10b3A6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNpZGUpO1xcbiAgYm9yZGVyLXJhZGl1czogMC41cmVtO1xcbiAgcGFkZGluZzogMC4ycmVtO1xcbn1cXG5cXG4uY29sbGFwc2Uge1xcbiAgaGVpZ2h0OiA2cmVtO1xcbn1cXG5cXG4uc2lkZS1mb290ZXIge1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG4gIG1hcmdpbi1ib3R0b206IDAuMnJlbTtcXG59XFxuXFxuLnNpZGUtZm9vdGVyIGEge1xcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXG59XFxuXFxuLmluc3RydWN0aW9ucyB7XFxuICBtYXJnaW4tYm90dG9tOiAwLjNyZW07XFxufVxcblxcbi5sZWdlbmQge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLmxlZ2VuZC1pY29ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIG1hcmdpbi10b3A6IDAuNXJlbTtcXG59XFxuXFxuLmxlZ2VuZC1pY29ucyBkaXYge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgbWFyZ2luOiAwLjNyZW0gMDtcXG59XFxuXFxuLmxlZ2VuZC1kZXNjIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMC4zcmVtO1xcbiAgbWFyZ2luLWxlZnQ6IDFyZW07XFxufVxcblxcbi5zaGlwLWRyYWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgbWFyZ2luLXRvcDogYXV0bztcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnJlbW92ZSB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uY2FycmllcixcXG4uYmF0dGxlc2hpcCxcXG4uc3VibWFyaW5lLFxcbi5jcnVpc2VyLFxcbi5kZXN0cm95ZXIge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG4gIGJvcmRlcjogMC4ycmVtIHZhcigtLW91dGxpbmUpIHJpZGdlO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgb3V0bGluZTogMC4xcmVtIHZhcigtLXByaW1hcnkpIHNvbGlkO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB3aWR0aDogMTAwJTtcXG59XFxuXFxuLmJ1dHRvbnMgYnV0dG9uIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLW91dGxpbmUpO1xcbiAgY29sb3I6IHZhcigtLWJyaWdodHRleHQpO1xcbiAgYm9yZGVyLXJhZGl1czogMC4ycmVtO1xcbiAgYm9yZGVyOiAwLjFyZW0gdmFyKC0tb3V0bGluZSkgb3V0c2V0O1xcbiAgcGFkZGluZzogMC40cmVtO1xcbiAgbWFyZ2luOiAwLjRyZW07XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDAuOXJlbTtcXG4gIHdpZHRoOiA0MCU7XFxufVxcblxcbi5yZXNldC1idG4ge1xcbiAgb3JkZXI6IDE7XFxufVxcblxcbi5ib2FyZHMtd3JhcHBlciB7XFxuICBncmlkLWFyZWE6IGJvYXJkcztcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICBncmlkLXRlbXBsYXRlOlxcbiAgICAndGl0bGUxIHRpdGxlMidcXG4gICAgJ2JvYXJkMSBib2FyZDInO1xcbiAganVzdGlmeS1pdGVtczogY2VudGVyO1xcbiAgYWxpZ24tc2VsZjogc3RhcnQ7XFxufVxcblxcbi5nYW1lYm9hcmQxLXRpdGxlLFxcbi5nYW1lYm9hcmQyLXRpdGxlIHtcXG4gIGFsaWduLXNlbGY6IGVuZDtcXG4gIGZvbnQtc2l6ZTogMS41cmVtO1xcbiAgZm9udC1mYW1pbHk6ICdDb250cmFpbCBPbmUnLCBjdXJzaXZlO1xcbn1cXG5cXG4uZ2FtZWJvYXJkMS10aXRsZSB7XFxuICBncmlkLWFyZWE6IHRpdGxlMTtcXG59XFxuLmdhbWVib2FyZDItdGl0bGUge1xcbiAgZ3JpZC1hcmVhOiB0aXRsZTI7XFxufVxcblxcbi5nYW1lYm9hcmQxIHtcXG4gIGdyaWQtYXJlYTogYm9hcmQxO1xcbn1cXG5cXG4uZ2FtZWJvYXJkMiB7XFxuICBncmlkLWFyZWE6IGJvYXJkMjtcXG59XFxuXFxuLmdhbWVib2FyZDEsXFxuLmdhbWVib2FyZDIge1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIG91dGxpbmU6IDAuMnJlbSB2YXIoLS1vdXRsaW5lKSBzb2xpZDtcXG4gIHdpZHRoOiAyN3JlbTtcXG4gIGhlaWdodDogMjdyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBvdXRsaW5lOiAwLjFyZW0gdmFyKC0tcHJpbWFyeSkgc29saWQ7XFxufVxcblxcbi5zaGlwLFxcbi5oaXQsXFxuLnN1bmsge1xcbiAgYm9yZGVyOiAwLjJyZW0gdmFyKC0tb3V0bGluZSkgcmlkZ2U7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0taGl0KTtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbiAgYm9yZGVyOiAwLjFyZW0gdmFyKC0tb3V0bGluZSkgcmlkZ2U7XFxufVxcblxcbi5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXN1bmspO1xcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5zdW5rLXgge1xcbiAgd2lkdGg6IDNyZW07XFxuICBoZWlnaHQ6IDNyZW07XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTIwMHB4KSB7XFxuICAuYm9hcmRzLXdyYXBwZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiAxZnIgMWZyIDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGU6XFxuICAgICAgJ3RpdGxlMSdcXG4gICAgICAnYm9hcmQxJ1xcbiAgICAgICd0aXRsZTInXFxuICAgICAgJ2JvYXJkMic7XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzEwcHgpIHtcXG4gIC53cmFwcGVyIHtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGU6XFxuICAgICAgJ3NpZGUgdG9wJ1xcbiAgICAgICdib2FyZHMgYm9hcmRzJztcXG4gIH1cXG4gIC50b3Age1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxuICAgIG1hcmdpbi10b3A6IDIuNXJlbTtcXG4gIH1cXG4gIC5ib2FyZHMtd3JhcHBlciB7XFxuICAgIG1hcmdpbi10b3A6IDFyZW07XFxuICB9XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNDUwcHgpIHtcXG4gIGh0bWwge1xcbiAgICBmb250LXNpemU6IDExcHg7XFxuICB9XFxuICAubWVzc2FnZSB7XFxuICAgIHdpZHRoOiA5cmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUVBO0VBQ0UsZ0NBQWdDO0VBQ2hDLDZCQUE2QjtFQUM3QiwrQkFBK0I7RUFDL0IsMEJBQTBCO0VBQzFCLDZCQUE2QjtFQUM3Qix5QkFBeUI7RUFDekIsMEJBQTBCO0VBQzFCLGdDQUFnQztBQUNsQzs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4QjtBQUNBOzs7RUFHRSxtQkFBbUI7QUFDckI7O0FBRUE7Ozs7RUFJRSxxQkFBcUI7RUFDckIsY0FBYztBQUNoQjs7QUFFQTtFQUNFLG1DQUFtQztFQUNuQyxhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0VBQ1YsdUJBQXVCO0VBQ3ZCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLDhCQUE4QjtFQUM5QiwyQkFBMkI7RUFDM0I7O2lCQUVlO0VBQ2YscUJBQXFCO0VBQ3JCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGNBQWM7RUFDZCxhQUFhO0VBQ2IseUJBQXlCO0VBQ3pCLG1CQUFtQjtFQUNuQixzQkFBc0I7RUFDdEIsb0JBQW9CO0FBQ3RCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLG9DQUFvQztBQUN0Qzs7QUFFQTtFQUNFLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLDJCQUEyQjtFQUMzQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGFBQWE7RUFDYixZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLDZCQUE2QjtFQUM3QixxQkFBcUI7RUFDckIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsY0FBYztFQUNkLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsa0JBQWtCO0VBQ2xCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7OztFQUtFLGFBQWE7RUFDYixjQUFjO0VBQ2Qsa0NBQWtDO0VBQ2xDLG1DQUFtQztFQUNuQyxxQkFBcUI7RUFDckIsb0NBQW9DO0FBQ3RDOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQ0FBZ0M7RUFDaEMsd0JBQXdCO0VBQ3hCLHFCQUFxQjtFQUNyQixvQ0FBb0M7RUFDcEMsZUFBZTtFQUNmLGNBQWM7RUFDZCxpQ0FBaUM7RUFDakMsaUJBQWlCO0VBQ2pCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLFFBQVE7QUFDVjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsOEJBQThCO0VBQzlCLDJCQUEyQjtFQUMzQjs7bUJBRWlCO0VBQ2pCLHFCQUFxQjtFQUNyQixpQkFBaUI7QUFDbkI7O0FBRUE7O0VBRUUsZUFBZTtFQUNmLGlCQUFpQjtFQUNqQixvQ0FBb0M7QUFDdEM7O0FBRUE7RUFDRSxpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjs7QUFFQTs7RUFFRSxhQUFhO0VBQ2Isb0NBQW9DO0VBQ3BDLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxvQ0FBb0M7QUFDdEM7O0FBRUE7OztFQUdFLG1DQUFtQztFQUNuQyxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBRUE7RUFDRSw0QkFBNEI7QUFDOUI7O0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0UsNkJBQTZCO0VBQzdCLGdCQUFnQjtFQUNoQixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRTtJQUNFLDBCQUEwQjtJQUMxQixtQ0FBbUM7SUFDbkM7Ozs7Y0FJVTtFQUNaO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtJQUM5QiwyQkFBMkI7SUFDM0I7O3FCQUVpQjtFQUNuQjtFQUNBO0lBQ0UsMkJBQTJCO0lBQzNCLGtCQUFrQjtFQUNwQjtFQUNBO0lBQ0UsZ0JBQWdCO0VBQ2xCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLGVBQWU7RUFDakI7RUFDQTtJQUNFLFdBQVc7RUFDYjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUNvbnRyYWlsK09uZSZmYW1pbHk9Um9ib3RvJmRpc3BsYXk9c3dhcCcpO1xcblxcbjpyb290IHtcXG4gIC0tYmFja2dyb3VuZDogaHNsKDI0MCwgMjAlLCA4MCUpO1xcbiAgLS1wcmltYXJ5OiBoc2woMjQwLCAyMCUsIDUwJSk7XFxuICAtLXNlY29uZGFyeTogaHNsKDI0MCwgMjIlLCAyMCUpO1xcbiAgLS1zaWRlOiBoc2woMjQwLCAyMCUsIDYwJSk7XFxuICAtLW91dGxpbmU6IGhzbCgyNDAsIDIwJSwgMzAlKTtcXG4gIC0taGl0OiBoc2woMTIsIDEwMCUsIDM1JSk7XFxuICAtLXN1bms6IGhzbCgxMiwgMTAwJSwgMjAlKTtcXG4gIC0tYnJpZ2h0dGV4dDogaHNsKDI0MCwgMjIlLCA4NSUpO1xcbn1cXG5cXG5odG1sIHtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxufVxcbiosXFxuKjpiZWZvcmUsXFxuKjphZnRlciB7XFxuICBib3gtc2l6aW5nOiBpbmhlcml0O1xcbn1cXG5cXG5hLFxcbmE6aG92ZXIsXFxuYTpmb2N1cyxcXG5hOmFjdGl2ZSB7XFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICBjb2xvcjogaW5oZXJpdDtcXG59XFxuXFxuYm9keSB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iYWNrZ3JvdW5kKTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgY29sb3I6IHZhcigtLXNlY29uZGFyeSk7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICcuIHRvcCdcXG4gICAgJ3NpZGUgYm9hcmRzJztcXG4gIGp1c3RpZnktaXRlbXM6IGNlbnRlcjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4udG9wIHtcXG4gIGdyaWQtYXJlYTogdG9wO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmctYm90dG9tOiAxcmVtO1xcbn1cXG5cXG4udG9wLWhlYWRlciB7XFxuICBmb250LXNpemU6IDNyZW07XFxuICBmb250LWZhbWlseTogJ0NvbnRyYWlsIE9uZScsIGN1cnNpdmU7XFxufVxcblxcbi5tZXNzYWdlIHtcXG4gIGhlaWdodDogMS41cmVtO1xcbn1cXG5cXG4uc2lkZS1wYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICBncmlkLWFyZWE6IHNpZGU7XFxuICBoZWlnaHQ6IDIwcmVtO1xcbiAgd2lkdGg6IDE1cmVtO1xcbiAgbWFyZ2luLXRvcDogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2lkZSk7XFxuICBib3JkZXItcmFkaXVzOiAwLjVyZW07XFxuICBwYWRkaW5nOiAwLjJyZW07XFxufVxcblxcbi5jb2xsYXBzZSB7XFxuICBoZWlnaHQ6IDZyZW07XFxufVxcblxcbi5zaWRlLWZvb3RlciB7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbiAgbWFyZ2luLWJvdHRvbTogMC4ycmVtO1xcbn1cXG5cXG4uc2lkZS1mb290ZXIgYSB7XFxuICBmb250LXdlaWdodDogNjAwO1xcbn1cXG5cXG4uaW5zdHJ1Y3Rpb25zIHtcXG4gIG1hcmdpbi1ib3R0b206IDAuM3JlbTtcXG59XFxuXFxuLmxlZ2VuZCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4ubGVnZW5kLWljb25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgbWFyZ2luLXRvcDogMC41cmVtO1xcbn1cXG5cXG4ubGVnZW5kLWljb25zIGRpdiB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBtYXJnaW46IDAuM3JlbSAwO1xcbn1cXG5cXG4ubGVnZW5kLWRlc2Mge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBtYXJnaW4tdG9wOiAwLjNyZW07XFxuICBtYXJnaW4tbGVmdDogMXJlbTtcXG59XFxuXFxuLnNoaXAtZHJhZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBtYXJnaW4tdG9wOiBhdXRvO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4ucmVtb3ZlIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5jYXJyaWVyLFxcbi5iYXR0bGVzaGlwLFxcbi5zdWJtYXJpbmUsXFxuLmNydWlzZXIsXFxuLmRlc3Ryb3llciB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1zZWNvbmRhcnkpO1xcbiAgYm9yZGVyOiAwLjJyZW0gdmFyKC0tb3V0bGluZSkgcmlkZ2U7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBvdXRsaW5lOiAwLjFyZW0gdmFyKC0tcHJpbWFyeSkgc29saWQ7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4uYnV0dG9ucyBidXR0b24ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb3V0bGluZSk7XFxuICBjb2xvcjogdmFyKC0tYnJpZ2h0dGV4dCk7XFxuICBib3JkZXItcmFkaXVzOiAwLjJyZW07XFxuICBib3JkZXI6IDAuMXJlbSB2YXIoLS1vdXRsaW5lKSBvdXRzZXQ7XFxuICBwYWRkaW5nOiAwLjRyZW07XFxuICBtYXJnaW46IDAuNHJlbTtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMC45cmVtO1xcbiAgd2lkdGg6IDQwJTtcXG59XFxuXFxuLnJlc2V0LWJ0biB7XFxuICBvcmRlcjogMTtcXG59XFxuXFxuLmJvYXJkcy13cmFwcGVyIHtcXG4gIGdyaWQtYXJlYTogYm9hcmRzO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gIGdyaWQtdGVtcGxhdGU6XFxuICAgICd0aXRsZTEgdGl0bGUyJ1xcbiAgICAnYm9hcmQxIGJvYXJkMic7XFxuICBqdXN0aWZ5LWl0ZW1zOiBjZW50ZXI7XFxuICBhbGlnbi1zZWxmOiBzdGFydDtcXG59XFxuXFxuLmdhbWVib2FyZDEtdGl0bGUsXFxuLmdhbWVib2FyZDItdGl0bGUge1xcbiAgYWxpZ24tc2VsZjogZW5kO1xcbiAgZm9udC1zaXplOiAxLjVyZW07XFxuICBmb250LWZhbWlseTogJ0NvbnRyYWlsIE9uZScsIGN1cnNpdmU7XFxufVxcblxcbi5nYW1lYm9hcmQxLXRpdGxlIHtcXG4gIGdyaWQtYXJlYTogdGl0bGUxO1xcbn1cXG4uZ2FtZWJvYXJkMi10aXRsZSB7XFxuICBncmlkLWFyZWE6IHRpdGxlMjtcXG59XFxuXFxuLmdhbWVib2FyZDEge1xcbiAgZ3JpZC1hcmVhOiBib2FyZDE7XFxufVxcblxcbi5nYW1lYm9hcmQyIHtcXG4gIGdyaWQtYXJlYTogYm9hcmQyO1xcbn1cXG5cXG4uZ2FtZWJvYXJkMSxcXG4uZ2FtZWJvYXJkMiB7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgb3V0bGluZTogMC4ycmVtIHZhcigtLW91dGxpbmUpIHNvbGlkO1xcbiAgd2lkdGg6IDI3cmVtO1xcbiAgaGVpZ2h0OiAyN3JlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5jZWxsIHtcXG4gIG91dGxpbmU6IDAuMXJlbSB2YXIoLS1wcmltYXJ5KSBzb2xpZDtcXG59XFxuXFxuLnNoaXAsXFxuLmhpdCxcXG4uc3VuayB7XFxuICBib3JkZXI6IDAuMnJlbSB2YXIoLS1vdXRsaW5lKSByaWRnZTtcXG4gIGJvcmRlci1yYWRpdXM6IDAuMnJlbTtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc2Vjb25kYXJ5KTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1oaXQpO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxuICBib3JkZXI6IDAuMXJlbSB2YXIoLS1vdXRsaW5lKSByaWRnZTtcXG59XFxuXFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tc3Vuayk7XFxuICBvdmVyZmxvdzogaGlkZGVuO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnN1bmsteCB7XFxuICB3aWR0aDogM3JlbTtcXG4gIGhlaWdodDogM3JlbTtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjAwcHgpIHtcXG4gIC5ib2FyZHMtd3JhcHBlciB7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyO1xcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IDFmciAxZnIgMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgICAndGl0bGUxJ1xcbiAgICAgICdib2FyZDEnXFxuICAgICAgJ3RpdGxlMidcXG4gICAgICAnYm9hcmQyJztcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3MTBweCkge1xcbiAgLndyYXBwZXIge1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAxZnI7XFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogMWZyIDFmcjtcXG4gICAgZ3JpZC10ZW1wbGF0ZTpcXG4gICAgICAnc2lkZSB0b3AnXFxuICAgICAgJ2JvYXJkcyBib2FyZHMnO1xcbiAgfVxcbiAgLnRvcCB7XFxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1zdGFydDtcXG4gICAgbWFyZ2luLXRvcDogMi41cmVtO1xcbiAgfVxcbiAgLmJvYXJkcy13cmFwcGVyIHtcXG4gICAgbWFyZ2luLXRvcDogMXJlbTtcXG4gIH1cXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA0NTBweCkge1xcbiAgaHRtbCB7XFxuICAgIGZvbnQtc2l6ZTogMTFweDtcXG4gIH1cXG4gIC5tZXNzYWdlIHtcXG4gICAgd2lkdGg6IDlyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwidmFyIHNjcmlwdFVybDtcbmlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmcuaW1wb3J0U2NyaXB0cykgc2NyaXB0VXJsID0gX193ZWJwYWNrX3JlcXVpcmVfXy5nLmxvY2F0aW9uICsgXCJcIjtcbnZhciBkb2N1bWVudCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5kb2N1bWVudDtcbmlmICghc2NyaXB0VXJsICYmIGRvY3VtZW50KSB7XG5cdGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KVxuXHRcdHNjcmlwdFVybCA9IGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuc3JjXG5cdGlmICghc2NyaXB0VXJsKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRpZihzY3JpcHRzLmxlbmd0aCkgc2NyaXB0VXJsID0gc2NyaXB0c1tzY3JpcHRzLmxlbmd0aCAtIDFdLnNyY1xuXHR9XG59XG4vLyBXaGVuIHN1cHBvcnRpbmcgYnJvd3NlcnMgd2hlcmUgYW4gYXV0b21hdGljIHB1YmxpY1BhdGggaXMgbm90IHN1cHBvcnRlZCB5b3UgbXVzdCBzcGVjaWZ5IGFuIG91dHB1dC5wdWJsaWNQYXRoIG1hbnVhbGx5IHZpYSBjb25maWd1cmF0aW9uXG4vLyBvciBwYXNzIGFuIGVtcHR5IHN0cmluZyAoXCJcIikgYW5kIHNldCB0aGUgX193ZWJwYWNrX3B1YmxpY19wYXRoX18gdmFyaWFibGUgZnJvbSB5b3VyIGNvZGUgdG8gdXNlIHlvdXIgb3duIGxvZ2ljLlxuaWYgKCFzY3JpcHRVcmwpIHRocm93IG5ldyBFcnJvcihcIkF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gdGhpcyBicm93c2VyXCIpO1xuc2NyaXB0VXJsID0gc2NyaXB0VXJsLnJlcGxhY2UoLyMuKiQvLCBcIlwiKS5yZXBsYWNlKC9cXD8uKiQvLCBcIlwiKS5yZXBsYWNlKC9cXC9bXlxcL10rJC8sIFwiL1wiKTtcbl9fd2VicGFja19yZXF1aXJlX18ucCA9IHNjcmlwdFVybDsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCB4SWNvbiBmcm9tICcuL2ltZy94LnN2Zyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25hbWVkXG5pbXBvcnQgeyBsb2dpYyB9IGZyb20gJy4vbW9kdWxlcy9sb2dpYyc7XG5pbXBvcnQgeyByZW5kZXJBbGwgfSBmcm9tICcuL21vZHVsZXMvZG9tJztcbmltcG9ydCBkcmFnbmRyb3AgZnJvbSAnLi9tb2R1bGVzL2RyYWduZHJvcCc7XG5cbmxvZ2ljLmluaXRhbGl6ZUdhbWUoKTtcbnJlbmRlckFsbCgpO1xuZHJhZ25kcm9wLmFwcGx5TGlzdGVuZXJzKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9