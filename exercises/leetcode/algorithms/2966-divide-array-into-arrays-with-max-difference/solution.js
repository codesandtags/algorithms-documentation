/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[][]}
 */
var divideArray = function (nums, k) {
   nums.sort((a, b) => a - b) // Sort the array to bring closer elements near each other
   const result = []

   // Iterate over the array in steps of 3 since each subarray must contain exactly 3 elements
   for (let i = 0; i <= nums.length - 3; i += 3) {
      // Check if the max difference within the current triplet is within the allowed limit k
      if (nums[i + 2] - nums[i] <= k) {
         const subgroup = [nums[i], nums[i + 1], nums[i + 2]]
         result.push(subgroup) // Add the valid group to the result
      } else {
         return [] // Return an empty list if any group fails the condition
      }
   }

   return result // Return the final grouped list
}
