/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(?)
 * space complexity: O(?)
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
