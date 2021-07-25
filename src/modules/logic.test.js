import { placeShipRandomly } from './logic';
import Gameboard from './classes/gameboard';

beforeEach(() => {
  jest.spyOn(global.Math, 'random').mockReturnValue(0.5);
});

afterEach(() => {
  jest.spyOn(global.Math, 'random').mockRestore();
});

test('Ships can be randomly placed', () => {
  const gameboard = new Gameboard();
  gameboard.init();
  placeShipRandomly(3, true, gameboard);
  placeShipRandomly(2, false, gameboard);
  expect(gameboard.board[50].id).toEqual(0);
  expect(gameboard.board[60].id).toEqual(0);
  expect(gameboard.board[70].id).toEqual(0);
  expect(gameboard.board[48].id).toEqual(1);
  expect(gameboard.board[47].id).toEqual(1);
});

test.todo('Randomly placed ships don\t extend the border');
