/**
 * @param {number} value
 * @return {Function}
 */
function sum(valueA) {
   // Handles edge case with first call withouth arguments
   if (valueA === undefined) {
      throw new Error('First call withouth arguments')
   }

   // Step 1: Handling Closure
   return function (valueB) {
      if (valueB === undefined) {
         return valueA
      }

      if (typeof valueB !== 'number') {
         throw new Error('Argument must be a number')
      }

      return sum(valueA + valueB)
   }
}

module.exports = sum
