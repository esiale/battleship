/* eslint-disable no-undef */
import Ship from './ship';

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
