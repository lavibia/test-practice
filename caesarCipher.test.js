const caesarCipher = require('./caesarCipher');

test(`input of 'ABC' and 1 should return 'BCD'`, () => {
 expect(caesarCipher('ABC', 1)).toBe('BCD');
})

test(`Wrapping from z to a`, () => {
 expect(caesarCipher('xyz', 3)).toBe('abc');
})
test(`Non-alphabetical characters should remain unchanged`, () => {
 expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
})
test(`Case preservation`, () => {
 expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
})