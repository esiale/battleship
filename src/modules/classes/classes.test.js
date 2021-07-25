import Ship from './ship';
import Gameboard from './gameboard';
import Player from './player';

test('Ship stores hit locations', () => {
  const mockShip = new Ship(4);
  mockShip.hit(1);
  mockShip.hit(3);
  expect(mockShip.hits).toMatchObject([null, 'hit', null, 'hit']);
});

test("Ship reports that it's been sunk", () => {
  const mockShip = new Ship(3);
  mockShip.hit(0);
  mockShip.hit(1);
  mockShip.hit(2);
  expect(mockShip.sunk).toEqual(true);
});

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

test('Player makes a random movie', () => {
  const gameboard = new Gameboard();
  const player = new Player('mock', gameboard);
  gameboard.init();
  player.randomAttack(gameboard);
  expect(gameboard.board).toEqual(
    expect.arrayContaining([
      expect.objectContaining({
        isMissed: true,
      }),
    ])
  );
});
