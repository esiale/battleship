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
    var playerBoard = this.data.gameboards.gameboard1; // const randomMove = Player.randomAttack(playerBoard);
    // return this.processAttack(randomMove, 'gameboard1');

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
/* harmony import */ var _babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/classCallCheck */ "./node_modules/@babel/runtime/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/createClass */ "./node_modules/@babel/runtime/helpers/esm/createClass.js");



var Player = /*#__PURE__*/function () {
  function Player(name) {
    (0,_babel_runtime_helpers_classCallCheck__WEBPACK_IMPORTED_MODULE_0__.default)(this, Player);

    this.name = name;
  }

  (0,_babel_runtime_helpers_createClass__WEBPACK_IMPORTED_MODULE_1__.default)(Player, null, [{
    key: "findLegalAttacks",
    value: function findLegalAttacks(gameboard) {
      var legalAttacks = gameboard.board.reduce(function (cells, curr, index) {
        if (curr === null || curr.isHit !== true && curr.isMissed !== true) cells.push(index);
        return cells;
      }, []);
      return legalAttacks;
    }
  }, {
    key: "randomAttack",
    value: function randomAttack(gameboard) {
      var legalAttacks = this.findLegalAttacks(gameboard);
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
    key: "findSurroundingCells",
    value: function findSurroundingCells(cell, gameboard) {
      var surroundingCells = [];
      var cellAbove = cell - 10;
      var cellBelow = cell + 10;
      var cellLeft = cell - 1;
      var cellRight = cell + 1;
      surroundingCells.push(cellAbove, cellBelow, cellLeft, cellRight);
      var rightBorder = [9, 19, 29, 39, 49, 59, 69, 79, 89];
      var leftBorder = [0, 10, 20, 30, 40, 50, 60, 70, 90];

      if (rightBorder.some(function (number) {
        return number === cell;
      })) {
        surroundingCells.splice(surroundingCells.indexOf(cell + 1), 1);
      }

      if (leftBorder.some(function (number) {
        return number === cell;
      })) {
        surroundingCells.splice(surroundingCells.indexOf(cell - 1), 1);
      }

      var revisedCells = surroundingCells.filter(function (number) {
        return number < 99 && number > 0;
      });
      var legalAttacks = revisedCells.reduce(function (cells, curr) {
        if (gameboard.board[curr] === null || gameboard.board[curr].isHit !== true && gameboard.board[curr].isMissed !== true) cells.push(curr);
        return cells;
      }, []);
      return legalAttacks;
    }
  }, {
    key: "findBestMove",
    value: function findBestMove(gameboard) {
      var _this = this;

      var hits = this.detectShips(gameboard);
      if (hits.length === 0) return this.randomAttack(gameboard);
      var possibleTargets = [];
      hits.forEach(function (hit) {
        possibleTargets.push(_this.findSurroundingCells(hit, gameboard));
      });
      var flatArray = possibleTargets.flat();
      return flatArray[Math.floor(Math.random() * flatArray.length)];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZHJhZ25kcm9wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2xvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcz8yMTg3Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbmNsdWRlR2FtZSIsInBsYXllciIsImFsZXJ0IiwidXBkYXRlQm9hcmQiLCJhY3Rpb24iLCJ0YXJnZXQiLCJib2FyZCIsImdhbWVib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNlbGwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJmb3JFYWNoIiwiaXRlbSIsInN1bmtDZWxsIiwiaW5pdGlhdGVBdHRhY2siLCJlIiwiZGF0YXNldCIsImluZGV4IiwiY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmVlZGJhY2siLCJsb2dpYyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb21wdXRlckZlZWRiYWNrIiwic2V0VGltZW91dCIsImNvbnRhaW5zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXdTaGlwcyIsImRvbUJvYXJkIiwibmFtZSIsInNoaXBDZWxsIiwicmVuZGVyQm9hcmQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsIm5ld0NlbGwiLCJ0ZXh0Q29udGVudCIsImFwcGVuZCIsIndyYXBwZXIiLCJyZW5kZXJEcmFnU2hpcCIsInNoaXAiLCJzaGlwQ29udGFpbmVyIiwiZ3JpZCIsImFwcGVuZENoaWxkIiwicm90YXRlU2hpcCIsInJvdGF0ZUJ1dHRvbiIsIm9yaWVudGF0aW9uIiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwicmVzZXRTaGlwcyIsInNoaXBzIiwiZmlyc3RDaGlsZCIsInByZXBhcmVTdGFydCIsImJ1dHRvbnMiLCJjb21wdXRlckNlbGxzIiwibmV4dFNoaXAiLCJncmlkcyIsImN1cnJlbnRTaGlwIiwicmVtb3ZlQ2hpbGQiLCJoYW5kbGVTaGlwUGxhY2VtZW50IiwiYXBwbHlMaXN0ZW5lcnMiLCJyZXNldEJ1dHRvbiIsInJlbmRlckFsbCIsInNoaXBJbmRleCIsImRyYWduZHJvcCIsImhhbmRsZURyYWdTdGFydCIsImhhbmRsZURyYWdFbmQiLCJnZXRTaGlwSW5kZXgiLCJoYW5kbGVEcmFnRW50ZXIiLCJoYW5kbGVEcmFnT3ZlciIsImhhbmRsZURyYWdMZWF2ZSIsImhhbmRsZURyb3AiLCJwcmV2ZW50RGVmYXVsdCIsImFkanVzdGVkQ2VsbCIsIkdhbWVib2FyZCIsIkFycmF5IiwiZmlsbCIsImNvb3JkaW5hdGVzIiwicHVzaCIsIlNoaXAiLCJpZCIsInBhcnQiLCJpc0hpdCIsImNvb3JkaW5hdGUiLCJpc01pc3NlZCIsImhpdCIsImV2ZXJ5Iiwic3VuayIsImxvY2F0aW9uIiwic29tZSIsInJpZ2h0Qm9yZGVyIiwibnVtYmVyIiwiaW5jbHVkZXMiLCJ2ZXJ0aWNhbCIsIk1hdGgiLCJyYW5kb20iLCJ2YWxpZExvY2F0aW9ucyIsInBvc3NpYmxlTG9jYXRpb25zIiwieSIsImNoZWNrRm9yQ29uZmxpY3RzIiwiZmxvb3IiLCJsb2NhdGlvbkFycmF5IiwiYWRkU2hpcCIsImRhdGEiLCJnYW1lYm9hcmRzIiwicGxheWVycyIsImluaXRhbGl6ZUdhbWUiLCJnYW1lYm9hcmQxIiwiZ2FtZWJvYXJkMiIsImluaXQiLCJwbGF5ZXIxIiwiUGxheWVyIiwicGxheWVyMiIsInBsYWNlQ29tcHV0ZXJTaGlwcyIsImZpbmRSYW5kb21TaGlwTG9jYXRpb24iLCJwcm9jZXNzQXR0YWNrIiwicmVzdWx0IiwicmVjZWl2ZUF0dGFjayIsImFsbFN1bmsiLCJhbGxTaGlwc0NvcmRzIiwicmVkdWNlIiwiYWNjIiwiZWxlbWVudCIsImhhc093blByb3BlcnR5Iiwic3Vua1NoaXBDb3JkcyIsInJlcG9ydEFsbFN1bmsiLCJpbml0aWF0ZUNvbXB1dGVyTW92ZSIsInBsYXllckJvYXJkIiwiYmVzdE1vdmUiLCJsZWdhbEF0dGFja3MiLCJjdXJyIiwiZmluZExlZ2FsQXR0YWNrcyIsInJhbmRvbUxlZ2FsIiwiaGl0cyIsInN1cnJvdW5kaW5nQ2VsbHMiLCJjZWxsQWJvdmUiLCJjZWxsQmVsb3ciLCJjZWxsTGVmdCIsImNlbGxSaWdodCIsImxlZnRCb3JkZXIiLCJzcGxpY2UiLCJpbmRleE9mIiwicmV2aXNlZENlbGxzIiwiZmlsdGVyIiwiZGV0ZWN0U2hpcHMiLCJyYW5kb21BdHRhY2siLCJwb3NzaWJsZVRhcmdldHMiLCJmaW5kU3Vycm91bmRpbmdDZWxscyIsImZsYXRBcnJheSIsImZsYXQiLCJpc1N1bmsiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7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QUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOQTtDQUVBOztBQUNBO0FBQ0E7QUFDQTtBQUVBM0QsK0RBQUE7QUFDQUEsb0VBQUE7QUFDQTBDLHVEQUFTO0FBQ1RFLHNFQUFBLEciLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhpbnN0YW5jZSwgQ29uc3RydWN0b3IpIHtcbiAgaWYgKCEoaW5zdGFuY2UgaW5zdGFuY2VvZiBDb25zdHJ1Y3RvcikpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IGNhbGwgYSBjbGFzcyBhcyBhIGZ1bmN0aW9uXCIpO1xuICB9XG59IiwiZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXModGFyZ2V0LCBwcm9wcykge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHByb3BzLmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGRlc2NyaXB0b3IgPSBwcm9wc1tpXTtcbiAgICBkZXNjcmlwdG9yLmVudW1lcmFibGUgPSBkZXNjcmlwdG9yLmVudW1lcmFibGUgfHwgZmFsc2U7XG4gICAgZGVzY3JpcHRvci5jb25maWd1cmFibGUgPSB0cnVlO1xuICAgIGlmIChcInZhbHVlXCIgaW4gZGVzY3JpcHRvcikgZGVzY3JpcHRvci53cml0YWJsZSA9IHRydWU7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwgZGVzY3JpcHRvci5rZXksIGRlc2NyaXB0b3IpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF9jcmVhdGVDbGFzcyhDb25zdHJ1Y3RvciwgcHJvdG9Qcm9wcywgc3RhdGljUHJvcHMpIHtcbiAgaWYgKHByb3RvUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLnByb3RvdHlwZSwgcHJvdG9Qcm9wcyk7XG4gIGlmIChzdGF0aWNQcm9wcykgX2RlZmluZVByb3BlcnRpZXMoQ29uc3RydWN0b3IsIHN0YXRpY1Byb3BzKTtcbiAgcmV0dXJuIENvbnN0cnVjdG9yO1xufSIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuaW1wb3J0IHsgbG9naWMgfSBmcm9tICcuL2xvZ2ljJztcblxuY29uc3QgY29uY2x1ZGVHYW1lID0gKHBsYXllcikgPT4ge1xuICBhbGVydChgJHtwbGF5ZXJ9IGhhcyBsb3N0IWApO1xufTtcblxuY29uc3QgdXBkYXRlQm9hcmQgPSAoYWN0aW9uLCB0YXJnZXQsIGJvYXJkKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2JvYXJkfWApO1xuICBjb25zdCBjZWxsID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke3RhcmdldH0nXWApO1xuICBzd2l0Y2ggKGFjdGlvbikge1xuICAgIGNhc2UgJ2hpdCc6XG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdtaXNzZWQnOlxuICAgICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdtaXNzZWQnKTtcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ3N1bmsnOlxuICAgICAgdGFyZ2V0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgY29uc3Qgc3Vua0NlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aXRlbX0nXWApO1xuICAgICAgICBzdW5rQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgICAgICAgc3Vua0NlbGwuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgICAgfSk7XG4gICAgICBicmVhaztcbiAgICBkZWZhdWx0OlxuICB9XG59O1xuXG5jb25zdCBpbml0aWF0ZUF0dGFjayA9IChlKSA9PiB7XG4gIGNvbnN0IGNlbGwgPSBlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC5nYW1lYm9hcmQyYCk7XG4gIGNvbnN0IGNlbGxzID0gYm9hcmQucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGNvbnN0IGZlZWRiYWNrID0gbG9naWMucHJvY2Vzc0F0dGFjayhjZWxsLCAnZ2FtZWJvYXJkMicpO1xuICB1cGRhdGVCb2FyZChmZWVkYmFjay5hY3Rpb24sIGZlZWRiYWNrLmNlbGwsIGZlZWRiYWNrLmJvYXJkKTtcbiAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbml0aWF0ZUF0dGFjayk7XG4gIH0pO1xuICBjb25zdCBjb21wdXRlckZlZWRiYWNrID0gbG9naWMuaW5pdGlhdGVDb21wdXRlck1vdmUoKTtcbiAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgdXBkYXRlQm9hcmQoXG4gICAgICBjb21wdXRlckZlZWRiYWNrLmFjdGlvbixcbiAgICAgIGNvbXB1dGVyRmVlZGJhY2suY2VsbCxcbiAgICAgIGNvbXB1dGVyRmVlZGJhY2suYm9hcmRcbiAgICApO1xuICAgIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdoaXQnKSAmJlxuICAgICAgICAhaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ21pc3NlZCcpICYmXG4gICAgICAgICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnc3VuaycpXG4gICAgICApIHtcbiAgICAgICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRpYXRlQXR0YWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfSwgNTAwKTtcbn07XG5cbmNvbnN0IGRyYXdTaGlwcyA9IChnYW1lYm9hcmQpID0+IHtcbiAgZ2FtZWJvYXJkLmJvYXJkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBkb21Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2dhbWVib2FyZC5uYW1lfWApO1xuICAgIGNvbnN0IHNoaXBDZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aW5kZXh9J11gKTtcbiAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkLmNsYXNzTmFtZSA9IGdhbWVib2FyZC5uYW1lO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5ld0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdDZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcbiAgICBuZXdDZWxsLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgIG5ld0NlbGwudGV4dENvbnRlbnQgPSBpO1xuICAgIGJvYXJkLmFwcGVuZChuZXdDZWxsKTtcbiAgfVxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy13cmFwcGVyJyk7XG4gIHdyYXBwZXIuYXBwZW5kKGJvYXJkKTtcbn07XG5cbmNvbnN0IHJlbmRlckRyYWdTaGlwID0gKHNoaXAsIGxlbmd0aCkgPT4ge1xuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBncmlkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZ3JpZC5jbGFzc05hbWUgPSBzaGlwO1xuICAgIGdyaWQuZGF0YXNldC5pbmRleCA9IGk7XG4gICAgc2hpcENvbnRhaW5lci5hcHBlbmRDaGlsZChncmlkKTtcbiAgfVxufTtcblxuY29uc3Qgcm90YXRlU2hpcCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICBpZiAoc2hpcENvbnRhaW5lci5kYXRhc2V0Lm9yaWVudGF0aW9uID09PSAnaG9yaXpvbnRhbCcpIHtcbiAgICBzaGlwQ29udGFpbmVyLmRhdGFzZXQub3JpZW50YXRpb24gPSAndmVydGljYWwnO1xuICAgIHJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdWZXJ0aWNhbCc7XG4gICAgc2hpcENvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gJ2NvbHVtbic7XG4gIH0gZWxzZSB7XG4gICAgc2hpcENvbnRhaW5lci5kYXRhc2V0Lm9yaWVudGF0aW9uID0gJ2hvcml6b250YWwnO1xuICAgIHJvdGF0ZUJ1dHRvbi50ZXh0Q29udGVudCA9ICdIb3Jpem9udGFsJztcbiAgICBzaGlwQ29udGFpbmVyLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAncm93JztcbiAgfVxufTtcblxuY29uc3QgcmVzZXRTaGlwcyA9ICgpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkID0gbG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDE7XG4gIGdhbWVib2FyZC5zaGlwcyA9IFtdO1xuICBnYW1lYm9hcmQuYm9hcmQuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICBpZiAoaXRlbSAhPT0gbnVsbCkgZ2FtZWJvYXJkLmJvYXJkW2luZGV4XSA9IG51bGw7XG4gIH0pO1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxIC5jZWxsJyk7XG4gIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpZiAoaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSkgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gIH0pO1xuICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gIHdoaWxlIChzaGlwQ29udGFpbmVyLmZpcnN0Q2hpbGQpIHtcbiAgICBzaGlwQ29udGFpbmVyLmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgcmVuZGVyRHJhZ1NoaXAoJ2NhcnJpZXInLCA1KTtcbn07XG5cbmNvbnN0IHByZXBhcmVTdGFydCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICBzaGlwQ29udGFpbmVyLmNsYXNzTmFtZSA9ICdzaGlwLWNvbnRhaW5lci1oaWRkZW4nO1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKTtcbiAgYnV0dG9ucy5jbGFzc05hbWUgPSAnYnV0dG9ucy1oaWRkZW4nO1xuICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDIgLmNlbGwnKTtcbiAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRpYXRlQXR0YWNrKTtcbiAgfSk7XG59O1xuXG5jb25zdCBuZXh0U2hpcCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcENvbnRhaW5lciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpO1xuICBjb25zdCBncmlkcyA9IHNoaXBDb250YWluZXIucXVlcnlTZWxlY3RvckFsbCgnZGl2Jyk7XG4gIGNvbnN0IGN1cnJlbnRTaGlwID0gZ3JpZHNbMF0uY2xhc3NOYW1lO1xuICB3aGlsZSAoc2hpcENvbnRhaW5lci5maXJzdENoaWxkKSB7XG4gICAgc2hpcENvbnRhaW5lci5yZW1vdmVDaGlsZChzaGlwQ29udGFpbmVyLmZpcnN0Q2hpbGQpO1xuICB9XG4gIGlmIChjdXJyZW50U2hpcCA9PT0gJ2NhcnJpZXInKSB7XG4gICAgcmVuZGVyRHJhZ1NoaXAoJ2JhdHRsZXNoaXAnLCA0KTtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2hpcCA9PT0gJ2JhdHRsZXNoaXAnKSB7XG4gICAgcmVuZGVyRHJhZ1NoaXAoJ3N1Ym1hcmluZScsIDMpO1xuICB9IGVsc2UgaWYgKGN1cnJlbnRTaGlwID09PSAnc3VibWFyaW5lJykge1xuICAgIHJlbmRlckRyYWdTaGlwKCdjcnVpc2VyJywgMyk7XG4gIH0gZWxzZSBpZiAoY3VycmVudFNoaXAgPT09ICdjcnVpc2VyJykge1xuICAgIHJlbmRlckRyYWdTaGlwKCdkZXN0cm95ZXInLCAyKTtcbiAgfSBlbHNlIGlmIChjdXJyZW50U2hpcCA9PT0gJ2Rlc3Ryb3llcicpIHtcbiAgICBwcmVwYXJlU3RhcnQoKTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlU2hpcFBsYWNlbWVudCA9IChjZWxsKSA9PiB7XG4gIGNvbnN0IHNoaXBDb250YWluZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1jb250YWluZXInKTtcbiAgY29uc3QgeyBvcmllbnRhdGlvbiB9ID0gc2hpcENvbnRhaW5lci5kYXRhc2V0O1xuICBjb25zdCB7IGxlbmd0aCB9ID0gc2hpcENvbnRhaW5lci5xdWVyeVNlbGVjdG9yQWxsKCdkaXYnKTtcbiAgaWYgKFxuICAgIGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLnBsYWNlUGxheWVyU2hpcChjZWxsLCBsZW5ndGgsIG9yaWVudGF0aW9uKVxuICApIHtcbiAgICBkcmF3U2hpcHMobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEpO1xuICAgIG5leHRTaGlwKCk7XG4gIH1cbn07XG5cbmNvbnN0IGFwcGx5TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnRuJyk7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRTaGlwcyk7XG59O1xuXG5jb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG4gIHJlbmRlckJvYXJkKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxKTtcbiAgcmVuZGVyQm9hcmQobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDIpO1xuICByZW5kZXJEcmFnU2hpcCgnY2FycmllcicsIDUpO1xuICAvLyBGT1IgU1RZTElORyAtIFJFTU9WRSBCRUZPUkUgUFVCTElTSElORyAvL1xuICBkcmF3U2hpcHMobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDIpO1xuICBhcHBseUxpc3RlbmVycygpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyQWxsLCByZXNldFNoaXBzLCBoYW5kbGVTaGlwUGxhY2VtZW50IH07XG4iLCJpbXBvcnQgeyBoYW5kbGVTaGlwUGxhY2VtZW50IH0gZnJvbSAnLi9kb20nO1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW51c2VkLXZhcnNcbmxldCBzaGlwO1xubGV0IHNoaXBJbmRleDtcblxuY29uc3QgZHJhZ25kcm9wID0ge1xuICBhcHBseUxpc3RlbmVycygpIHtcbiAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gICAgc2hpcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnbmRyb3AuaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgICBzaGlwQ29udGFpbmVyLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbmQnLCBkcmFnbmRyb3AuaGFuZGxlRHJhZ0VuZCk7XG4gICAgc2hpcENvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWRvd24nLCBkcmFnbmRyb3AuZ2V0U2hpcEluZGV4KTtcbiAgICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxIC5jZWxsJyk7XG4gICAgY2VsbHMuZm9yRWFjaCgoY2VsbCkgPT4ge1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW50ZXInLCBkcmFnbmRyb3AuaGFuZGxlRHJhZ0VudGVyKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJhZ292ZXInLCBkcmFnbmRyb3AuaGFuZGxlRHJhZ092ZXIpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnbGVhdmUnLCBkcmFnbmRyb3AuaGFuZGxlRHJhZ0xlYXZlKTtcbiAgICAgIGNlbGwuYWRkRXZlbnRMaXN0ZW5lcignZHJvcCcsIGRyYWduZHJvcC5oYW5kbGVEcm9wKTtcbiAgICB9KTtcbiAgfSxcblxuICBnZXRTaGlwSW5kZXgoZSkge1xuICAgIHNoaXBJbmRleCA9ICtlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICB9LFxuXG4gIGhhbmRsZURyYWdTdGFydChlKSB7XG4gICAgc2hpcCA9IGUudGFyZ2V0O1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgZS50YXJnZXQuY2xhc3NMaXN0LmFkZCgnaGlkZScpO1xuICAgIH0sIDApO1xuICB9LFxuXG4gIGhhbmRsZURyYWdFbnRlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGhpZ2hsaWdodFBsYWNlbWVudChlKTtcbiAgfSxcblxuICBoYW5kbGVEcmFnT3ZlcihlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIC8vIGhpZ2hsaWdodFBsYWNlbWVudChlKTtcbiAgfSxcblxuICBoYW5kbGVEcmFnTGVhdmUoZSkge1xuICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAvLyBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAvLyAgIHJlbW92ZUhpZ2hsaWdodFBsYWNlbWVudChlKTtcbiAgICAvLyB9LCAxMCk7XG4gIH0sXG5cbiAgaGFuZGxlRHJhZ0VuZCgpIHtcbiAgICBjb25zdCBzaGlwQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtY29udGFpbmVyJyk7XG4gICAgc2hpcENvbnRhaW5lci5jbGFzc0xpc3QucmVtb3ZlKCdoaWRlJyk7XG4gIH0sXG5cbiAgaGFuZGxlRHJvcChlKSB7XG4gICAgLy8gcmVtb3ZlSGlnaGxpZ2h0UGxhY2VtZW50KGUpO1xuICAgIGNvbnN0IHsgb3JpZW50YXRpb24gfSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWNvbnRhaW5lcicpLmRhdGFzZXQ7XG4gICAgY29uc3QgY2VsbCA9IGUudGFyZ2V0O1xuICAgIGlmIChvcmllbnRhdGlvbiA9PT0gJ2hvcml6b250YWwnKSB7XG4gICAgICBjb25zdCBhZGp1c3RlZENlbGwgPSArY2VsbC5kYXRhc2V0LmluZGV4IC0gc2hpcEluZGV4O1xuICAgICAgaGFuZGxlU2hpcFBsYWNlbWVudChhZGp1c3RlZENlbGwpO1xuICAgIH0gZWxzZSBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGNvbnN0IGFkanVzdGVkQ2VsbCA9ICtjZWxsLmRhdGFzZXQuaW5kZXggLSBzaGlwSW5kZXggKiAxMDtcbiAgICAgIGhhbmRsZVNoaXBQbGFjZW1lbnQoYWRqdXN0ZWRDZWxsKTtcbiAgICB9XG4gIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCBkcmFnbmRyb3A7XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheSgxMDApLmZpbGwobnVsbCk7XG4gIH1cblxuICBhZGRTaGlwKGNvb3JkaW5hdGVzKSB7XG4gICAgY29uc3QgeyBsZW5ndGggfSA9IGNvb3JkaW5hdGVzO1xuICAgIHRoaXMuc2hpcHMucHVzaChuZXcgU2hpcChsZW5ndGgpKTtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5ib2FyZFtpdGVtXSA9IHtcbiAgICAgICAgaWQ6IHRoaXMuc2hpcHMubGVuZ3RoIC0gMSxcbiAgICAgICAgcGFydDogaW5kZXgsXG4gICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5ib2FyZFtjb29yZGluYXRlXSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlXSA9IHsgaXNNaXNzZWQ6IHRydWUgfTtcbiAgICAgIHJldHVybiAnbWlzc2VkJztcbiAgICB9XG4gICAgdGhpcy5zaGlwc1t0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLmlkXS5oaXQodGhpcy5ib2FyZFtjb29yZGluYXRlXS5wYXJ0KTtcbiAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLmlzSGl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gJ2hpdCc7XG4gIH1cblxuICByZXBvcnRBbGxTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN1bmsgPT09IHRydWUpO1xuICB9XG5cbiAgY2hlY2tGb3JDb25mbGljdHMobG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24uc29tZSgoaXRlbSkgPT4gaXRlbSA+IDk5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcmlnaHRCb3JkZXIgPSBbOSwgMTksIDI5LCAzOSwgNDksIDU5LCA2OSwgNzksIDg5XTtcbiAgICBpZiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyb3ctYm9keS1zdHlsZVxuICAgICAgcmlnaHRCb3JkZXIuc29tZSgobnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBbbnVtYmVyLCBudW1iZXIgKyAxXS5ldmVyeSgoaXRlbSkgPT4gbG9jYXRpb24uaW5jbHVkZXMoaXRlbSkpO1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uc29tZSgoaXRlbSkgPT4gdGhpcy5ib2FyZFtpdGVtXSAhPT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmaW5kUmFuZG9tU2hpcExvY2F0aW9uKGxlbmd0aCkge1xuICAgIGNvbnN0IHZlcnRpY2FsID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcbiAgICBjb25zdCB2YWxpZExvY2F0aW9ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAgLSBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcG9zc2libGVMb2NhdGlvbnMgPSBbXTtcbiAgICAgIGlmICh2ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmd0aDsgeSArPSAxKSB7XG4gICAgICAgICAgcG9zc2libGVMb2NhdGlvbnMucHVzaChpICsgeSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5ndGg7IHkgKz0gMSkge1xuICAgICAgICAgIHBvc3NpYmxlTG9jYXRpb25zLnB1c2goeSArIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja0ZvckNvbmZsaWN0cyhwb3NzaWJsZUxvY2F0aW9ucykpXG4gICAgICAgIHZhbGlkTG9jYXRpb25zLnB1c2gocG9zc2libGVMb2NhdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRMb2NhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRMb2NhdGlvbnMubGVuZ3RoKV07XG4gIH1cblxuICBwbGFjZVBsYXllclNoaXAoY2VsbCwgbGVuZ3RoLCBvcmllbnRhdGlvbikge1xuICAgIGNvbnN0IGxvY2F0aW9uQXJyYXkgPSBbXTtcbiAgICBpZiAob3JpZW50YXRpb24gPT09ICdob3Jpem9udGFsJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBsb2NhdGlvbkFycmF5LnB1c2goY2VsbCArIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAob3JpZW50YXRpb24gPT09ICd2ZXJ0aWNhbCcpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgbG9jYXRpb25BcnJheS5wdXNoKGNlbGwgKyBpICogMTApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0ZvckNvbmZsaWN0cyhsb2NhdGlvbkFycmF5KSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRTaGlwKGxvY2F0aW9uQXJyYXksIGxlbmd0aCk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsIi8qIGVzbGludC1kaXNhYmxlIG5vLXByb3RvdHlwZS1idWlsdGlucyAqL1xuaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgbG9naWMgPSB7XG4gIGRhdGE6IHtcbiAgICBnYW1lYm9hcmRzOiB7fSxcbiAgICBwbGF5ZXJzOiB7fSxcbiAgfSxcblxuICBpbml0YWxpemVHYW1lKCkge1xuICAgIHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEgPSBuZXcgR2FtZWJvYXJkKCdnYW1lYm9hcmQxJyk7XG4gICAgdGhpcy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMiA9IG5ldyBHYW1lYm9hcmQoJ2dhbWVib2FyZDInKTtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLmluaXQoKTtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQyLmluaXQoKTtcbiAgICB0aGlzLmRhdGEucGxheWVycy5wbGF5ZXIxID0gbmV3IFBsYXllcignaHVtYW4nLCAnZ2FtZWJvYXJkMScpO1xuICAgIHRoaXMuZGF0YS5wbGF5ZXJzLnBsYXllcjIgPSBuZXcgUGxheWVyKCdhaScsICdnYW1lYm9hcmQyJyk7XG4gIH0sXG5cbiAgcGxhY2VDb21wdXRlclNoaXBzKCkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDI7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oNSksIDUpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDQpLCA0KTtcbiAgICBnYW1lYm9hcmQuYWRkU2hpcChnYW1lYm9hcmQuZmluZFJhbmRvbVNoaXBMb2NhdGlvbigzKSwgMyk7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oMiksIDIpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDIpLCAyKTtcbiAgfSxcblxuICBwcm9jZXNzQXR0YWNrKGNlbGwsIGJvYXJkKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gdGhpcy5kYXRhLmdhbWVib2FyZHNbYm9hcmRdO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzW2JvYXJkXS5yZWNlaXZlQXR0YWNrKGNlbGwpO1xuICAgIGNvbnN0IGZlZWRiYWNrID0ge1xuICAgICAgYWN0aW9uOiBudWxsLFxuICAgICAgY2VsbDogbnVsbCxcbiAgICAgIGJvYXJkOiBudWxsLFxuICAgICAgYWxsU3VuazogZmFsc2UsXG4gICAgfTtcbiAgICBjb25zdCBzaGlwSW5kZXggPSBnYW1lYm9hcmQuYm9hcmRbY2VsbF0uaWQ7XG4gICAgaWYgKHJlc3VsdCA9PT0gJ21pc3NlZCcpIHtcbiAgICAgIGZlZWRiYWNrLmFjdGlvbiA9ICdtaXNzZWQnO1xuICAgICAgZmVlZGJhY2suY2VsbCA9IGNlbGw7XG4gICAgICBmZWVkYmFjay5ib2FyZCA9IGdhbWVib2FyZC5uYW1lO1xuICAgICAgcmV0dXJuIGZlZWRiYWNrO1xuICAgIH1cbiAgICBpZiAoZ2FtZWJvYXJkLnNoaXBzW3NoaXBJbmRleF0uc3Vuaykge1xuICAgICAgY29uc3QgYWxsU2hpcHNDb3JkcyA9IGdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoKGFjYywgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IG51bGwgJiYgIWVsZW1lbnQuaGFzT3duUHJvcGVydHkoJ2lzTWlzc2VkJykpXG4gICAgICAgICAgYWNjLnB1c2goaW5kZXgpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgW10pO1xuICAgICAgY29uc3Qgc3Vua1NoaXBDb3JkcyA9IGFsbFNoaXBzQ29yZHMucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFtlbGVtZW50XS5pZCA9PT0gc2hpcEluZGV4KSBhY2MucHVzaChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKTtcbiAgICAgIGZlZWRiYWNrLmFjdGlvbiA9ICdzdW5rJztcbiAgICAgIGZlZWRiYWNrLmNlbGwgPSBzdW5rU2hpcENvcmRzO1xuICAgICAgaWYgKGdhbWVib2FyZC5yZXBvcnRBbGxTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgZmVlZGJhY2suYWxsU3VuayA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdoaXQnKSB7XG4gICAgICBmZWVkYmFjay5hY3Rpb24gPSAnaGl0JztcbiAgICAgIGZlZWRiYWNrLmNlbGwgPSBjZWxsO1xuICAgIH1cbiAgICBmZWVkYmFjay5ib2FyZCA9IGdhbWVib2FyZC5uYW1lO1xuICAgIHJldHVybiBmZWVkYmFjaztcbiAgfSxcblxuICBpbml0aWF0ZUNvbXB1dGVyTW92ZSgpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDE7XG4gICAgLy8gY29uc3QgcmFuZG9tTW92ZSA9IFBsYXllci5yYW5kb21BdHRhY2socGxheWVyQm9hcmQpO1xuICAgIC8vIHJldHVybiB0aGlzLnByb2Nlc3NBdHRhY2socmFuZG9tTW92ZSwgJ2dhbWVib2FyZDEnKTtcbiAgICBjb25zdCBiZXN0TW92ZSA9IFBsYXllci5maW5kQmVzdE1vdmUocGxheWVyQm9hcmQpO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3NBdHRhY2soYmVzdE1vdmUsICdnYW1lYm9hcmQxJyk7XG4gIH0sXG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgbG9naWMgfTtcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICB9XG5cbiAgc3RhdGljIGZpbmRMZWdhbEF0dGFja3MoZ2FtZWJvYXJkKSB7XG4gICAgY29uc3QgbGVnYWxBdHRhY2tzID0gZ2FtZWJvYXJkLmJvYXJkLnJlZHVjZSgoY2VsbHMsIGN1cnIsIGluZGV4KSA9PiB7XG4gICAgICBpZiAoY3VyciA9PT0gbnVsbCB8fCAoY3Vyci5pc0hpdCAhPT0gdHJ1ZSAmJiBjdXJyLmlzTWlzc2VkICE9PSB0cnVlKSlcbiAgICAgICAgY2VsbHMucHVzaChpbmRleCk7XG4gICAgICByZXR1cm4gY2VsbHM7XG4gICAgfSwgW10pO1xuICAgIHJldHVybiBsZWdhbEF0dGFja3M7XG4gIH1cblxuICBzdGF0aWMgcmFuZG9tQXR0YWNrKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IHRoaXMuZmluZExlZ2FsQXR0YWNrcyhnYW1lYm9hcmQpO1xuICAgIGNvbnN0IHJhbmRvbUxlZ2FsID1cbiAgICAgIGxlZ2FsQXR0YWNrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZWdhbEF0dGFja3MubGVuZ3RoKV07XG4gICAgcmV0dXJuIHJhbmRvbUxlZ2FsO1xuICB9XG5cbiAgc3RhdGljIGRldGVjdFNoaXBzKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGhpdHMgPSBnYW1lYm9hcmQuYm9hcmQucmVkdWNlKChjZWxscywgY3VyciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChcbiAgICAgICAgY3VyciAhPT0gbnVsbCAmJlxuICAgICAgICAhY3Vyci5pc01pc3NlZCA9PT0gdHJ1ZSAmJlxuICAgICAgICBjdXJyLmlzSGl0ID09PSB0cnVlICYmXG4gICAgICAgIGdhbWVib2FyZC5zaGlwc1tjdXJyLmlkXS5zdW5rID09PSBmYWxzZVxuICAgICAgKVxuICAgICAgICBjZWxscy5wdXNoKGluZGV4KTtcbiAgICAgIHJldHVybiBjZWxscztcbiAgICB9LCBbXSk7XG4gICAgcmV0dXJuIGhpdHM7XG4gIH1cblxuICBzdGF0aWMgZmluZFN1cnJvdW5kaW5nQ2VsbHMoY2VsbCwgZ2FtZWJvYXJkKSB7XG4gICAgY29uc3Qgc3Vycm91bmRpbmdDZWxscyA9IFtdO1xuICAgIGNvbnN0IGNlbGxBYm92ZSA9IGNlbGwgLSAxMDtcbiAgICBjb25zdCBjZWxsQmVsb3cgPSBjZWxsICsgMTA7XG4gICAgY29uc3QgY2VsbExlZnQgPSBjZWxsIC0gMTtcbiAgICBjb25zdCBjZWxsUmlnaHQgPSBjZWxsICsgMTtcbiAgICBzdXJyb3VuZGluZ0NlbGxzLnB1c2goY2VsbEFib3ZlLCBjZWxsQmVsb3csIGNlbGxMZWZ0LCBjZWxsUmlnaHQpO1xuICAgIGNvbnN0IHJpZ2h0Qm9yZGVyID0gWzksIDE5LCAyOSwgMzksIDQ5LCA1OSwgNjksIDc5LCA4OV07XG4gICAgY29uc3QgbGVmdEJvcmRlciA9IFswLCAxMCwgMjAsIDMwLCA0MCwgNTAsIDYwLCA3MCwgOTBdO1xuICAgIGlmIChyaWdodEJvcmRlci5zb21lKChudW1iZXIpID0+IG51bWJlciA9PT0gY2VsbCkpIHtcbiAgICAgIHN1cnJvdW5kaW5nQ2VsbHMuc3BsaWNlKHN1cnJvdW5kaW5nQ2VsbHMuaW5kZXhPZihjZWxsICsgMSksIDEpO1xuICAgIH1cbiAgICBpZiAobGVmdEJvcmRlci5zb21lKChudW1iZXIpID0+IG51bWJlciA9PT0gY2VsbCkpIHtcbiAgICAgIHN1cnJvdW5kaW5nQ2VsbHMuc3BsaWNlKHN1cnJvdW5kaW5nQ2VsbHMuaW5kZXhPZihjZWxsIC0gMSksIDEpO1xuICAgIH1cbiAgICBjb25zdCByZXZpc2VkQ2VsbHMgPSBzdXJyb3VuZGluZ0NlbGxzLmZpbHRlcihcbiAgICAgIChudW1iZXIpID0+IG51bWJlciA8IDk5ICYmIG51bWJlciA+IDBcbiAgICApO1xuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IHJldmlzZWRDZWxscy5yZWR1Y2UoKGNlbGxzLCBjdXJyKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgIGdhbWVib2FyZC5ib2FyZFtjdXJyXSA9PT0gbnVsbCB8fFxuICAgICAgICAoZ2FtZWJvYXJkLmJvYXJkW2N1cnJdLmlzSGl0ICE9PSB0cnVlICYmXG4gICAgICAgICAgZ2FtZWJvYXJkLmJvYXJkW2N1cnJdLmlzTWlzc2VkICE9PSB0cnVlKVxuICAgICAgKVxuICAgICAgICBjZWxscy5wdXNoKGN1cnIpO1xuICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH0sIFtdKTtcbiAgICByZXR1cm4gbGVnYWxBdHRhY2tzO1xuICB9XG5cbiAgc3RhdGljIGZpbmRCZXN0TW92ZShnYW1lYm9hcmQpIHtcbiAgICBjb25zdCBoaXRzID0gdGhpcy5kZXRlY3RTaGlwcyhnYW1lYm9hcmQpO1xuICAgIGlmIChoaXRzLmxlbmd0aCA9PT0gMCkgcmV0dXJuIHRoaXMucmFuZG9tQXR0YWNrKGdhbWVib2FyZCk7XG4gICAgY29uc3QgcG9zc2libGVUYXJnZXRzID0gW107XG4gICAgaGl0cy5mb3JFYWNoKChoaXQpID0+IHtcbiAgICAgIHBvc3NpYmxlVGFyZ2V0cy5wdXNoKHRoaXMuZmluZFN1cnJvdW5kaW5nQ2VsbHMoaGl0LCBnYW1lYm9hcmQpKTtcbiAgICB9KTtcbiAgICBjb25zdCBmbGF0QXJyYXkgPSBwb3NzaWJsZVRhcmdldHMuZmxhdCgpO1xuICAgIHJldHVybiBmbGF0QXJyYXlbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZmxhdEFycmF5Lmxlbmd0aCldO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFBsYXllcjtcbiIsImNsYXNzIFNoaXAge1xuICBjb25zdHJ1Y3RvcihsZW5ndGgsIHZlcnRpY2FsKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gQXJyYXkobGVuZ3RoKS5maWxsKG51bGwpO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICAgIHRoaXMudmVydGljYWwgPSB2ZXJ0aWNhbDtcbiAgfVxuXG4gIGhpdChwYXJ0KSB7XG4gICAgdGhpcy5oaXRzW3BhcnRdID0gJ2hpdCc7XG4gICAgdGhpcy5pc1N1bmsoKTtcbiAgfVxuXG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRzLmV2ZXJ5KChoaXQpID0+IGhpdCA9PT0gJ2hpdCcpKSB0aGlzLnN1bmsgPSB0cnVlO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IFNoaXA7XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIi5nYW1lYm9hcmQxLFxcbi5nYW1lYm9hcmQyIHtcXG4gIG91dGxpbmU6IDAuMXJlbSBibGFjayBzb2xpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMjVyZW07XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmNlbGwge1xcbiAgYm9yZGVyOiAwLjFyZW0gYmxhY2sgc29saWQ7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcXG4gIC53cmFwcGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgLmJvYXJkcy13cmFwcGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5nYW1lYm9hcmQxLFxcbiAgLmdhbWVib2FyZDIge1xcbiAgICB3aWR0aDogMThyZW07XFxuICAgIGhlaWdodDogMThyZW07XFxuICB9XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7RUFFRSwyQkFBMkI7RUFDM0IsYUFBYTtFQUNiLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0NBQXNDO0VBQ3RDLG1DQUFtQztFQUNuQyxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtBQUNkOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZCOztBQUVBO0VBQ0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UseUJBQXlCO0FBQzNCOztBQUVBO0VBQ0U7SUFDRSw4QkFBOEI7RUFDaEM7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtFQUNBOztJQUVFLFlBQVk7SUFDWixhQUFhO0VBQ2Y7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIuZ2FtZWJvYXJkMSxcXG4uZ2FtZWJvYXJkMiB7XFxuICBvdXRsaW5lOiAwLjFyZW0gYmxhY2sgc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5jZWxsIHtcXG4gIGJvcmRlcjogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XFxuICAud3JhcHBlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC5ib2FyZHMtd3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZ2FtZWJvYXJkMSxcXG4gIC5nYW1lYm9hcmQyIHtcXG4gICAgd2lkdGg6IDE4cmVtO1xcbiAgICBoZWlnaHQ6IDE4cmVtO1xcbiAgfVxcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCJib2R5IHtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwdnc7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbn1cXG5cXG4ud3JhcHBlciB7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4uYm9hcmRzLXdyYXBwZXIge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxuICBtYXgtaGVpZ2h0OiAxMDAlO1xcbiAgbWF4LXdpZHRoOiAxMDAlO1xcbn1cXG5cXG4udG9wIHtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxNnZoO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi50b3AtaGVhZGVyIHtcXG4gIGZvbnQtc2l6ZTogMi41cmVtO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogZmxleC1zdGFydDtcXG59XFxuXFxuLnRvcC1wYW5lbCB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGhlaWdodDogMTAwJTtcXG59XFxuXFxuLnNoaXAtZHJhZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5jYXJyaWVyLFxcbi5iYXR0bGVzaGlwLFxcbi5zdWJtYXJpbmUsXFxuLmNydWlzZXIsXFxuLmRlc3Ryb3llciB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxuICBib3JkZXI6IDAuMXJlbSBibGFjayBzb2xpZDtcXG59XFxuXFxuLmJ1dHRvbnMge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1jb250YWluZXItaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idXR0b25zLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixTQUFTO0VBQ1QsVUFBVTtBQUNaOztBQUVBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCxhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGdCQUFnQjtFQUNoQixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0VBQ3RCLHVCQUF1QjtFQUN2QixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixhQUFhO0VBQ2IsdUJBQXVCO0VBQ3ZCLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsWUFBWTtBQUNkOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtBQUN6Qjs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLGtCQUFrQjtBQUNwQjs7QUFFQTs7Ozs7RUFLRSxhQUFhO0VBQ2IsY0FBYztFQUNkLHFCQUFxQjtFQUNyQiwwQkFBMEI7QUFDNUI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b3Age1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udG9wLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2hpcC1kcmFnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtY29udGFpbmVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLmNhcnJpZXIsXFxuLmJhdHRsZXNoaXAsXFxuLnN1Ym1hcmluZSxcXG4uY3J1aXNlcixcXG4uZGVzdHJveWVyIHtcXG4gIHdpZHRoOiAyLjVyZW07XFxuICBoZWlnaHQ6IDIuNXJlbTtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGJvcmRlcjogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGlwLWNvbnRhaW5lci1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnMtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2dhbWVib2FyZC5jc3MnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uYW1lZFxuaW1wb3J0IHsgbG9naWMgfSBmcm9tICcuL21vZHVsZXMvbG9naWMnO1xuaW1wb3J0IHsgcmVuZGVyQWxsIH0gZnJvbSAnLi9tb2R1bGVzL2RvbSc7XG5pbXBvcnQgZHJhZ25kcm9wIGZyb20gJy4vbW9kdWxlcy9kcmFnbmRyb3AnO1xuXG5sb2dpYy5pbml0YWxpemVHYW1lKCk7XG5sb2dpYy5wbGFjZUNvbXB1dGVyU2hpcHMoKTtcbnJlbmRlckFsbCgpO1xuZHJhZ25kcm9wLmFwcGx5TGlzdGVuZXJzKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9