/* eslint-disable no-undef */
/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
import Player from './player';
import { logic } from './logic';

beforeEach(() => {
  logic.initalizeGame();
});

test('Detects hit ships', () => {
  logic.data.gameboards.gameboard1.addShip([44, 45]);
  logic.data.gameboards.gameboard1.receiveAttack(44);
  expect(Player.detectShips(logic.data.gameboards.gameboard1)).toEqual([44]);
});

test('Detects ships: legal attacks', () => {
  logic.data.gameboards.gameboard1.addShip([44, 45]);
  logic.data.gameboards.gameboard1.board[54] = { isMissed: true };
  expect(
    Player.findSurroundingCells(44, logic.data.gameboards.gameboard1).sort()
  ).toEqual([34, 43, 45]);
});

test("Detects ships: possible attacks don't wrap around the right border", () => {
  expect(
    Player.findSurroundingCells(49, logic.data.gameboards.gameboard1).sort()
  ).toEqual([39, 48, 59]);
});

test("Detects ships: possible attacks don't wrap around the left border", () => {
  expect(
    Player.findSurroundingCells(40, logic.data.gameboards.gameboard1).sort()
  ).toEqual([30, 41, 50]);
});

test("Detects ships: possible attacks don't wrap on edges", () => {
  expect(
    Player.findSurroundingCells(0, logic.data.gameboards.gameboard1).sort()
  ).toEqual([1, 10]);
  expect(
    Player.findSurroundingCells(9, logic.data.gameboards.gameboard1).sort()
  ).toEqual([19, 8]);
  expect(
    Player.findSurroundingCells(90, logic.data.gameboards.gameboard1).sort()
  ).toEqual([80, 91]);
  expect(
    Player.findSurroundingCells(99, logic.data.gameboards.gameboard1).sort()
  ).toEqual([89, 98]);
});

describe('Tests using random', () => {
  beforeEach(() => {
    jest.spyOn(global.Math, 'random').mockReturnValue(0.4);
  });
  afterEach(() => {
    jest.spyOn(global.Math, 'random').mockRestore();
  });

  test('Computer find the best move using trends', () => {
    logic.data.gameboards.gameboard1.addShip([44, 45, 46, 47]);
    logic.data.gameboards.gameboard1.receiveAttack(45);
    logic.data.gameboards.gameboard1.receiveAttack(46);
    logic.initiateComputerMove();
    expect(logic.data.gameboards.gameboard1.board[47]).toMatchObject({
      id: 0,
      isHit: true,
      part: 3,
    });
  });

  test('Trend test case: two hits on left border', () => {
    logic.data.gameboards.gameboard1.addShip([40, 50, 60, 70]);
    logic.data.gameboards.gameboard1.receiveAttack(60);
    logic.data.gameboards.gameboard1.receiveAttack(70);
    logic.data.gameboards.gameboard1.receiveAttack(80);
    const hits = Player.detectShips(logic.data.gameboards.gameboard1);
    expect(Player.analyzeTrends(hits)).toEqual({
      horizontalTrends: [],
      verticalTrends: [[60, 70]],
    });
  });
});
