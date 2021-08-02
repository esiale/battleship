/* eslint-disable no-undef */
import Gameboard from './gameboard';

test('Gameboard adds new ship and stores it properly', () => {
  const gameboard = new Gameboard();
  gameboard.init();
  gameboard.addShip([2, 3, 4], 3);
  gameboard.addShip([10, 15], 2);
  gameboard.addShip([20, 25], 2);
  expect(gameboard.board[10].id).toEqual(1);
});

test('Gameboard receives attack and properly reports it', () => {
  const gameboard = new Gameboard();
  gameboard.init();
  gameboard.addShip([3, 4, 5, 6], 4);
  gameboard.receiveAttack(5);
  expect(gameboard.ships[0].hits).toMatchObject([null, null, 'hit', null]);
});

test('Gameboard stores a missed attack', () => {
  const gameboard = new Gameboard();
  gameboard.init();
  gameboard.addShip([10, 15], 2);
  gameboard.receiveAttack(5);
  expect(gameboard.board[5].isMissed).toEqual(true);
});

test('Gameboard reports all ships have been sunk', () => {
  const gameboard = new Gameboard();
  gameboard.init();
  gameboard.addShip([10, 15], 2);
  gameboard.addShip([1, 2, 3], 3);
  gameboard.receiveAttack(10);
  gameboard.receiveAttack(15);
  gameboard.receiveAttack(1);
  gameboard.receiveAttack(2);
  gameboard.receiveAttack(3);
  expect(gameboard.reportAllSunk()).toEqual(true);
});

test('Checks for placement conflicts', () => {
  const gameboard = new Gameboard();
  gameboard.init();
  gameboard.addShip([54, 55], 2);
  expect(gameboard.checkForConflicts([54, 55])).toEqual(false);
  expect(gameboard.checkForConflicts([79, 89, 99])).toEqual(true);
  expect(gameboard.checkForConflicts([89, 97, 107])).toEqual(false);
  expect(gameboard.checkForConflicts([77, 78, 79])).toEqual(true);
  expect(gameboard.checkForConflicts([78, 79, 80])).toEqual(false);
});

test('Player ship is placed', () => {
  const gameboard = new Gameboard();
  gameboard.init();

  gameboard.placePlayerShip(50, 5, 'horizontal');
  expect(gameboard.board[50].id).toEqual(0);
  expect(gameboard.board[51].id).toEqual(0);
  expect(gameboard.board[52].id).toEqual(0);
  expect(gameboard.board[53].id).toEqual(0);
  expect(gameboard.board[54].id).toEqual(0);
});
