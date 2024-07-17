const calculator = require('./calculator');

test('adding 1 and 2 will be equal to 3', () => {
 expect(calculator.add(1, 2)).toBe(3);
})

test('subtracting 1 and 2 will be equal to -1', () => {
 expect(calculator.subtract(1, 2)).toBe(-1);
})

test('multiplying 3 and 2 will be equal to 6', () => {
 expect(calculator.multiply(3, 2)).toBe(6);
})
test('dividing 3 and 2 will be equal to 1.5', () => {
 expect(calculator.devide(3, 2)).toBe(1.5);
})