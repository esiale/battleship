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
___CSS_LOADER_EXPORT___.push([module.id, ".gameboard1,\n.gameboard2 {\n  outline: 0.1rem black solid;\n  display: grid;\n  width: 27rem;\n  height: 27rem;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 1rem;\n}\n\n.cell {\n  border: 0.1rem black solid;\n}\n\n.ship {\n  background-color: black;\n  color: white;\n}\n\n.highlight {\n  background-color: navy;\n}\n\n.hit {\n  background-color: red;\n}\n\n.missed {\n  background-color: gray;\n}\n\n.sunk {\n  background-color: darkred;\n}\n\n@media only screen and (max-width: 880px) {\n  .wrapper {\n    justify-content: space-between;\n  }\n  .boards-wrapper {\n    flex-direction: column;\n  }\n  .gameboard1,\n  .gameboard2 {\n    width: 18rem;\n    height: 18rem;\n  }\n}\n", "",{"version":3,"sources":["webpack://./src/styles/gameboard.css"],"names":[],"mappings":"AAAA;;EAEE,2BAA2B;EAC3B,aAAa;EACb,YAAY;EACZ,aAAa;EACb,sCAAsC;EACtC,mCAAmC;EACnC,YAAY;AACd;;AAEA;EACE,0BAA0B;AAC5B;;AAEA;EACE,uBAAuB;EACvB,YAAY;AACd;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,qBAAqB;AACvB;;AAEA;EACE,sBAAsB;AACxB;;AAEA;EACE,yBAAyB;AAC3B;;AAEA;EACE;IACE,8BAA8B;EAChC;EACA;IACE,sBAAsB;EACxB;EACA;;IAEE,YAAY;IACZ,aAAa;EACf;AACF","sourcesContent":[".gameboard1,\n.gameboard2 {\n  outline: 0.1rem black solid;\n  display: grid;\n  width: 27rem;\n  height: 27rem;\n  grid-template-columns: repeat(10, 1fr);\n  grid-template-rows: repeat(10, 1fr);\n  margin: 1rem;\n}\n\n.cell {\n  border: 0.1rem black solid;\n}\n\n.ship {\n  background-color: black;\n  color: white;\n}\n\n.highlight {\n  background-color: navy;\n}\n\n.hit {\n  background-color: red;\n}\n\n.missed {\n  background-color: gray;\n}\n\n.sunk {\n  background-color: darkred;\n}\n\n@media only screen and (max-width: 880px) {\n  .wrapper {\n    justify-content: space-between;\n  }\n  .boards-wrapper {\n    flex-direction: column;\n  }\n  .gameboard1,\n  .gameboard2 {\n    width: 18rem;\n    height: 18rem;\n  }\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2FycmF5TGlrZVRvQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9hcnJheVdpdGhvdXRIb2xlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2l0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL25vbkl0ZXJhYmxlU3ByZWFkLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdG9Db25zdW1hYmxlQXJyYXkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9AYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kcmFnbmRyb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzPzIxODciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY29uY2x1ZGVHYW1lIiwicGxheWVyIiwiYWxlcnQiLCJ1cGRhdGVCb2FyZCIsImFjdGlvbiIsInRhcmdldCIsImJvYXJkIiwiZ2FtZWJvYXJkIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwiY2VsbCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsImZvckVhY2giLCJpdGVtIiwic3Vua0NlbGwiLCJpbml0aWF0ZUF0dGFjayIsImUiLCJkYXRhc2V0IiwiaW5kZXgiLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmZWVkYmFjayIsImxvZ2ljIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImNvbXB1dGVyRmVlZGJhY2siLCJzZXRUaW1lb3V0IiwiY29udGFpbnMiLCJhZGRFdmVudExpc3RlbmVyIiwiZHJhd1NoaXBzIiwiZG9tQm9hcmQiLCJuYW1lIiwic2hpcENlbGwiLCJyZW5kZXJCb2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJpIiwibGVuZ3RoIiwibmV3Q2VsbCIsInRleHRDb250ZW50IiwiYXBwZW5kIiwid3JhcHBlciIsInJlbmRlckRyYWdTaGlwIiwic2hpcCIsInNoaXBDb250YWluZXIiLCJncmlkIiwiYXBwZW5kQ2hpbGQiLCJyb3RhdGVTaGlwIiwicm90YXRlQnV0dG9uIiwib3JpZW50YXRpb24iLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJyZXNldFNoaXBzIiwic2hpcHMiLCJmaXJzdENoaWxkIiwicHJlcGFyZVN0YXJ0IiwiYnV0dG9ucyIsImNvbXB1dGVyQ2VsbHMiLCJuZXh0U2hpcCIsImdyaWRzIiwiY3VycmVudFNoaXAiLCJyZW1vdmVDaGlsZCIsImhhbmRsZVNoaXBQbGFjZW1lbnQiLCJhcHBseUxpc3RlbmVycyIsInJlc2V0QnV0dG9uIiwicmVuZGVyQWxsIiwic2hpcEluZGV4IiwiZHJhZ25kcm9wIiwiaGFuZGxlRHJhZ1N0YXJ0IiwiaGFuZGxlRHJhZ0VuZCIsImdldFNoaXBJbmRleCIsImhhbmRsZURyYWdFbnRlciIsImhhbmRsZURyYWdPdmVyIiwiaGFuZGxlRHJhZ0xlYXZlIiwiaGFuZGxlRHJvcCIsInByZXZlbnREZWZhdWx0IiwiYWRqdXN0ZWRDZWxsIiwiR2FtZWJvYXJkIiwiQXJyYXkiLCJmaWxsIiwiY29vcmRpbmF0ZXMiLCJwdXNoIiwiU2hpcCIsImlkIiwicGFydCIsImlzSGl0IiwiY29vcmRpbmF0ZSIsImlzTWlzc2VkIiwiaGl0IiwiZXZlcnkiLCJzdW5rIiwibG9jYXRpb24iLCJzb21lIiwicmlnaHRCb3JkZXIiLCJudW1iZXIiLCJpbmNsdWRlcyIsInZlcnRpY2FsIiwiTWF0aCIsInJhbmRvbSIsInZhbGlkTG9jYXRpb25zIiwicG9zc2libGVMb2NhdGlvbnMiLCJ5IiwiY2hlY2tGb3JDb25mbGljdHMiLCJmbG9vciIsImxvY2F0aW9uQXJyYXkiLCJhZGRTaGlwIiwiZGF0YSIsImdhbWVib2FyZHMiLCJwbGF5ZXJzIiwiaW5pdGFsaXplR2FtZSIsImdhbWVib2FyZDEiLCJnYW1lYm9hcmQyIiwiaW5pdCIsInBsYXllcjEiLCJQbGF5ZXIiLCJwbGF5ZXIyIiwicGxhY2VDb21wdXRlclNoaXBzIiwiZmluZFJhbmRvbVNoaXBMb2NhdGlvbiIsInByb2Nlc3NBdHRhY2siLCJyZXN1bHQiLCJyZWNlaXZlQXR0YWNrIiwiYWxsU3VuayIsImFsbFNoaXBzQ29yZHMiLCJyZWR1Y2UiLCJhY2MiLCJlbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJzdW5rU2hpcENvcmRzIiwicmVwb3J0QWxsU3VuayIsImluaXRpYXRlQ29tcHV0ZXJNb3ZlIiwicGxheWVyQm9hcmQiLCJiZXN0TW92ZSIsImxlZ2FsQXR0YWNrcyIsImN1cnIiLCJyYW5kb21MZWdhbCIsImhpdHMiLCJhcnJheSIsImxlZnRCb3JkZXIiLCJyZWZlcmVuY2VBcnJheSIsImlsbGVnYWwiLCJmaWx0ZXIiLCJzcGxpY2UiLCJpbmRleE9mIiwicmV2aXNlZENlbGxzIiwicGFyc2VJbnQiLCJzdXJyb3VuZGluZ0NlbGxzIiwiY2VsbEFib3ZlIiwiY2VsbEJlbG93IiwiY2VsbExlZnQiLCJjZWxsUmlnaHQiLCJjaGVja0ZvckxlZ2FsQXR0YWNrcyIsInBvc3NpYmxlVGFyZ2V0cyIsImZpbmRTdXJyb3VuZGluZ0NlbGxzIiwiZmxhdEFycmF5IiwiZmxhdCIsImF0dGFja1JhbmRvbSIsImdyb3VwTGFzdERpZ2l0cyIsImxpc3QiLCJjdXJyZW50IiwibGFzdCIsImdyb3VwRmlyc3REaWdpdHMiLCJmaXJzdCIsImdldE51bWJlcnMiLCJvYmoiLCJPYmplY3QiLCJ2YWx1ZXMiLCJhcnIiLCJ5VHJlbmQiLCJ4VHJlbmQiLCJ0cmVuZHMiLCJncm91cFRyZW5kc0J5T3JpZW50YXRpb24iLCJhbmFseXplIiwidHJlbmQiLCJnZXRQcmVkZWNlc3NvciIsImdldFN1Y2Nlc3NvciIsImhvcml6b250YWxDb25kaXRpb25zIiwidmVydGljYWxDb25kaXRpb25zIiwiaG9yaXpvbnRhbFRyZW5kcyIsInZlcnRpY2FsVHJlbmRzIiwicG90ZW50aWFsVGFyZ2V0cyIsImhpZ2hlc3QiLCJtYXgiLCJsb3dlc3QiLCJtaW4iLCJyZW1vdmVEdXBsaWNhdGVzIiwiU2V0IiwiZGV0ZWN0U2hpcHMiLCJhbmFseXplVHJlbmRzIiwicG90ZW50aWFsVHJlbmRUYXJnZXRzIiwiYXR0YWNrVHJlbmQiLCJhdHRhY2tTdXJyb3VuZGluZ0NlbGxzIiwiaXNTdW5rIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFlO0FBQ2Y7O0FBRUEsd0NBQXdDLFNBQVM7QUFDakQ7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7OztBQ1JxRDtBQUN0QztBQUNmLGlDQUFpQyw2REFBZ0I7QUFDakQsQzs7Ozs7Ozs7Ozs7Ozs7QUNIZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FBQ0EsQzs7Ozs7Ozs7Ozs7Ozs7QUNkZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDYmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDRmU7QUFDZjtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0Z1RDtBQUNKO0FBQ3NCO0FBQ2xCO0FBQ3hDO0FBQ2YsU0FBUyw4REFBaUIsU0FBUyw0REFBZSxTQUFTLHVFQUEwQixTQUFTLDhEQUFpQjtBQUMvRyxDOzs7Ozs7Ozs7Ozs7Ozs7QUNOcUQ7QUFDdEM7QUFDZjtBQUNBLG9DQUFvQyw2REFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0Esc0ZBQXNGLDZEQUFnQjtBQUN0RyxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ1JBO0FBQ0E7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQy9CQyxPQUFLLFdBQUlELE1B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QUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7OztBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3Qjs7Ozs7Ozs7OztBQy9DYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLG1DOzs7Ozs7VUNmQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsZ0NBQWdDLFlBQVk7V0FDNUM7V0FDQSxFOzs7OztXQ1BBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSx3Rjs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7Ozs7OztBQ05BO0NBRUE7O0FBQ0E7QUFDQTtBQUNBO0FBRUEzRCwrREFBQTtBQUNBQSxvRUFBQTtBQUNBMEMsdURBQVM7QUFDVEUsc0VBQUEsRyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHtcbiAgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7XG5cbiAgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJyMltpXSA9IGFycltpXTtcbiAgfVxuXG4gIHJldHVybiBhcnIyO1xufSIsImltcG9ydCBhcnJheUxpa2VUb0FycmF5IGZyb20gXCIuL2FycmF5TGlrZVRvQXJyYXkuanNcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhhcnIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkoYXJyKTtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkob2JqLCBrZXksIHZhbHVlKSB7XG4gIGlmIChrZXkgaW4gb2JqKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG9iaiwga2V5LCB7XG4gICAgICB2YWx1ZTogdmFsdWUsXG4gICAgICBlbnVtZXJhYmxlOiB0cnVlLFxuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICBvYmpba2V5XSA9IHZhbHVlO1xuICB9XG5cbiAgcmV0dXJuIG9iajtcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KGl0ZXIpIHtcbiAgaWYgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgJiYgaXRlcltTeW1ib2wuaXRlcmF0b3JdICE9IG51bGwgfHwgaXRlcltcIkBAaXRlcmF0b3JcIl0gIT0gbnVsbCkgcmV0dXJuIEFycmF5LmZyb20oaXRlcik7XG59IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn0iLCJpbXBvcnQgYXJyYXlXaXRob3V0SG9sZXMgZnJvbSBcIi4vYXJyYXlXaXRob3V0SG9sZXMuanNcIjtcbmltcG9ydCBpdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vaXRlcmFibGVUb0FycmF5LmpzXCI7XG5pbXBvcnQgdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkgZnJvbSBcIi4vdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkuanNcIjtcbmltcG9ydCBub25JdGVyYWJsZVNwcmVhZCBmcm9tIFwiLi9ub25JdGVyYWJsZVNwcmVhZC5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KGFycikge1xuICByZXR1cm4gYXJyYXlXaXRob3V0SG9sZXMoYXJyKSB8fCBpdGVyYWJsZVRvQXJyYXkoYXJyKSB8fCB1bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIpIHx8IG5vbkl0ZXJhYmxlU3ByZWFkKCk7XG59IiwiaW1wb3J0IGFycmF5TGlrZVRvQXJyYXkgZnJvbSBcIi4vYXJyYXlMaWtlVG9BcnJheS5qc1wiO1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KG8sIG1pbkxlbikge1xuICBpZiAoIW8pIHJldHVybjtcbiAgaWYgKHR5cGVvZiBvID09PSBcInN0cmluZ1wiKSByZXR1cm4gYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pO1xuICB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7XG4gIGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7XG4gIGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pO1xuICBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIGFycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbmltcG9ydCB7IGxvZ2ljIH0gZnJvbSAnLi9sb2dpYyc7XG5cbmNvbnN0IGNvbmNsdWRlR2FtZSA9IChwbGF5ZXIpID0+IHtcbiAgYWxlcnQoYCR7cGxheWVyfSBoYXMgbG9zdCFgKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUJvYXJkID0gKGFjdGlvbiwgdGFyZ2V0LCBib2FyZCkgPT4ge1xuICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZH1gKTtcbiAgY29uc3QgY2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHt0YXJnZXR9J11gKTtcbiAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICBjYXNlICdoaXQnOlxuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlzc2VkJzpcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzdW5rJzpcbiAgICAgIHRhcmdldC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1bmtDZWxsID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2l0ZW19J11gKTtcbiAgICAgICAgc3Vua0NlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG4gICAgICAgIHN1bmtDZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhdGVBdHRhY2sgPSAoZSkgPT4ge1xuICBjb25zdCBjZWxsID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZWJvYXJkMmApO1xuICBjb25zdCBjZWxscyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xuICBjb25zdCBmZWVkYmFjayA9IGxvZ2ljLnByb2Nlc3NBdHRhY2soY2VsbCwgJ2dhbWVib2FyZDInKTtcbiAgdXBkYXRlQm9hcmQoZmVlZGJhY2suYWN0aW9uLCBmZWVkYmFjay5jZWxsLCBmZWVkYmFjay5ib2FyZCk7XG4gIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5pdGlhdGVBdHRhY2spO1xuICB9KTtcbiAgY29uc3QgY29tcHV0ZXJGZWVkYmFjayA9IGxvZ2ljLmluaXRpYXRlQ29tcHV0ZXJNb3ZlKCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHVwZGF0ZUJvYXJkKFxuICAgICAgY29tcHV0ZXJGZWVkYmFjay5hY3Rpb24sXG4gICAgICBjb21wdXRlckZlZWRiYWNrLmNlbGwsXG4gICAgICBjb21wdXRlckZlZWRiYWNrLmJvYXJkXG4gICAgKTtcbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgJiZcbiAgICAgICAgIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzZWQnKSAmJlxuICAgICAgICAhaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3N1bmsnKVxuICAgICAgKSB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbml0aWF0ZUF0dGFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIDUwMCk7XG59O1xuXG5jb25zdCBkcmF3U2hpcHMgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gIGdhbWVib2FyZC5ib2FyZC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpdGVtID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgZG9tQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtnYW1lYm9hcmQubmFtZX1gKTtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRvbUJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2luZGV4fSddYCk7XG4gICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlckJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZC5jbGFzc05hbWUgPSBnYW1lYm9hcmQubmFtZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3Q2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgbmV3Q2VsbC5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICBuZXdDZWxsLnRleHRDb250ZW50ID0gaTtcbiAgICBib2FyZC5hcHBlbmQobmV3Q2VsbCk7XG4gIH1cbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtd3JhcHBlcicpO1xuICB3cmFwcGVyLmFwcGVuZChib2FyZCk7XG59O1xuXG5jb25zdCByZW5kZXJEcmFnU2hpcCA9IChzaGlwLCBsZW5ndGgpID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgZ3JpZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGdyaWQuY2xhc3NOYW1lID0gc2hpcDtcbiAgICBncmlkLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgIHNoaXBDb250YWluZXIuYXBwZW5kQ2hpbGQoZ3JpZCk7XG4gIH1cbn07XG5cbmNvbnN0IHJvdGF0ZVNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcbiAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1idG4nKTtcbiAgaWYgKHNoaXBDb250YWluZXIuZGF0YXNldC5vcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgc2hpcENvbnRhaW5lci5kYXRhc2V0Lm9yaWVudGF0aW9uID0gJ3ZlcnRpY2FsJztcbiAgICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICAgIHNoaXBDb250YWluZXIuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdjb2x1bW4nO1xuICB9IGVsc2Uge1xuICAgIHNoaXBDb250YWluZXIuZGF0YXNldC5vcmllbnRhdGlvbiA9ICdob3Jpem9udGFsJztcbiAgICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG4gICAgc2hpcENvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ3Jvdyc7XG4gIH1cbn07XG5cbmNvbnN0IHJlc2V0U2hpcHMgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxO1xuICBnYW1lYm9hcmQuc2hpcHMgPSBbXTtcbiAgZ2FtZWJvYXJkLmJvYXJkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGl0ZW0gIT09IG51bGwpIGdhbWVib2FyZC5ib2FyZFtpbmRleF0gPSBudWxsO1xuICB9KTtcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkMSAuY2VsbCcpO1xuICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICB9KTtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICB3aGlsZSAoc2hpcENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgc2hpcENvbnRhaW5lci5maXJzdENoaWxkLnJlbW92ZSgpO1xuICB9XG4gIHJlbmRlckRyYWdTaGlwKCdjYXJyaWVyJywgNSk7XG59O1xuXG5jb25zdCBwcmVwYXJlU3RhcnQgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcbiAgc2hpcENvbnRhaW5lci5jbGFzc05hbWUgPSAnc2hpcC1jb250YWluZXItaGlkZGVuJztcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJyk7XG4gIGJ1dHRvbnMuY2xhc3NOYW1lID0gJ2J1dHRvbnMtaGlkZGVuJztcbiAgY29uc3QgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQyIC5jZWxsJyk7XG4gIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbml0aWF0ZUF0dGFjayk7XG4gIH0pO1xufTtcblxuY29uc3QgbmV4dFNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcbiAgY29uc3QgZ3JpZHMgPSBzaGlwQ29udGFpbmVyLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xuICBjb25zdCBjdXJyZW50U2hpcCA9IGdyaWRzWzBdLmNsYXNzTmFtZTtcbiAgd2hpbGUgKHNoaXBDb250YWluZXIuZmlyc3RDaGlsZCkge1xuICAgIHNoaXBDb250YWluZXIucmVtb3ZlQ2hpbGQoc2hpcENvbnRhaW5lci5maXJzdENoaWxkKTtcbiAgfVxuICBpZiAoY3VycmVudFNoaXAgPT09ICdjYXJyaWVyJykge1xuICAgIHJlbmRlckRyYWdTaGlwKCdiYXR0bGVzaGlwJywgNCk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNoaXAgPT09ICdiYXR0bGVzaGlwJykge1xuICAgIHJlbmRlckRyYWdTaGlwKCdzdWJtYXJpbmUnLCAzKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2hpcCA9PT0gJ3N1Ym1hcmluZScpIHtcbiAgICByZW5kZXJEcmFnU2hpcCgnY3J1aXNlcicsIDMpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRTaGlwID09PSAnY3J1aXNlcicpIHtcbiAgICByZW5kZXJEcmFnU2hpcCgnZGVzdHJveWVyJywgMik7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNoaXAgPT09ICdkZXN0cm95ZXInKSB7XG4gICAgcHJlcGFyZVN0YXJ0KCk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZVNoaXBQbGFjZW1lbnQgPSAoY2VsbCkgPT4ge1xuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IHNoaXBDb250YWluZXIuZGF0YXNldDtcbiAgY29uc3QgeyBsZW5ndGggfSA9IHNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGlmIChcbiAgICBsb2dpYy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMS5wbGFjZVBsYXllclNoaXAoY2VsbCwgbGVuZ3RoLCBvcmllbnRhdGlvbilcbiAgKSB7XG4gICAgZHJhd1NoaXBzKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxKTtcbiAgICBuZXh0U2hpcCgpO1xuICB9XG59O1xuXG5jb25zdCBhcHBseUxpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1idG4nKTtcbiAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcCk7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWJ0bicpO1xuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0U2hpcHMpO1xufTtcblxuY29uc3QgcmVuZGVyQWxsID0gKCkgPT4ge1xuICByZW5kZXJCb2FyZChsb2dpYy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMSk7XG4gIHJlbmRlckJvYXJkKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQyKTtcbiAgcmVuZGVyRHJhZ1NoaXAoJ2NhcnJpZXInLCA1KTtcbiAgLy8gRk9SIFNUWUxJTkcgLSBSRU1PVkUgQkVGT1JFIFBVQkxJU0hJTkcgLy9cbiAgZHJhd1NoaXBzKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQyKTtcbiAgYXBwbHlMaXN0ZW5lcnMoKTtcbn07XG5cbmV4cG9ydCB7IHJlbmRlckFsbCwgcmVzZXRTaGlwcywgaGFuZGxlU2hpcFBsYWNlbWVudCB9O1xuIiwiaW1wb3J0IHsgaGFuZGxlU2hpcFBsYWNlbWVudCB9IGZyb20gJy4vZG9tJztcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVudXNlZC12YXJzXG5sZXQgc2hpcDtcbmxldCBzaGlwSW5kZXg7XG5cbmNvbnN0IGRyYWduZHJvcCA9IHtcbiAgYXBwbHlMaXN0ZW5lcnMoKSB7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICAgIHNoaXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ3N0YXJ0JywgZHJhZ25kcm9wLmhhbmRsZURyYWdTdGFydCk7XG4gICAgc2hpcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ25kcm9wLmhhbmRsZURyYWdFbmQpO1xuICAgIHNoaXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgZHJhZ25kcm9wLmdldFNoaXBJbmRleCk7XG4gICAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkMSAuY2VsbCcpO1xuICAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VudGVyJywgZHJhZ25kcm9wLmhhbmRsZURyYWdFbnRlcik7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdvdmVyJywgZHJhZ25kcm9wLmhhbmRsZURyYWdPdmVyKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2xlYXZlJywgZHJhZ25kcm9wLmhhbmRsZURyYWdMZWF2ZSk7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2Ryb3AnLCBkcmFnbmRyb3AuaGFuZGxlRHJvcCk7XG4gICAgfSk7XG4gIH0sXG5cbiAgZ2V0U2hpcEluZGV4KGUpIHtcbiAgICBzaGlwSW5kZXggPSArZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgfSxcblxuICBoYW5kbGVEcmFnU3RhcnQoZSkge1xuICAgIHNoaXAgPSBlLnRhcmdldDtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGUnKTtcbiAgICB9LCAwKTtcbiAgfSxcblxuICBoYW5kbGVEcmFnRW50ZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBoaWdobGlnaHRQbGFjZW1lbnQoZSk7XG4gIH0sXG5cbiAgaGFuZGxlRHJhZ092ZXIoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBoaWdobGlnaHRQbGFjZW1lbnQoZSk7XG4gIH0sXG5cbiAgaGFuZGxlRHJhZ0xlYXZlKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgLy8gICByZW1vdmVIaWdobGlnaHRQbGFjZW1lbnQoZSk7XG4gICAgLy8gfSwgMTApO1xuICB9LFxuXG4gIGhhbmRsZURyYWdFbmQoKSB7XG4gICAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICAgIHNoaXBDb250YWluZXIuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZScpO1xuICB9LFxuXG4gIGhhbmRsZURyb3AoZSkge1xuICAgIC8vIHJlbW92ZUhpZ2hsaWdodFBsYWNlbWVudChlKTtcbiAgICBjb25zdCB7IG9yaWVudGF0aW9uIH0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKS5kYXRhc2V0O1xuICAgIGNvbnN0IGNlbGwgPSBlLnRhcmdldDtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgY29uc3QgYWRqdXN0ZWRDZWxsID0gK2NlbGwuZGF0YXNldC5pbmRleCAtIHNoaXBJbmRleDtcbiAgICAgIGhhbmRsZVNoaXBQbGFjZW1lbnQoYWRqdXN0ZWRDZWxsKTtcbiAgICB9IGVsc2UgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBjb25zdCBhZGp1c3RlZENlbGwgPSArY2VsbC5kYXRhc2V0LmluZGV4IC0gc2hpcEluZGV4ICogMTA7XG4gICAgICBoYW5kbGVTaGlwUGxhY2VtZW50KGFkanVzdGVkQ2VsbCk7XG4gICAgfVxuICB9LFxufTtcblxuZXhwb3J0IGRlZmF1bHQgZHJhZ25kcm9wO1xuIiwiaW1wb3J0IFNoaXAgZnJvbSAnLi9zaGlwJztcblxuY2xhc3MgR2FtZWJvYXJkIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICB9XG5cbiAgaW5pdCgpIHtcbiAgICB0aGlzLmJvYXJkID0gQXJyYXkoMTAwKS5maWxsKG51bGwpO1xuICB9XG5cbiAgYWRkU2hpcChjb29yZGluYXRlcykge1xuICAgIGNvbnN0IHsgbGVuZ3RoIH0gPSBjb29yZGluYXRlcztcbiAgICB0aGlzLnNoaXBzLnB1c2gobmV3IFNoaXAobGVuZ3RoKSk7XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuYm9hcmRbaXRlbV0gPSB7XG4gICAgICAgIGlkOiB0aGlzLnNoaXBzLmxlbmd0aCAtIDEsXG4gICAgICAgIHBhcnQ6IGluZGV4LFxuICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbY29vcmRpbmF0ZV0gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuYm9hcmRbY29vcmRpbmF0ZV0gPSB7IGlzTWlzc2VkOiB0cnVlIH07XG4gICAgICByZXR1cm4gJ21pc3NlZCc7XG4gICAgfVxuICAgIHRoaXMuc2hpcHNbdGhpcy5ib2FyZFtjb29yZGluYXRlXS5pZF0uaGl0KHRoaXMuYm9hcmRbY29vcmRpbmF0ZV0ucGFydCk7XG4gICAgdGhpcy5ib2FyZFtjb29yZGluYXRlXS5pc0hpdCA9IHRydWU7XG4gICAgcmV0dXJuICdoaXQnO1xuICB9XG5cbiAgcmVwb3J0QWxsU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zdW5rID09PSB0cnVlKTtcbiAgfVxuXG4gIGNoZWNrRm9yQ29uZmxpY3RzKGxvY2F0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uLnNvbWUoKGl0ZW0pID0+IGl0ZW0gPiA5OSkpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHJpZ2h0Qm9yZGVyID0gWzksIDE5LCAyOSwgMzksIDQ5LCA1OSwgNjksIDc5LCA4OV07XG4gICAgaWYgKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycm93LWJvZHktc3R5bGVcbiAgICAgIHJpZ2h0Qm9yZGVyLnNvbWUoKG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gW251bWJlciwgbnVtYmVyICsgMV0uZXZlcnkoKGl0ZW0pID0+IGxvY2F0aW9uLmluY2x1ZGVzKGl0ZW0pKTtcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLnNvbWUoKGl0ZW0pID0+IHRoaXMuYm9hcmRbaXRlbV0gIT09IG51bGwpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZmluZFJhbmRvbVNoaXBMb2NhdGlvbihsZW5ndGgpIHtcbiAgICBjb25zdCB2ZXJ0aWNhbCA9IE1hdGgucmFuZG9tKCkgPiAwLjU7XG4gICAgY29uc3QgdmFsaWRMb2NhdGlvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwIC0gbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHBvc3NpYmxlTG9jYXRpb25zID0gW107XG4gICAgICBpZiAodmVydGljYWwgPT09IHRydWUpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5ndGg7IHkgKz0gMSkge1xuICAgICAgICAgIHBvc3NpYmxlTG9jYXRpb25zLnB1c2goaSArIHkgKiAxMCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbGVuZ3RoOyB5ICs9IDEpIHtcbiAgICAgICAgICBwb3NzaWJsZUxvY2F0aW9ucy5wdXNoKHkgKyBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2hlY2tGb3JDb25mbGljdHMocG9zc2libGVMb2NhdGlvbnMpKVxuICAgICAgICB2YWxpZExvY2F0aW9ucy5wdXNoKHBvc3NpYmxlTG9jYXRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkTG9jYXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkTG9jYXRpb25zLmxlbmd0aCldO1xuICB9XG5cbiAgcGxhY2VQbGF5ZXJTaGlwKGNlbGwsIGxlbmd0aCwgb3JpZW50YXRpb24pIHtcbiAgICBjb25zdCBsb2NhdGlvbkFycmF5ID0gW107XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgbG9jYXRpb25BcnJheS5wdXNoKGNlbGwgKyBpKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAndmVydGljYWwnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGxvY2F0aW9uQXJyYXkucHVzaChjZWxsICsgaSAqIDEwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY2hlY2tGb3JDb25mbGljdHMobG9jYXRpb25BcnJheSkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuYWRkU2hpcChsb2NhdGlvbkFycmF5LCBsZW5ndGgpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBHYW1lYm9hcmQ7XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbmltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IGxvZ2ljID0ge1xuICBkYXRhOiB7XG4gICAgZ2FtZWJvYXJkczoge30sXG4gICAgcGxheWVyczoge30sXG4gIH0sXG5cbiAgaW5pdGFsaXplR2FtZSgpIHtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxID0gbmV3IEdhbWVib2FyZCgnZ2FtZWJvYXJkMScpO1xuICAgIHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDIgPSBuZXcgR2FtZWJvYXJkKCdnYW1lYm9hcmQyJyk7XG4gICAgdGhpcy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMS5pbml0KCk7XG4gICAgdGhpcy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMi5pbml0KCk7XG4gICAgdGhpcy5kYXRhLnBsYXllcnMucGxheWVyMSA9IG5ldyBQbGF5ZXIoJ2h1bWFuJywgJ2dhbWVib2FyZDEnKTtcbiAgICB0aGlzLmRhdGEucGxheWVycy5wbGF5ZXIyID0gbmV3IFBsYXllcignYWknLCAnZ2FtZWJvYXJkMicpO1xuICB9LFxuXG4gIHBsYWNlQ29tcHV0ZXJTaGlwcygpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQyO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDUpLCA1KTtcbiAgICBnYW1lYm9hcmQuYWRkU2hpcChnYW1lYm9hcmQuZmluZFJhbmRvbVNoaXBMb2NhdGlvbig0KSwgNCk7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oMyksIDMpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDIpLCAyKTtcbiAgICBnYW1lYm9hcmQuYWRkU2hpcChnYW1lYm9hcmQuZmluZFJhbmRvbVNoaXBMb2NhdGlvbigyKSwgMik7XG4gIH0sXG5cbiAgcHJvY2Vzc0F0dGFjayhjZWxsLCBib2FyZCkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzW2JvYXJkXTtcbiAgICBjb25zdCByZXN1bHQgPSB0aGlzLmRhdGEuZ2FtZWJvYXJkc1tib2FyZF0ucmVjZWl2ZUF0dGFjayhjZWxsKTtcbiAgICBjb25zdCBmZWVkYmFjayA9IHtcbiAgICAgIGFjdGlvbjogbnVsbCxcbiAgICAgIGNlbGw6IG51bGwsXG4gICAgICBib2FyZDogbnVsbCxcbiAgICAgIGFsbFN1bms6IGZhbHNlLFxuICAgIH07XG4gICAgY29uc3Qgc2hpcEluZGV4ID0gZ2FtZWJvYXJkLmJvYXJkW2NlbGxdLmlkO1xuICAgIGlmIChyZXN1bHQgPT09ICdtaXNzZWQnKSB7XG4gICAgICBmZWVkYmFjay5hY3Rpb24gPSAnbWlzc2VkJztcbiAgICAgIGZlZWRiYWNrLmNlbGwgPSBjZWxsO1xuICAgICAgZmVlZGJhY2suYm9hcmQgPSBnYW1lYm9hcmQubmFtZTtcbiAgICAgIHJldHVybiBmZWVkYmFjaztcbiAgICB9XG4gICAgaWYgKGdhbWVib2FyZC5zaGlwc1tzaGlwSW5kZXhdLnN1bmspIHtcbiAgICAgIGNvbnN0IGFsbFNoaXBzQ29yZHMgPSBnYW1lYm9hcmQuYm9hcmQucmVkdWNlKChhY2MsIGVsZW1lbnQsIGluZGV4KSA9PiB7XG4gICAgICAgIGlmIChlbGVtZW50ICE9PSBudWxsICYmICFlbGVtZW50Lmhhc093blByb3BlcnR5KCdpc01pc3NlZCcpKVxuICAgICAgICAgIGFjYy5wdXNoKGluZGV4KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKTtcbiAgICAgIGNvbnN0IHN1bmtTaGlwQ29yZHMgPSBhbGxTaGlwc0NvcmRzLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XG4gICAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbZWxlbWVudF0uaWQgPT09IHNoaXBJbmRleCkgYWNjLnB1c2goZWxlbWVudCk7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9LCBbXSk7XG4gICAgICBmZWVkYmFjay5hY3Rpb24gPSAnc3Vuayc7XG4gICAgICBmZWVkYmFjay5jZWxsID0gc3Vua1NoaXBDb3JkcztcbiAgICAgIGlmIChnYW1lYm9hcmQucmVwb3J0QWxsU3VuaygpID09PSB0cnVlKSB7XG4gICAgICAgIGZlZWRiYWNrLmFsbFN1bmsgPSB0cnVlO1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAocmVzdWx0ID09PSAnaGl0Jykge1xuICAgICAgZmVlZGJhY2suYWN0aW9uID0gJ2hpdCc7XG4gICAgICBmZWVkYmFjay5jZWxsID0gY2VsbDtcbiAgICB9XG4gICAgZmVlZGJhY2suYm9hcmQgPSBnYW1lYm9hcmQubmFtZTtcbiAgICByZXR1cm4gZmVlZGJhY2s7XG4gIH0sXG5cbiAgaW5pdGlhdGVDb21wdXRlck1vdmUoKSB7XG4gICAgY29uc3QgcGxheWVyQm9hcmQgPSB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxO1xuICAgIGNvbnN0IGJlc3RNb3ZlID0gUGxheWVyLmZpbmRCZXN0TW92ZShwbGF5ZXJCb2FyZCk7XG4gICAgcmV0dXJuIHRoaXMucHJvY2Vzc0F0dGFjayhiZXN0TW92ZSwgJ2dhbWVib2FyZDEnKTtcbiAgfSxcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBsb2dpYyB9O1xuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tcGFyYW0tcmVhc3NpZ24gKi9cbi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzdGF0aWMgYXR0YWNrUmFuZG9tKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IGdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoKGNlbGxzLCBjdXJyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGN1cnIgIT09IG51bGwgJiYgY3Vyci5oYXNPd25Qcm9wZXJ0eSgnaXNNaXNzZWQnKSkgcmV0dXJuIGNlbGxzO1xuICAgICAgaWYgKGN1cnIgPT09IG51bGwgfHwgY3Vyci5pc0hpdCA9PT0gZmFsc2UpIGNlbGxzLnB1c2goaW5kZXgpO1xuICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCByYW5kb21MZWdhbCA9XG4gICAgICBsZWdhbEF0dGFja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVnYWxBdHRhY2tzLmxlbmd0aCldO1xuICAgIHJldHVybiByYW5kb21MZWdhbDtcbiAgfVxuXG4gIHN0YXRpYyBkZXRlY3RTaGlwcyhnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBoaXRzID0gZ2FtZWJvYXJkLmJvYXJkLnJlZHVjZSgoY2VsbHMsIGN1cnIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGN1cnIgIT09IG51bGwgJiZcbiAgICAgICAgIWN1cnIuaXNNaXNzZWQgPT09IHRydWUgJiZcbiAgICAgICAgY3Vyci5pc0hpdCA9PT0gdHJ1ZSAmJlxuICAgICAgICBnYW1lYm9hcmQuc2hpcHNbY3Vyci5pZF0uc3VuayA9PT0gZmFsc2VcbiAgICAgIClcbiAgICAgICAgY2VsbHMucHVzaChpbmRleCk7XG4gICAgICByZXR1cm4gY2VsbHM7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBoaXRzO1xuICB9XG5cbiAgc3RhdGljIGNoZWNrRm9yTGVnYWxBdHRhY2tzKGNlbGwsIGFycmF5LCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCByaWdodEJvcmRlciA9IFs5LCAxOSwgMjksIDM5LCA0OSwgNTksIDY5LCA3OSwgODldO1xuICAgIGNvbnN0IGxlZnRCb3JkZXIgPSBbMCwgMTAsIDIwLCAzMCwgNDAsIDUwLCA2MCwgNzAsIDkwXTtcbiAgICBjb25zdCByZWZlcmVuY2VBcnJheSA9IFsuLi5hcnJheSwgY2VsbF07XG4gICAgaWYgKHJpZ2h0Qm9yZGVyLmluY2x1ZGVzKGNlbGwpKSB7XG4gICAgICBjb25zdCBpbGxlZ2FsID0gcmVmZXJlbmNlQXJyYXkuZmlsdGVyKChudW1iZXIpID0+XG4gICAgICAgIHJpZ2h0Qm9yZGVyLnNvbWUoKGl0ZW0pID0+IG51bWJlciA9PT0gaXRlbSArIDEpXG4gICAgICApO1xuICAgICAgaWYgKGlsbGVnYWwubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgIHJlZmVyZW5jZUFycmF5LnNwbGljZShyZWZlcmVuY2VBcnJheS5pbmRleE9mKGlsbGVnYWxbMF0pLCAxKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGxlZnRCb3JkZXIuaW5jbHVkZXMoY2VsbCkpIHtcbiAgICAgIGNvbnN0IGlsbGVnYWwgPSByZWZlcmVuY2VBcnJheS5maWx0ZXIoKG51bWJlcikgPT5cbiAgICAgICAgbGVmdEJvcmRlci5zb21lKChpdGVtKSA9PiBudW1iZXIgPT09IGl0ZW0gLSAxKVxuICAgICAgKTtcbiAgICAgIGlmIChpbGxlZ2FsLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICByZWZlcmVuY2VBcnJheS5zcGxpY2UocmVmZXJlbmNlQXJyYXkuaW5kZXhPZihpbGxlZ2FsWzBdKSwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJlZmVyZW5jZUFycmF5LnNwbGljZShyZWZlcmVuY2VBcnJheS5pbmRleE9mKGNlbGwpLCAxKTtcbiAgICBjb25zdCByZXZpc2VkQ2VsbHMgPSByZWZlcmVuY2VBcnJheS5maWx0ZXIoXG4gICAgICAobnVtYmVyKSA9PiBudW1iZXIgPD0gOTkgJiYgbnVtYmVyID49IDBcbiAgICApO1xuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IHJldmlzZWRDZWxscy5yZWR1Y2UoKGNlbGxzLCBjdXJyKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGdhbWVib2FyZC5ib2FyZFtjdXJyXSAhPT0gbnVsbCAmJlxuICAgICAgICBnYW1lYm9hcmQuYm9hcmRbY3Vycl0uaGFzT3duUHJvcGVydHkoJ2lzTWlzc2VkJylcbiAgICAgIClcbiAgICAgICAgcmV0dXJuIGNlbGxzO1xuICAgICAgaWYgKFxuICAgICAgICBnYW1lYm9hcmQuYm9hcmRbY3Vycl0gPT09IG51bGwgfHxcbiAgICAgICAgZ2FtZWJvYXJkLmJvYXJkW2N1cnJdLmlzSGl0ID09PSBmYWxzZVxuICAgICAgKVxuICAgICAgICBjZWxscy5wdXNoKGN1cnIpO1xuICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gbGVnYWxBdHRhY2tzO1xuICB9XG5cbiAgc3RhdGljIGZpbmRTdXJyb3VuZGluZ0NlbGxzKGNlbGwsIGdhbWVib2FyZCkge1xuICAgIGNvbnN0IG51bWJlciA9IHBhcnNlSW50KGNlbGwsIDEwKTtcbiAgICBjb25zdCBzdXJyb3VuZGluZ0NlbGxzID0gW107XG4gICAgY29uc3QgY2VsbEFib3ZlID0gbnVtYmVyIC0gMTA7XG4gICAgY29uc3QgY2VsbEJlbG93ID0gbnVtYmVyICsgMTA7XG4gICAgY29uc3QgY2VsbExlZnQgPSBudW1iZXIgLSAxO1xuICAgIGNvbnN0IGNlbGxSaWdodCA9IG51bWJlciArIDE7XG4gICAgc3Vycm91bmRpbmdDZWxscy5wdXNoKGNlbGxBYm92ZSwgY2VsbEJlbG93LCBjZWxsTGVmdCwgY2VsbFJpZ2h0KTtcbiAgICByZXR1cm4gdGhpcy5jaGVja0ZvckxlZ2FsQXR0YWNrcyhudW1iZXIsIHN1cnJvdW5kaW5nQ2VsbHMsIGdhbWVib2FyZCk7XG4gIH1cblxuICBzdGF0aWMgYXR0YWNrU3Vycm91bmRpbmdDZWxscyhoaXRzLCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBwb3NzaWJsZVRhcmdldHMgPSBbXTtcbiAgICBoaXRzLmZvckVhY2goKGhpdCkgPT4ge1xuICAgICAgcG9zc2libGVUYXJnZXRzLnB1c2godGhpcy5maW5kU3Vycm91bmRpbmdDZWxscyhoaXQsIGdhbWVib2FyZCkpO1xuICAgIH0pO1xuICAgIGNvbnN0IGZsYXRBcnJheSA9IHBvc3NpYmxlVGFyZ2V0cy5mbGF0KCk7XG4gICAgaWYgKGZsYXRBcnJheS5sZW5ndGggPT09IDApIHJldHVybiB0aGlzLmF0dGFja1JhbmRvbShnYW1lYm9hcmQpO1xuICAgIHJldHVybiBmbGF0QXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmxhdEFycmF5Lmxlbmd0aCldO1xuICB9XG5cbiAgc3RhdGljIGdyb3VwVHJlbmRzQnlPcmllbnRhdGlvbihoaXRzKSB7XG4gICAgY29uc3QgZ3JvdXBMYXN0RGlnaXRzID0gaGl0cy5yZWR1Y2UoKGxpc3QsIGN1cnJlbnQpID0+IHtcbiAgICAgIGNvbnN0IGxhc3QgPSBjdXJyZW50ICUgMTA7XG4gICAgICBsaXN0W2xhc3RdID8/PSBbXTtcbiAgICAgIGxpc3RbbGFzdF0ucHVzaChjdXJyZW50KTtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH0sIHt9KTtcbiAgICBjb25zdCBncm91cEZpcnN0RGlnaXRzID0gaGl0cy5yZWR1Y2UoKGxpc3QsIGN1cnJlbnQpID0+IHtcbiAgICAgIGxldCBmaXJzdCA9IE1hdGguZmxvb3IoY3VycmVudCAvIDEwKTtcbiAgICAgIGlmIChmaXJzdCA9PT0gY3VycmVudCkgZmlyc3QgPSAwO1xuICAgICAgbGlzdFtmaXJzdF0gPz89IFtdO1xuICAgICAgbGlzdFtmaXJzdF0ucHVzaChjdXJyZW50KTtcbiAgICAgIHJldHVybiBsaXN0O1xuICAgIH0sIHt9KTtcbiAgICBjb25zdCBnZXROdW1iZXJzID0gKG9iaikgPT5cbiAgICAgIE9iamVjdC52YWx1ZXMob2JqKVxuICAgICAgICAuZmlsdGVyKChhcnIpID0+IGFyci5sZW5ndGggPiAxKVxuICAgICAgICAuZmxhdCgpO1xuICAgIGNvbnN0IHlUcmVuZCA9IGdldE51bWJlcnMoZ3JvdXBMYXN0RGlnaXRzKTtcbiAgICBjb25zdCB4VHJlbmQgPSBnZXROdW1iZXJzKGdyb3VwRmlyc3REaWdpdHMpO1xuICAgIHJldHVybiBbeFRyZW5kLCB5VHJlbmRdO1xuICB9XG5cbiAgc3RhdGljIGFuYWx5emVUcmVuZHMoaGl0cykge1xuICAgIGNvbnN0IHRyZW5kcyA9IHRoaXMuZ3JvdXBUcmVuZHNCeU9yaWVudGF0aW9uKGhpdHMpO1xuICAgIGNvbnN0IGFuYWx5emUgPSAodHJlbmQsIGl0ZW0sIGluZGV4LCBhcnJheSkgPT4ge1xuICAgICAgY29uc3QgeyBnZXRQcmVkZWNlc3NvciwgZ2V0U3VjY2Vzc29yLCBsaXN0IH0gPSB0cmVuZDtcbiAgICAgIGlmIChnZXRQcmVkZWNlc3NvcihpdGVtKSA9PT0gYXJyYXlbaW5kZXggLSAxXSkge1xuICAgICAgICBsaXN0W2xpc3QubGVuZ3RoIC0gMV0ucHVzaChpdGVtKTtcbiAgICAgIH0gZWxzZSBpZiAoZ2V0U3VjY2Vzc29yKGl0ZW0pID09PSBhcnJheVtpbmRleCArIDFdKSB7XG4gICAgICAgIGxpc3QucHVzaChbaXRlbV0pO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRyZW5kO1xuICAgIH07XG4gICAgY29uc3QgaG9yaXpvbnRhbENvbmRpdGlvbnMgPSB7XG4gICAgICBnZXRQcmVkZWNlc3NvcjogKGl0ZW0pID0+IGl0ZW0gLSAxLFxuICAgICAgZ2V0U3VjY2Vzc29yOiAoaXRlbSkgPT4gaXRlbSArIDEsXG4gICAgfTtcbiAgICBjb25zdCB2ZXJ0aWNhbENvbmRpdGlvbnMgPSB7XG4gICAgICBnZXRQcmVkZWNlc3NvcjogKGl0ZW0pID0+IGl0ZW0gLSAxMCxcbiAgICAgIGdldFN1Y2Nlc3NvcjogKGl0ZW0pID0+IGl0ZW0gKyAxMCxcbiAgICB9O1xuICAgIGNvbnN0IGhvcml6b250YWxUcmVuZHMgPSB0cmVuZHNbMF0ucmVkdWNlKGFuYWx5emUsIHtcbiAgICAgIC4uLmhvcml6b250YWxDb25kaXRpb25zLFxuICAgICAgbGlzdDogW10sXG4gICAgfSkubGlzdDtcbiAgICBjb25zdCB2ZXJ0aWNhbFRyZW5kcyA9IHRyZW5kc1sxXS5yZWR1Y2UoYW5hbHl6ZSwge1xuICAgICAgLi4udmVydGljYWxDb25kaXRpb25zLFxuICAgICAgbGlzdDogW10sXG4gICAgfSkubGlzdDtcbiAgICByZXR1cm4geyBob3Jpem9udGFsVHJlbmRzLCB2ZXJ0aWNhbFRyZW5kcyB9O1xuICB9XG5cbiAgc3RhdGljIGF0dGFja1RyZW5kKGhvcml6b250YWxUcmVuZHMsIHZlcnRpY2FsVHJlbmRzLCBnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBwb3RlbnRpYWxUYXJnZXRzID0gW107XG4gICAgaWYgKGhvcml6b250YWxUcmVuZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICBob3Jpem9udGFsVHJlbmRzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3QgaGlnaGVzdCA9IE1hdGgubWF4KC4uLml0ZW0pO1xuICAgICAgICBjb25zdCBsb3dlc3QgPSBNYXRoLm1pbiguLi5pdGVtKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY2hlY2tGb3JMZWdhbEF0dGFja3MoaGlnaGVzdCwgW2hpZ2hlc3QgKyAxXSwgZ2FtZWJvYXJkKVxuICAgICAgICAgICAgLmxlbmd0aCAhPT0gMFxuICAgICAgICApXG4gICAgICAgICAgcG90ZW50aWFsVGFyZ2V0cy5wdXNoKGhpZ2hlc3QgKyAxKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY2hlY2tGb3JMZWdhbEF0dGFja3MobG93ZXN0LCBbbG93ZXN0IC0gMV0sIGdhbWVib2FyZCkubGVuZ3RoICE9PVxuICAgICAgICAgIDBcbiAgICAgICAgKVxuICAgICAgICAgIHBvdGVudGlhbFRhcmdldHMucHVzaChsb3dlc3QgLSAxKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAodmVydGljYWxUcmVuZHMubGVuZ3RoICE9PSAwKSB7XG4gICAgICB2ZXJ0aWNhbFRyZW5kcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IGhpZ2hlc3QgPSBNYXRoLm1heCguLi5pdGVtKTtcbiAgICAgICAgY29uc3QgbG93ZXN0ID0gTWF0aC5taW4oLi4uaXRlbSk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICB0aGlzLmNoZWNrRm9yTGVnYWxBdHRhY2tzKGhpZ2hlc3QsIFtoaWdoZXN0ICsgMTBdLCBnYW1lYm9hcmQpXG4gICAgICAgICAgICAubGVuZ3RoICE9PSAwXG4gICAgICAgIClcbiAgICAgICAgICBwb3RlbnRpYWxUYXJnZXRzLnB1c2goaGlnaGVzdCArIDEwKTtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIHRoaXMuY2hlY2tGb3JMZWdhbEF0dGFja3MobG93ZXN0LCBbbG93ZXN0IC0gMTBdLCBnYW1lYm9hcmQpLmxlbmd0aCAhPT1cbiAgICAgICAgICAwXG4gICAgICAgIClcbiAgICAgICAgICBwb3RlbnRpYWxUYXJnZXRzLnB1c2gobG93ZXN0IC0gMTApO1xuICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChwb3RlbnRpYWxUYXJnZXRzLmxlbmd0aCkge1xuICAgICAgY29uc3QgcmVtb3ZlRHVwbGljYXRlcyA9IFsuLi5uZXcgU2V0KHBvdGVudGlhbFRhcmdldHMpXTtcbiAgICAgIHJldHVybiByZW1vdmVEdXBsaWNhdGVzO1xuICAgIH1cbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHN0YXRpYyBmaW5kQmVzdE1vdmUoZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgaGl0cyA9IHRoaXMuZGV0ZWN0U2hpcHMoZ2FtZWJvYXJkKTtcbiAgICBpZiAoaGl0cy5sZW5ndGggPT09IDApIHJldHVybiB0aGlzLmF0dGFja1JhbmRvbShnYW1lYm9hcmQpO1xuICAgIGlmIChoaXRzLmxlbmd0aCA+PSAyKSB7XG4gICAgICBjb25zdCB7IGhvcml6b250YWxUcmVuZHMsIHZlcnRpY2FsVHJlbmRzIH0gPSB0aGlzLmFuYWx5emVUcmVuZHMoaGl0cyk7XG4gICAgICBpZiAoaG9yaXpvbnRhbFRyZW5kcy5sZW5ndGggfHwgdmVydGljYWxUcmVuZHMubGVuZ3RoKSB7XG4gICAgICAgIGNvbnN0IHBvdGVudGlhbFRyZW5kVGFyZ2V0cyA9IHRoaXMuYXR0YWNrVHJlbmQoXG4gICAgICAgICAgaG9yaXpvbnRhbFRyZW5kcyxcbiAgICAgICAgICB2ZXJ0aWNhbFRyZW5kcyxcbiAgICAgICAgICBnYW1lYm9hcmRcbiAgICAgICAgKTtcbiAgICAgICAgaWYgKHBvdGVudGlhbFRyZW5kVGFyZ2V0cyA9PT0gbnVsbCkge1xuICAgICAgICAgIHJldHVybiB0aGlzLmF0dGFja1N1cnJvdW5kaW5nQ2VsbHMoaGl0cywgZ2FtZWJvYXJkKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG90ZW50aWFsVHJlbmRUYXJnZXRzW1xuICAgICAgICAgIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHBvdGVudGlhbFRyZW5kVGFyZ2V0cy5sZW5ndGgpXG4gICAgICAgIF07XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0aGlzLmF0dGFja1N1cnJvdW5kaW5nQ2VsbHMoaGl0cywgZ2FtZWJvYXJkKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCB2ZXJ0aWNhbCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IEFycmF5KGxlbmd0aCkuZmlsbChudWxsKTtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLnZlcnRpY2FsID0gdmVydGljYWw7XG4gIH1cblxuICBoaXQocGFydCkge1xuICAgIHRoaXMuaGl0c1twYXJ0XSA9ICdoaXQnO1xuICAgIHRoaXMuaXNTdW5rKCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cy5ldmVyeSgoaGl0KSA9PiBoaXQgPT09ICdoaXQnKSkgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZWJvYXJkMSxcXG4uZ2FtZWJvYXJkMiB7XFxuICBvdXRsaW5lOiAwLjFyZW0gYmxhY2sgc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDI3cmVtO1xcbiAgaGVpZ2h0OiAyN3JlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5jZWxsIHtcXG4gIGJvcmRlcjogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XFxuICAud3JhcHBlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC5ib2FyZHMtd3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZ2FtZWJvYXJkMSxcXG4gIC5nYW1lYm9hcmQyIHtcXG4gICAgd2lkdGg6IDE4cmVtO1xcbiAgICBoZWlnaHQ6IDE4cmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTs7SUFFRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZDEsXFxuLmdhbWVib2FyZDIge1xcbiAgb3V0bGluZTogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAyN3JlbTtcXG4gIGhlaWdodDogMjdyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDAuMXJlbSBibGFjayBzb2xpZDtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xcbiAgLndyYXBwZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAuYm9hcmRzLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmdhbWVib2FyZDEsXFxuICAuZ2FtZWJvYXJkMiB7XFxuICAgIHdpZHRoOiAxOHJlbTtcXG4gICAgaGVpZ2h0OiAxOHJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkcy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTZ2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9wLWhlYWRlciB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50b3AtcGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zaGlwLWRyYWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uY2FycmllcixcXG4uYmF0dGxlc2hpcCxcXG4uc3VibWFyaW5lLFxcbi5jcnVpc2VyLFxcbi5kZXN0cm95ZXIge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyOiAwLjFyZW0gYmxhY2sgc29saWQ7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnV0dG9ucy1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7O0VBS0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmRzLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9wIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNnZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b3AtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnRvcC1wYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNoaXAtZHJhZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5jYXJyaWVyLFxcbi5iYXR0bGVzaGlwLFxcbi5zdWJtYXJpbmUsXFxuLmNydWlzZXIsXFxuLmRlc3Ryb3llciB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDAuMXJlbSBibGFjayBzb2xpZDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXItaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idXR0b25zLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nYW1lYm9hcmQuY3NzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbmFtZWRcbmltcG9ydCB7IGxvZ2ljIH0gZnJvbSAnLi9tb2R1bGVzL2xvZ2ljJztcbmltcG9ydCB7IHJlbmRlckFsbCB9IGZyb20gJy4vbW9kdWxlcy9kb20nO1xuaW1wb3J0IGRyYWduZHJvcCBmcm9tICcuL21vZHVsZXMvZHJhZ25kcm9wJztcblxubG9naWMuaW5pdGFsaXplR2FtZSgpO1xubG9naWMucGxhY2VDb21wdXRlclNoaXBzKCk7XG5yZW5kZXJBbGwoKTtcbmRyYWduZHJvcC5hcHBseUxpc3RlbmVycygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==