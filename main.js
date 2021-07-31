/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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


var concludeGame = function concludeGame(player) {
  alert("".concat(player, " has lost!"));
};

var mark = function mark(action, target, gameboardName) {
  var gameboard = document.querySelector(".".concat(gameboardName));
  var cell = gameboard.querySelector("[data-index='".concat(target, "']"));

  if (action === 'hit') {
    cell.classList.remove('ship');
    cell.classList.add('hit');
  }

  if (action === 'missed') {
    cell.classList.add('missed');
  }

  if (action === 'sunk') {
    target.forEach(function (item) {
      var sunkCell = gameboard.querySelector("[data-index='".concat(item, "']"));
      sunkCell.classList.remove('hit');
      sunkCell.classList.add('sunk');
    });
  }
};

var handleAttack = function handleAttack(e) {
  var gameboardName = e.target.parentNode.className;
  var cell = +e.target.dataset.index;
  var playerNames = Object.keys(_logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.players);
  var player = playerNames.filter(function (item) {
    return _logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.players[item].gameboard === gameboardName;
  })[0];
  var gameboard = _logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.gameboards[gameboardName];
  var feedback = gameboard.processAttack(cell);

  if (feedback.isSunk === true) {
    var shipIndex = gameboard.board[cell].id;
    var allShips = gameboard.board.reduce(function (acc, element, index) {
      if (element !== null && !element.hasOwnProperty('isMissed')) acc.push(index);
      return acc;
    }, []);
    var sunkShip = allShips.reduce(function (acc, element) {
      if (gameboard.board[element].id === shipIndex) acc.push(element);
      return acc;
    }, []);
    mark('sunk', sunkShip, gameboardName);
    var gameboardDom = document.querySelector(".".concat(gameboardName));
    sunkShip.forEach(function (item) {
      var sunkCell = gameboardDom.querySelector("[data-index='".concat(item, "']"));
      sunkCell.removeEventListener('click', handleAttack);
    });
    if (feedback.reportAllSunk === true) return concludeGame(player);
  } else if (feedback.result === 'hit') {
    mark('hit', cell, gameboardName);
    e.target.removeEventListener('click', handleAttack);
  } else if (feedback.result === 'missed') {
    mark('missed', cell, gameboardName);
    e.target.removeEventListener('click', handleAttack);
  }
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
    // eslint-disable-next-line no-use-before-define
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

function prepareStart() {
  var shipPreview = document.querySelector('.ship-preview');
  shipPreview.className = 'ship-preview-hidden';
  var buttons = document.querySelector('.buttons');
  buttons.className = 'buttons-hidden';
  var playerCells = document.querySelectorAll('.gameboard1 .cell');
  playerCells.forEach(function (cell) {
    cell.removeEventListener('click', handleShipPlacement);
    if (cell.classList.contains('highlight')) cell.classList.remove('highlight');
  });
  var computerCells = document.querySelectorAll('.gameboard2 .cell');
  computerCells.forEach(function (item) {
    item.addEventListener('click', handleAttack);
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
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/ship.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Gameboard = /*#__PURE__*/function () {
  function Gameboard(name) {
    _classCallCheck(this, Gameboard);

    this.name = name;
    this.ships = [];
  }

  _createClass(Gameboard, [{
    key: "init",
    value: function init() {
      this.board = Array(100).fill(null);
    }
  }, {
    key: "addShip",
    value: function addShip(coordinates, length) {
      var _this = this;

      this.ships.push(new _ship__WEBPACK_IMPORTED_MODULE_0__.default(length));
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
    key: "processAttack",
    value: function processAttack(index) {
      var feedback = {
        result: null,
        isSunk: false,
        reportAllSunk: false
      };
      feedback.result = this.receiveAttack(index);

      if (this.board[index] !== null && // eslint-disable-next-line no-prototype-builtins
      !this.board[index].hasOwnProperty('isMissed')) {
        feedback.isSunk = this.ships[this.board[index].id].sunk;
        feedback.reportAllSunk = this.reportAllSunk();
      }

      return feedback;
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Player = /*#__PURE__*/function () {
  function Player(name, gameboard) {
    _classCallCheck(this, Player);

    this.name = name;
    this.gameboard = gameboard;
  }

  _createClass(Player, [{
    key: "randomAttack",
    value: function randomAttack() {
      var legalAttacks = this.gameboard.board.reduce(function (cells, curr, index) {
        if (curr === null || curr.isHit !== true || curr.isMissed !== true) cells.push(index);
        return cells;
      }, []);
      var randomLegal = legalAttacks[Math.floor(Math.random() * legalAttacks.length)];
      this.gameboard.receiveAttack(randomLegal);
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
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ship = /*#__PURE__*/function () {
  function Ship(length, vertical) {
    _classCallCheck(this, Ship);

    this.length = length;
    this.hits = Array(length).fill(null);
    this.sunk = false;
    this.vertical = vertical;
  }

  _createClass(Ship, [{
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9kcmFnbmRyb3AuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2dhbWVib2FyZC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvbG9naWMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3BsYXllci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvc2hpcC5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL21haW4uY3NzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzPzIxODciLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvbWFpbi5jc3M/ZTgwYSIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOlsiY29uY2x1ZGVHYW1lIiwicGxheWVyIiwiYWxlcnQiLCJtYXJrIiwiYWN0aW9uIiwidGFyZ2V0IiwiZ2FtZWJvYXJkTmFtZSIsImdhbWVib2FyZCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNlbGwiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJhZGQiLCJmb3JFYWNoIiwiaXRlbSIsInN1bmtDZWxsIiwiaGFuZGxlQXR0YWNrIiwiZSIsInBhcmVudE5vZGUiLCJjbGFzc05hbWUiLCJkYXRhc2V0IiwiaW5kZXgiLCJwbGF5ZXJOYW1lcyIsIk9iamVjdCIsImtleXMiLCJsb2dpYyIsImZpbHRlciIsImZlZWRiYWNrIiwicHJvY2Vzc0F0dGFjayIsImlzU3VuayIsInNoaXBJbmRleCIsImJvYXJkIiwiaWQiLCJhbGxTaGlwcyIsInJlZHVjZSIsImFjYyIsImVsZW1lbnQiLCJoYXNPd25Qcm9wZXJ0eSIsInB1c2giLCJzdW5rU2hpcCIsImdhbWVib2FyZERvbSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZXBvcnRBbGxTdW5rIiwicmVzdWx0IiwiZHJhd1NoaXBzIiwiZG9tQm9hcmQiLCJuYW1lIiwic2hpcENlbGwiLCJyZW5kZXJCb2FyZCIsImNyZWF0ZUVsZW1lbnQiLCJpIiwibGVuZ3RoIiwibmV3Q2VsbCIsImFwcGVuZCIsIndyYXBwZXIiLCJyZW5kZXJQcmV2aWV3Iiwic2hpcFByZXZpZXciLCJ2ZXJ0aWNhbCIsInNoaXBEcmFnIiwiYXBwZW5kQ2hpbGQiLCJyb3RhdGVTaGlwIiwicm90YXRlQnV0dG9uIiwidGV4dENvbnRlbnQiLCJzdHlsZSIsImZsZXhEaXJlY3Rpb24iLCJyZXNldFNoaXBzIiwic2hpcHMiLCJjZWxscyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJjb250YWlucyIsImZpcnN0Q2hpbGQiLCJuZXh0U2hpcCIsInJlbW92ZUNoaWxkIiwibGFzdENoaWxkIiwicHJlcGFyZVN0YXJ0IiwiaGFuZGxlU2hpcFBsYWNlbWVudCIsInRhcmdldENlbGwiLCJhcHBseUxpc3RlbmVycyIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZXNldEJ1dHRvbiIsInJlbmRlckFsbCIsImJ1dHRvbnMiLCJwbGF5ZXJDZWxscyIsImNvbXB1dGVyQ2VsbHMiLCJoaWdobGlnaHRQbGFjZW1lbnQiLCJoaWdobGlnaHRlZENlbGxzIiwiY2VsbEluZGV4IiwicmlnaHRCb3JkZXIiLCJib3JkZXJDZWxsIiwibnVtYmVyIiwiZXZlcnkiLCJpbmNsdWRlcyIsImluZGV4T2YiLCJzcGxpY2UiLCJyZW1vdmVIaWdobGlnaHRQbGFjZW1lbnQiLCJkcmFnbmRyb3AiLCJoYW5kbGVEcmFnU3RhcnQiLCJoYW5kbGVEcmFnRW5kIiwiaGFuZGxlRHJhZ0VudGVyIiwiaGFuZGxlRHJhZ092ZXIiLCJoYW5kbGVEcmFnTGVhdmUiLCJoYW5kbGVEcm9wIiwic2V0VGltZW91dCIsInByZXZlbnREZWZhdWx0IiwiR2FtZWJvYXJkIiwiQXJyYXkiLCJmaWxsIiwiY29vcmRpbmF0ZXMiLCJTaGlwIiwicGFydCIsImlzSGl0IiwiY29vcmRpbmF0ZSIsImlzTWlzc2VkIiwiaGl0Iiwic2hpcCIsInN1bmsiLCJsb2NhdGlvbiIsInNvbWUiLCJNYXRoIiwicmFuZG9tIiwidmFsaWRMb2NhdGlvbnMiLCJwb3NzaWJsZUxvY2F0aW9ucyIsInkiLCJjaGVja0ZvckNvbmZsaWN0cyIsImZsb29yIiwicHJldmlldyIsImxvY2F0aW9uQXJyYXkiLCJwYXJzZUludCIsImFkZFNoaXAiLCJyZWNlaXZlQXR0YWNrIiwiZGF0YSIsImdhbWVib2FyZHMiLCJwbGF5ZXJzIiwiaW5pdGFsaXplR2FtZSIsImdhbWVib2FyZDEiLCJnYW1lYm9hcmQyIiwiaW5pdCIsInBsYXllcjEiLCJQbGF5ZXIiLCJwbGF5ZXIyIiwicGxhY2VDb21wdXRlclNoaXBzIiwiZmluZFJhbmRvbVNoaXBMb2NhdGlvbiIsImxlZ2FsQXR0YWNrcyIsImN1cnIiLCJyYW5kb21MZWdhbCIsImhpdHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQy9CQyxPQUFLLFdBQUlELE1BQUosZ0JBQUw7QUFDRCxDQUZEOztBQUlBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFpQkMsYUFBakIsRUFBbUM7QUFDOUMsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsWUFBMkJILGFBQTNCLEVBQWxCO0FBQ0EsTUFBTUksSUFBSSxHQUFHSCxTQUFTLENBQUNFLGFBQVYsd0JBQXdDSixNQUF4QyxRQUFiOztBQUNBLE1BQUlE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QUFDQTs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQSx5REFBeUQ7QUFDekQsR0FBRzs7QUFFSDs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCOzs7Ozs7Ozs7O0FDL0NhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsbUM7Ozs7OztVQ2ZBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxnQ0FBZ0MsWUFBWTtXQUM1QztXQUNBLEU7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDTkE7Q0FFQTs7QUFDQTtBQUNBO0FBQ0E7QUFFQW5GLCtEQUFBO0FBQ0FBLG9FQUFBO0FBQ0F1RCx1REFBUztBQUNUZSxzRUFBQSxHIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBsb2dpYyB9IGZyb20gJy4vbG9naWMnO1xuXG5jb25zdCBjb25jbHVkZUdhbWUgPSAocGxheWVyKSA9PiB7XG4gIGFsZXJ0KGAke3BsYXllcn0gaGFzIGxvc3QhYCk7XG59O1xuXG5jb25zdCBtYXJrID0gKGFjdGlvbiwgdGFyZ2V0LCBnYW1lYm9hcmROYW1lKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2dhbWVib2FyZE5hbWV9YCk7XG4gIGNvbnN0IGNlbGwgPSBnYW1lYm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7dGFyZ2V0fSddYCk7XG4gIGlmIChhY3Rpb24gPT09ICdoaXQnKSB7XG4gICAgY2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdzaGlwJyk7XG4gICAgY2VsbC5jbGFzc0xpc3QuYWRkKCdoaXQnKTtcbiAgfVxuICBpZiAoYWN0aW9uID09PSAnbWlzc2VkJykge1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnbWlzc2VkJyk7XG4gIH1cbiAgaWYgKGFjdGlvbiA9PT0gJ3N1bmsnKSB7XG4gICAgdGFyZ2V0LmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHN1bmtDZWxsID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2l0ZW19J11gKTtcbiAgICAgIHN1bmtDZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpdCcpO1xuICAgICAgc3Vua0NlbGwuY2xhc3NMaXN0LmFkZCgnc3VuaycpO1xuICAgIH0pO1xuICB9XG59O1xuXG5jb25zdCBoYW5kbGVBdHRhY2sgPSAoZSkgPT4ge1xuICBjb25zdCBnYW1lYm9hcmROYW1lID0gZS50YXJnZXQucGFyZW50Tm9kZS5jbGFzc05hbWU7XG4gIGNvbnN0IGNlbGwgPSArZS50YXJnZXQuZGF0YXNldC5pbmRleDtcbiAgY29uc3QgcGxheWVyTmFtZXMgPSBPYmplY3Qua2V5cyhsb2dpYy5kYXRhLnBsYXllcnMpO1xuICBjb25zdCBwbGF5ZXIgPSBwbGF5ZXJOYW1lcy5maWx0ZXIoXG4gICAgKGl0ZW0pID0+IGxvZ2ljLmRhdGEucGxheWVyc1tpdGVtXS5nYW1lYm9hcmQgPT09IGdhbWVib2FyZE5hbWVcbiAgKVswXTtcbiAgY29uc3QgZ2FtZWJvYXJkID0gbG9naWMuZGF0YS5nYW1lYm9hcmRzW2dhbWVib2FyZE5hbWVdO1xuICBjb25zdCBmZWVkYmFjayA9IGdhbWVib2FyZC5wcm9jZXNzQXR0YWNrKGNlbGwpO1xuICBpZiAoZmVlZGJhY2suaXNTdW5rID09PSB0cnVlKSB7XG4gICAgY29uc3Qgc2hpcEluZGV4ID0gZ2FtZWJvYXJkLmJvYXJkW2NlbGxdLmlkO1xuICAgIGNvbnN0IGFsbFNoaXBzID0gZ2FtZWJvYXJkLmJvYXJkLnJlZHVjZSgoYWNjLCBlbGVtZW50LCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGVsZW1lbnQgIT09IG51bGwgJiYgIWVsZW1lbnQuaGFzT3duUHJvcGVydHkoJ2lzTWlzc2VkJykpXG4gICAgICAgIGFjYy5wdXNoKGluZGV4KTtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHN1bmtTaGlwID0gYWxsU2hpcHMucmVkdWNlKChhY2MsIGVsZW1lbnQpID0+IHtcbiAgICAgIGlmIChnYW1lYm9hcmQuYm9hcmRbZWxlbWVudF0uaWQgPT09IHNoaXBJbmRleCkgYWNjLnB1c2goZWxlbWVudCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgICBtYXJrKCdzdW5rJywgc3Vua1NoaXAsIGdhbWVib2FyZE5hbWUpO1xuICAgIGNvbnN0IGdhbWVib2FyZERvbSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2dhbWVib2FyZE5hbWV9YCk7XG4gICAgc3Vua1NoaXAuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgY29uc3Qgc3Vua0NlbGwgPSBnYW1lYm9hcmREb20ucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aXRlbX0nXWApO1xuICAgICAgc3Vua0NlbGwucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBdHRhY2spO1xuICAgIH0pO1xuICAgIGlmIChmZWVkYmFjay5yZXBvcnRBbGxTdW5rID09PSB0cnVlKSByZXR1cm4gY29uY2x1ZGVHYW1lKHBsYXllcik7XG4gIH0gZWxzZSBpZiAoZmVlZGJhY2sucmVzdWx0ID09PSAnaGl0Jykge1xuICAgIG1hcmsoJ2hpdCcsIGNlbGwsIGdhbWVib2FyZE5hbWUpO1xuICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrKTtcbiAgfSBlbHNlIGlmIChmZWVkYmFjay5yZXN1bHQgPT09ICdtaXNzZWQnKSB7XG4gICAgbWFyaygnbWlzc2VkJywgY2VsbCwgZ2FtZWJvYXJkTmFtZSk7XG4gICAgZS50YXJnZXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBdHRhY2spO1xuICB9XG59O1xuXG5jb25zdCBkcmF3U2hpcHMgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gIGdhbWVib2FyZC5ib2FyZC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpdGVtID09PSBudWxsKSByZXR1cm47XG4gICAgY29uc3QgZG9tQm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtnYW1lYm9hcmQubmFtZX1gKTtcbiAgICBjb25zdCBzaGlwQ2VsbCA9IGRvbUJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2luZGV4fSddYCk7XG4gICAgc2hpcENlbGwuY2xhc3NMaXN0LmFkZCgnc2hpcCcpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbmRlckJvYXJkID0gKGdhbWVib2FyZCkgPT4ge1xuICBjb25zdCBib2FyZCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBib2FyZC5jbGFzc05hbWUgPSBnYW1lYm9hcmQubmFtZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBnYW1lYm9hcmQuYm9hcmQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICBjb25zdCBuZXdDZWxsID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgbmV3Q2VsbC5jbGFzc05hbWUgPSAnY2VsbCc7XG4gICAgbmV3Q2VsbC5kYXRhc2V0LmluZGV4ID0gaTtcbiAgICBib2FyZC5hcHBlbmQobmV3Q2VsbCk7XG4gIH1cbiAgY29uc3Qgd3JhcHBlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5ib2FyZHMtd3JhcHBlcicpO1xuICB3cmFwcGVyLmFwcGVuZChib2FyZCk7XG59O1xuXG5jb25zdCByZW5kZXJQcmV2aWV3ID0gKGxlbmd0aCkgPT4ge1xuICBjb25zdCBzaGlwUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXByZXZpZXcnKTtcbiAgc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGggPSBsZW5ndGg7XG4gIHNoaXBQcmV2aWV3LmRhdGFzZXQudmVydGljYWwgPSBmYWxzZTtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IHNoaXBEcmFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZHJhZycpO1xuICAgIGNvbnN0IGNlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBjZWxsLmNsYXNzTmFtZSA9ICdwcmV2aWV3LWNlbGwnO1xuICAgIHNoaXBEcmFnLmFwcGVuZENoaWxkKGNlbGwpO1xuICB9XG59O1xuXG5jb25zdCByb3RhdGVTaGlwID0gKCkgPT4ge1xuICBjb25zdCBzaGlwUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXByZXZpZXcnKTtcbiAgY29uc3Qgc2hpcERyYWcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1kcmFnJyk7XG4gIGNvbnN0IHJvdGF0ZUJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5yb3RhdGUtYnRuJyk7XG4gIGlmIChzaGlwUHJldmlldy5kYXRhc2V0LnZlcnRpY2FsID09PSAnZmFsc2UnKSB7XG4gICAgc2hpcFByZXZpZXcuZGF0YXNldC52ZXJ0aWNhbCA9ICd0cnVlJztcbiAgICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnVmVydGljYWwnO1xuICAgIHNoaXBEcmFnLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSAnY29sdW1uJztcbiAgfSBlbHNlIHtcbiAgICBzaGlwUHJldmlldy5kYXRhc2V0LnZlcnRpY2FsID0gJ2ZhbHNlJztcbiAgICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG4gICAgc2hpcERyYWcuc3R5bGUuZmxleERpcmVjdGlvbiA9ICdyb3cnO1xuICB9XG59O1xuXG5jb25zdCByZXNldFNoaXBzID0gKCkgPT4ge1xuICBjb25zdCBnYW1lYm9hcmQgPSBsb2dpYy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMTtcbiAgZ2FtZWJvYXJkLnNoaXBzID0gW107XG4gIGdhbWVib2FyZC5ib2FyZC5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgIGlmIChpdGVtICE9PSBudWxsKSBnYW1lYm9hcmQuYm9hcmRbaW5kZXhdID0gbnVsbDtcbiAgfSk7XG4gIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDEgLmNlbGwnKTtcbiAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGlmIChpdGVtLmNsYXNzTGlzdC5jb250YWlucygnc2hpcCcpKSBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ3NoaXAnKTtcbiAgfSk7XG4gIGNvbnN0IHNoaXBQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtcHJldmlldycpO1xuICB3aGlsZSAoc2hpcFByZXZpZXcuZmlyc3RDaGlsZCkge1xuICAgIHNoaXBQcmV2aWV3LmZpcnN0Q2hpbGQucmVtb3ZlKCk7XG4gIH1cbiAgc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGggPSA1O1xuICByZW5kZXJQcmV2aWV3KDUpO1xufTtcblxuY29uc3QgbmV4dFNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtcHJldmlldycpO1xuICBjb25zdCBzaGlwRHJhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWRyYWcnKTtcbiAgaWYgKCtzaGlwUHJldmlldy5kYXRhc2V0Lmxlbmd0aCA9PT0gNSkge1xuICAgIHNoaXBEcmFnLnJlbW92ZUNoaWxkKHNoaXBEcmFnLmxhc3RDaGlsZCk7XG4gICAgc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGggPSA0O1xuICB9IGVsc2UgaWYgKCtzaGlwUHJldmlldy5kYXRhc2V0Lmxlbmd0aCA9PT0gNCkge1xuICAgIHNoaXBEcmFnLnJlbW92ZUNoaWxkKHNoaXBEcmFnLmxhc3RDaGlsZCk7XG4gICAgc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGggPSAzO1xuICB9IGVsc2UgaWYgKFxuICAgICtzaGlwUHJldmlldy5kYXRhc2V0Lmxlbmd0aCA9PT0gMyAmJlxuICAgIGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLnNoaXBzLmxlbmd0aCA9PT0gNFxuICApIHtcbiAgICBzaGlwRHJhZy5yZW1vdmVDaGlsZChzaGlwRHJhZy5sYXN0Q2hpbGQpO1xuICAgIHNoaXBQcmV2aWV3LmRhdGFzZXQubGVuZ3RoID0gMjtcbiAgfSBlbHNlIGlmIChsb2dpYy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMS5zaGlwcy5sZW5ndGggPT09IDUpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICBwcmVwYXJlU3RhcnQoKTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlU2hpcFBsYWNlbWVudCA9IChlKSA9PiB7XG4gIGNvbnN0IHRhcmdldENlbGwgPSBlLnRhcmdldDtcbiAgY29uc3Qgc2hpcFByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1wcmV2aWV3Jyk7XG4gIGlmIChsb2dpYy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMS5zaGlwcy5sZW5ndGggPT09IDUpIHJldHVybjtcbiAgaWYgKFxuICAgIGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLnBsYWNlUGxheWVyU2hpcCh0YXJnZXRDZWxsLCBzaGlwUHJldmlldylcbiAgKSB7XG4gICAgZHJhd1NoaXBzKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxKTtcbiAgICBuZXh0U2hpcCgpO1xuICB9XG59O1xuXG5jb25zdCBhcHBseUxpc3RlbmVycyA9ICgpID0+IHtcbiAgY29uc3Qgcm90YXRlQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJvdGF0ZS1idG4nKTtcbiAgcm90YXRlQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcm90YXRlU2hpcCk7XG4gIGNvbnN0IHJlc2V0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnJlc2V0LWJ0bicpO1xuICByZXNldEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHJlc2V0U2hpcHMpO1xufTtcblxuY29uc3QgcmVuZGVyQWxsID0gKCkgPT4ge1xuICByZW5kZXJCb2FyZChsb2dpYy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMSk7XG4gIHJlbmRlckJvYXJkKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQyKTtcbiAgcmVuZGVyUHJldmlldyg1KTtcbiAgLy8gRk9SIFNUWUxJTkcgLSBSRU1PVkUgQkVGT1JFIFBVQkxJU0hJTkcgLy9cbiAgZHJhd1NoaXBzKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQyKTtcbiAgYXBwbHlMaXN0ZW5lcnMoKTtcbn07XG5cbmZ1bmN0aW9uIHByZXBhcmVTdGFydCgpIHtcbiAgY29uc3Qgc2hpcFByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1wcmV2aWV3Jyk7XG4gIHNoaXBQcmV2aWV3LmNsYXNzTmFtZSA9ICdzaGlwLXByZXZpZXctaGlkZGVuJztcbiAgY29uc3QgYnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5idXR0b25zJyk7XG4gIGJ1dHRvbnMuY2xhc3NOYW1lID0gJ2J1dHRvbnMtaGlkZGVuJztcbiAgY29uc3QgcGxheWVyQ2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkMSAuY2VsbCcpO1xuICBwbGF5ZXJDZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZVNoaXBQbGFjZW1lbnQpO1xuICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGlnaGxpZ2h0JykpXG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICB9KTtcbiAgY29uc3QgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQyIC5jZWxsJyk7XG4gIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBdHRhY2spO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQWxsLCByZXNldFNoaXBzLCBoYW5kbGVTaGlwUGxhY2VtZW50IH07XG4iLCJpbXBvcnQgeyBoYW5kbGVTaGlwUGxhY2VtZW50IH0gZnJvbSAnLi9kb20nO1xuXG5jb25zdCBoaWdobGlnaHRQbGFjZW1lbnQgPSAoZSkgPT4ge1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxIC5jZWxsJyk7XG4gIGNvbnN0IHNoaXBQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtcHJldmlldycpO1xuICBjb25zdCBsZW5ndGggPSArc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGg7XG4gIGNvbnN0IGhpZ2hsaWdodGVkQ2VsbHMgPSBbXTtcbiAgY29uc3QgY2VsbEluZGV4ID0gK2UudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIGlmIChzaGlwUHJldmlldy5kYXRhc2V0LnZlcnRpY2FsID09PSAnZmFsc2UnKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgaGlnaGxpZ2h0ZWRDZWxscy5wdXNoKGNlbGxJbmRleCArIGkpO1xuICAgIH1cbiAgICBjb25zdCByaWdodEJvcmRlciA9IFs5LCAxOSwgMjksIDM5LCA0OSwgNTksIDY5LCA3OSwgODldO1xuICAgIGNvbnN0IGJvcmRlckNlbGwgPSByaWdodEJvcmRlci5maWx0ZXIoKG51bWJlcikgPT5cbiAgICAgIFtudW1iZXIsIG51bWJlciArIDFdLmV2ZXJ5KChpdGVtKSA9PiBoaWdobGlnaHRlZENlbGxzLmluY2x1ZGVzKGl0ZW0pKVxuICAgICk7XG4gICAgaWYgKGJvcmRlckNlbGwubGVuZ3RoID09PSAxKSB7XG4gICAgICBjb25zdCBpbmRleCA9IGhpZ2hsaWdodGVkQ2VsbHMuaW5kZXhPZihib3JkZXJDZWxsWzBdKSArIDE7XG4gICAgICBoaWdobGlnaHRlZENlbGxzLnNwbGljZShpbmRleCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKHNoaXBQcmV2aWV3LmRhdGFzZXQudmVydGljYWwgPT09ICd0cnVlJykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGhpZ2hsaWdodGVkQ2VsbHMucHVzaChjZWxsSW5kZXggKyBpICogMTApO1xuICAgIH1cbiAgfVxuICBjZWxscy5mb3JFYWNoKChjZWxsLCBpbmRleCkgPT4ge1xuICAgIGlmIChoaWdobGlnaHRlZENlbGxzLmluY2x1ZGVzKGluZGV4KSAmJiAhY2VsbC5jbGFzc0xpc3QuY29udGFpbnMoJ3NoaXAnKSlcbiAgICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGlnaGxpZ2h0Jyk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVtb3ZlSGlnaGxpZ2h0UGxhY2VtZW50ID0gKCkgPT4ge1xuICBjb25zdCBjZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxIC5jZWxsJyk7XG4gIGNlbGxzLmZvckVhY2goKGNlbGwpID0+IGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnaGlnaGxpZ2h0JykpO1xufTtcblxuY29uc3QgZHJhZ25kcm9wID0ge1xuICBhcHBseUxpc3RlbmVycygpIHtcbiAgICBjb25zdCBzaGlwRHJhZyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLWRyYWcnKTtcbiAgICBzaGlwRHJhZy5hZGRFdmVudExpc3RlbmVyKCdkcmFnc3RhcnQnLCBkcmFnbmRyb3AuaGFuZGxlRHJhZ1N0YXJ0KTtcbiAgICBzaGlwRHJhZy5hZGRFdmVudExpc3RlbmVyKCdkcmFnZW5kJywgZHJhZ25kcm9wLmhhbmRsZURyYWdFbmQpO1xuICAgIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDEgLmNlbGwnKTtcbiAgICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiB7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdlbnRlcicsIGRyYWduZHJvcC5oYW5kbGVEcmFnRW50ZXIpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcmFnb3ZlcicsIGRyYWduZHJvcC5oYW5kbGVEcmFnT3Zlcik7XG4gICAgICBjZWxsLmFkZEV2ZW50TGlzdGVuZXIoJ2RyYWdsZWF2ZScsIGRyYWduZHJvcC5oYW5kbGVEcmFnTGVhdmUpO1xuICAgICAgY2VsbC5hZGRFdmVudExpc3RlbmVyKCdkcm9wJywgZHJhZ25kcm9wLmhhbmRsZURyb3ApO1xuICAgIH0pO1xuICB9LFxuXG4gIGhhbmRsZURyYWdTdGFydChlKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBlLnRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRlJyk7XG4gICAgfSwgMCk7XG4gIH0sXG5cbiAgaGFuZGxlRHJhZ0VudGVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGlnaGxpZ2h0UGxhY2VtZW50KGUpO1xuICB9LFxuXG4gIGhhbmRsZURyYWdPdmVyKGUpIHtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgaGlnaGxpZ2h0UGxhY2VtZW50KGUpO1xuICB9LFxuXG4gIGhhbmRsZURyYWdMZWF2ZShlKSB7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgcmVtb3ZlSGlnaGxpZ2h0UGxhY2VtZW50KGUpO1xuICAgIH0sIDEwKTtcbiAgfSxcblxuICBoYW5kbGVEcmFnRW5kKCkge1xuICAgIGNvbnN0IHNoaXBEcmFnID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtZHJhZycpO1xuICAgIHNoaXBEcmFnLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGUnKTtcbiAgfSxcblxuICBoYW5kbGVEcm9wKGUpIHtcbiAgICByZW1vdmVIaWdobGlnaHRQbGFjZW1lbnQoZSk7XG4gICAgaGFuZGxlU2hpcFBsYWNlbWVudChlKTtcbiAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IGRyYWduZHJvcDtcbiIsImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLm5hbWUgPSBuYW1lO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgfVxuXG4gIGluaXQoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5KDEwMCkuZmlsbChudWxsKTtcbiAgfVxuXG4gIGFkZFNoaXAoY29vcmRpbmF0ZXMsIGxlbmd0aCkge1xuICAgIHRoaXMuc2hpcHMucHVzaChuZXcgU2hpcChsZW5ndGgpKTtcbiAgICBjb29yZGluYXRlcy5mb3JFYWNoKChpdGVtLCBpbmRleCkgPT4ge1xuICAgICAgdGhpcy5ib2FyZFtpdGVtXSA9IHtcbiAgICAgICAgaWQ6IHRoaXMuc2hpcHMubGVuZ3RoIC0gMSxcbiAgICAgICAgcGFydDogaW5kZXgsXG4gICAgICAgIGlzSGl0OiBmYWxzZSxcbiAgICAgIH07XG4gICAgfSk7XG4gIH1cblxuICByZWNlaXZlQXR0YWNrKGNvb3JkaW5hdGUpIHtcbiAgICBpZiAodGhpcy5ib2FyZFtjb29yZGluYXRlXSA9PT0gbnVsbCkge1xuICAgICAgdGhpcy5ib2FyZFtjb29yZGluYXRlXSA9IHsgaXNNaXNzZWQ6IHRydWUgfTtcbiAgICAgIHJldHVybiAnbWlzc2VkJztcbiAgICB9XG4gICAgdGhpcy5zaGlwc1t0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLmlkXS5oaXQodGhpcy5ib2FyZFtjb29yZGluYXRlXS5wYXJ0KTtcbiAgICB0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLmlzSGl0ID0gdHJ1ZTtcbiAgICByZXR1cm4gJ2hpdCc7XG4gIH1cblxuICByZXBvcnRBbGxTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN1bmsgPT09IHRydWUpO1xuICB9XG5cbiAgY2hlY2tGb3JDb25mbGljdHMobG9jYXRpb24pIHtcbiAgICBpZiAobG9jYXRpb24uc29tZSgoaXRlbSkgPT4gaXRlbSA+IDk5KSkgcmV0dXJuIGZhbHNlO1xuXG4gICAgY29uc3QgcmlnaHRCb3JkZXIgPSBbOSwgMTksIDI5LCAzOSwgNDksIDU5LCA2OSwgNzksIDg5XTtcbiAgICBpZiAoXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyb3ctYm9keS1zdHlsZVxuICAgICAgcmlnaHRCb3JkZXIuc29tZSgobnVtYmVyKSA9PiB7XG4gICAgICAgIHJldHVybiBbbnVtYmVyLCBudW1iZXIgKyAxXS5ldmVyeSgoaXRlbSkgPT4gbG9jYXRpb24uaW5jbHVkZXMoaXRlbSkpO1xuICAgICAgfSlcbiAgICApIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAobG9jYXRpb24uc29tZSgoaXRlbSkgPT4gdGhpcy5ib2FyZFtpdGVtXSAhPT0gbnVsbCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cblxuICBmaW5kUmFuZG9tU2hpcExvY2F0aW9uKGxlbmd0aCkge1xuICAgIGNvbnN0IHZlcnRpY2FsID0gTWF0aC5yYW5kb20oKSA+IDAuNTtcbiAgICBjb25zdCB2YWxpZExvY2F0aW9ucyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDAgLSBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgcG9zc2libGVMb2NhdGlvbnMgPSBbXTtcbiAgICAgIGlmICh2ZXJ0aWNhbCA9PT0gdHJ1ZSkge1xuICAgICAgICBmb3IgKGxldCB5ID0gMDsgeSA8IGxlbmd0aDsgeSArPSAxKSB7XG4gICAgICAgICAgcG9zc2libGVMb2NhdGlvbnMucHVzaChpICsgeSAqIDEwKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh2ZXJ0aWNhbCA9PT0gZmFsc2UpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5ndGg7IHkgKz0gMSkge1xuICAgICAgICAgIHBvc3NpYmxlTG9jYXRpb25zLnB1c2goeSArIGkpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5jaGVja0ZvckNvbmZsaWN0cyhwb3NzaWJsZUxvY2F0aW9ucykpXG4gICAgICAgIHZhbGlkTG9jYXRpb25zLnB1c2gocG9zc2libGVMb2NhdGlvbnMpO1xuICAgIH1cbiAgICByZXR1cm4gdmFsaWRMb2NhdGlvbnNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdmFsaWRMb2NhdGlvbnMubGVuZ3RoKV07XG4gIH1cblxuICBwbGFjZVBsYXllclNoaXAodGFyZ2V0LCBwcmV2aWV3KSB7XG4gICAgY29uc3QgbG9jYXRpb25BcnJheSA9IFtdO1xuICAgIGlmIChwcmV2aWV3LmRhdGFzZXQudmVydGljYWwgPT09ICdmYWxzZScpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJldmlldy5kYXRhc2V0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGxvY2F0aW9uQXJyYXkucHVzaChwYXJzZUludCh0YXJnZXQuZGF0YXNldC5pbmRleCwgMTApICsgaSk7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChwcmV2aWV3LmRhdGFzZXQudmVydGljYWwgPT09ICd0cnVlJykge1xuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcmV2aWV3LmRhdGFzZXQubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgbG9jYXRpb25BcnJheS5wdXNoKHBhcnNlSW50KHRhcmdldC5kYXRhc2V0LmluZGV4LCAxMCkgKyBpICogMTApO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAodGhpcy5jaGVja0ZvckNvbmZsaWN0cyhsb2NhdGlvbkFycmF5KSA9PT0gdHJ1ZSkge1xuICAgICAgdGhpcy5hZGRTaGlwKGxvY2F0aW9uQXJyYXksIHBhcnNlSW50KHByZXZpZXcuZGF0YXNldC5sZW5ndGgsIDEwKSk7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcHJvY2Vzc0F0dGFjayhpbmRleCkge1xuICAgIGNvbnN0IGZlZWRiYWNrID0ge1xuICAgICAgcmVzdWx0OiBudWxsLFxuICAgICAgaXNTdW5rOiBmYWxzZSxcbiAgICAgIHJlcG9ydEFsbFN1bms6IGZhbHNlLFxuICAgIH07XG4gICAgZmVlZGJhY2sucmVzdWx0ID0gdGhpcy5yZWNlaXZlQXR0YWNrKGluZGV4KTtcbiAgICBpZiAoXG4gICAgICB0aGlzLmJvYXJkW2luZGV4XSAhPT0gbnVsbCAmJlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXByb3RvdHlwZS1idWlsdGluc1xuICAgICAgIXRoaXMuYm9hcmRbaW5kZXhdLmhhc093blByb3BlcnR5KCdpc01pc3NlZCcpXG4gICAgKSB7XG4gICAgICBmZWVkYmFjay5pc1N1bmsgPSB0aGlzLnNoaXBzW3RoaXMuYm9hcmRbaW5kZXhdLmlkXS5zdW5rO1xuICAgICAgZmVlZGJhY2sucmVwb3J0QWxsU3VuayA9IHRoaXMucmVwb3J0QWxsU3VuaygpO1xuICAgIH1cbiAgICByZXR1cm4gZmVlZGJhY2s7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgR2FtZWJvYXJkO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2dhbWVib2FyZCc7XG5pbXBvcnQgUGxheWVyIGZyb20gJy4vcGxheWVyJztcblxuY29uc3QgbG9naWMgPSB7XG4gIGRhdGE6IHtcbiAgICBnYW1lYm9hcmRzOiB7fSxcbiAgICBwbGF5ZXJzOiB7fSxcbiAgfSxcblxuICBpbml0YWxpemVHYW1lKCkge1xuICAgIHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEgPSBuZXcgR2FtZWJvYXJkKCdnYW1lYm9hcmQxJyk7XG4gICAgdGhpcy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMiA9IG5ldyBHYW1lYm9hcmQoJ2dhbWVib2FyZDInKTtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxLmluaXQoKTtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQyLmluaXQoKTtcbiAgICB0aGlzLmRhdGEucGxheWVycy5wbGF5ZXIxID0gbmV3IFBsYXllcignaHVtYW4nLCAnZ2FtZWJvYXJkMScpO1xuICAgIHRoaXMuZGF0YS5wbGF5ZXJzLnBsYXllcjIgPSBuZXcgUGxheWVyKCdhaScsICdnYW1lYm9hcmQyJyk7XG4gIH0sXG5cbiAgcGxhY2VDb21wdXRlclNoaXBzKCkge1xuICAgIGNvbnN0IGdhbWVib2FyZCA9IHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDI7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oNSksIDUpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDQpLCA0KTtcbiAgICBnYW1lYm9hcmQuYWRkU2hpcChnYW1lYm9hcmQuZmluZFJhbmRvbVNoaXBMb2NhdGlvbigzKSwgMyk7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oMiksIDIpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDIpLCAyKTtcbiAgfSxcbn07XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvcHJlZmVyLWRlZmF1bHQtZXhwb3J0XG5leHBvcnQgeyBsb2dpYyB9O1xuIiwiY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSwgZ2FtZWJvYXJkKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLmdhbWVib2FyZCA9IGdhbWVib2FyZDtcbiAgfVxuXG4gIHJhbmRvbUF0dGFjaygpIHtcbiAgICBjb25zdCBsZWdhbEF0dGFja3MgPSB0aGlzLmdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoKGNlbGxzLCBjdXJyLCBpbmRleCkgPT4ge1xuICAgICAgaWYgKGN1cnIgPT09IG51bGwgfHwgY3Vyci5pc0hpdCAhPT0gdHJ1ZSB8fCBjdXJyLmlzTWlzc2VkICE9PSB0cnVlKVxuICAgICAgICBjZWxscy5wdXNoKGluZGV4KTtcbiAgICAgIHJldHVybiBjZWxscztcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgcmFuZG9tTGVnYWwgPVxuICAgICAgbGVnYWxBdHRhY2tzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlZ2FsQXR0YWNrcy5sZW5ndGgpXTtcbiAgICB0aGlzLmdhbWVib2FyZC5yZWNlaXZlQXR0YWNrKHJhbmRvbUxlZ2FsKTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBQbGF5ZXI7XG4iLCJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoLCB2ZXJ0aWNhbCkge1xuICAgIHRoaXMubGVuZ3RoID0gbGVuZ3RoO1xuICAgIHRoaXMuaGl0cyA9IEFycmF5KGxlbmd0aCkuZmlsbChudWxsKTtcbiAgICB0aGlzLnN1bmsgPSBmYWxzZTtcbiAgICB0aGlzLnZlcnRpY2FsID0gdmVydGljYWw7XG4gIH1cblxuICBoaXQocGFydCkge1xuICAgIHRoaXMuaGl0c1twYXJ0XSA9ICdoaXQnO1xuICAgIHRoaXMuaXNTdW5rKCk7XG4gIH1cblxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cy5ldmVyeSgoaGl0KSA9PiBoaXQgPT09ICdoaXQnKSkgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9jc3NXaXRoTWFwcGluZ1RvU3RyaW5nLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIuZ2FtZWJvYXJkMSxcXG4uZ2FtZWJvYXJkMiB7XFxuICBvdXRsaW5lOiAwLjFyZW0gYmxhY2sgc29saWQ7XFxuICBkaXNwbGF5OiBncmlkO1xcbiAgd2lkdGg6IDI1cmVtO1xcbiAgaGVpZ2h0OiAyNXJlbTtcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDEwLCAxZnIpO1xcbiAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoMTAsIDFmcik7XFxuICBtYXJnaW46IDFyZW07XFxufVxcblxcbi5jZWxsIHtcXG4gIGJvcmRlcjogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbn1cXG5cXG4uc2hpcCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcXG4gIGNvbG9yOiB3aGl0ZTtcXG59XFxuXFxuLmhpZ2hsaWdodCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBuYXZ5O1xcbn1cXG5cXG4uaGl0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG59XFxuXFxuLm1pc3NlZCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBncmF5O1xcbn1cXG5cXG4uc3VuayB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xcbn1cXG5cXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg4MHB4KSB7XFxuICAud3JhcHBlciB7XFxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcXG4gIH1cXG4gIC5ib2FyZHMtd3JhcHBlciB7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICB9XFxuICAuZ2FtZWJvYXJkMSxcXG4gIC5nYW1lYm9hcmQyIHtcXG4gICAgd2lkdGg6IDE4cmVtO1xcbiAgICBoZWlnaHQ6IDE4cmVtO1xcbiAgfVxcbn1cXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvc3R5bGVzL2dhbWVib2FyZC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7O0VBRUUsMkJBQTJCO0VBQzNCLGFBQWE7RUFDYixZQUFZO0VBQ1osYUFBYTtFQUNiLHNDQUFzQztFQUN0QyxtQ0FBbUM7RUFDbkMsWUFBWTtBQUNkOztBQUVBO0VBQ0UsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7QUFDZDs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLHlCQUF5QjtBQUMzQjs7QUFFQTtFQUNFO0lBQ0UsOEJBQThCO0VBQ2hDO0VBQ0E7SUFDRSxzQkFBc0I7RUFDeEI7RUFDQTs7SUFFRSxZQUFZO0lBQ1osYUFBYTtFQUNmO0FBQ0ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLmdhbWVib2FyZDEsXFxuLmdhbWVib2FyZDIge1xcbiAgb3V0bGluZTogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGhlaWdodDogMjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDAuMXJlbSBibGFjayBzb2xpZDtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xcbiAgLndyYXBwZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAuYm9hcmRzLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmdhbWVib2FyZDEsXFxuICAuZ2FtZWJvYXJkMiB7XFxuICAgIHdpZHRoOiAxOHJlbTtcXG4gICAgaGVpZ2h0OiAxOHJlbTtcXG4gIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiYm9keSB7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMHZ3O1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG59XFxuXFxuLndyYXBwZXIge1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLmJvYXJkcy13cmFwcGVyIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcbiAgbWF4LWhlaWdodDogMTAwJTtcXG4gIG1heC13aWR0aDogMTAwJTtcXG59XFxuXFxuLnRvcCB7XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTZ2aDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcbn1cXG5cXG4udG9wLWhlYWRlciB7XFxuICBmb250LXNpemU6IDIuNXJlbTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XFxufVxcblxcbi50b3AtcGFuZWwge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBoZWlnaHQ6IDEwMCU7XFxufVxcblxcbi5zaGlwLXByZXZpZXcge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbn1cXG5cXG4uc2hpcC1kcmFnIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxufVxcblxcbi5oaWRlIHtcXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcXG59XFxuXFxuLnByZXZpZXctY2VsbCB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtcHJldmlldy1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnMtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b3Age1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udG9wLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2hpcC1wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtZHJhZyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbn1cXG5cXG4uaGlkZSB7XFxuICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi5wcmV2aWV3LWNlbGwge1xcbiAgd2lkdGg6IDIuNXJlbTtcXG4gIGhlaWdodDogMi41cmVtO1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4uYnV0dG9ucyB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxufVxcblxcbi5zaGlwLXByZXZpZXctaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblxcbi5idXR0b25zLWhpZGRlbiB7XFxuICBkaXNwbGF5OiBub25lO1xcbn1cXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcpIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oXCJcIik7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIFwiXCJdXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTsiLCJcInVzZSBzdHJpY3RcIjtcblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkoYXJyLCBpKSB7IHJldHVybiBfYXJyYXlXaXRoSG9sZXMoYXJyKSB8fCBfaXRlcmFibGVUb0FycmF5TGltaXQoYXJyLCBpKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkoYXJyLCBpKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7IH1cblxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTsgfVxuXG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkobywgbWluTGVuKSB7IGlmICghbykgcmV0dXJuOyBpZiAodHlwZW9mIG8gPT09IFwic3RyaW5nXCIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShvLCBtaW5MZW4pOyB2YXIgbiA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvKS5zbGljZSg4LCAtMSk7IGlmIChuID09PSBcIk9iamVjdFwiICYmIG8uY29uc3RydWN0b3IpIG4gPSBvLmNvbnN0cnVjdG9yLm5hbWU7IGlmIChuID09PSBcIk1hcFwiIHx8IG4gPT09IFwiU2V0XCIpIHJldHVybiBBcnJheS5mcm9tKG8pOyBpZiAobiA9PT0gXCJBcmd1bWVudHNcIiB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdChuKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IH1cblxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkoYXJyLCBsZW4pIHsgaWYgKGxlbiA9PSBudWxsIHx8IGxlbiA+IGFyci5sZW5ndGgpIGxlbiA9IGFyci5sZW5ndGg7IGZvciAodmFyIGkgPSAwLCBhcnIyID0gbmV3IEFycmF5KGxlbik7IGkgPCBsZW47IGkrKykgeyBhcnIyW2ldID0gYXJyW2ldOyB9IHJldHVybiBhcnIyOyB9XG5cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHsgdmFyIF9pID0gYXJyID09IG51bGwgPyBudWxsIDogdHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiAmJiBhcnJbU3ltYm9sLml0ZXJhdG9yXSB8fCBhcnJbXCJAQGl0ZXJhdG9yXCJdOyBpZiAoX2kgPT0gbnVsbCkgcmV0dXJuOyB2YXIgX2FyciA9IFtdOyB2YXIgX24gPSB0cnVlOyB2YXIgX2QgPSBmYWxzZTsgdmFyIF9zLCBfZTsgdHJ5IHsgZm9yIChfaSA9IF9pLmNhbGwoYXJyKTsgIShfbiA9IChfcyA9IF9pLm5leHQoKSkuZG9uZSk7IF9uID0gdHJ1ZSkgeyBfYXJyLnB1c2goX3MudmFsdWUpOyBpZiAoaSAmJiBfYXJyLmxlbmd0aCA9PT0gaSkgYnJlYWs7IH0gfSBjYXRjaCAoZXJyKSB7IF9kID0gdHJ1ZTsgX2UgPSBlcnI7IH0gZmluYWxseSB7IHRyeSB7IGlmICghX24gJiYgX2lbXCJyZXR1cm5cIl0gIT0gbnVsbCkgX2lbXCJyZXR1cm5cIl0oKTsgfSBmaW5hbGx5IHsgaWYgKF9kKSB0aHJvdyBfZTsgfSB9IHJldHVybiBfYXJyOyB9XG5cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhhcnIpIHsgaWYgKEFycmF5LmlzQXJyYXkoYXJyKSkgcmV0dXJuIGFycjsgfVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSkge1xuICB2YXIgX2l0ZW0gPSBfc2xpY2VkVG9BcnJheShpdGVtLCA0KSxcbiAgICAgIGNvbnRlbnQgPSBfaXRlbVsxXSxcbiAgICAgIGNzc01hcHBpbmcgPSBfaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYnRvYSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gICAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KGNzc01hcHBpbmcpKSkpO1xuICAgIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8IFwiXCIpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oXCJcXG5cIik7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oXCJcXG5cIik7XG59OyIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9nYW1lYm9hcmQuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIGFwaS51cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgYXBpLnJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgbWVtbyA9IHt9O1xuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cbmZ1bmN0aW9uIGdldFRhcmdldCh0YXJnZXQpIHtcbiAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICB0cnkge1xuICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gIH1cblxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gaW5zZXJ0QnlTZWxlY3RvcihpbnNlcnQsIHN0eWxlKSB7XG4gIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQoaW5zZXJ0KTtcblxuICBpZiAoIXRhcmdldCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gIH1cblxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydEJ5U2VsZWN0b3I7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoc3R5bGUsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGUpIHtcbiAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gIGlmIChub25jZSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlczsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShcIm1lZGlhXCIsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoXCJtZWRpYVwiKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gb3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gIHJldHVybiB7XG4gICAgdXBkYXRlOiBmdW5jdGlvbiB1cGRhdGUob2JqKSB7XG4gICAgICBhcHBseShzdHlsZSwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZG9tQVBJOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpIHtcbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc3R5bGVUYWdUcmFuc2Zvcm07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAnLi9zdHlsZXMvbWFpbi5jc3MnO1xuaW1wb3J0ICcuL3N0eWxlcy9nYW1lYm9hcmQuY3NzJztcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbmFtZWRcbmltcG9ydCB7IGxvZ2ljIH0gZnJvbSAnLi9tb2R1bGVzL2xvZ2ljJztcbmltcG9ydCB7IHJlbmRlckFsbCB9IGZyb20gJy4vbW9kdWxlcy9kb20nO1xuaW1wb3J0IGRyYWduZHJvcCBmcm9tICcuL21vZHVsZXMvZHJhZ25kcm9wJztcblxubG9naWMuaW5pdGFsaXplR2FtZSgpO1xubG9naWMucGxhY2VDb21wdXRlclNoaXBzKCk7XG5yZW5kZXJBbGwoKTtcbmRyYWduZHJvcC5hcHBseUxpc3RlbmVycygpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==