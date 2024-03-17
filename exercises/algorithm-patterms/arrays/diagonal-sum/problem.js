/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(n)
 * space complexity: O(1)
 */
class Solution {
   diagonalSum(mat) {
      let totalSum = 0
      let n = mat.length

      for (let i = 0; i < n; i++) {
         totalSum += mat[i][i] + mat[i][n - i - 1]
      }

      // When the matrix is odd then it substracts the middle
      if (n % 2 !== 0) {
         const middle = Math.floor(n / 2)
         totalSum -= mat[middle][middle]
      }

      return totalSum
   }
}

module.exports = Solution
