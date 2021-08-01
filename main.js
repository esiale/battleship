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
    board.append(newCell);
  }

  var wrapper = document.querySelector('.boards-wrapper');
  wrapper.append(board);
};

var renderPreview = function renderPreview(length) {
  var shipPreview = document.querySelector('.ship-preview');
  shipPreview.dataset.length = length;
  shipPreview.dataset.vertical = false;

  for (var i = 0; i < length; i += 1) {
    var shipDrag = document.querySelector('.ship-drag');
    var cell = document.createElement('div');
    cell.className = 'preview-cell';
    shipDrag.appendChild(cell);
  }
};

var rotateShip = function rotateShip() {
  var shipPreview = document.querySelector('.ship-preview');
  var shipDrag = document.querySelector('.ship-drag');
  var rotateButton = document.querySelector('.rotate-btn');

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
  var shipPreview = document.querySelector('.ship-preview');

  while (shipPreview.firstChild) {
    shipPreview.firstChild.remove();
  }

  shipPreview.dataset.length = 5;
  renderPreview(5);
};

var prepareStart = function prepareStart() {
  var shipPreview = document.querySelector('.ship-preview');
  shipPreview.className = 'ship-preview-hidden';
  var buttons = document.querySelector('.buttons');
  buttons.className = 'buttons-hidden';
  var computerCells = document.querySelectorAll('.gameboard2 .cell');
  computerCells.forEach(function (item) {
    item.addEventListener('click', initiateAttack);
  });
};

var nextShip = function nextShip() {
  var shipPreview = document.querySelector('.ship-preview');
  var shipDrag = document.querySelector('.ship-drag');

  if (+shipPreview.dataset.length === 5) {
    shipDrag.removeChild(shipDrag.lastChild);
    shipPreview.dataset.length = 4;
  } else if (+shipPreview.dataset.length === 4) {
    shipDrag.removeChild(shipDrag.lastChild);
    shipPreview.dataset.length = 3;
  } else if (+shipPreview.dataset.length === 3 && _logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.gameboards.gameboard1.ships.length === 4) {
    shipDrag.removeChild(shipDrag.lastChild);
    shipPreview.dataset.length = 2;
  } else if (_logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.gameboards.gameboard1.ships.length === 5) {
    prepareStart();
  }
};

