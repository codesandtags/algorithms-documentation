/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function (nums) {
   const freq = {}
   // Calculate frequency
   nums.forEach((n) => {
      freq[n] = (freq[n] || 0) + 1
   })

   return nums.sort((a, b) => freq[a] - freq[b] || b - a)
}
