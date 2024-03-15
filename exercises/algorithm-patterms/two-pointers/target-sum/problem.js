/*
 * Given an array of numbers sorted in ascending order and a target sum, find a pair in the array whose sum is equal to the given target.
 * Write a function to return the indices of the two numbers (i.e. the pair) such that they add up to the given target. If no such pair exists return [-1, -1].
 *
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(n)
 * space complexity: With Two Pointers O(1)
 * space complexity: With Hashtable O(1)
 *
 * LeetCode: https://leetcode.com/problems/two-sum/
 */
class Solution {
   pairWithTargetSum(arr, targetSum) {
      const nums = {} // to store numbers and their indices
      for (let i = 0; i < arr.length; i++) {
         const num = arr[i]
         if (targetSum - num in nums) {
            return [nums[targetSum - num], i]
         }
         nums[num] = i
      }
      return [-1, -1]
   }

   search(numbers, targetSum) {
      let left = 0
      let right = numbers.length - 1

      while (left < right) {
         const currentSum = numbers[left] + numbers[right]

         if (currentSum === targetSum) return [left, right]

         if (currentSum < targetSum) {
            left++
         } else {
            right--
         }
      }

      return [-1, -1]
   }
}

module.exports = Solution
