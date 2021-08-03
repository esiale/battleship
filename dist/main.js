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
/* harmony export */   "resetShips": () => (/* binding */ resetShips),
/* harmony export */   "handleShipPlacement": () => (/* binding */ handleShipPlacement)
/* harmony export */ });
/* harmony import */ var _logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logic */ "./src/modules/logic.js");
/* eslint-disable no-prototype-builtins */


var concludeGame = function concludeGame(player) {
  alert("".concat(player, " has lost!"));
};

var updateBoard = function updateBoard(action, target, board) {
  var gameboard = document.querySelector(".".concat(board));
  var cell = gameboard.querySelector("[data-index='".concat(target, "']"));

  switch (action) {
    case 'hit':
      cell.classList.remove('ship');
      cell.classList.add('hit');
      break;

    case 'missed':
      cell.classList.add('missed');
      break;

    case 'sunk':
      target.forEach(function (item) {
        var sunkCell = gameboard.querySelector("[data-index='".concat(item, "']"));
        sunkCell.classList.remove('hit');
        sunkCell.classList.add('sunk');
      });
      break;

    default:
  }
};

var initiateAttack = function initiateAttack(e) {
  var cell = e.target.dataset.index;
  var board = document.querySelector(".gameboard2");
  var cells = board.querySelectorAll('div');
  var feedback = _logic__WEBPACK_IMPORTED_MODULE_0__.logic.processAttack(cell, 'gameboard2');
  updateBoard(feedback.action, feedback.cell, feedback.board);
  cells.forEach(function (item) {
    item.removeEventListener('click', initiateAttack);
  });
  var computerFeedback = _logic__WEBPACK_IMPORTED_MODULE_0__.logic.initiateComputerMove();
  setTimeout(function () {
    updateBoard(computerFeedback.action, computerFeedback.cell, computerFeedback.board);
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
    newCell.textContent = i;
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

var resetShips = function resetShips() {
  var gameboard = _logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.gameboards.gameboard1;
  gameboard.ships = [];
  gameboard.board.forEach(function (item, index) {
    if (item !== null) gameboard.board[index] = null;
  });
  var cells = document.querySelectorAll('.gameboard1 .cell');
  cells.forEach(function (item) {
    if (item.classList.contains('ship')) item.classList.remove('ship');
  });
  var shipContainer = document.querySelector('.ship-container');

  while (shipContainer.firstChild) {
    shipContainer.firstChild.remove();
  }

  renderDragShip('carrier', 5);
};

var prepareStart = function prepareStart() {
  var shipContainer = document.querySelector('.ship-container');
  shipContainer.className = 'ship-container-hidden';
  var buttons = document.querySelector('.buttons');
  buttons.className = 'buttons-hidden';
  var computerCells = document.querySelectorAll('.gameboard2 .cell');
  computerCells.forEach(function (item) {
    item.addEventListener('click', initiateAttack);
  });
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

  if (_logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.gameboards.gameboard1.placePlayerShip(cell, length, orientation)) {
    drawShips(_logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.gameboards.gameboard1);
    nextShip();
  }
};

var applyListeners = function applyListeners() {
  var rotateButton = document.querySelector('.rotate-btn');
  rotateButton.addEventListener('click', rotateShip);
  var resetButton = document.querySelector('.reset-btn');
  resetButton.addEventListener('click', resetShips);
};

var renderAll = function renderAll() {
  renderBoard(_logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.gameboards.gameboard1);
  renderBoard(_logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.gameboards.gameboard2);
  renderDragShip('carrier', 5); // FOR STYLING - REMOVE BEFORE PUBLISHING //

  drawShips(_logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.gameboards.gameboard2);
  applyListeners();
};



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
    e.preventDefault(); // highlightPlacement(e);
  },
  handleDragOver: function handleDragOver(e) {
    e.preventDefault(); // highlightPlacement(e);
  },
  handleDragLeave: function handleDragLeave(e) {
    e.preventDefault(); // setTimeout(() => {
    //   removeHighlightPlacement(e);
    // }, 10);
  },
  handleDragEnd: function handleDragEnd() {
    var shipContainer = document.querySelector('.ship-container');
    shipContainer.classList.remove('hide');
  },
  handleDrop: function handleDrop(e) {
    // removeHighlightPlacement(e);
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
    gameboard.addShip(gameboard.findRandomShipLocation(2), 2);
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
/* harmony import */ var _babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/toConsumableArray */ "./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js");
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/defineProperty */ "./node_modules/@babel/runtime/helpers/esm/defineProperty.js");
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");





function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0,_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_1__.default)(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

/* eslint-disable no-prototype-builtins */
var Player = /*#__PURE__*/function () {
  function Player(name) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_2__.default)(this, Player);

    this.name = name;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_3__.default)(Player, null, [{
    key: "randomAttack",
    value: function randomAttack(gameboard) {
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

      if (rightBorder.some(function (number) {
        return number === cell;
      })) {
        array.splice(array.indexOf(cell + 1), 1);
      }

      if (leftBorder.some(function (number) {
        return number === cell;
      })) {
        array.splice(array.indexOf(cell - 1), 1);
      }

      var revisedCells = array.filter(function (number) {
        return number < 99 && number > 0;
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
      return flatArray[Math.floor(Math.random() * flatArray.length)];
    }
  }, {
    key: "detectTrends",
    value: function detectTrends(hits) {
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
      var horizontalTrends = hits.reduce(analyze, _objectSpread(_objectSpread({}, horizontalConditions), {}, {
        list: []
      })).list;
      var verticalTrends = hits.reduce(analyze, _objectSpread(_objectSpread({}, verticalConditions), {}, {
        list: []
      })).list;
      return [horizontalTrends, verticalTrends];
    }
  }, {
    key: "trendAttack",
    value: function trendAttack(trends, gameboard) {
      var _this2 = this;

      var potentialTargets = [];

      if (trends[0].length) {
        trends[0].forEach(function (item) {
          var highest = Math.max.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(item));
          var lowest = Math.min.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(item));
          potentialTargets.push(highest + 1, lowest - 1);
        });
      }

      if (trends[1].length) {
        trends[1].forEach(function (item) {
          var highest = Math.max.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(item));
          var lowest = Math.min.apply(Math, (0,_babel_runtime_helpers_toConsumableArray__WEBPACK_IMPORTED_MODULE_0__.default)(item));
          potentialTargets.push(highest + 10, lowest - 10);
        });
      }

      potentialTargets.forEach(function (target) {
        _this2.checkForLegalAttacks(target, potentialTargets, gameboard);
      });
      if (potentialTargets.length) return potentialTargets;
      return this.attackSurroundingCells(this.detectShips(gameboard), gameboard);
    }
  }, {
    key: "findBestMove",
    value: function findBestMove(gameboard) {
      var hits = this.detectShips(gameboard);
      if (hits.length === 0) return this.randomAttack(gameboard);
      var trends = this.detectTrends(hits);

      if (trends[0].length || trends[1].length) {
        var potentialTrendTargets = this.trendAttack(trends, gameboard);
        return potentialTrendTargets[Math.floor(Math.random() * potentialTrendTargets.length)];
      }

      if (this.attackSurroundingCells(hits, gameboard).length === 0) {
        return this.randomAttack(gameboard);
      }
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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css ***!
  \************************************************************************/
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
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".gameboard1,\n.gameboard2 {\n  outline: 0.1rem black solid;\n  display: grid;\n  width: 25rem;\n  height: 25rem;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 1rem;\n}\n\n.cell {\n  border: 0.1rem black solid;\n}\n\n.ship {\n  background-color: black;\n  color: white;\n}\n\n.highlight {\n  background-color: navy;\n}\n\n.hit {\n  background-color: red;\n}\n\n.missed {\n  background-color: gray;\n}\n\n.sunk {\n  background-color: darkred;\n}\n\n@media only screen and (max-width: 880px) {\n  .wrapper {\n    justify-content: space-between;\n  }\n  .boards-wrapper {\n    flex-direction: column;\n  }\n  .gameboard1,\n  .gameboard2 {\n    width: 18rem;\n    height: 18rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":"AAAA;;EAEE,2BAA2B;EAC3B,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;AACd;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,8BAA8B;EAChC;EACA;IACE,sBAAsB;EACxB;EACA;;IAEE,YAAY;IACZ,aAAa;EACf;AACF","sourcesContent":[".gameboard1,\n.gameboard2 {\n  outline: 0.1rem black solid;\n  display: grid;\n  width: 25rem;\n  height: 25rem;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 1rem;\n}\n\n.cell {\n  border: 0.1rem black solid;\n}\n\n.ship {\n  background-color: black;\n  color: white;\n}\n\n.highlight {\n  background-color: navy;\n}\n\n.hit {\n  background-color: red;\n}\n\n.missed {\n  background-color: gray;\n}\n\n.sunk {\n  background-color: darkred;\n}\n\n@media only screen and (max-width: 880px) {\n  .wrapper {\n    justify-content: space-between;\n  }\n  .boards-wrapper {\n    flex-direction: column;\n  }\n  .gameboard1,\n  .gameboard2 {\n    width: 18rem;\n    height: 18rem;\n  }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


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
// Module
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.boards-wrapper {\n  display: flex;\n  flex-direction: row;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.top {\n  width: 100%;\n  height: 16vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.top-header {\n  font-size: 2.5rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.top-panel {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.ship-drag {\n  display: flex;\n  justify-content: center;\n}\n\n.ship-container {\n  display: flex;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.carrier,\n.battleship,\n.submarine,\n.cruiser,\n.destroyer {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: red;\n  border: 0.1rem black solid;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n}\n\n.ship-container-hidden {\n  display: none;\n}\n\n.buttons-hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;;;;;EAKE,aAAa;EACb,cAAc;EACd,qBAAqB;EACrB,0BAA0B;AAC5B;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf","sourcesContent":["body {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.boards-wrapper {\n  display: flex;\n  flex-direction: row;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.top {\n  width: 100%;\n  height: 16vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.top-header {\n  font-size: 2.5rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.top-panel {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.ship-drag {\n  display: flex;\n  justify-content: center;\n}\n\n.ship-container {\n  display: flex;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.carrier,\n.battleship,\n.submarine,\n.cruiser,\n.destroyer {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: red;\n  border: 0.1rem black solid;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n}\n\n.ship-container-hidden {\n  display: none;\n}\n\n.buttons-hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

/***/ "./src/styles/gameboard.css":
/*!**********************************!*\
  !*** ./src/styles/gameboard.css ***!
  \**********************************/
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
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./gameboard.css */ "./node_modules/css-loader/dist/cjs.js!./src/styles/gameboard.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__.default, options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__.default && _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__.default.locals ? _node_modules_css_loader_dist_cjs_js_gameboard_css__WEBPACK_IMPORTED_MODULE_6__.default.locals : undefined);


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
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _styles_main_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles/main.css */ "./src/styles/main.css");
/* harmony import */ var _styles_gameboard_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles/gameboard.css */ "./src/styles/gameboard.css");
/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/logic */ "./src/modules/logic.js");
/* harmony import */ var _modules_dom__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/dom */ "./src/modules/dom.js");
/* harmony import */ var _modules_dragndrop__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/dragndrop */ "./src/modules/dragndrop.js");

 // eslint-disable-next-line import/named




_modules_logic__WEBPACK_IMPORTED_MODULE_2__.logic.initalizeGame();
_modules_logic__WEBPACK_IMPORTED_MODULE_2__.logic.placeComputerShips();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderAll)();
_modules_dragndrop__WEBPACK_IMPORTED_MODULE_4__.default.applyListeners();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kcmFnbmRyb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzPzIxODciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY29uY2x1ZGVHYW1lIiwicGxheWVyIiwiYWxlcnQiLCJ1cGRhdGVCb2FyZCIsImFjdGlvbiIsInRhcmdldCIsImJvYXJkIiwiZ2FtZWJvYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2VsbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImZvckVhY2giLCJpdGVtIiwic3Vua0NlbGwiLCJpbml0aWF0ZUF0dGFjayIsImUiLCJkYXRhc2V0IiwiaW5kZXgiLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmZWVkYmFjayIsImxvZ2ljIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbXB1dGVyRmVlZGJhY2siLCJzZXRUaW1lb3V0IiwiY29udGFpbnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhd1NoaXBzIiwiZG9tQm9hcmQiLCJuYW1lIiwic2hpcENlbGwiLCJyZW5kZXJCb2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwibmV3Q2VsbCIsInRleHRDb250ZW50IiwiYXBwZW5kIiwid3JhcHBlciIsInJlbmRlckRyYWdTaGlwIiwic2hpcCIsInNoaXBDb250YWluZXIiLCJncmlkIiwiYXBwZW5kQ2hpbGQiLCJyb3RhdGVTaGlwIiwicm90YXRlQnV0dG9uIiwib3JpZW50YXRpb24iLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJyZXNldFNoaXBzIiwic2hpcHMiLCJmaXJzdENoaWxkIiwicHJlcGFyZVN0YXJ0IiwiYnV0dG9ucyIsImNvbXB1dGVyQ2VsbHMiLCJuZXh0U2hpcCIsImdyaWRzIiwiY3VycmVudFNoaXAiLCJyZW1vdmVDaGlsZCIsImhhbmRsZVNoaXBQbGFjZW1lbnQiLCJhcHBseUxpc3RlbmVycyIsInJlc2V0QnV0dG9uIiwicmVuZGVyQWxsIiwic2hpcEluZGV4IiwiZHJhZ25kcm9wIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiaGFuZGxlRHJhZ0VuZCIsImdldFNoaXBJbmRleCIsImhhbmRsZURyYWdFbnRlciIsImhhbmRsZURyYWdPdmVyIiwiaGFuZGxlRHJhZ0xlYXZlIiwiaGFuZGxlRHJvcCIsInByZXZlbnREZWZhdWx0IiwiYWRqdXN0ZWRDZWxsIiwiR2FtZWJvYXJkIiwiQXJyYXkiLCJmaWxsIiwiY29vcmRpbmF0ZXMiLCJwdXNoIiwiU2hpcCIsImlkIiwicGFydCIsImlzSGl0IiwiY29vcmRpbmF0ZSIsImlzTWlzc2VkIiwiaGl0IiwiZXZlcnkiLCJzdW5rIiwibG9jYXRpb24iLCJzb21lIiwicmlnaHRCb3JkZXIiLCJudW1iZXIiLCJpbmNsdWRlcyIsInZlcnRpY2FsIiwiTWF0aCIsInJhbmRvbSIsInZhbGlkTG9jYXRpb25zIiwicG9zc2libGVMb2NhdGlvbnMiLCJ5IiwiY2hlY2tGb3JDb25mbGljdHMiLCJmbG9vciIsImxvY2F0aW9uQXJyYXkiLCJhZGRTaGlwIiwiZGF0YSIsImdhbWVib2FyZHMiLCJwbGF5ZXJzIiwiaW5pdGFsaXplR2FtZSIsImdhbWVib2FyZDEiLCJnYW1lYm9hcmQyIiwiaW5pdCIsInBsYXllcjEiLCJQbGF5ZXIiLCJwbGF5ZXIyIiwicGxhY2VDb21wdXRlclNoaXBzIiwiZmluZFJhbmRvbVNoaXBMb2NhdGlvbiIsInByb2Nlc3NBdHRhY2siLCJyZXN1bHQiLCJyZWNlaXZlQXR0YWNrIiwiYWxsU3VuayIsImFsbFNoaXBzQ29yZHMiLCJyZWR1Y2UiLCJhY2MiLCJlbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJzdW5rU2hpcENvcmRzIiwicmVwb3J0QWxsU3VuayIsImluaXRpYXRlQ29tcHV0ZXJNb3ZlIiwicGxheWVyQm9hcmQiLCJiZXN0TW92ZSIsImxlZ2FsQXR0YWNrcyIsImN1cnIiLCJyYW5kb21MZWdhbCIsImhpdHMiLCJhcnJheSIsImxlZnRCb3JkZXIiLCJzcGxpY2UiLCJpbmRleE9mIiwicmV2aXNlZENlbGxzIiwiZmlsdGVyIiwicGFyc2VJbnQiLCJzdXJyb3VuZGluZ0NlbGxzIiwiY2VsbEFib3ZlIiwiY2VsbEJlbG93IiwiY2VsbExlZnQiLCJjZWxsUmlnaHQiLCJjaGVja0ZvckxlZ2FsQXR0YWNrcyIsInBvc3NpYmxlVGFyZ2V0cyIsImZpbmRTdXJyb3VuZGluZ0NlbGxzIiwiZmxhdEFycmF5IiwiZmxhdCIsImFuYWx5emUiLCJ0cmVuZCIsImdldFByZWRlY2Vzc29yIiwiZ2V0U3VjY2Vzc29yIiwibGlzdCIsImhvcml6b250YWxDb25kaXRpb25zIiwidmVydGljYWxDb25kaXRpb25zIiwiaG9yaXpvbnRhbFRyZW5kcyIsInZlcnRpY2FsVHJlbmRzIiwidHJlbmRzIiwicG90ZW50aWFsVGFyZ2V0cyIsImhpZ2hlc3QiLCJtYXgiLCJsb3dlc3QiLCJtaW4iLCJhdHRhY2tTdXJyb3VuZGluZ0NlbGxzIiwiZGV0ZWN0U2hpcHMiLCJyYW5kb21BdHRhY2siLCJkZXRlY3RUcmVuZHMiLCJwb3RlbnRpYWxUcmVuZFRhcmdldHMiLCJ0cmVuZEF0dGFjayIsImlzU3VuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7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YXVsdCBmdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikge1xuICBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDtcblxuICBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHtcbiAgICBhcnIyW2ldID0gYXJyW2ldO1xuICB9XG5cbiAgcmV0dXJuIGFycjI7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKGFycikge1xuICBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShhcnIpO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShvYmosIGtleSwgdmFsdWUpIHtcbiAgaWYgKGtleSBpbiBvYmopIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHtcbiAgICAgIHZhbHVlOiB2YWx1ZSxcbiAgICAgIGVudW1lcmFibGU6IHRydWUsXG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB3cml0YWJsZTogdHJ1ZVxuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIG9ialtrZXldID0gdmFsdWU7XG4gIH1cblxuICByZXR1cm4gb2JqO1xufSIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkoaXRlcikge1xuICBpZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBpdGVyW1N5bWJvbC5pdGVyYXRvcl0gIT0gbnVsbCB8fCBpdGVyW1wiQEBpdGVyYXRvclwiXSAhPSBudWxsKSByZXR1cm4gQXJyYXkuZnJvbShpdGVyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufSIsImltcG9ydCBhcnJheVdpdGhvdXRIb2xlcyBmcm9tIFwiLi9hcnJheVdpdGhvdXRIb2xlcy5qc1wiO1xuaW1wb3J0IGl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi9pdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheSBmcm9tIFwiLi91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qc1wiO1xuaW1wb3J0IG5vbkl0ZXJhYmxlU3ByZWFkIGZyb20gXCIuL25vbkl0ZXJhYmxlU3ByZWFkLmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkoYXJyKSB7XG4gIHJldHVybiBhcnJheVdpdGhvdXRIb2xlcyhhcnIpIHx8IGl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IHVuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFycikgfHwgbm9uSXRlcmFibGVTcHJlYWQoKTtcbn0iLCJpbXBvcnQgYXJyYXlMaWtlVG9BcnJheSBmcm9tIFwiLi9hcnJheUxpa2VUb0FycmF5LmpzXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7XG4gIGlmICghbykgcmV0dXJuO1xuICBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBhcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7XG4gIHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTtcbiAgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTtcbiAgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7XG4gIGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuaW1wb3J0IHsgbG9naWMgfSBmcm9tICcuL2xvZ2ljJztcblxuY29uc3QgY29uY2x1ZGVHYW1lID0gKHBsYXllcikgPT4ge1xuICBhbGVydChgJHtwbGF5ZXJ9IGhhcyBsb3N0IWApO1xufTtcblxuY29uc3QgdXBkYXRlQm9hcmQgPSAoYWN0aW9uLCB0YXJnZXQsIGJvYXJkKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkfWApO1xuICBjb25zdCBjZWxsID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke3RhcmdldH0nXWApO1xuICBzd2l0Y2ggKGFjdGlvbikge1xuICAgIGNhc2UgJ2hpdCc6XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaXNzZWQnOlxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3N1bmsnOlxuICAgICAgdGFyZ2V0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vua0NlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aXRlbX0nXWApO1xuICAgICAgICBzdW5rQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgICAgICAgc3Vua0NlbGwuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICB9XG59O1xuXG5jb25zdCBpbml0aWF0ZUF0dGFjayA9IChlKSA9PiB7XG4gIGNvbnN0IGNlbGwgPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lYm9hcmQyYCk7XG4gIGNvbnN0IGNlbGxzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGNvbnN0IGZlZWRiYWNrID0gbG9naWMucHJvY2Vzc0F0dGFjayhjZWxsLCAnZ2FtZWJvYXJkMicpO1xuICB1cGRhdGVCb2FyZChmZWVkYmFjay5hY3Rpb24sIGZlZWRiYWNrLmNlbGwsIGZlZWRiYWNrLmJvYXJkKTtcbiAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbml0aWF0ZUF0dGFjayk7XG4gIH0pO1xuICBjb25zdCBjb21wdXRlckZlZWRiYWNrID0gbG9naWMuaW5pdGlhdGVDb21wdXRlck1vdmUoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdXBkYXRlQm9hcmQoXG4gICAgICBjb21wdXRlckZlZWRiYWNrLmFjdGlvbixcbiAgICAgIGNvbXB1dGVyRmVlZGJhY2suY2VsbCxcbiAgICAgIGNvbXB1dGVyRmVlZGJhY2suYm9hcmRcbiAgICApO1xuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSAmJlxuICAgICAgICAhaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3NlZCcpICYmXG4gICAgICAgICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnc3VuaycpXG4gICAgICApIHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRpYXRlQXR0YWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgNTAwKTtcbn07XG5cbmNvbnN0IGRyYXdTaGlwcyA9IChnYW1lYm9hcmQpID0+IHtcbiAgZ2FtZWJvYXJkLmJvYXJkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBkb21Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2dhbWVib2FyZC5uYW1lfWApO1xuICAgIGNvbnN0IHNoaXBDZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aW5kZXh9J11gKTtcbiAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkLmNsYXNzTmFtZSA9IGdhbWVib2FyZC5uYW1lO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5ld0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdDZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcbiAgICBuZXdDZWxsLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgIG5ld0NlbGwudGV4dENvbnRlbnQgPSBpO1xuICAgIGJvYXJkLmFwcGVuZChuZXdDZWxsKTtcbiAgfVxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy13cmFwcGVyJyk7XG4gIHdyYXBwZXIuYXBwZW5kKGJvYXJkKTtcbn07XG5cbmNvbnN0IHJlbmRlckRyYWdTaGlwID0gKHNoaXAsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc05hbWUgPSBzaGlwO1xuICAgIGdyaWQuZGF0YXNldC5pbmRleCA9IGk7XG4gICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcbiAgfVxufTtcblxuY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICBpZiAoc2hpcENvbnRhaW5lci5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBzaGlwQ29udGFpbmVyLmRhdGFzZXQub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgIHJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgc2hpcENvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gIH0gZWxzZSB7XG4gICAgc2hpcENvbnRhaW5lci5kYXRhc2V0Lm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIHJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgICBzaGlwQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgfVxufTtcblxuY29uc3QgcmVzZXRTaGlwcyA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gbG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDE7XG4gIGdhbWVib2FyZC5zaGlwcyA9IFtdO1xuICBnYW1lYm9hcmQuYm9hcmQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaXRlbSAhPT0gbnVsbCkgZ2FtZWJvYXJkLmJvYXJkW2luZGV4XSA9IG51bGw7XG4gIH0pO1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxIC5jZWxsJyk7XG4gIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gIH0pO1xuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gIHdoaWxlIChzaGlwQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBzaGlwQ29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgcmVuZGVyRHJhZ1NoaXAoJ2NhcnJpZXInLCA1KTtcbn07XG5cbmNvbnN0IHByZXBhcmVTdGFydCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICBzaGlwQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzaGlwLWNvbnRhaW5lci1oaWRkZW4nO1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKTtcbiAgYnV0dG9ucy5jbGFzc05hbWUgPSAnYnV0dG9ucy1oaWRkZW4nO1xuICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDIgLmNlbGwnKTtcbiAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRpYXRlQXR0YWNrKTtcbiAgfSk7XG59O1xuXG5jb25zdCBuZXh0U2hpcCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICBjb25zdCBncmlkcyA9IHNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGNvbnN0IGN1cnJlbnRTaGlwID0gZ3JpZHNbMF0uY2xhc3NOYW1lO1xuICB3aGlsZSAoc2hpcENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgc2hpcENvbnRhaW5lci5yZW1vdmVDaGlsZChzaGlwQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIGlmIChjdXJyZW50U2hpcCA9PT0gJ2NhcnJpZXInKSB7XG4gICAgcmVuZGVyRHJhZ1NoaXAoJ2JhdHRsZXNoaXAnLCA0KTtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2hpcCA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgcmVuZGVyRHJhZ1NoaXAoJ3N1Ym1hcmluZScsIDMpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRTaGlwID09PSAnc3VibWFyaW5lJykge1xuICAgIHJlbmRlckRyYWdTaGlwKCdjcnVpc2VyJywgMyk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNoaXAgPT09ICdjcnVpc2VyJykge1xuICAgIHJlbmRlckRyYWdTaGlwKCdkZXN0cm95ZXInLCAyKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2hpcCA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICBwcmVwYXJlU3RhcnQoKTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlU2hpcFBsYWNlbWVudCA9IChjZWxsKSA9PiB7XG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc2hpcENvbnRhaW5lci5kYXRhc2V0O1xuICBjb25zdCB7IGxlbmd0aCB9ID0gc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcbiAgaWYgKFxuICAgIGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLnBsYWNlUGxheWVyU2hpcChjZWxsLCBsZW5ndGgsIG9yaWVudGF0aW9uKVxuICApIHtcbiAgICBkcmF3U2hpcHMobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEpO1xuICAgIG5leHRTaGlwKCk7XG4gIH1cbn07XG5cbmNvbnN0IGFwcGx5TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnRuJyk7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRTaGlwcyk7XG59O1xuXG5jb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG4gIHJlbmRlckJvYXJkKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxKTtcbiAgcmVuZGVyQm9hcmQobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDIpO1xuICByZW5kZXJEcmFnU2hpcCgnY2FycmllcicsIDUpO1xuICAvLyBGT1IgU1RZTElORyAtIFJFTU9WRSBCRUZPUkUgUFVCTElTSElORyAvL1xuICBkcmF3U2hpcHMobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDIpO1xuICBhcHBseUxpc3RlbmVycygpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyQWxsLCByZXNldFNoaXBzLCBoYW5kbGVTaGlwUGxhY2VtZW50IH07XG4iLCJpbXBvcnQgeyBoYW5kbGVTaGlwUGxhY2VtZW50IH0gZnJvbSAnLi9kb20nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmxldCBzaGlwO1xubGV0IHNoaXBJbmRleDtcblxuY29uc3QgZHJhZ25kcm9wID0ge1xuICBhcHBseUxpc3RlbmVycygpIHtcbiAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gICAgc2hpcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnbmRyb3AuaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgICBzaGlwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnbmRyb3AuaGFuZGxlRHJhZ0VuZCk7XG4gICAgc2hpcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnbmRyb3AuZ2V0U2hpcEluZGV4KTtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxIC5jZWxsJyk7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnbmRyb3AuaGFuZGxlRHJhZ0VudGVyKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnbmRyb3AuaGFuZGxlRHJhZ092ZXIpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnbmRyb3AuaGFuZGxlRHJhZ0xlYXZlKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyYWduZHJvcC5oYW5kbGVEcm9wKTtcbiAgICB9KTtcbiAgfSxcblxuICBnZXRTaGlwSW5kZXgoZSkge1xuICAgIHNoaXBJbmRleCA9ICtlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICB9LFxuXG4gIGhhbmRsZURyYWdTdGFydChlKSB7XG4gICAgc2hpcCA9IGUudGFyZ2V0O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0sIDApO1xuICB9LFxuXG4gIGhhbmRsZURyYWdFbnRlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGhpZ2hsaWdodFBsYWNlbWVudChlKTtcbiAgfSxcblxuICBoYW5kbGVEcmFnT3ZlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGhpZ2hsaWdodFBsYWNlbWVudChlKTtcbiAgfSxcblxuICBoYW5kbGVEcmFnTGVhdmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgIHJlbW92ZUhpZ2hsaWdodFBsYWNlbWVudChlKTtcbiAgICAvLyB9LCAxMCk7XG4gIH0sXG5cbiAgaGFuZGxlRHJhZ0VuZCgpIHtcbiAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gICAgc2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sXG5cbiAgaGFuZGxlRHJvcChlKSB7XG4gICAgLy8gcmVtb3ZlSGlnaGxpZ2h0UGxhY2VtZW50KGUpO1xuICAgIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpLmRhdGFzZXQ7XG4gICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0O1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBhZGp1c3RlZENlbGwgPSArY2VsbC5kYXRhc2V0LmluZGV4IC0gc2hpcEluZGV4O1xuICAgICAgaGFuZGxlU2hpcFBsYWNlbWVudChhZGp1c3RlZENlbGwpO1xuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNvbnN0IGFkanVzdGVkQ2VsbCA9ICtjZWxsLmRhdGFzZXQuaW5kZXggLSBzaGlwSW5kZXggKiAxMDtcbiAgICAgIGhhbmRsZVNoaXBQbGFjZW1lbnQoYWRqdXN0ZWRDZWxsKTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkcmFnbmRyb3A7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheSgxMDApLmZpbGwobnVsbCk7XG4gIH1cblxuICBhZGRTaGlwKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuc2hpcHMucHVzaChuZXcgU2hpcChsZW5ndGgpKTtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5ib2FyZFtpdGVtXSA9IHtcbiAgICAgICAgaWQ6IHRoaXMuc2hpcHMubGVuZ3RoIC0gMSxcbiAgICAgICAgcGFydDogaW5kZXgsXG4gICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5ib2FyZFtjb29yZGluYXRlXSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlXSA9IHsgaXNNaXNzZWQ6IHRydWUgfTtcbiAgICAgIHJldHVybiAnbWlzc2VkJztcbiAgICB9XG4gICAgdGhpcy5zaGlwc1t0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLmlkXS5oaXQodGhpcy5ib2FyZFtjb29yZGluYXRlXS5wYXJ0KTtcbiAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLmlzSGl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gJ2hpdCc7XG4gIH1cblxuICByZXBvcnRBbGxTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN1bmsgPT09IHRydWUpO1xuICB9XG5cbiAgY2hlY2tGb3JDb25mbGljdHMobG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24uc29tZSgoaXRlbSkgPT4gaXRlbSA+IDk5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcmlnaHRCb3JkZXIgPSBbOSwgMTksIDI5LCAzOSwgNDksIDU5LCA2OSwgNzksIDg5XTtcbiAgICBpZiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyb3ctYm9keS1zdHlsZVxuICAgICAgcmlnaHRCb3JkZXIuc29tZSgobnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBbbnVtYmVyLCBudW1iZXIgKyAxXS5ldmVyeSgoaXRlbSkgPT4gbG9jYXRpb24uaW5jbHVkZXMoaXRlbSkpO1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uc29tZSgoaXRlbSkgPT4gdGhpcy5ib2FyZFtpdGVtXSAhPT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmaW5kUmFuZG9tU2hpcExvY2F0aW9uKGxlbmd0aCkge1xuICAgIGNvbnN0IHZlcnRpY2FsID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcbiAgICBjb25zdCB2YWxpZExvY2F0aW9ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAgLSBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcG9zc2libGVMb2NhdGlvbnMgPSBbXTtcbiAgICAgIGlmICh2ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmd0aDsgeSArPSAxKSB7XG4gICAgICAgICAgcG9zc2libGVMb2NhdGlvbnMucHVzaChpICsgeSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5ndGg7IHkgKz0gMSkge1xuICAgICAgICAgIHBvc3NpYmxlTG9jYXRpb25zLnB1c2goeSArIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja0ZvckNvbmZsaWN0cyhwb3NzaWJsZUxvY2F0aW9ucykpXG4gICAgICAgIHZhbGlkTG9jYXRpb25zLnB1c2gocG9zc2libGVMb2NhdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRMb2NhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRMb2NhdGlvbnMubGVuZ3RoKV07XG4gIH1cblxuICBwbGFjZVBsYXllclNoaXAoY2VsbCwgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IGxvY2F0aW9uQXJyYXkgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBsb2NhdGlvbkFycmF5LnB1c2goY2VsbCArIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgbG9jYXRpb25BcnJheS5wdXNoKGNlbGwgKyBpICogMTApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0ZvckNvbmZsaWN0cyhsb2NhdGlvbkFycmF5KSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRTaGlwKGxvY2F0aW9uQXJyYXksIGxlbmd0aCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgbG9naWMgPSB7XG4gIGRhdGE6IHtcbiAgICBnYW1lYm9hcmRzOiB7fSxcbiAgICBwbGF5ZXJzOiB7fSxcbiAgfSxcblxuICBpbml0YWxpemVHYW1lKCkge1xuICAgIHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEgPSBuZXcgR2FtZWJvYXJkKCdnYW1lYm9hcmQxJyk7XG4gICAgdGhpcy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMiA9IG5ldyBHYW1lYm9hcmQoJ2dhbWVib2FyZDInKTtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLmluaXQoKTtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQyLmluaXQoKTtcbiAgICB0aGlzLmRhdGEucGxheWVycy5wbGF5ZXIxID0gbmV3IFBsYXllcignaHVtYW4nLCAnZ2FtZWJvYXJkMScpO1xuICAgIHRoaXMuZGF0YS5wbGF5ZXJzLnBsYXllcjIgPSBuZXcgUGxheWVyKCdhaScsICdnYW1lYm9hcmQyJyk7XG4gIH0sXG5cbiAgcGxhY2VDb21wdXRlclNoaXBzKCkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDI7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oNSksIDUpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDQpLCA0KTtcbiAgICBnYW1lYm9hcmQuYWRkU2hpcChnYW1lYm9hcmQuZmluZFJhbmRvbVNoaXBMb2NhdGlvbigzKSwgMyk7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oMiksIDIpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDIpLCAyKTtcbiAgfSxcblxuICBwcm9jZXNzQXR0YWNrKGNlbGwsIGJvYXJkKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gdGhpcy5kYXRhLmdhbWVib2FyZHNbYm9hcmRdO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzW2JvYXJkXS5yZWNlaXZlQXR0YWNrKGNlbGwpO1xuICAgIGNvbnN0IGZlZWRiYWNrID0ge1xuICAgICAgYWN0aW9uOiBudWxsLFxuICAgICAgY2VsbDogbnVsbCxcbiAgICAgIGJvYXJkOiBudWxsLFxuICAgICAgYWxsU3VuazogZmFsc2UsXG4gICAgfTtcbiAgICBjb25zdCBzaGlwSW5kZXggPSBnYW1lYm9hcmQuYm9hcmRbY2VsbF0uaWQ7XG4gICAgaWYgKHJlc3VsdCA9PT0gJ21pc3NlZCcpIHtcbiAgICAgIGZlZWRiYWNrLmFjdGlvbiA9ICdtaXNzZWQnO1xuICAgICAgZmVlZGJhY2suY2VsbCA9IGNlbGw7XG4gICAgICBmZWVkYmFjay5ib2FyZCA9IGdhbWVib2FyZC5uYW1lO1xuICAgICAgcmV0dXJuIGZlZWRiYWNrO1xuICAgIH1cbiAgICBpZiAoZ2FtZWJvYXJkLnNoaXBzW3NoaXBJbmRleF0uc3Vuaykge1xuICAgICAgY29uc3QgYWxsU2hpcHNDb3JkcyA9IGdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoKGFjYywgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IG51bGwgJiYgIWVsZW1lbnQuaGFzT3duUHJvcGVydHkoJ2lzTWlzc2VkJykpXG4gICAgICAgICAgYWNjLnB1c2goaW5kZXgpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgW10pO1xuICAgICAgY29uc3Qgc3Vua1NoaXBDb3JkcyA9IGFsbFNoaXBzQ29yZHMucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFtlbGVtZW50XS5pZCA9PT0gc2hpcEluZGV4KSBhY2MucHVzaChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKTtcbiAgICAgIGZlZWRiYWNrLmFjdGlvbiA9ICdzdW5rJztcbiAgICAgIGZlZWRiYWNrLmNlbGwgPSBzdW5rU2hpcENvcmRzO1xuICAgICAgaWYgKGdhbWVib2FyZC5yZXBvcnRBbGxTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgZmVlZGJhY2suYWxsU3VuayA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdoaXQnKSB7XG4gICAgICBmZWVkYmFjay5hY3Rpb24gPSAnaGl0JztcbiAgICAgIGZlZWRiYWNrLmNlbGwgPSBjZWxsO1xuICAgIH1cbiAgICBmZWVkYmFjay5ib2FyZCA9IGdhbWVib2FyZC5uYW1lO1xuICAgIHJldHVybiBmZWVkYmFjaztcbiAgfSxcblxuICBpbml0aWF0ZUNvbXB1dGVyTW92ZSgpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDE7XG4gICAgY29uc3QgYmVzdE1vdmUgPSBQbGF5ZXIuZmluZEJlc3RNb3ZlKHBsYXllckJvYXJkKTtcbiAgICByZXR1cm4gdGhpcy5wcm9jZXNzQXR0YWNrKGJlc3RNb3ZlLCAnZ2FtZWJvYXJkMScpO1xuICB9LFxufTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcbmV4cG9ydCB7IGxvZ2ljIH07XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbmNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc3RhdGljIHJhbmRvbUF0dGFjayhnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBsZWdhbEF0dGFja3MgPSBnYW1lYm9hcmQuYm9hcmQucmVkdWNlKChjZWxscywgY3VyciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjdXJyICE9PSBudWxsICYmIGN1cnIuaGFzT3duUHJvcGVydHkoJ2lzTWlzc2VkJykpIHJldHVybiBjZWxscztcbiAgICAgIGlmIChjdXJyID09PSBudWxsIHx8IGN1cnIuaXNIaXQgPT09IGZhbHNlKSBjZWxscy5wdXNoKGluZGV4KTtcbiAgICAgIHJldHVybiBjZWxscztcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgcmFuZG9tTGVnYWwgPVxuICAgICAgbGVnYWxBdHRhY2tzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlZ2FsQXR0YWNrcy5sZW5ndGgpXTtcbiAgICByZXR1cm4gcmFuZG9tTGVnYWw7XG4gIH1cblxuICBzdGF0aWMgZGV0ZWN0U2hpcHMoZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgaGl0cyA9IGdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoKGNlbGxzLCBjdXJyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKFxuICAgICAgICBjdXJyICE9PSBudWxsICYmXG4gICAgICAgICFjdXJyLmlzTWlzc2VkID09PSB0cnVlICYmXG4gICAgICAgIGN1cnIuaXNIaXQgPT09IHRydWUgJiZcbiAgICAgICAgZ2FtZWJvYXJkLnNoaXBzW2N1cnIuaWRdLnN1bmsgPT09IGZhbHNlXG4gICAgICApXG4gICAgICAgIGNlbGxzLnB1c2goaW5kZXgpO1xuICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gaGl0cztcbiAgfVxuXG4gIHN0YXRpYyBjaGVja0ZvckxlZ2FsQXR0YWNrcyhjZWxsLCBhcnJheSwgZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgcmlnaHRCb3JkZXIgPSBbOSwgMTksIDI5LCAzOSwgNDksIDU5LCA2OSwgNzksIDg5XTtcbiAgICBjb25zdCBsZWZ0Qm9yZGVyID0gWzAsIDEwLCAyMCwgMzAsIDQwLCA1MCwgNjAsIDcwLCA5MF07XG4gICAgaWYgKHJpZ2h0Qm9yZGVyLnNvbWUoKG51bWJlcikgPT4gbnVtYmVyID09PSBjZWxsKSkge1xuICAgICAgYXJyYXkuc3BsaWNlKGFycmF5LmluZGV4T2YoY2VsbCArIDEpLCAxKTtcbiAgICB9XG4gICAgaWYgKGxlZnRCb3JkZXIuc29tZSgobnVtYmVyKSA9PiBudW1iZXIgPT09IGNlbGwpKSB7XG4gICAgICBhcnJheS5zcGxpY2UoYXJyYXkuaW5kZXhPZihjZWxsIC0gMSksIDEpO1xuICAgIH1cbiAgICBjb25zdCByZXZpc2VkQ2VsbHMgPSBhcnJheS5maWx0ZXIoKG51bWJlcikgPT4gbnVtYmVyIDwgOTkgJiYgbnVtYmVyID4gMCk7XG4gICAgY29uc3QgbGVnYWxBdHRhY2tzID0gcmV2aXNlZENlbGxzLnJlZHVjZSgoY2VsbHMsIGN1cnIpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgZ2FtZWJvYXJkLmJvYXJkW2N1cnJdICE9PSBudWxsICYmXG4gICAgICAgIGdhbWVib2FyZC5ib2FyZFtjdXJyXS5oYXNPd25Qcm9wZXJ0eSgnaXNNaXNzZWQnKVxuICAgICAgKVxuICAgICAgICByZXR1cm4gY2VsbHM7XG4gICAgICBpZiAoXG4gICAgICAgIGdhbWVib2FyZC5ib2FyZFtjdXJyXSA9PT0gbnVsbCB8fFxuICAgICAgICBnYW1lYm9hcmQuYm9hcmRbY3Vycl0uaXNIaXQgPT09IGZhbHNlXG4gICAgICApXG4gICAgICAgIGNlbGxzLnB1c2goY3Vycik7XG4gICAgICByZXR1cm4gY2VsbHM7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBsZWdhbEF0dGFja3M7XG4gIH1cblxuICBzdGF0aWMgZmluZFN1cnJvdW5kaW5nQ2VsbHMoY2VsbCwgZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgbnVtYmVyID0gcGFyc2VJbnQoY2VsbCwgMTApO1xuICAgIGNvbnN0IHN1cnJvdW5kaW5nQ2VsbHMgPSBbXTtcbiAgICBjb25zdCBjZWxsQWJvdmUgPSBudW1iZXIgLSAxMDtcbiAgICBjb25zdCBjZWxsQmVsb3cgPSBudW1iZXIgKyAxMDtcbiAgICBjb25zdCBjZWxsTGVmdCA9IG51bWJlciAtIDE7XG4gICAgY29uc3QgY2VsbFJpZ2h0ID0gbnVtYmVyICsgMTtcbiAgICBzdXJyb3VuZGluZ0NlbGxzLnB1c2goY2VsbEFib3ZlLCBjZWxsQmVsb3csIGNlbGxMZWZ0LCBjZWxsUmlnaHQpO1xuICAgIHJldHVybiB0aGlzLmNoZWNrRm9yTGVnYWxBdHRhY2tzKG51bWJlciwgc3Vycm91bmRpbmdDZWxscywgZ2FtZWJvYXJkKTtcbiAgfVxuXG4gIHN0YXRpYyBhdHRhY2tTdXJyb3VuZGluZ0NlbGxzKGhpdHMsIGdhbWVib2FyZCkge1xuICAgIGNvbnN0IHBvc3NpYmxlVGFyZ2V0cyA9IFtdO1xuICAgIGhpdHMuZm9yRWFjaCgoaGl0KSA9PiB7XG4gICAgICBwb3NzaWJsZVRhcmdldHMucHVzaCh0aGlzLmZpbmRTdXJyb3VuZGluZ0NlbGxzKGhpdCwgZ2FtZWJvYXJkKSk7XG4gICAgfSk7XG4gICAgY29uc3QgZmxhdEFycmF5ID0gcG9zc2libGVUYXJnZXRzLmZsYXQoKTtcbiAgICByZXR1cm4gZmxhdEFycmF5W01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGZsYXRBcnJheS5sZW5ndGgpXTtcbiAgfVxuXG4gIHN0YXRpYyBkZXRlY3RUcmVuZHMoaGl0cykge1xuICAgIGNvbnN0IGFuYWx5emUgPSAodHJlbmQsIGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgY29uc3QgeyBnZXRQcmVkZWNlc3NvciwgZ2V0U3VjY2Vzc29yLCBsaXN0IH0gPSB0cmVuZDtcbiAgICAgIGlmIChnZXRQcmVkZWNlc3NvcihpdGVtKSA9PT0gYXJyYXlbaW5kZXggLSAxXSkge1xuICAgICAgICBsaXN0W2xpc3QubGVuZ3RoIC0gMV0ucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoZ2V0U3VjY2Vzc29yKGl0ZW0pID09PSBhcnJheVtpbmRleCArIDFdKSB7XG4gICAgICAgIGxpc3QucHVzaChbaXRlbV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRyZW5kO1xuICAgIH07XG4gICAgY29uc3QgaG9yaXpvbnRhbENvbmRpdGlvbnMgPSB7XG4gICAgICBnZXRQcmVkZWNlc3NvcjogKGl0ZW0pID0+IGl0ZW0gLSAxLFxuICAgICAgZ2V0U3VjY2Vzc29yOiAoaXRlbSkgPT4gaXRlbSArIDEsXG4gICAgfTtcbiAgICBjb25zdCB2ZXJ0aWNhbENvbmRpdGlvbnMgPSB7XG4gICAgICBnZXRQcmVkZWNlc3NvcjogKGl0ZW0pID0+IGl0ZW0gLSAxMCxcbiAgICAgIGdldFN1Y2Nlc3NvcjogKGl0ZW0pID0+IGl0ZW0gKyAxMCxcbiAgICB9O1xuICAgIGNvbnN0IGhvcml6b250YWxUcmVuZHMgPSBoaXRzLnJlZHVjZShhbmFseXplLCB7XG4gICAgICAuLi5ob3Jpem9udGFsQ29uZGl0aW9ucyxcbiAgICAgIGxpc3Q6IFtdLFxuICAgIH0pLmxpc3Q7XG4gICAgY29uc3QgdmVydGljYWxUcmVuZHMgPSBoaXRzLnJlZHVjZShhbmFseXplLCB7XG4gICAgICAuLi52ZXJ0aWNhbENvbmRpdGlvbnMsXG4gICAgICBsaXN0OiBbXSxcbiAgICB9KS5saXN0O1xuICAgIHJldHVybiBbaG9yaXpvbnRhbFRyZW5kcywgdmVydGljYWxUcmVuZHNdO1xuICB9XG5cbiAgc3RhdGljIHRyZW5kQXR0YWNrKHRyZW5kcywgZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgcG90ZW50aWFsVGFyZ2V0cyA9IFtdO1xuICAgIGlmICh0cmVuZHNbMF0ubGVuZ3RoKSB7XG4gICAgICB0cmVuZHNbMF0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBoaWdoZXN0ID0gTWF0aC5tYXgoLi4uaXRlbSk7XG4gICAgICAgIGNvbnN0IGxvd2VzdCA9IE1hdGgubWluKC4uLml0ZW0pO1xuICAgICAgICBwb3RlbnRpYWxUYXJnZXRzLnB1c2goaGlnaGVzdCArIDEsIGxvd2VzdCAtIDEpO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh0cmVuZHNbMV0ubGVuZ3RoKSB7XG4gICAgICB0cmVuZHNbMV0uZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICBjb25zdCBoaWdoZXN0ID0gTWF0aC5tYXgoLi4uaXRlbSk7XG4gICAgICAgIGNvbnN0IGxvd2VzdCA9IE1hdGgubWluKC4uLml0ZW0pO1xuICAgICAgICBwb3RlbnRpYWxUYXJnZXRzLnB1c2goaGlnaGVzdCArIDEwLCBsb3dlc3QgLSAxMCk7XG4gICAgICB9KTtcbiAgICB9XG4gICAgcG90ZW50aWFsVGFyZ2V0cy5mb3JFYWNoKCh0YXJnZXQpID0+IHtcbiAgICAgIHRoaXMuY2hlY2tGb3JMZWdhbEF0dGFja3ModGFyZ2V0LCBwb3RlbnRpYWxUYXJnZXRzLCBnYW1lYm9hcmQpO1xuICAgIH0pO1xuICAgIGlmIChwb3RlbnRpYWxUYXJnZXRzLmxlbmd0aCkgcmV0dXJuIHBvdGVudGlhbFRhcmdldHM7XG4gICAgcmV0dXJuIHRoaXMuYXR0YWNrU3Vycm91bmRpbmdDZWxscyh0aGlzLmRldGVjdFNoaXBzKGdhbWVib2FyZCksIGdhbWVib2FyZCk7XG4gIH1cblxuICBzdGF0aWMgZmluZEJlc3RNb3ZlKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGhpdHMgPSB0aGlzLmRldGVjdFNoaXBzKGdhbWVib2FyZCk7XG4gICAgaWYgKGhpdHMubGVuZ3RoID09PSAwKSByZXR1cm4gdGhpcy5yYW5kb21BdHRhY2soZ2FtZWJvYXJkKTtcbiAgICBjb25zdCB0cmVuZHMgPSB0aGlzLmRldGVjdFRyZW5kcyhoaXRzKTtcbiAgICBpZiAodHJlbmRzWzBdLmxlbmd0aCB8fCB0cmVuZHNbMV0ubGVuZ3RoKSB7XG4gICAgICBjb25zdCBwb3RlbnRpYWxUcmVuZFRhcmdldHMgPSB0aGlzLnRyZW5kQXR0YWNrKHRyZW5kcywgZ2FtZWJvYXJkKTtcbiAgICAgIHJldHVybiBwb3RlbnRpYWxUcmVuZFRhcmdldHNbXG4gICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvdGVudGlhbFRyZW5kVGFyZ2V0cy5sZW5ndGgpXG4gICAgICBdO1xuICAgIH1cbiAgICBpZiAodGhpcy5hdHRhY2tTdXJyb3VuZGluZ0NlbGxzKGhpdHMsIGdhbWVib2FyZCkubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gdGhpcy5yYW5kb21BdHRhY2soZ2FtZWJvYXJkKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgdmVydGljYWwpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSBBcnJheShsZW5ndGgpLmZpbGwobnVsbCk7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy52ZXJ0aWNhbCA9IHZlcnRpY2FsO1xuICB9XG5cbiAgaGl0KHBhcnQpIHtcbiAgICB0aGlzLmhpdHNbcGFydF0gPSAnaGl0JztcbiAgICB0aGlzLmlzU3VuaygpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMuZXZlcnkoKGhpdCkgPT4gaGl0ID09PSAnaGl0JykpIHRoaXMuc3VuayA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVib2FyZDEsXFxuLmdhbWVib2FyZDIge1xcbiAgb3V0bGluZTogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGhlaWdodDogMjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDAuMXJlbSBibGFjayBzb2xpZDtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xcbiAgLndyYXBwZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAuYm9hcmRzLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmdhbWVib2FyZDEsXFxuICAuZ2FtZWJvYXJkMiB7XFxuICAgIHdpZHRoOiAxOHJlbTtcXG4gICAgaGVpZ2h0OiAxOHJlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7O0lBRUUsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lYm9hcmQxLFxcbi5nYW1lYm9hcmQyIHtcXG4gIG91dGxpbmU6IDAuMXJlbSBibGFjayBzb2xpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMjVyZW07XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmNlbGwge1xcbiAgYm9yZGVyOiAwLjFyZW0gYmxhY2sgc29saWQ7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcXG4gIC53cmFwcGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgLmJvYXJkcy13cmFwcGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5nYW1lYm9hcmQxLFxcbiAgLmdhbWVib2FyZDIge1xcbiAgICB3aWR0aDogMThyZW07XFxuICAgIGhlaWdodDogMThyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b3Age1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udG9wLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2hpcC1kcmFnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmNhcnJpZXIsXFxuLmJhdHRsZXNoaXAsXFxuLnN1Ym1hcmluZSxcXG4uY3J1aXNlcixcXG4uZGVzdHJveWVyIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lci1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnMtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBOzs7OztFQUtFLGFBQWE7RUFDYixjQUFjO0VBQ2QscUJBQXFCO0VBQ3JCLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkcy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTZ2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9wLWhlYWRlciB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50b3AtcGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zaGlwLWRyYWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uY2FycmllcixcXG4uYmF0dGxlc2hpcCxcXG4uc3VibWFyaW5lLFxcbi5jcnVpc2VyLFxcbi5kZXN0cm95ZXIge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyOiAwLjFyZW0gYmxhY2sgc29saWQ7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnV0dG9ucy1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCBcIlwiXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbmZ1bmN0aW9uIF9zbGljZWRUb0FycmF5KGFyciwgaSkgeyByZXR1cm4gX2FycmF5V2l0aEhvbGVzKGFycikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KGFyciwgaSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpOyB9XG5cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVJlc3QoKSB7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gZGVzdHJ1Y3R1cmUgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7IH1cblxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikgeyBpZiAoIW8pIHJldHVybjsgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgdmFyIG4gPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobykuc2xpY2UoOCwgLTEpOyBpZiAobiA9PT0gXCJPYmplY3RcIiAmJiBvLmNvbnN0cnVjdG9yKSBuID0gby5jb25zdHJ1Y3Rvci5uYW1lOyBpZiAobiA9PT0gXCJNYXBcIiB8fCBuID09PSBcIlNldFwiKSByZXR1cm4gQXJyYXkuZnJvbShvKTsgaWYgKG4gPT09IFwiQXJndW1lbnRzXCIgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QobikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB9XG5cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KGFyciwgbGVuKSB7IGlmIChsZW4gPT0gbnVsbCB8fCBsZW4gPiBhcnIubGVuZ3RoKSBsZW4gPSBhcnIubGVuZ3RoOyBmb3IgKHZhciBpID0gMCwgYXJyMiA9IG5ldyBBcnJheShsZW4pOyBpIDwgbGVuOyBpKyspIHsgYXJyMltpXSA9IGFycltpXTsgfSByZXR1cm4gYXJyMjsgfVxuXG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB7IHZhciBfaSA9IGFyciA9PSBudWxsID8gbnVsbCA6IHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgYXJyW1N5bWJvbC5pdGVyYXRvcl0gfHwgYXJyW1wiQEBpdGVyYXRvclwiXTsgaWYgKF9pID09IG51bGwpIHJldHVybjsgdmFyIF9hcnIgPSBbXTsgdmFyIF9uID0gdHJ1ZTsgdmFyIF9kID0gZmFsc2U7IHZhciBfcywgX2U7IHRyeSB7IGZvciAoX2kgPSBfaS5jYWxsKGFycik7ICEoX24gPSAoX3MgPSBfaS5uZXh0KCkpLmRvbmUpOyBfbiA9IHRydWUpIHsgX2Fyci5wdXNoKF9zLnZhbHVlKTsgaWYgKGkgJiYgX2Fyci5sZW5ndGggPT09IGkpIGJyZWFrOyB9IH0gY2F0Y2ggKGVycikgeyBfZCA9IHRydWU7IF9lID0gZXJyOyB9IGZpbmFsbHkgeyB0cnkgeyBpZiAoIV9uICYmIF9pW1wicmV0dXJuXCJdICE9IG51bGwpIF9pW1wicmV0dXJuXCJdKCk7IH0gZmluYWxseSB7IGlmIChfZCkgdGhyb3cgX2U7IH0gfSByZXR1cm4gX2FycjsgfVxuXG5mdW5jdGlvbiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB7IGlmIChBcnJheS5pc0FycmF5KGFycikpIHJldHVybiBhcnI7IH1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pIHtcbiAgdmFyIF9pdGVtID0gX3NsaWNlZFRvQXJyYXkoaXRlbSwgNCksXG4gICAgICBjb250ZW50ID0gX2l0ZW1bMV0sXG4gICAgICBjc3NNYXBwaW5nID0gX2l0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vZ2FtZWJvYXJkLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICBhcGkudXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGFwaS5yZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIG1lbW8gPSB7fTtcbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5mdW5jdGlvbiBnZXRUYXJnZXQodGFyZ2V0KSB7XG4gIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cblxuICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICB9XG5cbiAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG5cbiAgaWYgKCF0YXJnZXQpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICB9XG5cbiAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKHN0eWxlLCBvcHRpb25zLmF0dHJpYnV0ZXMpO1xuICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIHJldHVybiBzdHlsZTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzKHN0eWxlKSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBub25jZSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoXCJtZWRpYVwiLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKFwibWVkaWFcIik7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIHR5cGVvZiBidG9hICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIG9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGUsIG9wdGlvbnMsIG9iaik7XG4gICAgfSxcbiAgICByZW1vdmU6IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKSB7XG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0aWQ6IG1vZHVsZUlkLFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgJy4vc3R5bGVzL21haW4uY3NzJztcbmltcG9ydCAnLi9zdHlsZXMvZ2FtZWJvYXJkLmNzcyc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L25hbWVkXG5pbXBvcnQgeyBsb2dpYyB9IGZyb20gJy4vbW9kdWxlcy9sb2dpYyc7XG5pbXBvcnQgeyByZW5kZXJBbGwgfSBmcm9tICcuL21vZHVsZXMvZG9tJztcbmltcG9ydCBkcmFnbmRyb3AgZnJvbSAnLi9tb2R1bGVzL2RyYWduZHJvcCc7XG5cbmxvZ2ljLmluaXRhbGl6ZUdhbWUoKTtcbmxvZ2ljLnBsYWNlQ29tcHV0ZXJTaGlwcygpO1xucmVuZGVyQWxsKCk7XG5kcmFnbmRyb3AuYXBwbHlMaXN0ZW5lcnMoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=