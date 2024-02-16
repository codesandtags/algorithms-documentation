/*
 * @param {array} nums
 * @return {array} sum of 1d array
 *
 * time complexity: O(n), where n is the length of the array
 * space complexity: O(1), because it does not use extra memory that grows with the size of the input
 */
class Solution {
   runningSum(nums) {
      // Edge cases
      if (!nums || nums.length === 0) {
         return []
      }

      const length = nums.length
      const result = new Array(length).fill(0)
      result[0] = nums[0]

      for (let index = 1; index < length; index++) {
         result[index] = nums[index] + result[index - 1]
      }

      return result
   }

   runningSumOld(nums) {
      const length = nums.length
      const result = new Array(length)

      for (let index = 0; index < length; index++) {
         result[index] = nums[index]

         if (index >= 1) {
            result[index] += result[index - 1]
         }
      }

      return result
   }
}

module.exports = Solution
