/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
   if (!matrix.length || !matrix[0].length) return false

   let row = 0
   let col = matrix[0].length - 1

   // Start from top right corner and move towards the target
   while (row < matrix.length && col >= 0) {
      if (matrix[row][col] === target) {
         // Target found
         return true
      } else if (matrix[row][col] < target) {
         // Move down
         row++
      } else {
         // Move left
         col--
      }
   }

   // Target not found
   return false
}
