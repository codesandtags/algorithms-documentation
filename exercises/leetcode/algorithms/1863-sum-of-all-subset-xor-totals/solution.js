/**
 * @param {number[]} nums
 * @return {number}
 */
var subsetXORSum = function (nums) {
   let result = 0

   for (const num of nums) {
      result |= num
   }

   return result << (nums.length - 1)
}
