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
/* harmony export */   "resetShips": () => (/* binding */ resetShips)
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
    var cell = document.createElement('div');
    cell.className = 'preview-cell';
    shipPreview.appendChild(cell);
  }
};

var rotateShip = function rotateShip() {
  var shipPreview = document.querySelector('.ship-preview');
  var rotateButton = document.querySelector('.rotate-btn');

  if (shipPreview.dataset.vertical === 'false') {
    shipPreview.dataset.vertical = 'true';
    rotateButton.textContent = 'Vertical';
  } else {
    shipPreview.dataset.vertical = 'false';
    rotateButton.textContent = 'Horizontal';
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

  if (+shipPreview.dataset.length === 5) {
    shipPreview.removeChild(shipPreview.lastChild);
    shipPreview.dataset.length = 4;
  } else if (+shipPreview.dataset.length === 4) {
    shipPreview.removeChild(shipPreview.lastChild);
    shipPreview.dataset.length = 3;
  } else if (+shipPreview.dataset.length === 3 && _logic__WEBPACK_IMPORTED_MODULE_0__.logic.data.gameboards.gameboard1.ships.length === 4) {
    shipPreview.removeChild(shipPreview.lastChild);
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
  var cells = document.querySelectorAll('.gameboard1 .cell');
  cells.forEach(function (item) {
    item.addEventListener('click', handleShipPlacement);
    item.addEventListener('mouseenter', highlightPlacement);
    item.addEventListener('mouseleave', removeHighlightPlacement);
  });
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
    cell.removeEventListener('mouseenter', highlightPlacement);
    cell.removeEventListener('mouseleave', removeHighlightPlacement);
    if (cell.classList.contains('highlight')) cell.classList.remove('highlight');
  });
  var computerCells = document.querySelectorAll('.gameboard2 .cell');
  computerCells.forEach(function (item) {
    item.addEventListener('click', handleAttack);
  });
}



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
___CSS_LOADER_EXPORT___.push([module.id, "body {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.boards-wrapper {\n  display: flex;\n  flex-direction: row;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.top {\n  width: 100%;\n  height: 16vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.top-header {\n  font-size: 2.5rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.top-panel {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.ship-preview {\n  display: flex;\n  justify-content: center;\n}\n\n.preview-cell {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: red;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n}\n\n.ship-preview-hidden {\n  display: none;\n}\n\n.buttons-hidden {\n  display: none;\n}\n", "",{"version":3,"sources":["webpack://./src/styles/main.css"],"names":[],"mappings":"AAAA;EACE,aAAa;EACb,YAAY;EACZ,SAAS;EACT,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,WAAW;EACX,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,sBAAsB;EACtB,uBAAuB;EACvB,mBAAmB;AACrB;;AAEA;EACE,iBAAiB;EACjB,WAAW;EACX,YAAY;EACZ,aAAa;EACb,uBAAuB;EACvB,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,sBAAsB;EACtB,YAAY;AACd;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;EACb,cAAc;EACd,qBAAqB;AACvB;;AAEA;EACE,aAAa;EACb,uBAAuB;AACzB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,aAAa;AACf","sourcesContent":["body {\n  height: 100vh;\n  width: 100vw;\n  margin: 0;\n  padding: 0;\n}\n\n.wrapper {\n  height: 100%;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.boards-wrapper {\n  display: flex;\n  flex-direction: row;\n  max-height: 100%;\n  max-width: 100%;\n}\n\n.top {\n  width: 100%;\n  height: 16vh;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n}\n\n.top-header {\n  font-size: 2.5rem;\n  width: 100%;\n  height: 100%;\n  display: flex;\n  justify-content: center;\n  align-items: flex-start;\n}\n\n.top-panel {\n  display: flex;\n  flex-direction: column;\n  height: 100%;\n}\n\n.ship-preview {\n  display: flex;\n  justify-content: center;\n}\n\n.preview-cell {\n  width: 2.5rem;\n  height: 2.5rem;\n  background-color: red;\n}\n\n.buttons {\n  display: flex;\n  justify-content: center;\n}\n\n.ship-preview-hidden {\n  display: none;\n}\n\n.buttons-hidden {\n  display: none;\n}\n"],"sourceRoot":""}]);
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

 // eslint-disable-next-line import/named



