function reductionOperations(nums: number[]): number {
   nums.sort((a, b) => a - b)

   let operations = 0
   const N = nums.length
   for (let i = 1; i < N; ++i) {
      if (nums[i - 1] < nums[i]) {
         operations += N - i
      }
   }

   return operations
}
