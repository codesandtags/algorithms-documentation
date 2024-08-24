/**
 * @param {number[]} nums
 * @return {number}
 */
var reductionOperations = function (nums) {
   nums.sort((a, b) => a - b) // Sort the array in ascending order
   let operations = 0,
      count = 1
   for (let i = nums.length - 1; i > 0; i--) {
      // Loop through the array from the end
      if (nums[i] !== nums[i - 1]) {
         // If the current number is different from the previous one
         operations += count // Increment the total operations by the current count
      }
      count++ // Increment the count for the next number
   }
   return operations // Return the total number of operations
}
