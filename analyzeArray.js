function analyzeArray(arrayOfNumbers) {
   let result = {
      average: average(arrayOfNumbers),
      min: min(arrayOfNumbers),
      max: max(arrayOfNumbers),
      length: arrayOfNumbers.length
   }

   return result;

}

function average(arrayOfNumbers) {
   let sum = 0;
   for (let i = 0; i < arrayOfNumbers.length; i++) {
      sum += arrayOfNumbers[i];
   }
   return sum / arrayOfNumbers.length;
}
function min(arrayOfNumbers) {
   let min = arrayOfNumbers[0];
   for (let i = 1; i < arrayOfNumbers.length; i++) {
      if (arrayOfNumbers[i] < min) {
         min = arrayOfNumbers[i]
      }
   }
   return min;
}
function max(arrayOfNumbers) {
   let max = arrayOfNumbers[0];
   for (let i = 1; i < arrayOfNumbers.length; i++) {
      if (arrayOfNumbers[i] > max) {
         max = arrayOfNumbers[i]
      }
   }
   return max;
}
module.exports = analyzeArray;