// Time: O(n)
// Space: O(n)
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (array) {
   let length = array.length
   const sortedSquares = Array(length)
   let leftIndex = 0
   let rightIndex = length - 1

   for (let index = length - 1; index >= 0; index--) {
      let leftSquared = Math.pow(array[leftIndex], 2)
      let rightSquared = Math.pow(array[rightIndex], 2)

      if (leftSquared > rightSquared) {
         sortedSquares[index] = leftSquared
         leftIndex++
      } else {
         sortedSquares[index] = rightSquared
         rightIndex--
      }
   }

   return sortedSquares
}
