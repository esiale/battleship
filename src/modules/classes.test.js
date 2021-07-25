import { Ship, Gameboard } from './classes';

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

test("Gameboard adds new ship and stores it so that board's array item is equal to ship's index", () => {
  const gameboard = new Gameboard();
  gameboard.init();
  gameboard.addShip([0, 1, 2], 3);
  gameboard.addShip([3, 4, 5, 6], 4);
  gameboard.addShip([10, 15], 2);
  expect(gameboard.board[10]).toEqual(2);
});

test('Gameboard receives attack and properly reports it', () => {
  const gameboard = new Gameboard();
  gameboard.init();
  gameboard.addShip([3, 4, 5, 6], 4);
  gameboard.receiveAttack(5);
  expect(gameboard.ships[0].hits[2]).toEqual('hit');
  expect(gameboard.ships[0].hits[(0, 1, 3)]).toEqual(null);
});

test('Gameboard stores a missed attack', () => {
  const gameboard = new Gameboard();
  gameboard.init();
  gameboard.addShip([10, 15], 2);
  gameboard.receiveAttack(5);
  expect(gameboard.board[10]).toEqual(0);
  expect(gameboard.board[5]).toEqual('missed');
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
