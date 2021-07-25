/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/classes/gameboard.js":
/*!******************************************!*\
  !*** ./src/modules/classes/gameboard.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _ship__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ship */ "./src/modules/classes/ship.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }



var Gameboard = /*#__PURE__*/function () {
  function Gameboard(name) {
    _classCallCheck(this, Gameboard);

    this.board = name;
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
      if (this.board[coordinate] === null) return this.board[coordinate] = {
        isMissed: true
      };
      this.ships[this.board[coordinate].id].hit(this.board[coordinate].part);
      this.board[coordinate].isHit = true;
    }
  }, {
    key: "reportAllSunk",
    value: function reportAllSunk() {
      return this.ships.every(function (ship) {
        return ship.sunk === true;
      });
    }
  }]);

  return Gameboard;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Gameboard);

/***/ }),

/***/ "./src/modules/classes/player.js":
/*!***************************************!*\
  !*** ./src/modules/classes/player.js ***!
  \***************************************/
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

/***/ "./src/modules/classes/ship.js":
/*!*************************************!*\
  !*** ./src/modules/classes/ship.js ***!
  \*************************************/
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
      if (this.hits.length === this.length) this.sunk = true;
    }
  }]);

  return Ship;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Ship);

/***/ }),

/***/ "./src/modules/logic.js":
/*!******************************!*\
  !*** ./src/modules/logic.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "newGame": () => (/* binding */ newGame),
/* harmony export */   "placeShipRandomly": () => (/* binding */ placeShipRandomly)
/* harmony export */ });
/* harmony import */ var _classes_gameboard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./classes/gameboard */ "./src/modules/classes/gameboard.js");
/* harmony import */ var _classes_player__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./classes/player */ "./src/modules/classes/player.js");



var newGame = function newGame() {
  var gameboard1 = new _classes_gameboard__WEBPACK_IMPORTED_MODULE_0__.default();
  var gameboard2 = new _classes_gameboard__WEBPACK_IMPORTED_MODULE_0__.default();
  var player1 = new _classes_player__WEBPACK_IMPORTED_MODULE_1__.default(human);
  var player2 = new _classes_player__WEBPACK_IMPORTED_MODULE_1__.default(ai);
};

var leftBorder = function leftBorder() {
  var border = [];

  for (var i = 0; i < 9; i += 1) {
    border.push(i);
  }

  return border;
};

var rightBorder = function rightBorder() {
  var border = [];

  for (var i = 9; i < 99; i += 10) {
    border.push(i);
  }

  return border;
};

var getRandomCell = function getRandomCell(gameboard) {
  var freeCells = gameboard.board.reduce(function (cells, curr, index) {
    if (curr === null) cells.push(index);
    return cells;
  }, []);
  var randomCell = freeCells[Math.floor(Math.random() * freeCells.length)];
  return randomCell;
};

