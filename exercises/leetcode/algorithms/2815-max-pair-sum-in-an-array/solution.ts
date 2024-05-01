/**
 * @param {number[]} nums
 * @return {number}
 */
function getMaxDigit(num: number): number {
   let max = 0
   while (num > 0) {
      const mod = num % 10
      max = Math.max(max, mod)
      num = (num - mod) / 10
   }
   return max
}

function maxSum(nums: number[]): number {
   let maxSum = -1
   let pair = Array(10).fill(-Infinity)

   for (const current of nums) {
      const maxDigit = getMaxDigit(current)
      maxSum = Math.max(maxSum, current + pair[maxDigit])
      pair[maxDigit] = Math.max(current, pair[maxDigit])
   }

   return maxSum
}
