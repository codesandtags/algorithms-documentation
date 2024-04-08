/*
 * Given a square matrix (2D array), calculate the sum of its two diagonals.
 * @param {array[][]} variableName
 * @return {dataType} description
 *
 * time complexity: O(n)
 * space complexity: O(1)
 */
class Solution {
   diagonalSum(mat) {
      let n = mat.length // Get the size of the matrix
      let totalSum = 0 // Initialize the total sum

      // Loop through each row
      for (let i = 0; i < n; i++) {
         totalSum += mat[i][i] + mat[i][n - i - 1] // Add primary and secondary diagonal elements
      }

      // If n is odd, subtract the central element
      if (n % 2 !== 0) {
         totalSum -= mat[Math.floor(n / 2)][Math.floor(n / 2)]
      }
      return totalSum // Return the calculated total sum
   }
}

// Test the examples
let sol = new Solution()
console.log(
   sol.diagonalSum([
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9],
   ])
) // Output: 25
console.log(
   sol.diagonalSum([
      [1, 0],
      [0, 1],
   ])
) // Output: 2
console.log(sol.diagonalSum([[5]])) // Output: 5

module.exports = Solution
