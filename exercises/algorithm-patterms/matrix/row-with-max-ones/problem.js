/*
 * Given a binary matrix that has dimensions , consisting of ones and zeros,
 * determine the row that contains the highest number of ones and return two values:
 * the zero-based index of this row and the actual count of ones it possesses.
 * @param {array[][]} variableName
 * @return {[]} array with the row with the most 1's
 *
 * time complexity: O(n*m)
 * space complexity: O(1)
 */
class Solution {
   findMaxOnesRow(mat) {
      let maxOnesIdx = 0
      let maxOnesCount = 0
      // Traverse through rows
      for (let i = 0; i < mat.length; i++) {
         let onesCount = mat[i].reduce((a, b) => a + b, 0) // Count ones in the current row
         // Check and update tracking variables if needed
         if (onesCount > maxOnesCount) {
            maxOnesIdx = i
            maxOnesCount = onesCount
         }
      }
      return [maxOnesIdx, maxOnesCount]
   }
}

module.exports = Solution
