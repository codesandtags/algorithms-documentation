/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
   let writer = 0
   let reader = 0

   while (reader < nums.length) {
      if (nums[reader] === val) {
         reader++
      } else {
         nums[writer] = nums[reader]
         reader++
         writer++
      }
   }

   return writer
}
