/* eslint-disable no-undef */
import { logic } from './logic';

beforeEach(() => {
  logic.initalizeGame();
  logic.data.gameboards.gameboard1.addShip([9, 19, 29, 39, 49], 5);
  logic.data.gameboards.gameboard1.addShip([54, 55], 2);

  logic.data.gameboards.gameboard2.addShip([0, 1, 2, 3, 4], 5);
  logic.data.gameboards.gameboard2.addShip([54, 55], 2);
});

test('Attack handler case: hit', () => {
  expect(logic.processAttack(9, 'gameboard1')).toMatchObject({
    action: 'hit',
    cell: 9,
    board: 'gameboard1',
    allSunk: false,
  });
});

test('Attack handler case: missed', () => {
  expect(logic.processAttack(20, 'gameboard1')).toMatchObject({
    action: 'missed',
    cell: 20,
    board: 'gameboard1',
    allSunk: false,
  });
});

test('Attack handler case: ship sunk', () => {
  logic.processAttack(9, 'gameboard1');
  logic.processAttack(19, 'gameboard1');
  logic.processAttack(29, 'gameboard1');
  logic.processAttack(39, 'gameboard1');
  expect(logic.processAttack(49, 'gameboard1')).toMatchObject({
    action: 'sunk',
    cell: [9, 19, 29, 39, 49],
    board: 'gameboard1',
    allSunk: false,
  });
});

test('Attack handler case: all ships sank', () => {
  logic.processAttack(9, 'gameboard1');
  logic.processAttack(19, 'gameboard1');
  logic.processAttack(29, 'gameboard1');
  logic.processAttack(39, 'gameboard1');
  logic.processAttack(49, 'gameboard1');
  logic.processAttack(54, 'gameboard1');
  expect(logic.processAttack(55, 'gameboard1')).toMatchObject({
    action: 'sunk',
    cell: [54, 55],
    board: 'gameboard1',
    allSunk: true,
  });
});

describe('Tests using random', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.4);
  });
  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  test('Computer attacks after player makes a move', () => {
    logic.processTurn(9);
    expect(logic.processAttack(9, 'gameboard1')).toMatchObject({
      action: 'hit',
      cell: 9,
      board: 'gameboard1',
      allSunk: false,
    });
    expect(logic.data.gameboards.gameboard1.board[40]).toMatchObject({
      isMissed: true,
    });
  });

  test('Process turn returns an array of two objects: human and computer move feedback', () => {
    expect(logic.processTurn(9)).toMatchObject([
      {
        action: 'missed',
        cell: 9,
        board: 'gameboard2',
        allSunk: false,
      },
      {
        action: 'missed',
        cell: 40,
        board: 'gameboard1',
        allSunk: false,
      },
    ]);
  });
});
