/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxK = function (nums) {
   let largest = -1
   const seen = new Set(nums)

   for (const num of nums) {
      if (seen.has(num * -1)) {
         largest = Math.max(largest, num)
      }
   }

   return largest
}