var placeShipRandomly = function placeShipRandomly(length, vertical, gameboard) {
  var randomCell = getRandomCell(gameboard);
  var coordinates = [];

  if (vertical === true) {
    coordinates.push(randomCell);

    for (var i = 1; i < length; i += 1) {
      var belowCell = randomCell + 10 * i;
      var aboveCell = randomCell - 10 * i;

      if (gameboard.board[belowCell] === null && belowCell < 99) {
        coordinates.push(belowCell);
      } else if (gameboard.board[aboveCell] === null && aboveCell > 0) {
        coordinates.push(aboveCell);
      } else return placeShipRandomly(length, vertical, gameboard);
    }
  }

  if (vertical === false) {
    coordinates.push(randomCell);

    for (var _i = 1; _i < length; _i += 1) {
      var leftCell = randomCell + 1 * _i;
      var rightCell = randomCell - 1 * _i;

      if (gameboard.board[leftCell] === null && !rightBorder().includes(leftCell)) {
        coordinates.push(leftCell);
      } else if (gameboard.board[rightCell] === null && !leftBorder().includes(rightCell)) {
        coordinates.push(rightCell);
      } else return placeShipRandomly(length, vertical, gameboard);
    }
  }

  return gameboard.addShip(coordinates);
};



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
/******/ 			// no module.id needed
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
/* harmony import */ var _modules_logic__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/logic */ "./src/modules/logic.js");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY2xhc3Nlcy9nYW1lYm9hcmQuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2NsYXNzZXMvcGxheWVyLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvLi9zcmMvbW9kdWxlcy9jbGFzc2VzL3NoaXAuanMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC8uL3NyYy9tb2R1bGVzL2xvZ2ljLmpzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vYmF0dGxlc2hpcC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCJdLCJuYW1lcyI6WyJHYW1lYm9hcmQiLCJuYW1lIiwiYm9hcmQiLCJzaGlwcyIsIkFycmF5IiwiZmlsbCIsImNvb3JkaW5hdGVzIiwibGVuZ3RoIiwicHVzaCIsIlNoaXAiLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiaWQiLCJwYXJ0IiwiaXNIaXQiLCJjb29yZGluYXRlIiwiaXNNaXNzZWQiLCJoaXQiLCJldmVyeSIsInNoaXAiLCJzdW5rIiwiUGxheWVyIiwiZ2FtZWJvYXJkIiwibGVnYWxBdHRhY2tzIiwicmVkdWNlIiwiY2VsbHMiLCJjdXJyIiwicmFuZG9tTGVnYWwiLCJNYXRoIiwiZmxvb3IiLCJyYW5kb20iLCJyZWNlaXZlQXR0YWNrIiwidmVydGljYWwiLCJoaXRzIiwiaXNTdW5rIiwibmV3R2FtZSIsImdhbWVib2FyZDEiLCJnYW1lYm9hcmQyIiwicGxheWVyMSIsImh1bWFuIiwicGxheWVyMiIsImFpIiwibGVmdEJvcmRlciIsImJvcmRlciIsImkiLCJyaWdodEJvcmRlciIsImdldFJhbmRvbUNlbGwiLCJmcmVlQ2VsbHMiLCJyYW5kb21DZWxsIiwicGxhY2VTaGlwUmFuZG9tbHkiLCJiZWxvd0NlbGwiLCJhYm92ZUNlbGwiLCJsZWZ0Q2VsbCIsInJpZ2h0Q2VsbCIsImluY2x1ZGVzIiwiYWRkU2hpcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7O0lBRU1BLFM7QUFDSixxQkFBWUMsSUFBWixFQUFrQjtBQUFBOztBQUNoQixTQUFLQyxLQUFMLEdBQWFELElBQWI7QUFDQSxTQUFLRSxLQUFMLEdBQWEsRUFBYjtBQUNEOzs7O1dBRUQsZ0JBQU87QUFDTCxXQUFLRCxLQUFMLEdBQWFFLEtBQUssQ0FBQyxHQUFELENBQUwsQ0FBV0MsSUFBWCxDQUFnQixJQUFoQixDQUFiO0FBQ0Q7OztXQUVELGlCQUFRQyxXQUFSLEVBQXFCQyxNQUFyQixFQUE2QjtBQUFBOztBQUMzQixXQUFLSixLQUFMLENBQVdLLElBQVgsQ0FBZ0IsSUFBSUMsMENBQUosQ0FBU0YsTUFBVCxDQUFoQjtBQUNBRCxpQkFBVyxDQUFDSSxPQUFaLENBQW9CLFVBQUNDLElBQUQsRUFBT0MsS0FBUCxFQUFpQjtBQUNuQyxhQUFJLENBQUNWLEtBQUwsQ0FBV1MsSUFBWCxJQUFtQjtBQUNqQkUsWUFBRSxFQUFFLEtBQUksQ0FBQ1YsS0FBTCxDQUFXSSxNQUFYLEdBQW9CLENBRFA7QUFFakJPLGNBQUksRUFBRUYsS0FGVztBQUdqQkcsZUFBSyxFQUFFO0FBSFUsU0FBbkI7QUFLRCxPQU5EO0FBT0Q7OztXQUVELHVCQUFjQyxVQUFkLEVBQTBCO0FBQ3hCLFVBQUksS0FBS2QsS0FBTCxDQUFXYyxVQUFYLE1BQTJCLElBQS9CLEVBQ0UsT0FBUSxLQUFLZCxLQUFMLENBQVdjLFVBQVgsSUFBeUI7QUFBRUMsZ0JBQVEsRUFBRTtBQUFaLE9BQWpDO0FBQ0YsV0FBS2QsS0FBTCxDQUFXLEtBQUtELEtBQUwsQ0FBV2MsVUFBWCxFQUF1QkgsRUFBbEMsRUFBc0NLLEdBQXRDLENBQTBDLEtB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WSxRQUFiLENBQXNCRCxTQUF0QixDQUZJLEVBR0w7QUFDQWhELG1CQUFXLENBQUNFLElBQVosQ0FBaUI4QyxTQUFqQjtBQUNELE9BTE0sTUFLQSxPQUFPSixpQkFBaUIsQ0FBQzNDLE1BQUQsRUFBUzBCLFFBQVQsRUFBbUJWLFNBQW5CLENBQXhCO0FBQ1I7QUFDRjs7QUFDRCxTQUFPQSxTQUFTLENBQUNpQyxPQUFWLENBQWtCbEQsV0FBbEIsQ0FBUDtBQUNELENBcENEOzs7Ozs7OztVQ25DQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsd0Y7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBTaGlwIGZyb20gJy4vc2hpcCc7XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICB0aGlzLmJvYXJkID0gbmFtZTtcbiAgICB0aGlzLnNoaXBzID0gW107XG4gIH1cblxuICBpbml0KCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheSgxMDApLmZpbGwobnVsbCk7XG4gIH1cblxuICBhZGRTaGlwKGNvb3JkaW5hdGVzLCBsZW5ndGgpIHtcbiAgICB0aGlzLnNoaXBzLnB1c2gobmV3IFNoaXAobGVuZ3RoKSk7XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuYm9hcmRbaXRlbV0gPSB7XG4gICAgICAgIGlkOiB0aGlzLnNoaXBzLmxlbmd0aCAtIDEsXG4gICAgICAgIHBhcnQ6IGluZGV4LFxuICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG5cbiAgcmVjZWl2ZUF0dGFjayhjb29yZGluYXRlKSB7XG4gICAgaWYgKHRoaXMuYm9hcmRbY29vcmRpbmF0ZV0gPT09IG51bGwpXG4gICAgICByZXR1cm4gKHRoaXMuYm9hcmRbY29vcmRpbmF0ZV0gPSB7IGlzTWlzc2VkOiB0cnVlIH0pO1xuICAgIHRoaXMuc2hpcHNbdGhpcy5ib2FyZFtjb29yZGluYXRlXS5pZF0uaGl0KHRoaXMuYm9hcmRbY29vcmRpbmF0ZV0ucGFydCk7XG4gICAgdGhpcy5ib2FyZFtjb29yZGluYXRlXS5pc0hpdCA9IHRydWU7XG4gIH1cblxuICByZXBvcnRBbGxTdW5rKCkge1xuICAgIHJldHVybiB0aGlzLnNoaXBzLmV2ZXJ5KChzaGlwKSA9PiBzaGlwLnN1bmsgPT09IHRydWUpO1xuICB9XG59XG5cbmV4cG9ydCBkZWZhdWx0IEdhbWVib2FyZDtcbiIsImNsYXNzIFBsYXllciB7XG4gIGNvbnN0cnVjdG9yKG5hbWUsIGdhbWVib2FyZCkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgdGhpcy5nYW1lYm9hcmQgPSBnYW1lYm9hcmQ7XG4gIH1cblxuICByYW5kb21BdHRhY2soKSB7XG4gICAgY29uc3QgbGVnYWxBdHRhY2tzID0gdGhpcy5nYW1lYm9hcmQuYm9hcmQucmVkdWNlKChjZWxscywgY3VyciwgaW5kZXgpID0+IHtcbiAgICAgIGlmIChjdXJyID09PSBudWxsIHx8IGN1cnIuaXNIaXQgIT09IHRydWUgfHwgY3Vyci5pc01pc3NlZCAhPT0gdHJ1ZSlcbiAgICAgICAgY2VsbHMucHVzaChpbmRleCk7XG4gICAgICByZXR1cm4gY2VsbHM7XG4gICAgfSwgW10pO1xuICAgIGNvbnN0IHJhbmRvbUxlZ2FsID1cbiAgICAgIGxlZ2FsQXR0YWNrc1tNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiBsZWdhbEF0dGFja3MubGVuZ3RoKV07XG4gICAgdGhpcy5nYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21MZWdhbCk7XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgUGxheWVyO1xuIiwiY2xhc3MgU2hpcCB7XG4gIGNvbnN0cnVjdG9yKGxlbmd0aCwgdmVydGljYWwpIHtcbiAgICB0aGlzLmxlbmd0aCA9IGxlbmd0aDtcbiAgICB0aGlzLmhpdHMgPSBBcnJheShsZW5ndGgpLmZpbGwobnVsbCk7XG4gICAgdGhpcy5zdW5rID0gZmFsc2U7XG4gICAgdGhpcy52ZXJ0aWNhbCA9IHZlcnRpY2FsO1xuICB9XG5cbiAgaGl0KHBhcnQpIHtcbiAgICB0aGlzLmhpdHNbcGFydF0gPSAnaGl0JztcbiAgICB0aGlzLmlzU3VuaygpO1xuICB9XG5cbiAgaXNTdW5rKCkge1xuICAgIGlmICh0aGlzLmhpdHMubGVuZ3RoID09PSB0aGlzLmxlbmd0aCkgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBTaGlwO1xuIiwiaW1wb3J0IEdhbWVib2FyZCBmcm9tICcuL2NsYXNzZXMvZ2FtZWJvYXJkJztcbmltcG9ydCBQbGF5ZXIgZnJvbSAnLi9jbGFzc2VzL3BsYXllcic7XG5cbmNvbnN0IG5ld0dhbWUgPSAoKSA9PiB7XG4gIGNvbnN0IGdhbWVib2FyZDEgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGNvbnN0IGdhbWVib2FyZDIgPSBuZXcgR2FtZWJvYXJkKCk7XG4gIGNvbnN0IHBsYXllcjEgPSBuZXcgUGxheWVyKGh1bWFuKTtcbiAgY29uc3QgcGxheWVyMiA9IG5ldyBQbGF5ZXIoYWkpO1xufTtcblxuY29uc3QgbGVmdEJvcmRlciA9ICgpID0+IHtcbiAgY29uc3QgYm9yZGVyID0gW107XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgOTsgaSArPSAxKSB7XG4gICAgYm9yZGVyLnB1c2goaSk7XG4gIH1cbiAgcmV0dXJuIGJvcmRlcjtcbn07XG5cbmNvbnN0IHJpZ2h0Qm9yZGVyID0gKCkgPT4ge1xuICBjb25zdCBib3JkZXIgPSBbXTtcbiAgZm9yIChsZXQgaSA9IDk7IGkgPCA5OTsgaSArPSAxMCkge1xuICAgIGJvcmRlci5wdXNoKGkpO1xuICB9XG4gIHJldHVybiBib3JkZXI7XG59O1xuXG5jb25zdCBnZXRSYW5kb21DZWxsID0gKGdhbWVib2FyZCkgPT4ge1xuICBjb25zdCBmcmVlQ2VsbHMgPSBnYW1lYm9hcmQuYm9hcmQucmVkdWNlKChjZWxscywgY3VyciwgaW5kZXgpID0+IHtcbiAgICBpZiAoY3VyciA9PT0gbnVsbCkgY2VsbHMucHVzaChpbmRleCk7XG4gICAgcmV0dXJuIGNlbGxzO1xuICB9LCBbXSk7XG4gIGNvbnN0IHJhbmRvbUNlbGwgPSBmcmVlQ2VsbHNbTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogZnJlZUNlbGxzLmxlbmd0aCldO1xuICByZXR1cm4gcmFuZG9tQ2VsbDtcbn07XG5cbmNvbnN0IHBsYWNlU2hpcFJhbmRvbWx5ID0gKGxlbmd0aCwgdmVydGljYWwsIGdhbWVib2FyZCkgPT4ge1xuICBjb25zdCByYW5kb21DZWxsID0gZ2V0UmFuZG9tQ2VsbChnYW1lYm9hcmQpO1xuICBjb25zdCBjb29yZGluYXRlcyA9IFtdO1xuICBpZiAodmVydGljYWwgPT09IHRydWUpIHtcbiAgICBjb29yZGluYXRlcy5wdXNoKHJhbmRvbUNlbGwpO1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDwgbGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgIGNvbnN0IGJlbG93Q2VsbCA9IHJhbmRvbUNlbGwgKyAxMCAqIGk7XG4gICAgICBjb25zdCBhYm92ZUNlbGwgPSByYW5kb21DZWxsIC0gMTAgKiBpO1xuXG4gICAgICBpZiAoZ2FtZWJvYXJkLmJvYXJkW2JlbG93Q2VsbF0gPT09IG51bGwgJiYgYmVsb3dDZWxsIDwgOTkpIHtcbiAgICAgICAgY29vcmRpbmF0ZXMucHVzaChiZWxvd0NlbGwpO1xuICAgICAgfSBlbHNlIGlmIChnYW1lYm9hcmQuYm9hcmRbYWJvdmVDZWxsXSA9PT0gbnVsbCAmJiBhYm92ZUNlbGwgPiAwKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2goYWJvdmVDZWxsKTtcbiAgICAgIH0gZWxzZSByZXR1cm4gcGxhY2VTaGlwUmFuZG9tbHkobGVuZ3RoLCB2ZXJ0aWNhbCwgZ2FtZWJvYXJkKTtcbiAgICB9XG4gIH1cbiAgaWYgKHZlcnRpY2FsID09PSBmYWxzZSkge1xuICAgIGNvb3JkaW5hdGVzLnB1c2gocmFuZG9tQ2VsbCk7XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPCBsZW5ndGg7IGkgKz0gMSkge1xuICAgICAgY29uc3QgbGVmdENlbGwgPSByYW5kb21DZWxsICsgMSAqIGk7XG4gICAgICBjb25zdCByaWdodENlbGwgPSByYW5kb21DZWxsIC0gMSAqIGk7XG5cbiAgICAgIGlmIChcbiAgICAgICAgZ2FtZWJvYXJkLmJvYXJkW2xlZnRDZWxsXSA9PT0gbnVsbCAmJlxuICAgICAgICAhcmlnaHRCb3JkZXIoKS5pbmNsdWRlcyhsZWZ0Q2VsbClcbiAgICAgICkge1xuICAgICAgICBjb29yZGluYXRlcy5wdXNoKGxlZnRDZWxsKTtcbiAgICAgIH0gZWxzZSBpZiAoXG4gICAgICAgIGdhbWVib2FyZC5ib2FyZFtyaWdodENlbGxdID09PSBudWxsICYmXG4gICAgICAgICFsZWZ0Qm9yZGVyKCkuaW5jbHVkZXMocmlnaHRDZWxsKVxuICAgICAgKSB7XG4gICAgICAgIGNvb3JkaW5hdGVzLnB1c2gocmlnaHRDZWxsKTtcbiAgICAgIH0gZWxzZSByZXR1cm4gcGxhY2VTaGlwUmFuZG9tbHkobGVuZ3RoLCB2ZXJ0aWNhbCwgZ2FtZWJvYXJkKTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIGdhbWVib2FyZC5hZGRTaGlwKGNvb3JkaW5hdGVzKTtcbn07XG5cbmV4cG9ydCB7IG5ld0dhbWUsIHBsYWNlU2hpcFJhbmRvbWx5IH07XG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyJdLCJzb3VyY2VSb290IjoiIn0=