const max = require('./max');

test('El maximo de 5, 8 y 4 es 8', () => {
  expect(max.findMaxParam(5, 3, 4)).toBe(5);
})

test('El maximo de -4, -2 y 4 es 4', () => {
  expect(max.findMaxParam(-4, -2, 4)).toBe(4);
})

test('El maximo de -4, -2 y 4 es 4', () => {
  expect(max.findMaxArray([-4, -2, 4, 8, 5, 1])).toBe(8);
})

test('El maximo de vacio es un mensaje', () => {
  expect(max.findMaxArray([])).toBe('Arreglo vacio');
})

test('El maximo de un solo elemento es el mismo elemento', () => {
  expect(max.maxWhile([5])).toBe(5);
})