function minMoves(nums: number[]): number {
   const min = Math.min(...nums)
   let sum = 0
   for (let i = 0; i < nums.length; i++) {
      sum += nums[i] - min
   }
   return sum
}
