/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/modules/classes.js":
/*!********************************!*\
  !*** ./src/modules/classes.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Ship": () => (/* binding */ Ship),
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard),
/* harmony export */   "Player": () => (/* binding */ Player)
/* harmony export */ });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Ship = /*#__PURE__*/function () {
  function Ship(length) {
    _classCallCheck(this, Ship);

    this.length = length;
    this.hits = Array(length).fill(null);
    this.sunk = false;
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

var Gameboard = /*#__PURE__*/function () {
  function Gameboard() {
    _classCallCheck(this, Gameboard);

    this.board;
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

      this.ships.push(new Ship(length));
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

var Player = /*#__PURE__*/function () {
  function Player(name) {
    _classCallCheck(this, Player);

    this.name = name;
  }

  _createClass(Player, [{
    key: "randomAttack",
    value: function randomAttack(gameboard) {
      var legalAttacks = gameboard.board.reduce(function (cells, curr, index) {
        if (curr === null || curr.isHit !== true || curr.isMissed !== true) cells.push(index);
        return cells;
      }, []);
      var randomLegal = legalAttacks[Math.floor(Math.random() * legalAttacks.length)];
      gameboard.receiveAttack(randomLegal);
    }
  }]);

  return Player;
}();



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
/* harmony import */ var _modules_classes__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/classes */ "./src/modules/classes.js");

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiXSwibmFtZXMiOlsiU2hpcCIsImxlbmd0aCIsImhpdHMiLCJBcnJheSIsImZpbGwiLCJzdW5rIiwicGFydCIsImlzU3VuayIsIkdhbWVib2FyZCIsImJvYXJkIiwic2hpcHMiLCJjb29yZGluYXRlcyIsInB1c2giLCJmb3JFYWNoIiwiaXRlbSIsImluZGV4IiwiaWQiLCJpc0hpdCIsImNvb3JkaW5hdGUiLCJpc01pc3NlZCIsImhpdCIsImV2ZXJ5Iiwic2hpcCIsIlBsYXllciIsIm5hbWUiLCJnYW1lYm9hcmQiLCJsZWdhbEF0dGFja3MiLCJyZWR1Y2UiLCJjZWxscyIsImN1cnIiLCJyYW5kb21MZWdhbCIsIk1hdGgiLCJmbG9vciIsInJhbmRvbSIsInJlY2VpdmVBdHRhY2siXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBTUEsSTtBQUNKLGdCQUFZQyxNQUFaLEVBQW9CO0FBQUE7O0FBQ2xCLFNBQUtBLE1BQUwsR0FBY0EsTUFBZDtBQUNBLFNBQUtDLElBQUwsR0FBWUMsS0FBSyxDQUFDRixNQUFELENBQUwsQ0FBY0csSUFBZCxDQUFtQixJQUFuQixDQUFaO0FBQ0EsU0FBS0MsSUFBTCxHQUFZLEtBQVo7QUFDRDs7OztXQUNELGFBQUlDLElBQUosRUFBVTtBQUNSLFdBQUtKLElBQUwsQ0FBVUksSUFBVixJQUFrQixLQUFsQjtBQUNBLFdBQUtD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QUM3RCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gQXJyYXkobGVuZ3RoKS5maWxsKG51bGwpO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG4gIGhpdChwYXJ0KSB7XG4gICAgdGhpcy5oaXRzW3BhcnRdID0gJ2hpdCc7XG4gICAgdGhpcy5pc1N1bmsoKTtcbiAgfVxuICBpc1N1bmsoKSB7XG4gICAgaWYgKHRoaXMuaGl0cy5sZW5ndGggPT09IHRoaXMubGVuZ3RoKSB0aGlzLnN1bmsgPSB0cnVlO1xuICB9XG59XG5cbmNsYXNzIEdhbWVib2FyZCB7XG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYm9hcmQ7XG4gICAgdGhpcy5zaGlwcyA9IFtdO1xuICB9XG4gIGluaXQoKSB7XG4gICAgdGhpcy5ib2FyZCA9IEFycmF5KDEwMCkuZmlsbChudWxsKTtcbiAgfVxuICBhZGRTaGlwKGNvb3JkaW5hdGVzLCBsZW5ndGgpIHtcbiAgICB0aGlzLnNoaXBzLnB1c2gobmV3IFNoaXAobGVuZ3RoKSk7XG4gICAgY29vcmRpbmF0ZXMuZm9yRWFjaCgoaXRlbSwgaW5kZXgpID0+IHtcbiAgICAgIHRoaXMuYm9hcmRbaXRlbV0gPSB7XG4gICAgICAgIGlkOiB0aGlzLnNoaXBzLmxlbmd0aCAtIDEsXG4gICAgICAgIHBhcnQ6IGluZGV4LFxuICAgICAgICBpc0hpdDogZmFsc2UsXG4gICAgICB9O1xuICAgIH0pO1xuICB9XG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdID09PSBudWxsKVxuICAgICAgcmV0dXJuICh0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdID0geyBpc01pc3NlZDogdHJ1ZSB9KTtcbiAgICB0aGlzLnNoaXBzW3RoaXMuYm9hcmRbY29vcmRpbmF0ZV0uaWRdLmhpdCh0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdLnBhcnQpO1xuICAgIHRoaXMuYm9hcmRbY29vcmRpbmF0ZV0uaXNIaXQgPSB0cnVlO1xuICB9XG4gIHJlcG9ydEFsbFN1bmsoKSB7XG4gICAgcmV0dXJuIHRoaXMuc2hpcHMuZXZlcnkoKHNoaXApID0+IHNoaXAuc3VuayA9PT0gdHJ1ZSk7XG4gIH1cbn1cblxuY2xhc3MgUGxheWVyIHtcbiAgY29uc3RydWN0b3IobmFtZSkge1xuICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gIH1cbiAgcmFuZG9tQXR0YWNrKGdhbWVib2FyZCkge1xuICAgIGNvbnN0IGxlZ2FsQXR0YWNrcyA9IGdhbWVib2FyZC5ib2FyZC5yZWR1Y2UoZnVuY3Rpb24gKGNlbGxzLCBjdXJyLCBpbmRleCkge1xuICAgICAgaWYgKGN1cnIgPT09IG51bGwgfHwgY3Vyci5pc0hpdCAhPT0gdHJ1ZSB8fCBjdXJyLmlzTWlzc2VkICE9PSB0cnVlKVxuICAgICAgICBjZWxscy5wdXNoKGluZGV4KTtcbiAgICAgIHJldHVybiBjZWxscztcbiAgICB9LCBbXSk7XG4gICAgY29uc3QgcmFuZG9tTGVnYWwgPVxuICAgICAgbGVnYWxBdHRhY2tzW01hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlZ2FsQXR0YWNrcy5sZW5ndGgpXTtcbiAgICBnYW1lYm9hcmQucmVjZWl2ZUF0dGFjayhyYW5kb21MZWdhbCk7XG4gIH1cbn1cblxuZXhwb3J0IHsgU2hpcCwgR2FtZWJvYXJkLCBQbGF5ZXIgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==