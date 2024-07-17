const capitalize = require('./capitalize')
test('abc capitalized is Abc', () => {
 expect(capitalize('abc')).toBe('Abc');
})