_modules_logic__WEBPACK_IMPORTED_MODULE_2__.logic.initalizeGame();
_modules_logic__WEBPACK_IMPORTED_MODULE_2__.logic.placeComputerShips();
(0,_modules_dom__WEBPACK_IMPORTED_MODULE_3__.renderAll)();
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvZG9tLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2xvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9wbGF5ZXIuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL3N0eWxlcy9tYWluLmNzcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9zdHlsZXMvZ2FtZWJvYXJkLmNzcz8yMTg3Iiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvc3R5bGVzL21haW4uY3NzP2U4MGEiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2NvbXBhdCBnZXQgZGVmYXVsdCBleHBvcnQiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImNvbmNsdWRlR2FtZSIsInBsYXllciIsImFsZXJ0IiwibWFyayIsImFjdGlvbiIsInRhcmdldCIsImdhbWVib2FyZE5hbWUiLCJnYW1lYm9hcmQiLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJjZWxsIiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiYWRkIiwiZm9yRWFjaCIsIml0ZW0iLCJzdW5rQ2VsbCIsImhhbmRsZUF0dGFjayIsImUiLCJwYXJlbnROb2RlIiwiY2xhc3NOYW1lIiwiZGF0YXNldCIsImluZGV4IiwicGxheWVyTmFtZXMiLCJPYmplY3QiLCJrZXlzIiwibG9naWMiLCJmaWx0ZXIiLCJmZWVkYmFjayIsInByb2Nlc3NBdHRhY2siLCJpc1N1bmsiLCJzaGlwSW5kZXgiLCJib2FyZCIsImlkIiwiYWxsU2hpcHMiLCJyZWR1Y2UiLCJhY2MiLCJlbGVtZW50IiwiaGFzT3duUHJvcGVydHkiLCJwdXNoIiwic3Vua1NoaXAiLCJnYW1lYm9hcmREb20iLCJyZW1vdmVFdmVudExpc3RlbmVyIiwicmVwb3J0QWxsU3VuayIsInJlc3VsdCIsImhpZ2hsaWdodFBsYWNlbWVudCIsImNlbGxzIiwicXVlcnlTZWxlY3RvckFsbCIsInNoaXBQcmV2aWV3IiwibGVuZ3RoIiwiaGlnaGxpZ2h0ZWRDZWxscyIsImNlbGxJbmRleCIsInZlcnRpY2FsIiwiaSIsInJpZ2h0Qm9yZGVyIiwiYm9yZGVyQ2VsbCIsIm51bWJlciIsImV2ZXJ5IiwiaW5jbHVkZXMiLCJpbmRleE9mIiwic3BsaWNlIiwiY29udGFpbnMiLCJyZW1vdmVIaWdobGlnaHRQbGFjZW1lbnQiLCJkcmF3U2hpcHMiLCJkb21Cb2FyZCIsIm5hbWUiLCJzaGlwQ2VsbCIsInJlbmRlckJvYXJkIiwiY3JlYXRlRWxlbWVudCIsIm5ld0NlbGwiLCJhcHBlbmQiLCJ3cmFwcGVyIiwicmVuZGVyUHJldmlldyIsImFwcGVuZENoaWxkIiwicm90YXRlU2hpcCIsInJvdGF0ZUJ1dHRvbiIsInRleHRDb250ZW50IiwicmVzZXRTaGlwcyIsInNoaXBzIiwiZmlyc3RDaGlsZCIsIm5leHRTaGlwIiwicmVtb3ZlQ2hpbGQiLCJsYXN0Q2hpbGQiLCJwcmVwYXJlU3RhcnQiLCJoYW5kbGVTaGlwUGxhY2VtZW50IiwidGFyZ2V0Q2VsbCIsImFwcGx5TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsInJlc2V0QnV0dG9uIiwicmVuZGVyQWxsIiwiYnV0dG9ucyIsInBsYXllckNlbGxzIiwiY29tcHV0ZXJDZWxscyIsIkdhbWVib2FyZCIsIkFycmF5IiwiZmlsbCIsImNvb3JkaW5hdGVzIiwiU2hpcCIsInBhcnQiLCJpc0hpdCIsImNvb3JkaW5hdGUiLCJpc01pc3NlZCIsImhpdCIsInNoaXAiLCJzdW5rIiwibG9jYXRpb24iLCJzb21lIiwiTWF0aCIsInJhbmRvbSIsInZhbGlkTG9jYXRpb25zIiwicG9zc2libGVMb2NhdGlvbnMiLCJ5IiwiY2hlY2tGb3JDb25mbGljdHMiLCJmbG9vciIsInByZXZpZXciLCJsb2NhdGlvbkFycmF5IiwicGFyc2VJbnQiLCJhZGRTaGlwIiwicmVjZWl2ZUF0dGFjayIsImRhdGEiLCJnYW1lYm9hcmRzIiwicGxheWVycyIsImluaXRhbGl6ZUdhbWUiLCJnYW1lYm9hcmQxIiwiZ2FtZWJvYXJkMiIsImluaXQiLCJwbGF5ZXIxIiwiUGxheWVyIiwicGxheWVyMiIsInBsYWNlQ29tcHV0ZXJTaGlwcyIsImZpbmRSYW5kb21TaGlwTG9jYXRpb24iLCJsZWdhbEF0dGFja3MiLCJjdXJyIiwicmFuZG9tTGVnYWwiLCJoaXRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0FBRUEsSUFBTUEsWUFBWSxHQUFHLFNBQWZBLFlBQWUsQ0FBQ0MsTUFBRCxFQUFZO0FBQy9CQyxPQUFLLFdBQUlELE1BQUosZ0JBQUw7QUFDRCxDQUZEOztBQUlBLElBQU1FLElBQUksR0FBRyxTQUFQQSxJQUFPLENBQUNDLE1BQUQsRUFBU0MsTUFBVCxFQUFpQkMsYUFBakIsRUFBbUM7QUFDOUMsTUFBTUMsU0FBUyxHQUFHQyxRQUFRLENBQUNDLGFBQVQsWUFBMkJILGFBQTNCLEVBQWxCO0FBQ0EsTUFBTUksSUFBSSxHQUFHSCxTQUFTLENBQUNFLGFBQVYsd0JBQXdDSixNQUF4QyxRQUFiOztBQUNBLE1BQUlELE1BQU0sS0FBSyxLQUFmLEVBQXNCO0FBQ3BCTSxRQUFJLENBQUNDLFNBQUwsQ0FBZUMsTUFBZixDQUFzQixNQUF0QjtBQUNBRixRQUFJLENBQUNDLFNBQUwsQ0FBZUUsR0FBZixDQUFtQixLQUFuQjtBQUNEOztBQUNELE1BQUlULE1BQU0sS0FBSyxRQUFmLEVBQXlCO0FBQ3ZCTSxRQUFJLENBQUNDLFNBQUwsQ0FBZUUsR0FBZixDQUFtQixRQUFuQjtBQUNEOztBQUNELE1BQUlULE1BQU0sS0FBSyxNQUFm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cm9tICcuL2xvZ2ljJztcblxuY29uc3QgY29uY2x1ZGVHYW1lID0gKHBsYXllcikgPT4ge1xuICBhbGVydChgJHtwbGF5ZXJ9IGhhcyBsb3N0IWApO1xufTtcblxuY29uc3QgbWFyayA9IChhY3Rpb24sIHRhcmdldCwgZ2FtZWJvYXJkTmFtZSkgPT4ge1xuICBjb25zdCBnYW1lYm9hcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtnYW1lYm9hcmROYW1lfWApO1xuICBjb25zdCBjZWxsID0gZ2FtZWJvYXJkLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke3RhcmdldH0nXWApO1xuICBpZiAoYWN0aW9uID09PSAnaGl0Jykge1xuICAgIGNlbGwuY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICAgIGNlbGwuY2xhc3NMaXN0LmFkZCgnaGl0Jyk7XG4gIH1cbiAgaWYgKGFjdGlvbiA9PT0gJ21pc3NlZCcpIHtcbiAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ21pc3NlZCcpO1xuICB9XG4gIGlmIChhY3Rpb24gPT09ICdzdW5rJykge1xuICAgIHRhcmdldC5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICBjb25zdCBzdW5rQ2VsbCA9IGdhbWVib2FyZC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbmRleD0nJHtpdGVtfSddYCk7XG4gICAgICBzdW5rQ2VsbC5jbGFzc0xpc3QucmVtb3ZlKCdoaXQnKTtcbiAgICAgIHN1bmtDZWxsLmNsYXNzTGlzdC5hZGQoJ3N1bmsnKTtcbiAgICB9KTtcbiAgfVxufTtcblxuY29uc3QgaGFuZGxlQXR0YWNrID0gKGUpID0+IHtcbiAgY29uc3QgZ2FtZWJvYXJkTmFtZSA9IGUudGFyZ2V0LnBhcmVudE5vZGUuY2xhc3NOYW1lO1xuICBjb25zdCBjZWxsID0gK2UudGFyZ2V0LmRhdGFzZXQuaW5kZXg7XG4gIGNvbnN0IHBsYXllck5hbWVzID0gT2JqZWN0LmtleXMobG9naWMuZGF0YS5wbGF5ZXJzKTtcbiAgY29uc3QgcGxheWVyID0gcGxheWVyTmFtZXMuZmlsdGVyKFxuICAgIChpdGVtKSA9PiBsb2dpYy5kYXRhLnBsYXllcnNbaXRlbV0uZ2FtZWJvYXJkID09PSBnYW1lYm9hcmROYW1lXG4gIClbMF07XG4gIGNvbnN0IGdhbWVib2FyZCA9IGxvZ2ljLmRhdGEuZ2FtZWJvYXJkc1tnYW1lYm9hcmROYW1lXTtcbiAgY29uc3QgZmVlZGJhY2sgPSBnYW1lYm9hcmQucHJvY2Vzc0F0dGFjayhjZWxsKTtcbiAgaWYgKGZlZWRiYWNrLmlzU3VuayA9PT0gdHJ1ZSkge1xuICAgIGNvbnN0IHNoaXBJbmRleCA9IGdhbWVib2FyZC5ib2FyZFtjZWxsXS5pZDtcbiAgICBjb25zdCBhbGxTaGlwcyA9IGdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoKGFjYywgZWxlbWVudCwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChlbGVtZW50ICE9PSBudWxsICYmICFlbGVtZW50Lmhhc093blByb3BlcnR5KCdpc01pc3NlZCcpKVxuICAgICAgICBhY2MucHVzaChpbmRleCk7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH0sIFtdKTtcbiAgICBjb25zdCBzdW5rU2hpcCA9IGFsbFNoaXBzLnJlZHVjZSgoYWNjLCBlbGVtZW50KSA9PiB7XG4gICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW2VsZW1lbnRdLmlkID09PSBzaGlwSW5kZXgpIGFjYy5wdXNoKGVsZW1lbnQpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCBbXSk7XG4gICAgbWFyaygnc3VuaycsIHN1bmtTaGlwLCBnYW1lYm9hcmROYW1lKTtcbiAgICBjb25zdCBnYW1lYm9hcmREb20gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAuJHtnYW1lYm9hcmROYW1lfWApO1xuICAgIHN1bmtTaGlwLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIGNvbnN0IHN1bmtDZWxsID0gZ2FtZWJvYXJkRG9tLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWluZGV4PScke2l0ZW19J11gKTtcbiAgICAgIHN1bmtDZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrKTtcbiAgICB9KTtcbiAgICBpZiAoZmVlZGJhY2sucmVwb3J0QWxsU3VuayA9PT0gdHJ1ZSkgcmV0dXJuIGNvbmNsdWRlR2FtZShwbGF5ZXIpO1xuICB9IGVsc2UgaWYgKGZlZWRiYWNrLnJlc3VsdCA9PT0gJ2hpdCcpIHtcbiAgICBtYXJrKCdoaXQnLCBjZWxsLCBnYW1lYm9hcmROYW1lKTtcbiAgICBlLnRhcmdldC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGhhbmRsZUF0dGFjayk7XG4gIH0gZWxzZSBpZiAoZmVlZGJhY2sucmVzdWx0ID09PSAnbWlzc2VkJykge1xuICAgIG1hcmsoJ21pc3NlZCcsIGNlbGwsIGdhbWVib2FyZE5hbWUpO1xuICAgIGUudGFyZ2V0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlQXR0YWNrKTtcbiAgfVxufTtcblxuY29uc3QgaGlnaGxpZ2h0UGxhY2VtZW50ID0gKGUpID0+IHtcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkMSAuY2VsbCcpO1xuICBjb25zdCBzaGlwUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXByZXZpZXcnKTtcbiAgY29uc3QgbGVuZ3RoID0gK3NoaXBQcmV2aWV3LmRhdGFzZXQubGVuZ3RoO1xuICBjb25zdCBoaWdobGlnaHRlZENlbGxzID0gW107XG4gIGNvbnN0IGNlbGxJbmRleCA9ICtlLnRhcmdldC5kYXRhc2V0LmluZGV4O1xuICBpZiAoc2hpcFByZXZpZXcuZGF0YXNldC52ZXJ0aWNhbCA9PT0gJ2ZhbHNlJykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGhpZ2hsaWdodGVkQ2VsbHMucHVzaChjZWxsSW5kZXggKyBpKTtcbiAgICB9XG4gICAgY29uc3QgcmlnaHRCb3JkZXIgPSBbOSwgMTksIDI5LCAzOSwgNDksIDU5LCA2OSwgNzksIDg5XTtcbiAgICBjb25zdCBib3JkZXJDZWxsID0gcmlnaHRCb3JkZXIuZmlsdGVyKChudW1iZXIpID0+XG4gICAgICBbbnVtYmVyLCBudW1iZXIgKyAxXS5ldmVyeSgoaXRlbSkgPT4gaGlnaGxpZ2h0ZWRDZWxscy5pbmNsdWRlcyhpdGVtKSlcbiAgICApO1xuICAgIGlmIChib3JkZXJDZWxsLmxlbmd0aCA9PT0gMSkge1xuICAgICAgY29uc3QgaW5kZXggPSBoaWdobGlnaHRlZENlbGxzLmluZGV4T2YoYm9yZGVyQ2VsbFswXSkgKyAxO1xuICAgICAgaGlnaGxpZ2h0ZWRDZWxscy5zcGxpY2UoaW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIGlmIChzaGlwUHJldmlldy5kYXRhc2V0LnZlcnRpY2FsID09PSAndHJ1ZScpIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgICBoaWdobGlnaHRlZENlbGxzLnB1c2goY2VsbEluZGV4ICsgaSAqIDEwKTtcbiAgICB9XG4gIH1cbiAgY2VsbHMuZm9yRWFjaCgoY2VsbCwgaW5kZXgpID0+IHtcbiAgICBpZiAoaGlnaGxpZ2h0ZWRDZWxscy5pbmNsdWRlcyhpbmRleCkgJiYgIWNlbGwuY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpXG4gICAgICBjZWxsLmNsYXNzTGlzdC5hZGQoJ2hpZ2hsaWdodCcpO1xuICB9KTtcbn07XG5cbmNvbnN0IHJlbW92ZUhpZ2hsaWdodFBsYWNlbWVudCA9ICgpID0+IHtcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkMSAuY2VsbCcpO1xuICBjZWxscy5mb3JFYWNoKChjZWxsKSA9PiBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpKTtcbn07XG5cbmNvbnN0IGRyYXdTaGlwcyA9IChnYW1lYm9hcmQpID0+IHtcbiAgZ2FtZWJvYXJkLmJvYXJkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGl0ZW0gPT09IG51bGwpIHJldHVybjtcbiAgICBjb25zdCBkb21Cb2FyZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYC4ke2dhbWVib2FyZC5uYW1lfWApO1xuICAgIGNvbnN0IHNoaXBDZWxsID0gZG9tQm9hcmQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW5kZXg9JyR7aW5kZXh9J11gKTtcbiAgICBzaGlwQ2VsbC5jbGFzc0xpc3QuYWRkKCdzaGlwJyk7XG4gIH0pO1xufTtcblxuY29uc3QgcmVuZGVyQm9hcmQgPSAoZ2FtZWJvYXJkKSA9PiB7XG4gIGNvbnN0IGJvYXJkID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGJvYXJkLmNsYXNzTmFtZSA9IGdhbWVib2FyZC5uYW1lO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGdhbWVib2FyZC5ib2FyZC5sZW5ndGg7IGkgKz0gMSkge1xuICAgIGNvbnN0IG5ld0NlbGwgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICBuZXdDZWxsLmNsYXNzTmFtZSA9ICdjZWxsJztcbiAgICBuZXdDZWxsLmRhdGFzZXQuaW5kZXggPSBpO1xuICAgIGJvYXJkLmFwcGVuZChuZXdDZWxsKTtcbiAgfVxuICBjb25zdCB3cmFwcGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJvYXJkcy13cmFwcGVyJyk7XG4gIHdyYXBwZXIuYXBwZW5kKGJvYXJkKTtcbn07XG5cbmNvbnN0IHJlbmRlclByZXZpZXcgPSAobGVuZ3RoKSA9PiB7XG4gIGNvbnN0IHNoaXBQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtcHJldmlldycpO1xuICBzaGlwUHJldmlldy5kYXRhc2V0Lmxlbmd0aCA9IGxlbmd0aDtcbiAgc2hpcFByZXZpZXcuZGF0YXNldC52ZXJ0aWNhbCA9IGZhbHNlO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSArPSAxKSB7XG4gICAgY29uc3QgY2VsbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIGNlbGwuY2xhc3NOYW1lID0gJ3ByZXZpZXctY2VsbCc7XG4gICAgc2hpcFByZXZpZXcuYXBwZW5kQ2hpbGQoY2VsbCk7XG4gIH1cbn07XG5cbmNvbnN0IHJvdGF0ZVNoaXAgPSAoKSA9PiB7XG4gIGNvbnN0IHNoaXBQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtcHJldmlldycpO1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICBpZiAoc2hpcFByZXZpZXcuZGF0YXNldC52ZXJ0aWNhbCA9PT0gJ2ZhbHNlJykge1xuICAgIHNoaXBQcmV2aWV3LmRhdGFzZXQudmVydGljYWwgPSAndHJ1ZSc7XG4gICAgcm90YXRlQnV0dG9uLnRleHRDb250ZW50ID0gJ1ZlcnRpY2FsJztcbiAgfSBlbHNlIHtcbiAgICBzaGlwUHJldmlldy5kYXRhc2V0LnZlcnRpY2FsID0gJ2ZhbHNlJztcbiAgICByb3RhdGVCdXR0b24udGV4dENvbnRlbnQgPSAnSG9yaXpvbnRhbCc7XG4gIH1cbn07XG5cbmNvbnN0IHJlc2V0U2hpcHMgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZCA9IGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxO1xuICBnYW1lYm9hcmQuc2hpcHMgPSBbXTtcbiAgZ2FtZWJvYXJkLmJvYXJkLmZvckVhY2goKGl0ZW0sIGluZGV4KSA9PiB7XG4gICAgaWYgKGl0ZW0gIT09IG51bGwpIGdhbWVib2FyZC5ib2FyZFtpbmRleF0gPSBudWxsO1xuICB9KTtcbiAgY29uc3QgY2VsbHMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuZ2FtZWJvYXJkMSAuY2VsbCcpO1xuICBjZWxscy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgaWYgKGl0ZW0uY2xhc3NMaXN0LmNvbnRhaW5zKCdzaGlwJykpIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnc2hpcCcpO1xuICB9KTtcbiAgY29uc3Qgc2hpcFByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1wcmV2aWV3Jyk7XG4gIHdoaWxlIChzaGlwUHJldmlldy5maXJzdENoaWxkKSB7XG4gICAgc2hpcFByZXZpZXcuZmlyc3RDaGlsZC5yZW1vdmUoKTtcbiAgfVxuICBzaGlwUHJldmlldy5kYXRhc2V0Lmxlbmd0aCA9IDU7XG4gIHJlbmRlclByZXZpZXcoNSk7XG59O1xuXG5jb25zdCBuZXh0U2hpcCA9ICgpID0+IHtcbiAgY29uc3Qgc2hpcFByZXZpZXcgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2hpcC1wcmV2aWV3Jyk7XG4gIGlmICgrc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGggPT09IDUpIHtcbiAgICBzaGlwUHJldmlldy5yZW1vdmVDaGlsZChzaGlwUHJldmlldy5sYXN0Q2hpbGQpO1xuICAgIHNoaXBQcmV2aWV3LmRhdGFzZXQubGVuZ3RoID0gNDtcbiAgfSBlbHNlIGlmICgrc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGggPT09IDQpIHtcbiAgICBzaGlwUHJldmlldy5yZW1vdmVDaGlsZChzaGlwUHJldmlldy5sYXN0Q2hpbGQpO1xuICAgIHNoaXBQcmV2aWV3LmRhdGFzZXQubGVuZ3RoID0gMztcbiAgfSBlbHNlIGlmIChcbiAgICArc2hpcFByZXZpZXcuZGF0YXNldC5sZW5ndGggPT09IDMgJiZcbiAgICBsb2dpYy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMS5zaGlwcy5sZW5ndGggPT09IDRcbiAgKSB7XG4gICAgc2hpcFByZXZpZXcucmVtb3ZlQ2hpbGQoc2hpcFByZXZpZXcubGFzdENoaWxkKTtcbiAgICBzaGlwUHJldmlldy5kYXRhc2V0Lmxlbmd0aCA9IDI7XG4gIH0gZWxzZSBpZiAobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEuc2hpcHMubGVuZ3RoID09PSA1KSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgcHJlcGFyZVN0YXJ0KCk7XG4gIH1cbn07XG5cbmNvbnN0IGhhbmRsZVNoaXBQbGFjZW1lbnQgPSAoZSkgPT4ge1xuICBjb25zdCB0YXJnZXRDZWxsID0gZS50YXJnZXQ7XG4gIGNvbnN0IHNoaXBQcmV2aWV3ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNoaXAtcHJldmlldycpO1xuICBpZiAobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDEuc2hpcHMubGVuZ3RoID09PSA1KSByZXR1cm47XG4gIGlmIChcbiAgICBsb2dpYy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMS5wbGFjZVBsYXllclNoaXAodGFyZ2V0Q2VsbCwgc2hpcFByZXZpZXcpXG4gICkge1xuICAgIGRyYXdTaGlwcyhsb2dpYy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMSk7XG4gICAgbmV4dFNoaXAoKTtcbiAgfVxufTtcblxuY29uc3QgYXBwbHlMaXN0ZW5lcnMgPSAoKSA9PiB7XG4gIGNvbnN0IGNlbGxzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmdhbWVib2FyZDEgLmNlbGwnKTtcbiAgY2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVTaGlwUGxhY2VtZW50KTtcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBoaWdobGlnaHRQbGFjZW1lbnQpO1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIHJlbW92ZUhpZ2hsaWdodFBsYWNlbWVudCk7XG4gIH0pO1xuICBjb25zdCByb3RhdGVCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucm90YXRlLWJ0bicpO1xuICByb3RhdGVCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCByb3RhdGVTaGlwKTtcbiAgY29uc3QgcmVzZXRCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucmVzZXQtYnRuJyk7XG4gIHJlc2V0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgcmVzZXRTaGlwcyk7XG59O1xuXG5jb25zdCByZW5kZXJBbGwgPSAoKSA9PiB7XG4gIHJlbmRlckJvYXJkKGxvZ2ljLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxKTtcbiAgcmVuZGVyQm9hcmQobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDIpO1xuICByZW5kZXJQcmV2aWV3KDUpO1xuICAvLyBGT1IgU1RZTElORyAtIFJFTU9WRSBCRUZPUkUgUFVCTElTSElORyAvL1xuICBkcmF3U2hpcHMobG9naWMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDIpO1xuICBhcHBseUxpc3RlbmVycygpO1xufTtcblxuZnVuY3Rpb24gcHJlcGFyZVN0YXJ0KCkge1xuICBjb25zdCBzaGlwUHJldmlldyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaGlwLXByZXZpZXcnKTtcbiAgc2hpcFByZXZpZXcuY2xhc3NOYW1lID0gJ3NoaXAtcHJldmlldy1oaWRkZW4nO1xuICBjb25zdCBidXR0b25zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmJ1dHRvbnMnKTtcbiAgYnV0dG9ucy5jbGFzc05hbWUgPSAnYnV0dG9ucy1oaWRkZW4nO1xuICBjb25zdCBwbGF5ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQxIC5jZWxsJyk7XG4gIHBsYXllckNlbGxzLmZvckVhY2goKGNlbGwpID0+IHtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaGFuZGxlU2hpcFBsYWNlbWVudCk7XG4gICAgY2VsbC5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgaGlnaGxpZ2h0UGxhY2VtZW50KTtcbiAgICBjZWxsLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCByZW1vdmVIaWdobGlnaHRQbGFjZW1lbnQpO1xuICAgIGlmIChjZWxsLmNsYXNzTGlzdC5jb250YWlucygnaGlnaGxpZ2h0JykpXG4gICAgICBjZWxsLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZ2hsaWdodCcpO1xuICB9KTtcbiAgY29uc3QgY29tcHV0ZXJDZWxscyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5nYW1lYm9hcmQyIC5jZWxsJyk7XG4gIGNvbXB1dGVyQ2VsbHMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgIGl0ZW0uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBoYW5kbGVBdHRhY2spO1xuICB9KTtcbn1cblxuZXhwb3J0IHsgcmVuZGVyQWxsLCByZXNldFNoaXBzIH07XG4iLCJpbXBvcnQgU2hpcCBmcm9tICcuL3NoaXAnO1xuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcihuYW1lKSB7XG4gICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheSgxMDApLmZpbGwobnVsbCk7XG4gIH1cblxuICBhZGRTaGlwKGNvb3JkaW5hdGVzLCBsZW5ndGgpIHtcbiAgICB0aGlzLnNoaXBzLnB1c2gobmV3IFNoaXAobGVuZ3RoKSk7XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuYm9hcmRbaXRlbV0gPSB7XG4gICAgICAgIGlkOiB0aGlzLnNoaXBzLmxlbmd0aCAtIDEsXG4gICAgICAgIHBhcnQ6IGluZGV4LFxuICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbY29vcmRpbmF0ZV0gPT09IG51bGwpIHtcbiAgICAgIHRoaXMuYm9hcmRbY29vcmRpbmF0ZV0gPSB7IGlzTWlzc2VkOiB0cnVlIH07XG4gICAgICByZXR1cm4gJ21pc3NlZCc7XG4gICAgfVxuICAgIHRoaXMuc2hpcHNbdGhpcy5ib2FyZFtjb29yZGluYXRlXS5pZF0uaGl0KHRoaXMuYm9hcmRbY29vcmRpbmF0ZV0ucGFydCk7XG4gICAgdGhpcy5ib2FyZFtjb29yZGluYXRlXS5pc0hpdCA9IHRydWU7XG4gICAgcmV0dXJuICdoaXQnO1xuICB9XG5cbiAgcmVwb3J0QWxsU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zdW5rID09PSB0cnVlKTtcbiAgfVxuXG4gIGNoZWNrRm9yQ29uZmxpY3RzKGxvY2F0aW9uKSB7XG4gICAgaWYgKGxvY2F0aW9uLnNvbWUoKGl0ZW0pID0+IGl0ZW0gPiA5OSkpIHJldHVybiBmYWxzZTtcblxuICAgIGNvbnN0IHJpZ2h0Qm9yZGVyID0gWzksIDE5LCAyOSwgMzksIDQ5LCA1OSwgNjksIDc5LCA4OV07XG4gICAgaWYgKFxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycm93LWJvZHktc3R5bGVcbiAgICAgIHJpZ2h0Qm9yZGVyLnNvbWUoKG51bWJlcikgPT4ge1xuICAgICAgICByZXR1cm4gW251bWJlciwgbnVtYmVyICsgMV0uZXZlcnkoKGl0ZW0pID0+IGxvY2F0aW9uLmluY2x1ZGVzKGl0ZW0pKTtcbiAgICAgIH0pXG4gICAgKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKGxvY2F0aW9uLnNvbWUoKGl0ZW0pID0+IHRoaXMuYm9hcmRbaXRlbV0gIT09IG51bGwpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgZmluZFJhbmRvbVNoaXBMb2NhdGlvbihsZW5ndGgpIHtcbiAgICBjb25zdCB2ZXJ0aWNhbCA9IE1hdGgucmFuZG9tKCkgPiAwLjU7XG4gICAgY29uc3QgdmFsaWRMb2NhdGlvbnMgPSBbXTtcblxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTAwIC0gbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IHBvc3NpYmxlTG9jYXRpb25zID0gW107XG4gICAgICBpZiAodmVydGljYWwgPT09IHRydWUpIHtcbiAgICAgICAgZm9yIChsZXQgeSA9IDA7IHkgPCBsZW5ndGg7IHkgKz0gMSkge1xuICAgICAgICAgIHBvc3NpYmxlTG9jYXRpb25zLnB1c2goaSArIHkgKiAxMCk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAodmVydGljYWwgPT09IGZhbHNlKSB7XG4gICAgICAgIGZvciAobGV0IHkgPSAwOyB5IDwgbGVuZ3RoOyB5ICs9IDEpIHtcbiAgICAgICAgICBwb3NzaWJsZUxvY2F0aW9ucy5wdXNoKHkgKyBpKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKHRoaXMuY2hlY2tGb3JDb25mbGljdHMocG9zc2libGVMb2NhdGlvbnMpKVxuICAgICAgICB2YWxpZExvY2F0aW9ucy5wdXNoKHBvc3NpYmxlTG9jYXRpb25zKTtcbiAgICB9XG4gICAgcmV0dXJuIHZhbGlkTG9jYXRpb25zW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIHZhbGlkTG9jYXRpb25zLmxlbmd0aCldO1xuICB9XG5cbiAgcGxhY2VQbGF5ZXJTaGlwKHRhcmdldCwgcHJldmlldykge1xuICAgIGNvbnN0IGxvY2F0aW9uQXJyYXkgPSBbXTtcbiAgICBpZiAocHJldmlldy5kYXRhc2V0LnZlcnRpY2FsID09PSAnZmFsc2UnKSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByZXZpZXcuZGF0YXNldC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICBsb2NhdGlvbkFycmF5LnB1c2gocGFyc2VJbnQodGFyZ2V0LmRhdGFzZXQuaW5kZXgsIDEwKSArIGkpO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocHJldmlldy5kYXRhc2V0LnZlcnRpY2FsID09PSAndHJ1ZScpIHtcbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJldmlldy5kYXRhc2V0Lmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgIGxvY2F0aW9uQXJyYXkucHVzaChwYXJzZUludCh0YXJnZXQuZGF0YXNldC5pbmRleCwgMTApICsgaSAqIDEwKTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHRoaXMuY2hlY2tGb3JDb25mbGljdHMobG9jYXRpb25BcnJheSkgPT09IHRydWUpIHtcbiAgICAgIHRoaXMuYWRkU2hpcChsb2NhdGlvbkFycmF5LCBwYXJzZUludChwcmV2aWV3LmRhdGFzZXQubGVuZ3RoLCAxMCkpO1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHByb2Nlc3NBdHRhY2soaW5kZXgpIHtcbiAgICBjb25zdCBmZWVkYmFjayA9IHtcbiAgICAgIHJlc3VsdDogbnVsbCxcbiAgICAgIGlzU3VuazogZmFsc2UsXG4gICAgICByZXBvcnRBbGxTdW5rOiBmYWxzZSxcbiAgICB9O1xuICAgIGZlZWRiYWNrLnJlc3VsdCA9IHRoaXMucmVjZWl2ZUF0dGFjayhpbmRleCk7XG4gICAgaWYgKFxuICAgICAgdGhpcy5ib2FyZFtpbmRleF0gIT09IG51bGwgJiZcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wcm90b3R5cGUtYnVpbHRpbnNcbiAgICAgICF0aGlzLmJvYXJkW2luZGV4XS5oYXNPd25Qcm9wZXJ0eSgnaXNNaXNzZWQnKVxuICAgICkge1xuICAgICAgZmVlZGJhY2suaXNTdW5rID0gdGhpcy5zaGlwc1t0aGlzLmJvYXJkW2luZGV4XS5pZF0uc3VuaztcbiAgICAgIGZlZWRiYWNrLnJlcG9ydEFsbFN1bmsgPSB0aGlzLnJlcG9ydEFsbFN1bmsoKTtcbiAgICB9XG4gICAgcmV0dXJuIGZlZWRiYWNrO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImltcG9ydCBHYW1lYm9hcmQgZnJvbSAnLi9nYW1lYm9hcmQnO1xuaW1wb3J0IFBsYXllciBmcm9tICcuL3BsYXllcic7XG5cbmNvbnN0IGxvZ2ljID0ge1xuICBkYXRhOiB7XG4gICAgZ2FtZWJvYXJkczoge30sXG4gICAgcGxheWVyczoge30sXG4gIH0sXG5cbiAgaW5pdGFsaXplR2FtZSgpIHtcbiAgICB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQxID0gbmV3IEdhbWVib2FyZCgnZ2FtZWJvYXJkMScpO1xuICAgIHRoaXMuZGF0YS5nYW1lYm9hcmRzLmdhbWVib2FyZDIgPSBuZXcgR2FtZWJvYXJkKCdnYW1lYm9hcmQyJyk7XG4gICAgdGhpcy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMS5pbml0KCk7XG4gICAgdGhpcy5kYXRhLmdhbWVib2FyZHMuZ2FtZWJvYXJkMi5pbml0KCk7XG4gICAgdGhpcy5kYXRhLnBsYXllcnMucGxheWVyMSA9IG5ldyBQbGF5ZXIoJ2h1bWFuJywgJ2dhbWVib2FyZDEnKTtcbiAgICB0aGlzLmRhdGEucGxheWVycy5wbGF5ZXIyID0gbmV3IFBsYXllcignYWknLCAnZ2FtZWJvYXJkMicpO1xuICB9LFxuXG4gIHBsYWNlQ29tcHV0ZXJTaGlwcygpIHtcbiAgICBjb25zdCBnYW1lYm9hcmQgPSB0aGlzLmRhdGEuZ2FtZWJvYXJkcy5nYW1lYm9hcmQyO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDUpLCA1KTtcbiAgICBnYW1lYm9hcmQuYWRkU2hpcChnYW1lYm9hcmQuZmluZFJhbmRvbVNoaXBMb2NhdGlvbig0KSwgNCk7XG4gICAgZ2FtZWJvYXJkLmFkZFNoaXAoZ2FtZWJvYXJkLmZpbmRSYW5kb21TaGlwTG9jYXRpb24oMyksIDMpO1xuICAgIGdhbWVib2FyZC5hZGRTaGlwKGdhbWVib2FyZC5maW5kUmFuZG9tU2hpcExvY2F0aW9uKDIpLCAyKTtcbiAgICBnYW1lYm9hcmQuYWRkU2hpcChnYW1lYm9hcmQuZmluZFJhbmRvbVNoaXBMb2NhdGlvbigyKSwgMik7XG4gIH0sXG59O1xuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuZXhwb3J0IHsgbG9naWMgfTtcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGdhbWVib2FyZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gIH1cblxuICByYW5kb21BdHRhY2soKSB7XG4gICAgY29uc3QgbGVnYWxBdHRhY2tzID0gdGhpcy5nYW1lYm9hcmQuYm9hcmQucmVkdWNlKChjZWxscywgY3VyciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjdXJyID09PSBudWxsIHx8IGN1cnIuaXNIaXQgIT09IHRydWUgfHwgY3Vyci5pc01pc3NlZCAhPT0gdHJ1ZSlcbiAgICAgICAgY2VsbHMucHVzaChpbmRleCk7XG4gICAgICByZXR1cm4gY2VsbHM7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHJhbmRvbUxlZ2FsID1cbiAgICAgIGxlZ2FsQXR0YWNrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZWdhbEF0dGFja3MubGVuZ3RoKV07XG4gICAgdGhpcy5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21MZWdhbCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgdmVydGljYWwpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSBBcnJheShsZW5ndGgpLmZpbGwobnVsbCk7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy52ZXJ0aWNhbCA9IHZlcnRpY2FsO1xuICB9XG5cbiAgaGl0KHBhcnQpIHtcbiAgICB0aGlzLmhpdHNbcGFydF0gPSAnaGl0JztcbiAgICB0aGlzLmlzU3VuaygpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMuZXZlcnkoKGhpdCkgPT4gaGl0ID09PSAnaGl0JykpIHRoaXMuc3VuayA9IHRydWU7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgU2hpcDtcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvY3NzV2l0aE1hcHBpbmdUb1N0cmluZy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLmdhbWVib2FyZDEsXFxuLmdhbWVib2FyZDIge1xcbiAgb3V0bGluZTogMC4xcmVtIGJsYWNrIHNvbGlkO1xcbiAgZGlzcGxheTogZ3JpZDtcXG4gIHdpZHRoOiAyNXJlbTtcXG4gIGhlaWdodDogMjVyZW07XFxuICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDEwLCAxZnIpO1xcbiAgbWFyZ2luOiAxcmVtO1xcbn1cXG5cXG4uY2VsbCB7XFxuICBib3JkZXI6IDAuMXJlbSBibGFjayBzb2xpZDtcXG59XFxuXFxuLnNoaXAge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XFxuICBjb2xvcjogd2hpdGU7XFxufVxcblxcbi5oaWdobGlnaHQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogbmF2eTtcXG59XFxuXFxuLmhpdCB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5taXNzZWQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JheTtcXG59XFxuXFxuLnN1bmsge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogZGFya3JlZDtcXG59XFxuXFxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4ODBweCkge1xcbiAgLndyYXBwZXIge1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICB9XFxuICAuYm9hcmRzLXdyYXBwZXIge1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgfVxcbiAgLmdhbWVib2FyZDEsXFxuICAuZ2FtZWJvYXJkMiB7XFxuICAgIHdpZHRoOiAxOHJlbTtcXG4gICAgaGVpZ2h0OiAxOHJlbTtcXG4gIH1cXG59XFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL3N0eWxlcy9nYW1lYm9hcmQuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOztFQUVFLDJCQUEyQjtFQUMzQixhQUFhO0VBQ2IsWUFBWTtFQUNaLGFBQWE7RUFDYixzQ0FBc0M7RUFDdEMsbUNBQW1DO0VBQ25DLFlBQVk7QUFDZDs7QUFFQTtFQUNFLDBCQUEwQjtBQUM1Qjs7QUFFQTtFQUNFLHVCQUF1QjtFQUN2QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSx5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLDhCQUE4QjtFQUNoQztFQUNBO0lBQ0Usc0JBQXNCO0VBQ3hCO0VBQ0E7O0lBRUUsWUFBWTtJQUNaLGFBQWE7RUFDZjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5nYW1lYm9hcmQxLFxcbi5nYW1lYm9hcmQyIHtcXG4gIG91dGxpbmU6IDAuMXJlbSBibGFjayBzb2xpZDtcXG4gIGRpc3BsYXk6IGdyaWQ7XFxuICB3aWR0aDogMjVyZW07XFxuICBoZWlnaHQ6IDI1cmVtO1xcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMTAsIDFmcik7XFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgxMCwgMWZyKTtcXG4gIG1hcmdpbjogMXJlbTtcXG59XFxuXFxuLmNlbGwge1xcbiAgYm9yZGVyOiAwLjFyZW0gYmxhY2sgc29saWQ7XFxufVxcblxcbi5zaGlwIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xcbiAgY29sb3I6IHdoaXRlO1xcbn1cXG5cXG4uaGlnaGxpZ2h0IHtcXG4gIGJhY2tncm91bmQtY29sb3I6IG5hdnk7XFxufVxcblxcbi5oaXQge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbn1cXG5cXG4ubWlzc2VkIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGdyYXk7XFxufVxcblxcbi5zdW5rIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XFxufVxcblxcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogODgwcHgpIHtcXG4gIC53cmFwcGVyIHtcXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcbiAgfVxcbiAgLmJvYXJkcy13cmFwcGVyIHtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIH1cXG4gIC5nYW1lYm9hcmQxLFxcbiAgLmdhbWVib2FyZDIge1xcbiAgICB3aWR0aDogMThyZW07XFxuICAgIGhlaWdodDogMThyZW07XFxuICB9XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2Nzc1dpdGhNYXBwaW5nVG9TdHJpbmcuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcImJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b3Age1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udG9wLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2hpcC1wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByZXZpZXctY2VsbCB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtcHJldmlldy1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnMtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiLCBcIlwiLHtcInZlcnNpb25cIjozLFwic291cmNlc1wiOltcIndlYnBhY2s6Ly8uL3NyYy9zdHlsZXMvbWFpbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7RUFDRSxhQUFhO0VBQ2IsWUFBWTtFQUNaLFNBQVM7RUFDVCxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsZ0JBQWdCO0VBQ2hCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtBQUNyQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGNBQWM7RUFDZCxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcImJvZHkge1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDB2dztcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxufVxcblxcbi53cmFwcGVyIHtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxufVxcblxcbi5ib2FyZHMtd3JhcHBlciB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXG4gIG1heC1oZWlnaHQ6IDEwMCU7XFxuICBtYXgtd2lkdGg6IDEwMCU7XFxufVxcblxcbi50b3Age1xcbiAgd2lkdGg6IDEwMCU7XFxuICBoZWlnaHQ6IDE2dmg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnRvcC1oZWFkZXIge1xcbiAgZm9udC1zaXplOiAyLjVyZW07XFxuICB3aWR0aDogMTAwJTtcXG4gIGhlaWdodDogMTAwJTtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG4udG9wLXBhbmVsIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgaGVpZ2h0OiAxMDAlO1xcbn1cXG5cXG4uc2hpcC1wcmV2aWV3IHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnByZXZpZXctY2VsbCB7XFxuICB3aWR0aDogMi41cmVtO1xcbiAgaGVpZ2h0OiAyLjVyZW07XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZWQ7XFxufVxcblxcbi5idXR0b25zIHtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG59XFxuXFxuLnNoaXAtcHJldmlldy1oaWRkZW4ge1xcbiAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuLmJ1dHRvbnMtaGlkZGVuIHtcXG4gIGRpc3BsYXk6IG5vbmU7XFxufVxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbihcIlwiKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgXCJcIl1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShhcnIsIGkpIHsgcmV0dXJuIF9hcnJheVdpdGhIb2xlcyhhcnIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChhcnIsIGkpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShhcnIsIGkpIHx8IF9ub25JdGVyYWJsZVJlc3QoKTsgfVxuXG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkgeyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpOyB9XG5cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShvLCBtaW5MZW4pIHsgaWYgKCFvKSByZXR1cm47IGlmICh0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KG8sIG1pbkxlbik7IHZhciBuID0gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG8pLnNsaWNlKDgsIC0xKTsgaWYgKG4gPT09IFwiT2JqZWN0XCIgJiYgby5jb25zdHJ1Y3RvcikgbiA9IG8uY29uc3RydWN0b3IubmFtZTsgaWYgKG4gPT09IFwiTWFwXCIgfHwgbiA9PT0gXCJTZXRcIikgcmV0dXJuIEFycmF5LmZyb20obyk7IGlmIChuID09PSBcIkFyZ3VtZW50c1wiIHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KG4pKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkobywgbWluTGVuKTsgfVxuXG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShhcnIsIGxlbikgeyBpZiAobGVuID09IG51bGwgfHwgbGVuID4gYXJyLmxlbmd0aCkgbGVuID0gYXJyLmxlbmd0aDsgZm9yICh2YXIgaSA9IDAsIGFycjIgPSBuZXcgQXJyYXkobGVuKTsgaSA8IGxlbjsgaSsrKSB7IGFycjJbaV0gPSBhcnJbaV07IH0gcmV0dXJuIGFycjI7IH1cblxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KGFyciwgaSkgeyB2YXIgX2kgPSBhcnIgPT0gbnVsbCA/IG51bGwgOiB0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiICYmIGFycltTeW1ib2wuaXRlcmF0b3JdIHx8IGFycltcIkBAaXRlcmF0b3JcIl07IGlmIChfaSA9PSBudWxsKSByZXR1cm47IHZhciBfYXJyID0gW107IHZhciBfbiA9IHRydWU7IHZhciBfZCA9IGZhbHNlOyB2YXIgX3MsIF9lOyB0cnkgeyBmb3IgKF9pID0gX2kuY2FsbChhcnIpOyAhKF9uID0gKF9zID0gX2kubmV4dCgpKS5kb25lKTsgX24gPSB0cnVlKSB7IF9hcnIucHVzaChfcy52YWx1ZSk7IGlmIChpICYmIF9hcnIubGVuZ3RoID09PSBpKSBicmVhazsgfSB9IGNhdGNoIChlcnIpIHsgX2QgPSB0cnVlOyBfZSA9IGVycjsgfSBmaW5hbGx5IHsgdHJ5IHsgaWYgKCFfbiAmJiBfaVtcInJldHVyblwiXSAhPSBudWxsKSBfaVtcInJldHVyblwiXSgpOyB9IGZpbmFsbHkgeyBpZiAoX2QpIHRocm93IF9lOyB9IH0gcmV0dXJuIF9hcnI7IH1cblxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKGFycikgeyBpZiAoQXJyYXkuaXNBcnJheShhcnIpKSByZXR1cm4gYXJyOyB9XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKSB7XG4gIHZhciBfaXRlbSA9IF9zbGljZWRUb0FycmF5KGl0ZW0sIDQpLFxuICAgICAgY29udGVudCA9IF9pdGVtWzFdLFxuICAgICAgY3NzTWFwcGluZyA9IF9pdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHR5cGVvZiBidG9hID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoY3NzTWFwcGluZykpKSk7XG4gICAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgXCJcIikuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbihcIlxcblwiKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL2dhbWVib2FyZC5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgIFxuICAgICAgXG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuc3R5bGVUYWdUcmFuc2Zvcm0gPSBzdHlsZVRhZ1RyYW5zZm9ybUZuO1xub3B0aW9ucy5zZXRBdHRyaWJ1dGVzID0gc2V0QXR0cmlidXRlcztcblxuICAgICAgb3B0aW9ucy5pbnNlcnQgPSBpbnNlcnRGbi5iaW5kKG51bGwsIFwiaGVhZFwiKTtcbiAgICBcbm9wdGlvbnMuZG9tQVBJID0gZG9tQVBJO1xub3B0aW9ucy5pbnNlcnRTdHlsZUVsZW1lbnQgPSBpbnNlcnRTdHlsZUVsZW1lbnQ7XG5cbnZhciB1cGRhdGUgPSBBUEkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5leHBvcnQgKiBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL21haW4uY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIGFwaSA9IG9wdGlvbnMuZG9tQVBJKG9wdGlvbnMpO1xuICBhcGkudXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic3R5bGVcIik7XG4gIG9wdGlvbnMuc2V0QXR0cmlidXRlcyhzdHlsZSwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICByZXR1cm4gc3R5bGU7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0U3R5bGVFbGVtZW50OyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIHNldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcyhzdHlsZSkge1xuICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09IFwidW5kZWZpbmVkXCIgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKFwibWVkaWFcIiwgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZShcIm1lZGlhXCIpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSAhPT0gXCJ1bmRlZmluZWRcIikge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGUpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBkb21BUEkob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlLCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBkb21BUEk7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gc3R5bGVUYWdUcmFuc2Zvcm0oY3NzLCBzdHlsZSkge1xuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdGlkOiBtb2R1bGVJZCxcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbl9fd2VicGFja19yZXF1aXJlX18ubiA9IChtb2R1bGUpID0+IHtcblx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG5cdFx0KCkgPT4gKG1vZHVsZVsnZGVmYXVsdCddKSA6XG5cdFx0KCkgPT4gKG1vZHVsZSk7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsIHsgYTogZ2V0dGVyIH0pO1xuXHRyZXR1cm4gZ2V0dGVyO1xufTsiLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICcuL3N0eWxlcy9tYWluLmNzcyc7XG5pbXBvcnQgJy4vc3R5bGVzL2dhbWVib2FyZC5jc3MnO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uYW1lZFxuaW1wb3J0IHsgbG9naWMgfSBmcm9tICcuL21vZHVsZXMvbG9naWMnO1xuaW1wb3J0IHsgcmVuZGVyQWxsIH0gZnJvbSAnLi9tb2R1bGVzL2RvbSc7XG5cbmxvZ2ljLmluaXRhbGl6ZUdhbWUoKTtcbmxvZ2ljLnBsYWNlQ29tcHV0ZXJTaGlwcygpO1xucmVuZGVyQWxsKCk7XG4iXSwic291cmNlUm9vdCI6IiJ9