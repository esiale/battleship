/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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
 // const highlightPlacement = (e) => {
//   const cells = document.querySelectorAll('.gameboard1 .cell');
//   const shipPreview = document.querySelector('.ship-preview');
//   const length = +shipPreview.dataset.length;
//   const highlightedCells = [];
//   const cellIndex = +e.target.dataset.index;
//   if (shipPreview.dataset.vertical === 'false') {
//     for (let i = 0; i < length; i += 1) {
//       highlightedCells.push(cellIndex + i);
//     }
//     const rightBorder = [9, 19, 29, 39, 49, 59, 69, 79, 89];
//     const borderCell = rightBorder.filter((number) =>
//       [number, number + 1].every((item) => highlightedCells.includes(item))
//     );
//     if (borderCell.length === 1) {
//       const index = highlightedCells.indexOf(borderCell[0]) + 1;
//       highlightedCells.splice(index);
//     }
//   } else if (shipPreview.dataset.vertical === 'true') {
//     for (let i = 0; i < length; i += 1) {
//       highlightedCells.push(cellIndex + i * 10);
//     }
//   }
//   cells.forEach((cell, index) => {
//     if (highlightedCells.includes(index) && !cell.classList.contains('ship'))
//       cell.classList.add('highlight');
//   });
// };
// const removeHighlightPlacement = () => {
//   const cells = document.querySelectorAll('.gameboard1 .cell');
//   cells.forEach((cell) => cell.classList.remove('highlight'));
// };

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
    value: function addShip(coordinates, length) {
      var _this = this;

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
  }, {
    key: "randomAttack",
    value: function randomAttack() {
      var legalAttacks = this.board.reduce(function (cells, curr, index) {
        if (curr === null || curr.isHit !== true && curr.isMissed !== true) cells.push(index);
        return cells;
      }, []);
      var randomLegal = legalAttacks[Math.floor(Math.random() * legalAttacks.length)];
      return randomLegal;
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
    var randomMove = _player__WEBPACK_IMPORTED_MODULE_1__.default.randomAttack(playerBoard);
    return this.processAttack(randomMove, 'gameboard1');
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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Player = /*#__PURE__*/function () {
  function Player(name) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Player);

    this.name = name;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Player, null, [{
    key: "randomAttack",
    value: function randomAttack(gameboard) {
      var legalAttacks = gameboard.board.reduce(function (cells, curr, index) {
        if (curr === null || curr.isHit !== true && curr.isMissed !== true) cells.push(index);
        return cells;
      }, []);
      var randomLegal = legalAttacks[Math.floor(Math.random() * legalAttacks.length)];
      return randomLegal;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZHJhZ25kcm9wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2xvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcz8yMTg3Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbmNsdWRlR2FtZSIsInBsYXllciIsImFsZXJ0IiwidXBkYXRlQm9hcmQiLCJhY3Rpb24iLCJ0YXJnZXQiLCJib2FyZCIsImdhbWVib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNlbGwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJmb3JFYWNoIiwiaXRlbSIsInN1bmtDZWxsIiwiaW5pdGlhdGVBdHRhY2siLCJlIiwiZGF0YXNldCIsImluZGV4IiwiY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmVlZGJhY2siLCJsb2dpYyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb21wdXRlckZlZWRiYWNrIiwic2V0VGltZW91dCIsImNvbnRhaW5zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXdTaGlwcyIsImRvbUJvYXJkIiwibmFtZSIsInNoaXBDZWxsIiwicmVuZGVyQm9hcmQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsIm5ld0NlbGwiLCJ0ZXh0Q29udGVudCIsImFwcGVuZCIsIndyYXBwZXIiLCJyZW5kZXJEcmFnU2hpcCIsInNoaXAiLCJzaGlwQ29udGFpbmVyIiwiZ3JpZCIsImFwcGVuZENoaWxkIiwicm90YXRlU2hpcCIsInJvdGF0ZUJ1dHRvbiIsIm9yaWVudGF0aW9uIiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwicmVzZXRTaGlwcyIsInNoaXBzIiwiZmlyc3RDaGlsZCIsInByZXBhcmVTdGFydCIsImJ1dHRvbnMiLCJjb21wdXRlckNlbGxzIiwibmV4dFNoaXAiLCJncmlkcyIsImN1cnJlbnRTaGlwIiwicmVtb3ZlQ2hpbGQiLCJoYW5kbGVTaGlwUGxhY2VtZW50IiwiYXBwbHlMaXN0ZW5lcnMiLCJyZXNldEJ1dHRvbiIsInJlbmRlckFsbCIsInNoaXBJbmRleCIsImRyYWduZHJvcCIsImhhbmRsZURyYWdTdGFydCIsImhhbmRsZURyYWdFbmQiLCJnZXRTaGlwSW5kZXgiLCJoYW5kbGVEcmFnRW50ZXIiLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZURyYWdMZWF2ZSIsImhhbmRsZURyb3AiLCJwcmV2ZW50RGVmYXVsdCIsImFkanVzdGVkQ2VsbCIsIkdhbWVib2FyZCIsIkFycmF5IiwiZmlsbCIsImNvb3JkaW5hdGVzIiwicHVzaCIsIlNoaXAiLCJpZCIsInBhcnQiLCJpc0hpdCIsImNvb3JkaW5hdGUiLCJpc01pc3NlZCIsImhpdCIsImV2ZXJ5Iiwic3VuayIsImxvY2F0aW9uIiwic29tZSIsInJpZ2h0Qm9yZGVyIiwibnVtYmVyIiwiaW5jbHVkZXMiLCJ2ZXJ0aWNhbCIsIk1hdGgiLCJyYW5kb20iLCJ2YWxpZExvY2F0aW9ucyIsInBvc3NpYmxlTG9jYXRpb25zIiwieSIsImNoZWNrRm9yQ29uZmxpY3RzIiwiZmxvb3IiLCJsb2NhdGlvbkFycmF5IiwiYWRkU2hpcCIsImxlZ2FsQXR0YWNrcyIsInJlZHVjZSIsImN1cnIiLCJyYW5kb21MZWdhbCIsImRhdGEiLCJnYW1lYm9hcmRzIiwicGxheWVycyIsImluaXRhbGl6ZUdhbWUiLCJnYW1lYm9hcmQxIiwiZ2FtZWJvYXJkMiIsImluaXQiLCJwbGF5ZXIxIiwiUGxheWVyIiwicGxheWVyMiIsInBsYWNlQ29tcHV0ZXJTaGlwcyIsImZpbmRSYW5kb21TaGlwTG9jYXRpb24iLCJwcm9jZXNzQXR0YWNrIiwicmVzdWx0IiwicmVjZWl2ZUF0dGFjayIsImFsbFN1bmsiLCJhbGxTaGlwc0NvcmRzIiwiYWNjIiwiZWxlbWVudCIsImhhc093blByb3BlcnR5Iiwic3Vua1NoaXBDb3JkcyIsInJlcG9ydEFsbFN1bmsiLCJpbml0aWF0ZUNvbXB1dGVyTW92ZSIsInBsYXllckJvYXJkIiwicmFuZG9tTW92ZSIsImhpdHMiLCJpc1N1bmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQWU7QUFDZjtBQUNBO0FBQ0E7QUFDQSxDOzs7Ozs7Ozs7Ozs7OztBQ0pBO0FBQ0EsaUJBQWlCLGtCQUFrQjtBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDZEE7QUFDQTs7QUFFQSxJQUFNQSxZQUFZLEdBQUcsU0FBZkEsWUFBZSxDQUFDQyxNQUFELEVBQVk7QUFDL0JDLE9BQUssV0FBSUQsTUFB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QUFDQTtBQUNBO0FBQ0E7O0FBRUEsZ0Q7Ozs7Ozs7Ozs7QUNYYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBLHlEQUF5RDtBQUN6RCxHQUFHOztBQUVIOzs7QUFHQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0I7Ozs7Ozs7Ozs7QUMvQ2E7O0FBRWI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQzs7Ozs7O1VDZkE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGdDQUFnQyxZQUFZO1dBQzVDO1dBQ0EsRTs7Ozs7V0NQQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBM0QsK0RBQUE7QUFDQUEsb0VBQUE7QUFDQTBDLHVEQUFTO0FBQ1RFLHNFQUFBLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuaW1wb3J0IHsgbG9naWMgfSBmcm9tICcuL2xvZ2ljJztcblxuY29uc3QgY29uY2x1ZGVHYW1lID0gKHBsYXllcikgPT4ge1xuICBhbGVydChgJHtwbGF5ZXJ9IGhhcyBsb3N0IWApO1xufTtcblxuY29uc3QgdXBkYXRlQm9hcmQgPSAoYWN0aW9uLCB0YXJnZXQsIGJvYXJkKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkfWApO1xuICBjb25zdCBjZWxsID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke3RhcmdldH0nXWApO1xuICBzd2l0Y2ggKGFjdGlvbikge1xuICAgIGNhc2UgJ2hpdCc6XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaXNzZWQnOlxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3N1bmsnOlxuICAgICAgdGFyZ2V0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vua0NlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aXRlbX0nXWApO1xuICAgICAgICBzdW5rQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgICAgICAgc3Vua0NlbGwuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICB9XG59O1xuXG5jb25zdCBpbml0aWF0ZUF0dGFjayA9IChlKSA9PiB7XG4gIGNvbnN0IGNlbGwgPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lYm9hcmQyYCk7XG4gIGNvbnN0IGNlbGxzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGNvbnN0IGZlZWRiYWNrID0gbG9naWMucHJvY2Vzc0F0dGFjayhjZWxsLCAnZ2FtZWJvYXJkMicpO1xuICB1cGRhdGVCb2FyZChmZWVkYmFjay5hY3Rpb24sIGZlZWRiYWNrLmNlbGwsIGZlZWRiYWNrLmJvYXJkKTtcbiAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbml0aWF0ZUF0dGFjayk7XG4gIH0pO1xuICBjb25zdCBjb21wdXRlckZlZWRiYWNrID0gbG9naWMuaW5pdGlhdGVDb21wdXRlck1vdmUoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdXBkYXRlQm9hcmQoXG4gICAgICBjb21wdXRlckZlZWRiYWNrLmFjdGlvbixcbiAgICAgIGNvbXB1dGVyRmVlZGJhY2suY2VsbCxcbiAgICAgIGNvbXB1dGVyRmVlZGJhY2suYm9hcmRcbiAgICApO1xuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSAmJlxuICAgICAgICAhaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3NlZCcpICYmXG4gICAgICAgICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnc3VuaycpXG4gICAgICApIHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRpYXRlQXR0YWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgNTAwKTtcbn07XG5cbmNvbnN0IGRyYXdTaGlwcyA9IChnYW1lYm9hcmQpID0+IHtcbiAgZ2FtZWJvYXJkLmJvYXJkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBkb21Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2dhbWVib2FyZC5uYW1lfWApO1xuICAgIGNvbnN0IHNoaXBDZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aW5kZXh9J11gKTtcbiAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkLmNsYXNzTmFtZSA9IGdhbWVib2FyZC5uYW1lO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5ld0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdDZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcbiAgICBuZXdDZWxsLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgIG5ld0NlbGwudGV4dENvbnRlbnQgPSBpO1xuICAgIGJvYXJkLmFwcGVuZChuZXdDZWxsKTtcbiAgfVxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy13cmFwcGVyJyk7XG4gIHdyYXBwZXIuYXBwZW5kKGJvYXJkKTtcbn07XG5cbmNvbnN0IHJlbmRlckRyYWdTaGlwID0gKHNoaXAsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc05hbWUgPSBzaGlwO1xuICAgIGdyaWQuZGF0YXNldC5pbmRleCA9IGk7XG4gICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcbiAgfVxufTtcblxuY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICBpZiAoc2hpcENvbnRhaW5lci5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBzaGlwQ29udGFpbmVyLmRhdGFzZXQub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgIHJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgc2hpcENvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gIH0gZWxzZSB7XG4gICAgc2hpcENvbnRhaW5lci5kYXRhc2V0Lm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIHJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgICBzaGlwQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgfVxufTtcblxuY29uc3QgcmVzZXRTaGlwcyA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gbG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDE7XG4gIGdhbWVib2FyZC5zaGlwcyA9IFtdO1xuICBnYW1lYm9hcmQuYm9hcmQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaXRlbSAhPT0gbnVsbCkgZ2FtZWJvYXJkLmJvYXJkW2luZGV4XSA9IG51bGw7XG4gIH0pO1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxIC5jZWxsJyk7XG4gIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gIH0pO1xuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gIHdoaWxlIChzaGlwQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBzaGlwQ29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgcmVuZGVyRHJhZ1NoaXAoJ2NhcnJpZXInLCA1KTtcbn07XG5cbmNvbnN0IHByZXBhcmVTdGFydCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICBzaGlwQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzaGlwLWNvbnRhaW5lci1oaWRkZW4nO1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKTtcbiAgYnV0dG9ucy5jbGFzc05hbWUgPSAnYnV0dG9ucy1oaWRkZW4nO1xuICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDIgLmNlbGwnKTtcbiAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRpYXRlQXR0YWNrKTtcbiAgfSk7XG59O1xuXG5jb25zdCBuZXh0U2hpcCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICBjb25zdCBncmlkcyA9IHNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGNvbnN0IGN1cnJlbnRTaGlwID0gZ3JpZHNbMF0uY2xhc3NOYW1lO1xuICB3aGlsZSAoc2hpcENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgc2hpcENvbnRhaW5lci5yZW1vdmVDaGlsZChzaGlwQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIGlmIChjdXJyZW50U2hpcCA9PT0gJ2NhcnJpZXInKSB7XG4gICAgcmVuZGVyRHJhZ1NoaXAoJ2JhdHRsZXNoaXAnLCA0KTtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2hpcCA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgcmVuZGVyRHJhZ1NoaXAoJ3N1Ym1hcmluZScsIDMpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRTaGlwID09PSAnc3VibWFyaW5lJykge1xuICAgIHJlbmRlckRyYWdTaGlwKCdjcnVpc2VyJywgMyk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNoaXAgPT09ICdjcnVpc2VyJykge1xuICAgIHJlbmRlckRyYWdTaGlwKCdkZXN0cm95ZXInLCAyKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2hpcCA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICBwcmVwYXJlU3RhcnQoKTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlU2hpcFBsYWNlbWVudCA9IChjZWxsKSA9PiB7XG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc2hpcENvbnRhaW5lci5kYXRhc2V0O1xuICBjb25zdCB7IGxlbmd0aCB9ID0gc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcbiAgaWYgKFxuICAgIGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLnBsYWNlUGxheWVyU2hpcChjZWxsLCBsZW5ndGgsIG9yaWVudGF0aW9uKVxuICApIHtcbiAgICBkcmF3U2hpcHMobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEpO1xuICAgIG5leHRTaGlwKCk7XG4gIH1cbn07XG5cbmNvbnN0IGFwcGx5TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnRuJyk7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRTaGlwcyk7XG59O1xuXG5jb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG4gIHJlbmRlckJvYXJkKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxKTtcbiAgcmVuZGVyQm9hcmQobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDIpO1xuICByZW5kZXJEcmFnU2hpcCgnY2FycmllcicsIDUpO1xuICAvLyBGT1IgU1RZTElORyAtIFJFTU9WRSBCRUZPUkUgUFVCTElTSElORyAvL1xuICBkcmF3U2hpcHMobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDIpO1xuICBhcHBseUxpc3RlbmVycygpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyQWxsLCByZXNldFNoaXBzLCBoYW5kbGVTaGlwUGxhY2VtZW50IH07XG4iLCJpbXBvcnQgeyBoYW5kbGVTaGlwUGxhY2VtZW50IH0gZnJvbSAnLi9kb20nO1xuXG4vLyBjb25zdCBoaWdobGlnaHRQbGFjZW1lbnQgPSAoZSkgPT4ge1xuLy8gICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxIC5jZWxsJyk7XG4vLyAgIGNvbnN0IHNoaXBQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtcHJldmlldycpO1xuLy8gICBjb25zdCBsZW5ndGggPSArc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGg7XG4vLyAgIGNvbnN0IGhpZ2hsaWdodGVkQ2VsbHMgPSBbXTtcbi8vICAgY29uc3QgY2VsbEluZGV4ID0gK2UudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4vLyAgIGlmIChzaGlwUHJldmlldy5kYXRhc2V0LnZlcnRpY2FsID09PSAnZmFsc2UnKSB7XG4vLyAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuLy8gICAgICAgaGlnaGxpZ2h0ZWRDZWxscy5wdXNoKGNlbGxJbmRleCArIGkpO1xuLy8gICAgIH1cbi8vICAgICBjb25zdCByaWdodEJvcmRlciA9IFs5LCAxOSwgMjksIDM5LCA0OSwgNTksIDY5LCA3OSwgODldO1xuLy8gICAgIGNvbnN0IGJvcmRlckNlbGwgPSByaWdodEJvcmRlci5maWx0ZXIoKG51bWJlcikgPT5cbi8vICAgICAgIFtudW1iZXIsIG51bWJlciArIDFdLmV2ZXJ5KChpdGVtKSA9PiBoaWdobGlnaHRlZENlbGxzLmluY2x1ZGVzKGl0ZW0pKVxuLy8gICAgICk7XG4vLyAgICAgaWYgKGJvcmRlckNlbGwubGVuZ3RoID09PSAxKSB7XG4vLyAgICAgICBjb25zdCBpbmRleCA9IGhpZ2hsaWdodGVkQ2VsbHMuaW5kZXhPZihib3JkZXJDZWxsWzBdKSArIDE7XG4vLyAgICAgICBoaWdobGlnaHRlZENlbGxzLnNwbGljZShpbmRleCk7XG4vLyAgICAgfVxuLy8gICB9IGVsc2UgaWYgKHNoaXBQcmV2aWV3LmRhdGFzZXQudmVydGljYWwgPT09ICd0cnVlJykge1xuLy8gICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbi8vICAgICAgIGhpZ2hsaWdodGVkQ2VsbHMucHVzaChjZWxsSW5kZXggKyBpICogMTApO1xuLy8gICAgIH1cbi8vICAgfVxuLy8gICBjZWxscy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuLy8gICAgIGlmIChoaWdobGlnaHRlZENlbGxzLmluY2x1ZGVzKGluZGV4KSAmJiAhY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSlcbi8vICAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4vLyAgIH0pO1xuLy8gfTtcblxuLy8gY29uc3QgcmVtb3ZlSGlnaGxpZ2h0UGxhY2VtZW50ID0gKCkgPT4ge1xuLy8gICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxIC5jZWxsJyk7XG4vLyAgIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0JykpO1xuLy8gfTtcblxubGV0IHNoaXA7XG5sZXQgc2hpcEluZGV4O1xuXG5jb25zdCBkcmFnbmRyb3AgPSB7XG4gIGFwcGx5TGlzdGVuZXJzKCkge1xuICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcbiAgICBzaGlwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdzdGFydCcsIGRyYWduZHJvcC5oYW5kbGVEcmFnU3RhcnQpO1xuICAgIHNoaXBDb250YWluZXIuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ2VuZCcsIGRyYWduZHJvcC5oYW5kbGVEcmFnRW5kKTtcbiAgICBzaGlwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIGRyYWduZHJvcC5nZXRTaGlwSW5kZXgpO1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDEgLmNlbGwnKTtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWduZHJvcC5oYW5kbGVEcmFnRW50ZXIpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWduZHJvcC5oYW5kbGVEcmFnT3Zlcik7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWduZHJvcC5oYW5kbGVEcmFnTGVhdmUpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJhZ25kcm9wLmhhbmRsZURyb3ApO1xuICAgIH0pO1xuICB9LFxuXG4gIGdldFNoaXBJbmRleChlKSB7XG4gICAgc2hpcEluZGV4ID0gK2UudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIH0sXG5cbiAgaGFuZGxlRHJhZ1N0YXJ0KGUpIHtcbiAgICBzaGlwID0gZS50YXJnZXQ7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSwgMCk7XG4gIH0sXG5cbiAgaGFuZGxlRHJhZ0VudGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gaGlnaGxpZ2h0UGxhY2VtZW50KGUpO1xuICB9LFxuXG4gIGhhbmRsZURyYWdPdmVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgLy8gaGlnaGxpZ2h0UGxhY2VtZW50KGUpO1xuICB9LFxuXG4gIGhhbmRsZURyYWdMZWF2ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIC8vICAgcmVtb3ZlSGlnaGxpZ2h0UGxhY2VtZW50KGUpO1xuICAgIC8vIH0sIDEwKTtcbiAgfSxcblxuICBoYW5kbGVEcmFnRW5kKCkge1xuICAgIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcbiAgICBzaGlwQ29udGFpbmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfSxcblxuICBoYW5kbGVEcm9wKGUpIHtcbiAgICAvLyByZW1vdmVIaWdobGlnaHRQbGFjZW1lbnQoZSk7XG4gICAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJykuZGF0YXNldDtcbiAgICBjb25zdCBjZWxsID0gZS50YXJnZXQ7XG4gICAgaWYgKG9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICAgIGNvbnN0IGFkanVzdGVkQ2VsbCA9ICtjZWxsLmRhdGFzZXQuaW5kZXggLSBzaGlwSW5kZXg7XG4gICAgICBoYW5kbGVTaGlwUGxhY2VtZW50KGFkanVzdGVkQ2VsbCk7XG4gICAgfSBlbHNlIGlmIChvcmllbnRhdGlvbiA9PT0gJ3ZlcnRpY2FsJykge1xuICAgICAgY29uc3QgYWRqdXN0ZWRDZWxsID0gK2NlbGwuZGF0YXNldC5pbmRleCAtIHNoaXBJbmRleCAqIDEwO1xuICAgICAgaGFuZGxlU2hpcFBsYWNlbWVudChhZGp1c3RlZENlbGwpO1xuICAgIH1cbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRyYWduZHJvcDtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5KDEwMCkuZmlsbChudWxsKTtcbiAgfVxuXG4gIGFkZFNoaXAoY29vcmRpbmF0ZXMsIGxlbmd0aCkge1xuICAgIHRoaXMuc2hpcHMucHVzaChuZXcgU2hpcChsZW5ndGgpKTtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5ib2FyZFtpdGVtXSA9IHtcbiAgICAgICAgaWQ6IHRoaXMuc2hpcHMubGVuZ3RoIC0gMSxcbiAgICAgICAgcGFydDogaW5kZXgsXG4gICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5ib2FyZFtjb29yZGluYXRlXSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlXSA9IHsgaXNNaXNzZWQ6IHRydWUgfTtcbiAgICAgIHJldHVybiAnbWlzc2VkJztcbiAgICB9XG4gICAgdGhpcy5zaGlwc1t0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLmlkXS5oaXQodGhpcy5ib2FyZFtjb29yZGluYXRlXS5wYXJ0KTtcbiAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLmlzSGl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gJ2hpdCc7XG4gIH1cblxuICByZXBvcnRBbGxTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN1bmsgPT09IHRydWUpO1xuICB9XG5cbiAgY2hlY2tGb3JDb25mbGljdHMobG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24uc29tZSgoaXRlbSkgPT4gaXRlbSA+IDk5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcmlnaHRCb3JkZXIgPSBbOSwgMTksIDI5LCAzOSwgNDksIDU5LCA2OSwgNzksIDg5XTtcbiAgICBpZiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyb3ctYm9keS1zdHlsZVxuICAgICAgcmlnaHRCb3JkZXIuc29tZSgobnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBbbnVtYmVyLCBudW1iZXIgKyAxXS5ldmVyeSgoaXRlbSkgPT4gbG9jYXRpb24uaW5jbHVkZXMoaXRlbSkpO1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uc29tZSgoaXRlbSkgPT4gdGhpcy5ib2FyZFtpdGVtXSAhPT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmaW5kUmFuZG9tU2hpcExvY2F0aW9uKGxlbmd0aCkge1xuICAgIGNvbnN0IHZlcnRpY2FsID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcbiAgICBjb25zdCB2YWxpZExvY2F0aW9ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAgLSBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcG9zc2libGVMb2NhdGlvbnMgPSBbXTtcbiAgICAgIGlmICh2ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmd0aDsgeSArPSAxKSB7XG4gICAgICAgICAgcG9zc2libGVMb2NhdGlvbnMucHVzaChpICsgeSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5ndGg7IHkgKz0gMSkge1xuICAgICAgICAgIHBvc3NpYmxlTG9jYXRpb25zLnB1c2goeSArIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja0ZvckNvbmZsaWN0cyhwb3NzaWJsZUxvY2F0aW9ucykpXG4gICAgICAgIHZhbGlkTG9jYXRpb25zLnB1c2gocG9zc2libGVMb2NhdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRMb2NhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRMb2NhdGlvbnMubGVuZ3RoKV07XG4gIH1cblxuICBwbGFjZVBsYXllclNoaXAoY2VsbCwgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IGxvY2F0aW9uQXJyYXkgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBsb2NhdGlvbkFycmF5LnB1c2goY2VsbCArIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgbG9jYXRpb25BcnJheS5wdXNoKGNlbGwgKyBpICogMTApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0ZvckNvbmZsaWN0cyhsb2NhdGlvbkFycmF5KSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRTaGlwKGxvY2F0aW9uQXJyYXksIGxlbmd0aCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmFuZG9tQXR0YWNrKCkge1xuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IHRoaXMuYm9hcmQucmVkdWNlKChjZWxscywgY3VyciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjdXJyID09PSBudWxsIHx8IChjdXJyLmlzSGl0ICE9PSB0cnVlICYmIGN1cnIuaXNNaXNzZWQgIT09IHRydWUpKVxuICAgICAgICBjZWxscy5wdXNoKGluZGV4KTtcbiAgICAgIHJldHVybiBjZWxscztcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgcmFuZG9tTGVnYWwgPVxuICAgICAgbGVnYWxBdHRhY2tzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlZ2FsQXR0YWNrcy5sZW5ndGgpXTtcbiAgICByZXR1cm4gcmFuZG9tTGVnYWw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgbG9naWMgPSB7XG4gIGRhdGE6IHtcbiAgICBnYW1lYm9hcmRzOiB7fSxcbiAgICBwbGF5ZXJzOiB7fSxcbiAgfSxcblxuICBpbml0YWxpemVHYW1lKCkge1xuICAgIHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEgPSBuZXcgR2FtZWJvYXJkKCdnYW1lYm9hcmQxJyk7XG4gICAgdGhpcy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMiA9IG5ldyBHYW1lYm9hcmQoJ2dhbWVib2FyZDInKTtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLmluaXQoKTtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQyLmluaXQoKTtcbiAgICB0aGlzLmRhdGEucGxheWVycy5wbGF5ZXIxID0gbmV3IFBsYXllcignaHVtYW4nLCAnZ2FtZWJvYXJkMScpO1xuICAgIHRoaXMuZGF0YS5wbGF5ZXJzLnBsYXllcjIgPSBuZXcgUGxheWVyKCdhaScsICdnYW1lYm9hcmQyJyk7XG4gIH0sXG5cbiAgcGxhY2VDb21wdXRlclNoaXBzKCkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDI7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oNSksIDUpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDQpLCA0KTtcbiAgICBnYW1lYm9hcmQuYWRkU2hpcChnYW1lYm9hcmQuZmluZFJhbmRvbVNoaXBMb2NhdGlvbigzKSwgMyk7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oMiksIDIpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDIpLCAyKTtcbiAgfSxcblxuICBwcm9jZXNzQXR0YWNrKGNlbGwsIGJvYXJkKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gdGhpcy5kYXRhLmdhbWVib2FyZHNbYm9hcmRdO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzW2JvYXJkXS5yZWNlaXZlQXR0YWNrKGNlbGwpO1xuICAgIGNvbnN0IGZlZWRiYWNrID0ge1xuICAgICAgYWN0aW9uOiBudWxsLFxuICAgICAgY2VsbDogbnVsbCxcbiAgICAgIGJvYXJkOiBudWxsLFxuICAgICAgYWxsU3VuazogZmFsc2UsXG4gICAgfTtcbiAgICBjb25zdCBzaGlwSW5kZXggPSBnYW1lYm9hcmQuYm9hcmRbY2VsbF0uaWQ7XG4gICAgaWYgKHJlc3VsdCA9PT0gJ21pc3NlZCcpIHtcbiAgICAgIGZlZWRiYWNrLmFjdGlvbiA9ICdtaXNzZWQnO1xuICAgICAgZmVlZGJhY2suY2VsbCA9IGNlbGw7XG4gICAgICBmZWVkYmFjay5ib2FyZCA9IGdhbWVib2FyZC5uYW1lO1xuICAgICAgcmV0dXJuIGZlZWRiYWNrO1xuICAgIH1cbiAgICBpZiAoZ2FtZWJvYXJkLnNoaXBzW3NoaXBJbmRleF0uc3Vuaykge1xuICAgICAgY29uc3QgYWxsU2hpcHNDb3JkcyA9IGdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoKGFjYywgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IG51bGwgJiYgIWVsZW1lbnQuaGFzT3duUHJvcGVydHkoJ2lzTWlzc2VkJykpXG4gICAgICAgICAgYWNjLnB1c2goaW5kZXgpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgW10pO1xuICAgICAgY29uc3Qgc3Vua1NoaXBDb3JkcyA9IGFsbFNoaXBzQ29yZHMucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFtlbGVtZW50XS5pZCA9PT0gc2hpcEluZGV4KSBhY2MucHVzaChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKTtcbiAgICAgIGZlZWRiYWNrLmFjdGlvbiA9ICdzdW5rJztcbiAgICAgIGZlZWRiYWNrLmNlbGwgPSBzdW5rU2hpcENvcmRzO1xuICAgICAgaWYgKGdhbWVib2FyZC5yZXBvcnRBbGxTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgZmVlZGJhY2suYWxsU3VuayA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdoaXQnKSB7XG4gICAgICBmZWVkYmFjay5hY3Rpb24gPSAnaGl0JztcbiAgICAgIGZlZWRiYWNrLmNlbGwgPSBjZWxsO1xuICAgIH1cbiAgICBmZWVkYmFjay5ib2FyZCA9IGdhbWVib2FyZC5uYW1lO1xuICAgIHJldHVybiBmZWVkYmFjaztcbiAgfSxcblxuICBpbml0aWF0ZUNvbXB1dGVyTW92ZSgpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDE7XG4gICAgY29uc3QgcmFuZG9tTW92ZSA9IFBsYXllci5yYW5kb21BdHRhY2socGxheWVyQm9hcmQpO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3NBdHRhY2socmFuZG9tTW92ZSwgJ2dhbWVib2FyZDEnKTtcbiAgfSxcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBsb2dpYyB9O1xuIiwiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzdGF0aWMgcmFuZG9tQXR0YWNrKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IGdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoKGNlbGxzLCBjdXJyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGN1cnIgPT09IG51bGwgfHwgKGN1cnIuaXNIaXQgIT09IHRydWUgJiYgY3Vyci5pc01pc3NlZCAhPT0gdHJ1ZSkpXG4gICAgICAgIGNlbGxzLnB1c2goaW5kZXgpO1xuICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCByYW5kb21MZWdhbCA9XG4gICAgICBsZWdhbEF0dGFja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVnYWxBdHRhY2tzLmxlbmd0aCldO1xuICAgIHJldHVybiByYW5kb21MZWdhbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCB2ZXJ0aWNhbCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IEFycmF5KGxlbmd0aCkuZmlsbChudWxsKTtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLnZlcnRpY2FsID0gdmVydGljYWw7XG4gIH1cblxuICBoaXQocGFydCkge1xuICAgIHRoaXMuaGl0c1twYXJ0XSA9ICdoaXQnO1xuICAgIHRoaXMuaXNTdW5rKCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cy5ldmVyeSgoaGl0KSA9PiBoaXQgPT09ICdoaXQnKSkgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZWJvYXJkMSxcXG4uZ2FtZWJvYXJkMiB7XFxuICBvdXRsaW5lOiAwLjFyZW0gYmxhY2sgc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5jZWxsIHtcXG4gIGJvcmRlcjogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XFxuICAud3JhcHBlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC5ib2FyZHMtd3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZ2FtZWJvYXJkMSxcXG4gIC5nYW1lYm9hcmQyIHtcXG4gICAgd2lkdGg6IDE4cmVtO1xcbiAgICBoZWlnaHQ6IDE4cmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTs7SUFFRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZDEsXFxuLmdhbWVib2FyZDIge1xcbiAgb3V0bGluZTogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGhlaWdodDogMjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDAuMXJlbSBibGFjayBzb2xpZDtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xcbiAgLndyYXBwZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAuYm9hcmRzLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmdhbWVib2FyZDEsXFxuICAuZ2FtZWJvYXJkMiB7XFxuICAgIHdpZHRoOiAxOHJlbTtcXG4gICAgaGVpZ2h0OiAxOHJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkcy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTZ2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9wLWhlYWRlciB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50b3AtcGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zaGlwLWRyYWcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG59XFxuXFxuLmhpZGUge1xcbiAgdmlzaWJpbGl0eTogaGlkZGVuO1xcbn1cXG5cXG4uY2FycmllcixcXG4uYmF0dGxlc2hpcCxcXG4uc3VibWFyaW5lLFxcbi5jcnVpc2VyLFxcbi5kZXN0cm95ZXIge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgYm9yZGVyOiAwLjFyZW0gYmxhY2sgc29saWQ7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cXG4uYnV0dG9ucy1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9tYWluLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osU0FBUztFQUNULFVBQVU7QUFDWjs7QUFFQTtFQUNFLFlBQVk7RUFDWixXQUFXO0VBQ1gsYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHNCQUFzQjtFQUN0Qix1QkFBdUI7RUFDdkIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLHVCQUF1QjtFQUN2Qix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLGFBQWE7RUFDYix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7Ozs7O0VBS0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGFBQWE7QUFDZlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCJib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmRzLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9wIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNnZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b3AtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnRvcC1wYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNoaXAtZHJhZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5jYXJyaWVyLFxcbi5iYXR0bGVzaGlwLFxcbi5zdWJtYXJpbmUsXFxuLmNydWlzZXIsXFxuLmRlc3Ryb3llciB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDAuMXJlbSBibGFjayBzb2xpZDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXItaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idXR0b25zLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nYW1lYm9hcmQuY3NzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbmFtZWRcbmltcG9ydCB7IGxvZ2ljIH0gZnJvbSAnLi9tb2R1bGVzL2xvZ2ljJztcbmltcG9ydCB7IHJlbmRlckFsbCB9IGZyb20gJy4vbW9kdWxlcy9kb20nO1xuaW1wb3J0IGRyYWduZHJvcCBmcm9tICcuL21vZHVsZXMvZHJhZ25kcm9wJztcblxubG9naWMuaW5pdGFsaXplR2FtZSgpO1xubG9naWMucGxhY2VDb21wdXRlclNoaXBzKCk7XG5yZW5kZXJBbGwoKTtcbmRyYWduZHJvcC5hcHBseUxpc3RlbmVycygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==