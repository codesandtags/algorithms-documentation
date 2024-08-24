/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumCount = function (nums) {
   let start = 0,
      end = nums.length - 1
   let maxNegatives = 0,
      maxPositives = 0 // To hold the counts of negatives and positives

   // First pass to find the count of negative numbers
   while (start <= end) {
      let mid = start + Math.floor((end - start) / 2)
      if (nums[mid] < 0) {
         maxNegatives = mid + 1 // Update count of negatives
         start = mid + 1 // Move to the right
      } else {
         end = mid - 1 // Continue searching in the left half
      }
   }

   start = 0
   end = nums.length - 1

   // Second pass to find the count of positive numbers
   while (start <= end) {
      let mid = start + Math.floor((end - start) / 2)
      if (nums[mid] > 0) {
         maxPositives = nums.length - mid // Update count of positives
         end = mid - 1 // Continue searching in the left half
      } else {
         start = mid + 1 // Move to the right
      }
   }

   // Return the maximum of the counts of negatives and positives
   return Math.max(maxNegatives, maxPositives)
}
