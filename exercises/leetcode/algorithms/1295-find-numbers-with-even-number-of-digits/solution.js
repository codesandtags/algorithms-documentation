/**
 * @param {number[]} nums
 * @return {number}
 */
var findNumbers = function (nums) {
   return nums.filter((num) => String(num).length % 2 === 0).length
}
