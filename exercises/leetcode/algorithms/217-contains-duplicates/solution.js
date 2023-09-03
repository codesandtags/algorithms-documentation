/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
   const seemNumbers = new Set()

   for (let index = 0; index < nums.length; index++) {
      if (seemNumbers.has(nums[index])) {
         return true
      }
      seemNumbers.add(nums[index])
   }

   return false
}
