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
/* harmony export */   "Gameboard": () => (/* binding */ Gameboard)
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
    value: function hit(hitLocation) {
      this.hits[hitLocation] = 'hit';
      this.isSunk();
    }
  }, {
    key: "isSunk",
    value: function isSunk() {
      if (this.hits.every(function (location) {
        return location === 'hit';
      })) this.sunk = true;
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
      coordinates.forEach(function (item) {
        _this.board[item] = _this.ships.length - 1;
      });
    }
  }, {
    key: "getLocation",
    value: function getLocation(coordinate) {
      var shipCoordinates = this.board.reduce(function (cords, curr, index, arr) {
        if (curr === arr[coordinate]) cords.push(index);
        return cords;
      }, []);
      return shipCoordinates;
    }
  }, {
    key: "receiveAttack",
    value: function receiveAttack(coordinate) {
      if (this.board[coordinate] === null) return this.board[coordinate] = 'missed';
      var hitLocation = this.getLocation(coordinate).indexOf(coordinate);
      var shipIndex = this.board[coordinate];
      this.ships[shipIndex].hit(hitLocation);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYXR0bGVzaGlwLy4vc3JjL21vZHVsZXMvY2xhc3Nlcy5qcyIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2JhdHRsZXNoaXAvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9iYXR0bGVzaGlwL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiXSwibmFtZXMiOlsiU2hpcCIsImxlbmd0aCIsImhpdHMiLCJBcnJheSIsImZpbGwiLCJzdW5rIiwiaGl0TG9jYXRpb24iLCJpc1N1bmsiLCJldmVyeSIsImxvY2F0aW9uIiwiR2FtZWJvYXJkIiwiYm9hcmQiLCJzaGlwcyIsImNvb3JkaW5hdGVzIiwicHVzaCIsImZvckVhY2giLCJpdGVtIiwiY29vcmRpbmF0ZSIsInNoaXBDb29yZGluYXRlcyIsInJlZHVjZSIsImNvcmRzIiwiY3VyciIsImluZGV4IiwiYXJyIiwiZ2V0TG9jYXRpb24iLCJpbmRleE9mIiwic2hpcEluZGV4IiwiaGl0Iiwic2hpcCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBQU1BLEk7QUFDSixnQkFBWUMsTUFBWixFQUFvQjtBQUFBOztBQUNsQixTQUFLQSxNQUFMLEdBQWNBLE1BQWQ7QUFDQSxTQUFLQyxJQUFMLEdBQVlDLEtBQUssQ0FBQ0YsTUFBRCxDQUFMLENBQWNHLElBQWQsQ0FBbUIsSUFBbkIsQ0FBWjtBQUNBLFNBQUtDLElBQUwsR0FBWSxLQUFaO0FBQ0Q7Ozs7V0FDRCxhQUFJQyxXQUFKLEVBQWlCO0FBQ2YsV0FBS0osSUFBTCxDQUFVSSxXQUFWLElBQXlCLEtBQXpCO0FBQ0EsV0FBS0MsTUFBTDtBQUNEOzs7V0FDRCxrQkFBUztBQUNQLFVBQUksS0FBS0wsSUFBTCxDQUFVTSxLQUFWLENBQWdCLFVBQUNDLFFBQUQ7QUFBQSxlQUFjQSxRQUFRLEtBQUssS0FBM0I7QUFBQSxPQUFoQixDQUFKLEVBQXVELEtBQUtKLElBQUwsR0FBWSxJQUFaO0FBQ3hEOzs7Ozs7SUFHR0ssUztBQUNKLHVCQUFjO0FBQUE7O0FBQ1osU0FBS0MsS0FBTDtBQUNBLFNBQUtDLEtBQUwsR0FBYSxFQUFiO0FBQ0Q7Ozs7V0FDRCxnQkFBTztBQUNMLFdBQUtELEtBQUwsR0FBYVIsS0FBSyxDQUFDLEdBQUQsQ0FBTCxDQUFXQyxJQUFYLENBQWdCLElBQWhCLENBQWI7QUFDRDs7O1dBQ0QsaUJBQVFTLFdBQVIsRUFBcUJaLE1BQXJCLEVBQTZCO0FBQUE7O0FBQzNCLFdBQUtXLEtBQUwsQ0FBV0UsSUFBWCxDQUFnQixJQUFJZCxJQUFKLENBQVNDLE1BQVQsQ0FBaEI7QUFDQVksaUJBQVcsQ0FBQ0UsT0FBWixDQUFvQixVQUFDQyxJQUFELEVBQVU7QUFDNUIsYUFBSSxDQUFDTCxLQUFMLENBQVdLLElBQVgsSUFBbUIsS0FBSSxDQUFDSixLQUFMLENBQVdYLE1BQVgsR0FBb0IsQ0FBdkM7QUFDRCxPQUZEO0FBR0Q7OztXQUNELHFCQUFZZ0IsVUFBWixFQUF3QjtBQUN0QixVQUFNQyxlQUFlLEdBQUcsS0FBS1AsS0FBTCxDQUFXUSxNQUFYLENBQWtCLFVBQ3hDQyxLQUR3QyxFQUV4Q0MsSUFGd0MsRUFHeENDLEtBSHdDLEVBSXhDQyxHQUp3QyxFQUt4QztBQUNBLFlBQUlGLElBQUksS0FBS0UsR0FBRyxDQUFDTixVQUFELENBQWhCLEVBQThCRyxLQUFLLENBQUNOLElBQU4sQ0FBV1EsS0FBWDtBQUM5QixlQUFPRixLQUFQO0FBQ0QsT0FSdUIsRUFTeEIsRUFUd0IsQ0FBeEI7QUFVQSxhQUFPRixlQUFQO0FBQ0Q7OztXQUNELHVCQUFjRCxVQUFkLEVBQTBCO0FBQ3hCLFVBQUksS0FBS04sS0FBTCxDQUFXTSxVQUFYLE1BQTJCLElBQS9CLEVBQ0UsT0FBUSxLQUFLTixLQUFMLENBQVdNLFVBQVgsSUFBeUIsUUFBakM7QUFDRixVQUFNWCxXQUFXLEdBQUcsS0FBS2tCLFdBQUwsQ0FBaUJQLFVBQWpCLEVBQTZCUSxPQUE3QixDQUFxQ1IsVUFBckMsQ0FBcEI7QUFDQSxVQUFNUyxTQUFTLEdBQUcsS0FBS2YsS0FBTCxDQUFXTSxVQUFYLENBQWxCO0FBQ0EsV0FBS0wsS0FBTCxDQUFXYyxTQUFYLEVBQXNCQyxHQUF0QixDQUEwQnJCLFdBQTFCO0FBQ0Q7OztXQUNELHlCQUFnQjtBQUNkLGFBQU8sS0FBS00sS0FBTCxDQUFXSixLQUFYLENBQWlCLFVBQUNvQixJQUFEO0FBQUEsZUFBVUEsSUFBSSxDQUFDdkIsSUFBTCxLQUFjLElBQXhCO0FBQUEsT0FBakIsQ0FBUDtBQUNEOzs7Ozs7Ozs7Ozs7VUNuREg7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLHdGOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFIiwiZmlsZSI6Im1haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJjbGFzcyBTaGlwIHtcbiAgY29uc3RydWN0b3IobGVuZ3RoKSB7XG4gICAgdGhpcy5sZW5ndGggPSBsZW5ndGg7XG4gICAgdGhpcy5oaXRzID0gQXJyYXkobGVuZ3RoKS5maWxsKG51bGwpO1xuICAgIHRoaXMuc3VuayA9IGZhbHNlO1xuICB9XG4gIGhpdChoaXRMb2NhdGlvbikge1xuICAgIHRoaXMuaGl0c1toaXRMb2NhdGlvbl0gPSAnaGl0JztcbiAgICB0aGlzLmlzU3VuaygpO1xuICB9XG4gIGlzU3VuaygpIHtcbiAgICBpZiAodGhpcy5oaXRzLmV2ZXJ5KChsb2NhdGlvbikgPT4gbG9jYXRpb24gPT09ICdoaXQnKSkgdGhpcy5zdW5rID0gdHJ1ZTtcbiAgfVxufVxuXG5jbGFzcyBHYW1lYm9hcmQge1xuICBjb25zdHJ1Y3RvcigpIHtcbiAgICB0aGlzLmJvYXJkO1xuICAgIHRoaXMuc2hpcHMgPSBbXTtcbiAgfVxuICBpbml0KCkge1xuICAgIHRoaXMuYm9hcmQgPSBBcnJheSgxMDApLmZpbGwobnVsbCk7XG4gIH1cbiAgYWRkU2hpcChjb29yZGluYXRlcywgbGVuZ3RoKSB7XG4gICAgdGhpcy5zaGlwcy5wdXNoKG5ldyBTaGlwKGxlbmd0aCkpO1xuICAgIGNvb3JkaW5hdGVzLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgIHRoaXMuYm9hcmRbaXRlbV0gPSB0aGlzLnNoaXBzLmxlbmd0aCAtIDE7XG4gICAgfSk7XG4gIH1cbiAgZ2V0TG9jYXRpb24oY29vcmRpbmF0ZSkge1xuICAgIGNvbnN0IHNoaXBDb29yZGluYXRlcyA9IHRoaXMuYm9hcmQucmVkdWNlKGZ1bmN0aW9uIChcbiAgICAgIGNvcmRzLFxuICAgICAgY3VycixcbiAgICAgIGluZGV4LFxuICAgICAgYXJyXG4gICAgKSB7XG4gICAgICBpZiAoY3VyciA9PT0gYXJyW2Nvb3JkaW5hdGVdKSBjb3Jkcy5wdXNoKGluZGV4KTtcbiAgICAgIHJldHVybiBjb3JkcztcbiAgICB9LFxuICAgIFtdKTtcbiAgICByZXR1cm4gc2hpcENvb3JkaW5hdGVzO1xuICB9XG4gIHJlY2VpdmVBdHRhY2soY29vcmRpbmF0ZSkge1xuICAgIGlmICh0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdID09PSBudWxsKVxuICAgICAgcmV0dXJuICh0aGlzLmJvYXJkW2Nvb3JkaW5hdGVdID0gJ21pc3NlZCcpO1xuICAgIGNvbnN0IGhpdExvY2F0aW9uID0gdGhpcy5nZXRMb2NhdGlvbihjb29yZGluYXRlKS5pbmRleE9mKGNvb3JkaW5hdGUpO1xuICAgIGNvbnN0IHNoaXBJbmRleCA9IHRoaXMuYm9hcmRbY29vcmRpbmF0ZV07XG4gICAgdGhpcy5zaGlwc1tzaGlwSW5kZXhdLmhpdChoaXRMb2NhdGlvbik7XG4gIH1cbiAgcmVwb3J0QWxsU3VuaygpIHtcbiAgICByZXR1cm4gdGhpcy5zaGlwcy5ldmVyeSgoc2hpcCkgPT4gc2hpcC5zdW5rID09PSB0cnVlKTtcbiAgfVxufVxuXG5leHBvcnQgeyBTaGlwLCBHYW1lYm9hcmQgfTtcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07Il0sInNvdXJjZVJvb3QiOiIifQ==