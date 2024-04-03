/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
   return nums
      .join('')
      .split(0)
      .reduce((maxCount, current) => {
         return Math.max(maxCount, current.length)
      }, 0)
}
