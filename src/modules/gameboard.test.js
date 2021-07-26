import { placeShipRandomly, Gameboard } from './gameboard';
import Player from './player';

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

// beforeEach(() => {
//   jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
// });

// afterEach(() => {
//   jest.spyOn(global.Math, 'random').mockRestore();
// });

test('Ships can be randomly placed', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
  const gameboard = new Gameboard();
  gameboard.init();
  placeShipRandomly(2, gameboard);
  expect(gameboard.board[50].id).toEqual(0);
  expect(gameboard.board[51].id).toEqual(0);
  jest.spyOn(global.Math, 'random').mockRestore();
});

test('Randomly placed ships don\t extend the border horizontally', () => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.9);
  const gameboard = new Gameboard();
  gameboard.init();
  placeShipRandomly(5, gameboard);
  expect(gameboard.board[90].id).toEqual(0);
  expect(gameboard.board[91].id).toEqual(0);
  expect(gameboard.board[92].id).toEqual(0);
  expect(gameboard.board[93].id).toEqual(0);
  expect(gameboard.board[94].id).toEqual(0);
  jest.spyOn(global.Math, 'random').mockRestore();
});
