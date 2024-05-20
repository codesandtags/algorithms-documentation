function subsetXORSum(nums: number[]): number {
   let result = 0

   for (const num of nums) {
      result |= num
   }

   return result << (nums.length - 1)
}
