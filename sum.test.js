const sum = require('./sum');

test('sumo 1 + 2 debe ser igual a 3', () => {
  expect(sum(1, 2)).toBe(3);
});

