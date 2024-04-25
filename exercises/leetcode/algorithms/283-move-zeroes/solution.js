/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
   if (nums.length <= 1) return
   let writter = 0

   for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== 0) {
         nums[writter] = nums[i]
         writter++
      }
   }

   while (writter < nums.length) {
      nums[writter] = 0
      writter++
   }
}