var handleShipPlacement = function handleShipPlacement(e) {
  var targetCell = e.target;
  var shipPreview = document.querySelector('.ship-preview');
  if (_logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.gameboards.gameboard1.ships.length === 5) return;

  if (_logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.gameboards.gameboard1.placePlayerShip(targetCell, shipPreview)) {
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
  renderPreview(5); // FOR STYLING - REMOVE BEFORE PUBLISHING //

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


var highlightPlacement = function highlightPlacement(e) {
  var cells = document.querySelectorAll('.gameboard1 .cell');
  var shipPreview = document.querySelector('.ship-preview');
  var length = +shipPreview.dataset.length;
  var highlightedCells = [];
  var cellIndex = +e.target.dataset.index;

  if (shipPreview.dataset.vertical === 'false') {
    for (var i = 0; i < length; i += 1) {
      highlightedCells.push(cellIndex + i);
    }

    var rightBorder = [9, 19, 29, 39, 49, 59, 69, 79, 89];
    var borderCell = rightBorder.filter(function (number) {
      return [number, number + 1].every(function (item) {
        return highlightedCells.includes(item);
      });
    });

    if (borderCell.length === 1) {
      var index = highlightedCells.indexOf(borderCell[0]) + 1;
      highlightedCells.splice(index);
    }
  } else if (shipPreview.dataset.vertical === 'true') {
    for (var _i = 0; _i < length; _i += 1) {
      highlightedCells.push(cellIndex + _i * 10);
    }
  }

  cells.forEach(function (cell, index) {
    if (highlightedCells.includes(index) && !cell.classList.contains('ship')) cell.classList.add('highlight');
  });
};

var removeHighlightPlacement = function removeHighlightPlacement() {
  var cells = document.querySelectorAll('.gameboard1 .cell');
  cells.forEach(function (cell) {
    return cell.classList.remove('highlight');
  });
};

var dragndrop = {
  applyListeners: function applyListeners() {
    var shipDrag = document.querySelector('.ship-drag');
    shipDrag.addEventListener('dragstart', dragndrop.handleDragStart);
    shipDrag.addEventListener('dragend', dragndrop.handleDragEnd);
    var cells = document.querySelectorAll('.gameboard1 .cell');
    cells.forEach(function (cell) {
      cell.addEventListener('dragenter', dragndrop.handleDragEnter);
      cell.addEventListener('dragover', dragndrop.handleDragOver);
      cell.addEventListener('dragleave', dragndrop.handleDragLeave);
      cell.addEventListener('drop', dragndrop.handleDrop);
    });
  },
  handleDragStart: function handleDragStart(e) {
    setTimeout(function () {
      e.target.classList.add('hide');
    }, 0);
  },
  handleDragEnter: function handleDragEnter(e) {
    e.preventDefault();
    highlightPlacement(e);
  },
  handleDragOver: function handleDragOver(e) {
    e.preventDefault();
    highlightPlacement(e);
  },
  handleDragLeave: function handleDragLeave(e) {
    e.preventDefault();
    setTimeout(function () {
      removeHighlightPlacement(e);
    }, 10);
  },
  handleDragEnd: function handleDragEnd() {
    var shipDrag = document.querySelector('.ship-drag');
    shipDrag.classList.remove('hide');
  },
  handleDrop: function handleDrop(e) {
    removeHighlightPlacement(e);
    (0,_dom__WEBPACK_IMPORTED_MODULE_0__.handleShipPlacement)(e);
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
    value: function placePlayerShip(target, preview) {
      var locationArray = [];

      if (preview.dataset.vertical === 'false') {
        for (var i = 0; i < preview.dataset.length; i += 1) {
          locationArray.push(parseInt(target.dataset.index, 10) + i);
        }
      }

      if (preview.dataset.vertical === 'true') {
        for (var _i = 0; _i < preview.dataset.length; _i += 1) {
          locationArray.push(parseInt(target.dataset.index, 10) + _i * 10);
        }
      }

      if (this.checkForConflicts(locationArray) === true) {
        this.addShip(locationArray, parseInt(preview.dataset.length, 10));
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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.boards-wrapper {\n  display: flex;\n  flex-direction: row;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.top {\n  width: 100%;\n  height: 16vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.top-header {\n  font-size: 2.5rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.top-panel {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.ship-preview {\n  display: flex;\n  justify-content: center;\n}\n\n.ship-drag {\n  display: flex;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.preview-cell {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: red;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n}\n\n.ship-preview-hidden {\n  display: none;\n}\n\n.buttons-hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf","sourcesContent":["body {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.boards-wrapper {\n  display: flex;\n  flex-direction: row;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.top {\n  width: 100%;\n  height: 16vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.top-header {\n  font-size: 2.5rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.top-panel {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.ship-preview {\n  display: flex;\n  justify-content: center;\n}\n\n.ship-drag {\n  display: flex;\n}\n\n.hide {\n  visibility: hidden;\n}\n\n.preview-cell {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: red;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n}\n\n.ship-preview-hidden {\n  display: none;\n}\n\n.buttons-hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2NsYXNzQ2FsbENoZWNrLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vY3JlYXRlQ2xhc3MuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2RvbS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZHJhZ25kcm9wLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2xvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcz8yMTg3Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbmNsdWRlR2FtZSIsInBsYXllciIsImFsZXJ0IiwidXBkYXRlQm9hcmQiLCJhY3Rpb24iLCJ0YXJnZXQiLCJib2FyZCIsImdhbWVib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNlbGwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJmb3JFYWNoIiwiaXRlbSIsInN1bmtDZWxsIiwiaW5pdGlhdGVBdHRhY2siLCJlIiwiZGF0YXNldCIsImluZGV4IiwiY2VsbHMiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZmVlZGJhY2siLCJsb2dpYyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJjb21wdXRlckZlZWRiYWNrIiwic2V0VGltZW91dCIsImNvbnRhaW5zIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRyYXdTaGlwcyIsImRvbUJvYXJkIiwibmFtZSIsInNoaXBDZWxsIiwicmVuZGVyQm9hcmQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwiaSIsImxlbmd0aCIsIm5ld0NlbGwiLCJhcHBlbmQiLCJ3cmFwcGVyIiwicmVuZGVyUHJldmlldyIsInNoaXBQcmV2aWV3IiwidmVydGljYWwiLCJzaGlwRHJhZyIsImFwcGVuZENoaWxkIiwicm90YXRlU2hpcCIsInJvdGF0ZUJ1dHRvbiIsInRleHRDb250ZW50Iiwic3R5bGUiLCJmbGV4RGlyZWN0aW9uIiwicmVzZXRTaGlwcyIsInNoaXBzIiwiZmlyc3RDaGlsZCIsInByZXBhcmVTdGFydCIsImJ1dHRvbnMiLCJjb21wdXRlckNlbGxzIiwibmV4dFNoaXAiLCJyZW1vdmVDaGlsZCIsImxhc3RDaGlsZCIsImhhbmRsZVNoaXBQbGFjZW1lbnQiLCJ0YXJnZXRDZWxsIiwiYXBwbHlMaXN0ZW5lcnMiLCJyZXNldEJ1dHRvbiIsInJlbmRlckFsbCIsImhpZ2hsaWdodFBsYWNlbWVudCIsImhpZ2hsaWdodGVkQ2VsbHMiLCJjZWxsSW5kZXgiLCJwdXNoIiwicmlnaHRCb3JkZXIiLCJib3JkZXJDZWxsIiwiZmlsdGVyIiwibnVtYmVyIiwiZXZlcnkiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJzcGxpY2UiLCJyZW1vdmVIaWdobGlnaHRQbGFjZW1lbnQiLCJkcmFnbmRyb3AiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiaGFuZGxlRHJhZ0VudGVyIiwiaGFuZGxlRHJhZ092ZXIiLCJoYW5kbGVEcmFnTGVhdmUiLCJoYW5kbGVEcm9wIiwicHJldmVudERlZmF1bHQiLCJHYW1lYm9hcmQiLCJBcnJheSIsImZpbGwiLCJjb29yZGluYXRlcyIsIlNoaXAiLCJpZCIsInBhcnQiLCJpc0hpdCIsImNvb3JkaW5hdGUiLCJpc01pc3NlZCIsImhpdCIsInNoaXAiLCJzdW5rIiwibG9jYXRpb24iLCJzb21lIiwiTWF0aCIsInJhbmRvbSIsInZhbGlkTG9jYXRpb25zIiwicG9zc2libGVMb2NhdGlvbnMiLCJ5IiwiY2hlY2tGb3JDb25mbGljdHMiLCJmbG9vciIsInByZXZpZXciLCJsb2NhdGlvbkFycmF5IiwicGFyc2VJbnQiLCJhZGRTaGlwIiwibGVnYWxBdHRhY2tzIiwicmVkdWNlIiwiY3VyciIsInJhbmRvbUxlZ2FsIiwiZGF0YSIsImdhbWVib2FyZHMiLCJwbGF5ZXJzIiwiaW5pdGFsaXplR2FtZSIsImdhbWVib2FyZDEiLCJnYW1lYm9hcmQyIiwiaW5pdCIsInBsYXllcjEiLCJQbGF5ZXIiLCJwbGF5ZXIyIiwicGxhY2VDb21wdXRlclNoaXBzIiwiZmluZFJhbmRvbVNoaXBMb2NhdGlvbiIsInByb2Nlc3NBdHRhY2siLCJyZXN1bHQiLCJyZWNlaXZlQXR0YWNrIiwiYWxsU3VuayIsInNoaXBJbmRleCIsImFsbFNoaXBzQ29yZHMiLCJhY2MiLCJlbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJzdW5rU2hpcENvcmRzIiwicmVwb3J0QWxsU3VuayIsImluaXRpYXRlQ29tcHV0ZXJNb3ZlIiwicGxheWVyQm9hcmQiLCJyYW5kb21Nb3ZlIiwiaGl0cyIsImlzU3VuayJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBZTtBQUNmO0FBQ0E7QUFDQTtBQUNBLEM7Ozs7Ozs7Ozs7Ozs7O0FDSkE7QUFDQSxpQkFBaUIsa0JBQWtCO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlO0FBQ2Y7QUFDQTtBQUNBO0FB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L0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUM7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQW5FLCtEQUFBO0FBQ0FBLG9FQUFBO0FBQ0F5Qyx1REFBUztBQUNUYyxzRUFBQSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soaW5zdGFuY2UsIENvbnN0cnVjdG9yKSB7XG4gIGlmICghKGluc3RhbmNlIGluc3RhbmNlb2YgQ29uc3RydWN0b3IpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbiAgfVxufSIsImZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKHRhcmdldCwgcHJvcHMpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBkZXNjcmlwdG9yID0gcHJvcHNbaV07XG4gICAgZGVzY3JpcHRvci5lbnVtZXJhYmxlID0gZGVzY3JpcHRvci5lbnVtZXJhYmxlIHx8IGZhbHNlO1xuICAgIGRlc2NyaXB0b3IuY29uZmlndXJhYmxlID0gdHJ1ZTtcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGRlc2NyaXB0b3IpIGRlc2NyaXB0b3Iud3JpdGFibGUgPSB0cnVlO1xuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGRlc2NyaXB0b3Iua2V5LCBkZXNjcmlwdG9yKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBfY3JlYXRlQ2xhc3MoQ29uc3RydWN0b3IsIHByb3RvUHJvcHMsIHN0YXRpY1Byb3BzKSB7XG4gIGlmIChwcm90b1Byb3BzKSBfZGVmaW5lUHJvcGVydGllcyhDb25zdHJ1Y3Rvci5wcm90b3R5cGUsIHByb3RvUHJvcHMpO1xuICBpZiAoc3RhdGljUHJvcHMpIF9kZWZpbmVQcm9wZXJ0aWVzKENvbnN0cnVjdG9yLCBzdGF0aWNQcm9wcyk7XG4gIHJldHVybiBDb25zdHJ1Y3Rvcjtcbn0iLCIvKiBlc2xpbnQtZGlzYWJsZSBuby1wcm90b3R5cGUtYnVpbHRpbnMgKi9cbmltcG9ydCB7IGxvZ2ljIH0gZnJvbSAnLi9sb2dpYyc7XG5cbmNvbnN0IGNvbmNsdWRlR2FtZSA9IChwbGF5ZXIpID0+IHtcbiAgYWxlcnQoYCR7cGxheWVyfSBoYXMgbG9zdCFgKTtcbn07XG5cbmNvbnN0IHVwZGF0ZUJvYXJkID0gKGFjdGlvbiwgdGFyZ2V0LCBib2FyZCkgPT4ge1xuICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtib2FyZH1gKTtcbiAgY29uc3QgY2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHt0YXJnZXR9J11gKTtcbiAgc3dpdGNoIChhY3Rpb24pIHtcbiAgICBjYXNlICdoaXQnOlxuICAgICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpdCcpO1xuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnbWlzc2VkJzpcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XG4gICAgICBicmVhaztcbiAgICBjYXNlICdzdW5rJzpcbiAgICAgIHRhcmdldC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIGNvbnN0IHN1bmtDZWxsID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2l0ZW19J11gKTtcbiAgICAgICAgc3Vua0NlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGl0Jyk7XG4gICAgICAgIHN1bmtDZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICAgIH0pO1xuICAgICAgYnJlYWs7XG4gICAgZGVmYXVsdDpcbiAgfVxufTtcblxuY29uc3QgaW5pdGlhdGVBdHRhY2sgPSAoZSkgPT4ge1xuICBjb25zdCBjZWxsID0gZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgY29uc3QgYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuZ2FtZWJvYXJkMmApO1xuICBjb25zdCBjZWxscyA9IGJvYXJkLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpdicpO1xuICBjb25zdCBmZWVkYmFjayA9IGxvZ2ljLnByb2Nlc3NBdHRhY2soY2VsbCwgJ2dhbWVib2FyZDInKTtcbiAgdXBkYXRlQm9hcmQoZmVlZGJhY2suYWN0aW9uLCBmZWVkYmFjay5jZWxsLCBmZWVkYmFjay5ib2FyZCk7XG4gIGNlbGxzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICBpdGVtLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5pdGlhdGVBdHRhY2spO1xuICB9KTtcbiAgY29uc3QgY29tcHV0ZXJGZWVkYmFjayA9IGxvZ2ljLmluaXRpYXRlQ29tcHV0ZXJNb3ZlKCk7XG4gIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgIHVwZGF0ZUJvYXJkKFxuICAgICAgY29tcHV0ZXJGZWVkYmFjay5hY3Rpb24sXG4gICAgICBjb21wdXRlckZlZWRiYWNrLmNlbGwsXG4gICAgICBjb21wdXRlckZlZWRiYWNrLmJvYXJkXG4gICAgKTtcbiAgICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBpZiAoXG4gICAgICAgICFpdGVtLmNsYXNzTGlzdC5jb250YWlucygnaGl0JykgJiZcbiAgICAgICAgIWl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdtaXNzZWQnKSAmJlxuICAgICAgICAhaXRlbS5jbGFzc0xpc3QuY29udGFpbnMoJ3N1bmsnKVxuICAgICAgKSB7XG4gICAgICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBpbml0aWF0ZUF0dGFjayk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0sIDUwMCk7XG59O1xuXG5jb25zdCBkcmF3U2hpcHMgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gIGdhbWVib2FyZC5ib2FyZC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpdGVtID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgZG9tQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtnYW1lYm9hcmQubmFtZX1gKTtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRvbUJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2luZGV4fSddYCk7XG4gICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlckJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZC5jbGFzc05hbWUgPSBnYW1lYm9hcmQubmFtZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3Q2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgbmV3Q2VsbC5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICBib2FyZC5hcHBlbmQobmV3Q2VsbCk7XG4gIH1cbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtd3JhcHBlcicpO1xuICB3cmFwcGVyLmFwcGVuZChib2FyZCk7XG59O1xuXG5jb25zdCByZW5kZXJQcmV2aWV3ID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBzaGlwUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXByZXZpZXcnKTtcbiAgc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGggPSBsZW5ndGg7XG4gIHNoaXBQcmV2aWV3LmRhdGFzZXQudmVydGljYWwgPSBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXBEcmFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZHJhZycpO1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZWxsLmNsYXNzTmFtZSA9ICdwcmV2aWV3LWNlbGwnO1xuICAgIHNoaXBEcmFnLmFwcGVuZENoaWxkKGNlbGwpO1xuICB9XG59O1xuXG5jb25zdCByb3RhdGVTaGlwID0gKCkgPT4ge1xuICBjb25zdCBzaGlwUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXByZXZpZXcnKTtcbiAgY29uc3Qgc2hpcERyYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1kcmFnJyk7XG4gIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtYnRuJyk7XG4gIGlmIChzaGlwUHJldmlldy5kYXRhc2V0LnZlcnRpY2FsID09PSAnZmFsc2UnKSB7XG4gICAgc2hpcFByZXZpZXcuZGF0YXNldC52ZXJ0aWNhbCA9ICd0cnVlJztcbiAgICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICAgIHNoaXBEcmFnLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgfSBlbHNlIHtcbiAgICBzaGlwUHJldmlldy5kYXRhc2V0LnZlcnRpY2FsID0gJ2ZhbHNlJztcbiAgICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG4gICAgc2hpcERyYWcuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3cnO1xuICB9XG59O1xuXG5jb25zdCByZXNldFNoaXBzID0gKCkgPT4ge1xuICBjb25zdCBnYW1lYm9hcmQgPSBsb2dpYy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMTtcbiAgZ2FtZWJvYXJkLnNoaXBzID0gW107XG4gIGdhbWVib2FyZC5ib2FyZC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpdGVtICE9PSBudWxsKSBnYW1lYm9hcmQuYm9hcmRbaW5kZXhdID0gbnVsbDtcbiAgfSk7XG4gIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDEgLmNlbGwnKTtcbiAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKSBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgfSk7XG4gIGNvbnN0IHNoaXBQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtcHJldmlldycpO1xuICB3aGlsZSAoc2hpcFByZXZpZXcuZmlyc3RDaGlsZCkge1xuICAgIHNoaXBQcmV2aWV3LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGggPSA1O1xuICByZW5kZXJQcmV2aWV3KDUpO1xufTtcblxuY29uc3QgcHJlcGFyZVN0YXJ0ID0gKCkgPT4ge1xuICBjb25zdCBzaGlwUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXByZXZpZXcnKTtcbiAgc2hpcFByZXZpZXcuY2xhc3NOYW1lID0gJ3NoaXAtcHJldmlldy1oaWRkZW4nO1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKTtcbiAgYnV0dG9ucy5jbGFzc05hbWUgPSAnYnV0dG9ucy1oaWRkZW4nO1xuICBjb25zdCBjb21wdXRlckNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDIgLmNlbGwnKTtcbiAgY29tcHV0ZXJDZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaXRlbS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluaXRpYXRlQXR0YWNrKTtcbiAgfSk7XG59O1xuXG5jb25zdCBuZXh0U2hpcCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcFByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1wcmV2aWV3Jyk7XG4gIGNvbnN0IHNoaXBEcmFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZHJhZycpO1xuICBpZiAoK3NoaXBQcmV2aWV3LmRhdGFzZXQubGVuZ3RoID09PSA1KSB7XG4gICAgc2hpcERyYWcucmVtb3ZlQ2hpbGQoc2hpcERyYWcubGFzdENoaWxkKTtcbiAgICBzaGlwUHJldmlldy5kYXRhc2V0Lmxlbmd0aCA9IDQ7XG4gIH0gZWxzZSBpZiAoK3NoaXBQcmV2aWV3LmRhdGFzZXQubGVuZ3RoID09PSA0KSB7XG4gICAgc2hpcERyYWcucmVtb3ZlQ2hpbGQoc2hpcERyYWcubGFzdENoaWxkKTtcbiAgICBzaGlwUHJldmlldy5kYXRhc2V0Lmxlbmd0aCA9IDM7XG4gIH0gZWxzZSBpZiAoXG4gICAgK3NoaXBQcmV2aWV3LmRhdGFzZXQubGVuZ3RoID09PSAzICYmXG4gICAgbG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEuc2hpcHMubGVuZ3RoID09PSA0XG4gICkge1xuICAgIHNoaXBEcmFnLnJlbW92ZUNoaWxkKHNoaXBEcmFnLmxhc3RDaGlsZCk7XG4gICAgc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGggPSAyO1xuICB9IGVsc2UgaWYgKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLnNoaXBzLmxlbmd0aCA9PT0gNSkge1xuICAgIHByZXBhcmVTdGFydCgpO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVTaGlwUGxhY2VtZW50ID0gKGUpID0+IHtcbiAgY29uc3QgdGFyZ2V0Q2VsbCA9IGUudGFyZ2V0O1xuICBjb25zdCBzaGlwUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXByZXZpZXcnKTtcbiAgaWYgKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLnNoaXBzLmxlbmd0aCA9PT0gNSkgcmV0dXJuO1xuICBpZiAoXG4gICAgbG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEucGxhY2VQbGF5ZXJTaGlwKHRhcmdldENlbGwsIHNoaXBQcmV2aWV3KVxuICApIHtcbiAgICBkcmF3U2hpcHMobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEpO1xuICAgIG5leHRTaGlwKCk7XG4gIH1cbn07XG5cbmNvbnN0IGFwcGx5TGlzdGVuZXJzID0gKCkgPT4ge1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnRuJyk7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRTaGlwcyk7XG59O1xuXG5jb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG4gIHJlbmRlckJvYXJkKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxKTtcbiAgcmVuZGVyQm9hcmQobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDIpO1xuICByZW5kZXJQcmV2aWV3KDUpO1xuICAvLyBGT1IgU1RZTElORyAtIFJFTU9WRSBCRUZPUkUgUFVCTElTSElORyAvL1xuICBkcmF3U2hpcHMobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDIpO1xuICBhcHBseUxpc3RlbmVycygpO1xufTtcblxuZXhwb3J0IHsgcmVuZGVyQWxsLCByZXNldFNoaXBzLCBoYW5kbGVTaGlwUGxhY2VtZW50IH07XG4iLCJpbXBvcnQgeyBoYW5kbGVTaGlwUGxhY2VtZW50IH0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBoaWdobGlnaHRQbGFjZW1lbnQgPSAoZSkgPT4ge1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxIC5jZWxsJyk7XG4gIGNvbnN0IHNoaXBQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtcHJldmlldycpO1xuICBjb25zdCBsZW5ndGggPSArc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGg7XG4gIGNvbnN0IGhpZ2hsaWdodGVkQ2VsbHMgPSBbXTtcbiAgY29uc3QgY2VsbEluZGV4ID0gK2UudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIGlmIChzaGlwUHJldmlldy5kYXRhc2V0LnZlcnRpY2FsID09PSAnZmFsc2UnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaGlnaGxpZ2h0ZWRDZWxscy5wdXNoKGNlbGxJbmRleCArIGkpO1xuICAgIH1cbiAgICBjb25zdCByaWdodEJvcmRlciA9IFs5LCAxOSwgMjksIDM5LCA0OSwgNTksIDY5LCA3OSwgODldO1xuICAgIGNvbnN0IGJvcmRlckNlbGwgPSByaWdodEJvcmRlci5maWx0ZXIoKG51bWJlcikgPT5cbiAgICAgIFtudW1iZXIsIG51bWJlciArIDFdLmV2ZXJ5KChpdGVtKSA9PiBoaWdobGlnaHRlZENlbGxzLmluY2x1ZGVzKGl0ZW0pKVxuICAgICk7XG4gICAgaWYgKGJvcmRlckNlbGwubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGhpZ2hsaWdodGVkQ2VsbHMuaW5kZXhPZihib3JkZXJDZWxsWzBdKSArIDE7XG4gICAgICBoaWdobGlnaHRlZENlbGxzLnNwbGljZShpbmRleCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHNoaXBQcmV2aWV3LmRhdGFzZXQudmVydGljYWwgPT09ICd0cnVlJykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGhpZ2hsaWdodGVkQ2VsbHMucHVzaChjZWxsSW5kZXggKyBpICogMTApO1xuICAgIH1cbiAgfVxuICBjZWxscy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgIGlmIChoaWdobGlnaHRlZENlbGxzLmluY2x1ZGVzKGluZGV4KSAmJiAhY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSlcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlSGlnaGxpZ2h0UGxhY2VtZW50ID0gKCkgPT4ge1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxIC5jZWxsJyk7XG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0JykpO1xufTtcblxuY29uc3QgZHJhZ25kcm9wID0ge1xuICBhcHBseUxpc3RlbmVycygpIHtcbiAgICBjb25zdCBzaGlwRHJhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWRyYWcnKTtcbiAgICBzaGlwRHJhZy5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnbmRyb3AuaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgICBzaGlwRHJhZy5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ25kcm9wLmhhbmRsZURyYWdFbmQpO1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDEgLmNlbGwnKTtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWduZHJvcC5oYW5kbGVEcmFnRW50ZXIpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWduZHJvcC5oYW5kbGVEcmFnT3Zlcik7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWduZHJvcC5oYW5kbGVEcmFnTGVhdmUpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJhZ25kcm9wLmhhbmRsZURyb3ApO1xuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZURyYWdTdGFydChlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSwgMCk7XG4gIH0sXG5cbiAgaGFuZGxlRHJhZ0VudGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGlnaGxpZ2h0UGxhY2VtZW50KGUpO1xuICB9LFxuXG4gIGhhbmRsZURyYWdPdmVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGlnaGxpZ2h0UGxhY2VtZW50KGUpO1xuICB9LFxuXG4gIGhhbmRsZURyYWdMZWF2ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVtb3ZlSGlnaGxpZ2h0UGxhY2VtZW50KGUpO1xuICAgIH0sIDEwKTtcbiAgfSxcblxuICBoYW5kbGVEcmFnRW5kKCkge1xuICAgIGNvbnN0IHNoaXBEcmFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZHJhZycpO1xuICAgIHNoaXBEcmFnLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfSxcblxuICBoYW5kbGVEcm9wKGUpIHtcbiAgICByZW1vdmVIaWdobGlnaHRQbGFjZW1lbnQoZSk7XG4gICAgaGFuZGxlU2hpcFBsYWNlbWVudChlKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRyYWduZHJvcDtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5KDEwMCkuZmlsbChudWxsKTtcbiAgfVxuXG4gIGFkZFNoaXAoY29vcmRpbmF0ZXMsIGxlbmd0aCkge1xuICAgIHRoaXMuc2hpcHMucHVzaChuZXcgU2hpcChsZW5ndGgpKTtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5ib2FyZFtpdGVtXSA9IHtcbiAgICAgICAgaWQ6IHRoaXMuc2hpcHMubGVuZ3RoIC0gMSxcbiAgICAgICAgcGFydDogaW5kZXgsXG4gICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5ib2FyZFtjb29yZGluYXRlXSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlXSA9IHsgaXNNaXNzZWQ6IHRydWUgfTtcbiAgICAgIHJldHVybiAnbWlzc2VkJztcbiAgICB9XG4gICAgdGhpcy5zaGlwc1t0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLmlkXS5oaXQodGhpcy5ib2FyZFtjb29yZGluYXRlXS5wYXJ0KTtcbiAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLmlzSGl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gJ2hpdCc7XG4gIH1cblxuICByZXBvcnRBbGxTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN1bmsgPT09IHRydWUpO1xuICB9XG5cbiAgY2hlY2tGb3JDb25mbGljdHMobG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24uc29tZSgoaXRlbSkgPT4gaXRlbSA+IDk5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcmlnaHRCb3JkZXIgPSBbOSwgMTksIDI5LCAzOSwgNDksIDU5LCA2OSwgNzksIDg5XTtcbiAgICBpZiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyb3ctYm9keS1zdHlsZVxuICAgICAgcmlnaHRCb3JkZXIuc29tZSgobnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBbbnVtYmVyLCBudW1iZXIgKyAxXS5ldmVyeSgoaXRlbSkgPT4gbG9jYXRpb24uaW5jbHVkZXMoaXRlbSkpO1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uc29tZSgoaXRlbSkgPT4gdGhpcy5ib2FyZFtpdGVtXSAhPT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmaW5kUmFuZG9tU2hpcExvY2F0aW9uKGxlbmd0aCkge1xuICAgIGNvbnN0IHZlcnRpY2FsID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcbiAgICBjb25zdCB2YWxpZExvY2F0aW9ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAgLSBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcG9zc2libGVMb2NhdGlvbnMgPSBbXTtcbiAgICAgIGlmICh2ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmd0aDsgeSArPSAxKSB7XG4gICAgICAgICAgcG9zc2libGVMb2NhdGlvbnMucHVzaChpICsgeSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5ndGg7IHkgKz0gMSkge1xuICAgICAgICAgIHBvc3NpYmxlTG9jYXRpb25zLnB1c2goeSArIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja0ZvckNvbmZsaWN0cyhwb3NzaWJsZUxvY2F0aW9ucykpXG4gICAgICAgIHZhbGlkTG9jYXRpb25zLnB1c2gocG9zc2libGVMb2NhdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRMb2NhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRMb2NhdGlvbnMubGVuZ3RoKV07XG4gIH1cblxuICBwbGFjZVBsYXllclNoaXAodGFyZ2V0LCBwcmV2aWV3KSB7XG4gICAgY29uc3QgbG9jYXRpb25BcnJheSA9IFtdO1xuICAgIGlmIChwcmV2aWV3LmRhdGFzZXQudmVydGljYWwgPT09ICdmYWxzZScpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJldmlldy5kYXRhc2V0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGxvY2F0aW9uQXJyYXkucHVzaChwYXJzZUludCh0YXJnZXQuZGF0YXNldC5pbmRleCwgMTApICsgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcmV2aWV3LmRhdGFzZXQudmVydGljYWwgPT09ICd0cnVlJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV2aWV3LmRhdGFzZXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgbG9jYXRpb25BcnJheS5wdXNoKHBhcnNlSW50KHRhcmdldC5kYXRhc2V0LmluZGV4LCAxMCkgKyBpICogMTApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0ZvckNvbmZsaWN0cyhsb2NhdGlvbkFycmF5KSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRTaGlwKGxvY2F0aW9uQXJyYXksIHBhcnNlSW50KHByZXZpZXcuZGF0YXNldC5sZW5ndGgsIDEwKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmFuZG9tQXR0YWNrKCkge1xuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IHRoaXMuYm9hcmQucmVkdWNlKChjZWxscywgY3VyciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjdXJyID09PSBudWxsIHx8IChjdXJyLmlzSGl0ICE9PSB0cnVlICYmIGN1cnIuaXNNaXNzZWQgIT09IHRydWUpKVxuICAgICAgICBjZWxscy5wdXNoKGluZGV4KTtcbiAgICAgIHJldHVybiBjZWxscztcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgcmFuZG9tTGVnYWwgPVxuICAgICAgbGVnYWxBdHRhY2tzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlZ2FsQXR0YWNrcy5sZW5ndGgpXTtcbiAgICByZXR1cm4gcmFuZG9tTGVnYWw7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgbG9naWMgPSB7XG4gIGRhdGE6IHtcbiAgICBnYW1lYm9hcmRzOiB7fSxcbiAgICBwbGF5ZXJzOiB7fSxcbiAgfSxcblxuICBpbml0YWxpemVHYW1lKCkge1xuICAgIHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEgPSBuZXcgR2FtZWJvYXJkKCdnYW1lYm9hcmQxJyk7XG4gICAgdGhpcy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMiA9IG5ldyBHYW1lYm9hcmQoJ2dhbWVib2FyZDInKTtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLmluaXQoKTtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQyLmluaXQoKTtcbiAgICB0aGlzLmRhdGEucGxheWVycy5wbGF5ZXIxID0gbmV3IFBsYXllcignaHVtYW4nLCAnZ2FtZWJvYXJkMScpO1xuICAgIHRoaXMuZGF0YS5wbGF5ZXJzLnBsYXllcjIgPSBuZXcgUGxheWVyKCdhaScsICdnYW1lYm9hcmQyJyk7XG4gIH0sXG5cbiAgcGxhY2VDb21wdXRlclNoaXBzKCkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDI7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oNSksIDUpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDQpLCA0KTtcbiAgICBnYW1lYm9hcmQuYWRkU2hpcChnYW1lYm9hcmQuZmluZFJhbmRvbVNoaXBMb2NhdGlvbigzKSwgMyk7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oMiksIDIpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDIpLCAyKTtcbiAgfSxcblxuICBwcm9jZXNzQXR0YWNrKGNlbGwsIGJvYXJkKSB7XG4gICAgY29uc3QgZ2FtZWJvYXJkID0gdGhpcy5kYXRhLmdhbWVib2FyZHNbYm9hcmRdO1xuICAgIGNvbnN0IHJlc3VsdCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzW2JvYXJkXS5yZWNlaXZlQXR0YWNrKGNlbGwpO1xuICAgIGNvbnN0IGZlZWRiYWNrID0ge1xuICAgICAgYWN0aW9uOiBudWxsLFxuICAgICAgY2VsbDogbnVsbCxcbiAgICAgIGJvYXJkOiBudWxsLFxuICAgICAgYWxsU3VuazogZmFsc2UsXG4gICAgfTtcbiAgICBjb25zdCBzaGlwSW5kZXggPSBnYW1lYm9hcmQuYm9hcmRbY2VsbF0uaWQ7XG4gICAgaWYgKHJlc3VsdCA9PT0gJ21pc3NlZCcpIHtcbiAgICAgIGZlZWRiYWNrLmFjdGlvbiA9ICdtaXNzZWQnO1xuICAgICAgZmVlZGJhY2suY2VsbCA9IGNlbGw7XG4gICAgICBmZWVkYmFjay5ib2FyZCA9IGdhbWVib2FyZC5uYW1lO1xuICAgICAgcmV0dXJuIGZlZWRiYWNrO1xuICAgIH1cbiAgICBpZiAoZ2FtZWJvYXJkLnNoaXBzW3NoaXBJbmRleF0uc3Vuaykge1xuICAgICAgY29uc3QgYWxsU2hpcHNDb3JkcyA9IGdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoKGFjYywgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgICAgaWYgKGVsZW1lbnQgIT09IG51bGwgJiYgIWVsZW1lbnQuaGFzT3duUHJvcGVydHkoJ2lzTWlzc2VkJykpXG4gICAgICAgICAgYWNjLnB1c2goaW5kZXgpO1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfSwgW10pO1xuICAgICAgY29uc3Qgc3Vua1NoaXBDb3JkcyA9IGFsbFNoaXBzQ29yZHMucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgICAgaWYgKGdhbWVib2FyZC5ib2FyZFtlbGVtZW50XS5pZCA9PT0gc2hpcEluZGV4KSBhY2MucHVzaChlbGVtZW50KTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIFtdKTtcbiAgICAgIGZlZWRiYWNrLmFjdGlvbiA9ICdzdW5rJztcbiAgICAgIGZlZWRiYWNrLmNlbGwgPSBzdW5rU2hpcENvcmRzO1xuICAgICAgaWYgKGdhbWVib2FyZC5yZXBvcnRBbGxTdW5rKCkgPT09IHRydWUpIHtcbiAgICAgICAgZmVlZGJhY2suYWxsU3VuayA9IHRydWU7XG4gICAgICB9XG4gICAgfSBlbHNlIGlmIChyZXN1bHQgPT09ICdoaXQnKSB7XG4gICAgICBmZWVkYmFjay5hY3Rpb24gPSAnaGl0JztcbiAgICAgIGZlZWRiYWNrLmNlbGwgPSBjZWxsO1xuICAgIH1cbiAgICBmZWVkYmFjay5ib2FyZCA9IGdhbWVib2FyZC5uYW1lO1xuICAgIHJldHVybiBmZWVkYmFjaztcbiAgfSxcblxuICBpbml0aWF0ZUNvbXB1dGVyTW92ZSgpIHtcbiAgICBjb25zdCBwbGF5ZXJCb2FyZCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDE7XG4gICAgY29uc3QgcmFuZG9tTW92ZSA9IFBsYXllci5yYW5kb21BdHRhY2socGxheWVyQm9hcmQpO1xuICAgIHJldHVybiB0aGlzLnByb2Nlc3NBdHRhY2socmFuZG9tTW92ZSwgJ2dhbWVib2FyZDEnKTtcbiAgfSxcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBsb2dpYyB9O1xuIiwiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cblxuICBzdGF0aWMgcmFuZG9tQXR0YWNrKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IGdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoKGNlbGxzLCBjdXJyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGN1cnIgPT09IG51bGwgfHwgKGN1cnIuaXNIaXQgIT09IHRydWUgJiYgY3Vyci5pc01pc3NlZCAhPT0gdHJ1ZSkpXG4gICAgICAgIGNlbGxzLnB1c2goaW5kZXgpO1xuICAgICAgcmV0dXJuIGNlbGxzO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCByYW5kb21MZWdhbCA9XG4gICAgICBsZWdhbEF0dGFja3NbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVnYWxBdHRhY2tzLmxlbmd0aCldO1xuICAgIHJldHVybiByYW5kb21MZWdhbDtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCB2ZXJ0aWNhbCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IEFycmF5KGxlbmd0aCkuZmlsbChudWxsKTtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLnZlcnRpY2FsID0gdmVydGljYWw7XG4gIH1cblxuICBoaXQocGFydCkge1xuICAgIHRoaXMuaGl0c1twYXJ0XSA9ICdoaXQnO1xuICAgIHRoaXMuaXNTdW5rKCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cy5ldmVyeSgoaGl0KSA9PiBoaXQgPT09ICdoaXQnKSkgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZWJvYXJkMSxcXG4uZ2FtZWJvYXJkMiB7XFxuICBvdXRsaW5lOiAwLjFyZW0gYmxhY2sgc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5jZWxsIHtcXG4gIGJvcmRlcjogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XFxuICAud3JhcHBlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC5ib2FyZHMtd3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZ2FtZWJvYXJkMSxcXG4gIC5nYW1lYm9hcmQyIHtcXG4gICAgd2lkdGg6IDE4cmVtO1xcbiAgICBoZWlnaHQ6IDE4cmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTs7SUFFRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZDEsXFxuLmdhbWVib2FyZDIge1xcbiAgb3V0bGluZTogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGhlaWdodDogMjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDAuMXJlbSBibGFjayBzb2xpZDtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xcbiAgLndyYXBwZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAuYm9hcmRzLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmdhbWVib2FyZDEsXFxuICAuZ2FtZWJvYXJkMiB7XFxuICAgIHdpZHRoOiAxOHJlbTtcXG4gICAgaGVpZ2h0OiAxOHJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkcy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTZ2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9wLWhlYWRlciB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50b3AtcGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zaGlwLXByZXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1kcmFnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnByZXZpZXctY2VsbCB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtcHJldmlldy1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnMtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b3Age1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udG9wLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2hpcC1wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtZHJhZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5wcmV2aWV3LWNlbGwge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGlwLXByZXZpZXctaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idXR0b25zLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nYW1lYm9hcmQuY3NzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbmFtZWRcbmltcG9ydCB7IGxvZ2ljIH0gZnJvbSAnLi9tb2R1bGVzL2xvZ2ljJztcbmltcG9ydCB7IHJlbmRlckFsbCB9IGZyb20gJy4vbW9kdWxlcy9kb20nO1xuaW1wb3J0IGRyYWduZHJvcCBmcm9tICcuL21vZHVsZXMvZHJhZ25kcm9wJztcblxubG9naWMuaW5pdGFsaXplR2FtZSgpO1xubG9naWMucGxhY2VDb21wdXRlclNoaXBzKCk7XG5yZW5kZXJBbGwoKTtcbmRyYWduZHJvcC5hcHBseUxpc3RlbmVycygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==