/*
 * @param {array} accounts
 * @return {number} maximumWealth
 *
 * time complexity: O(n*m)
 * space complexity: O(1)
 */
class Solution {
   maximumWealth(accounts) {
      let maxWealth = 0 // Initialize maxWealth to 0
      const length = accounts.length

      for (let row = 0; row < length; row++) {
         let sum = 0
         for (let column = 0; column < accounts[row].length; column++) {
            sum += accounts[row][column]
         }

         maxWealth = Math.max(sum, maxWealth)
      }

      return maxWealth
   }
}

module.exports = Solution
