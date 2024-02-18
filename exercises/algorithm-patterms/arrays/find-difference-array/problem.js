/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(3n) because it has 3 for loops, where n is the length of the array
 * space complexity: O(3n) because there are 3 arrays of length n stored in memory
 */
class Solution {
   findDifferenceArray(nums) {
      const n = nums.length
      const differenceArray = new Array(n).fill(0)
      const leftSum = new Array(n).fill(0)
      const rightSum = new Array(n).fill(0)

      // Calculates left sum
      leftSum[0] = nums[0]
      for (let index = 1; index < n; index++) {
         leftSum[index] = leftSum[index - 1] + nums[index]
      }

      // Calculates right sum
      rightSum[n - 1] = nums[n - 1]
      for (let index = n - 2; index >= 0; index--) {
         rightSum[index] = rightSum[index + 1] + nums[index]
      }

      // Calculates difference array
      for (let index = 0; index < n; index++) {
         differenceArray[index] = Math.abs(leftSum[index] - rightSum[index])
      }

      return differenceArray
   }

   findDifferenceArrayOld(nums) {
      const n = nums.length
      const differenceArray = new Array(n).fill(0)

      // For each element calculates left and right sum
      for (let index = 0; index < n; index++) {
         let leftSum = 0
         let rightSum = 0
         let leftIndex = index - 1
         let rightIndex = index + 1

         // Edge cases: No values left or no values right (array bounds)
         // Calculates left sum
         while (leftIndex >= 0) {
            leftSum += nums[leftIndex]
            leftIndex--
         }
         // Calculates right sum
         while (rightIndex < n) {
            rightSum += nums[rightIndex]
            rightIndex++
         }

         let difference = Math.abs(leftSum - rightSum)
         differenceArray[index] = difference
      }

      return differenceArray
   }
}

module.exports = Solution
