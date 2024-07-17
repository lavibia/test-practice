# test-practice

## Write tests for the following, and then make the tests pass!

:heavy_check_mark: A capitalize function that takes a string and returns it with the first character capitalized.

:heavy_check_mark: A reverseString function that takes a string and returns it reversed.
:heavy_check_mark: A calculator object that contains functions for the basic operations: add, subtract, divide, and multiply. Each of these functions should take two numbers and return the correct calculation.

- A caesarCipher function that takes a string and a shift factor and returns it with each character “shifted”. Read more about how a Caesar cipher works.

* Don’t forget to test wrapping from z to a. For example, caesarCipher('xyz', 3) should return 'abc'.
* Don’t forget to test case preservation. The shifted lettercase should follow the original lettercase. For example, caesarCipher('HeLLo', 3) should return 'KhOOr'.
* Don’t forget to test punctuation. Punctuations, spaces, and other non-alphabetical characters should remain unchanged. For example, caesarCipher('Hello, World!', 3) should return 'Khoor, Zruog!'.
  For this one, you may want to split the final function into a few smaller functions. One concept of Testing is that you don’t need to explicitly test every function you write… Just the public ones. So in this case you only need tests for the final caesarCipher function. If it works as expected you can rest assured that your smaller helper functions are doing what they’re supposed to.

- An analyzeArray function that takes an array of numbers and returns an object with the following properties: average, min, max, and length.

```
const object = analyzeArray([1,8,3,4,2,6]);

object == {
average: 4,
min: 1,
max: 8,
length: 6
};
```
