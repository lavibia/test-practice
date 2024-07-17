const reverseString = require('./reverseString')

test('abc reversed is cba', () => {
 expect(reverseString('abc')).toBe('cba');
})