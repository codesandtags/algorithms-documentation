/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(?)
 * space complexity: O(?)
 */
class Solution {
   numGoodPairs(nums) {
      let pairCount = 0

      let map = {} // Use an object instead of Map
      for (let n of nums) {
         map[n] = (map[n] || 0) + 1 // increment the count of 'n' in the map
         // every new occurrence of a number can be paired with every previous occurrence
         // so if a number has already appeared 'p' times, we will have 'p-1' new pairs
         pairCount += map[n] - 1
      }
      return pairCount
   }

   numGoodPairsOld(nums) {
      let pairCount = 0
      let length = nums.length

      // For each element it needs to compare the rule
      for (let i = 0; i < length; i++) {
         for (let j = i + 1; j < length; j++) {
            if (nums[i] === nums[j] && i < j) {
               pairCount++
            }
         }
      }

      return pairCount
   }
}

module.exports = Solution
