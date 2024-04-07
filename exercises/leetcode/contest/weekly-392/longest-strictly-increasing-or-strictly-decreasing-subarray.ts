function longestMonotonicSubarray(nums: number[]): number {
   if (nums.length <= 1) {
      return nums.length
   }

   let maxLength = 0
   let currentLengthIncreasing = 1
   let currentLengthDecreasing = 1

   for (let i = 1; i < nums.length; i++) {
      const current = nums[i]
      const before = nums[i - 1]

      if (current > before) {
         currentLengthIncreasing++
         currentLengthDecreasing = 1
      } else if (current < before) {
         currentLengthDecreasing++
         currentLengthIncreasing = 1
      } else {
         // When it's equal
         currentLengthDecreasing = 1
         currentLengthIncreasing = 1
      }

      maxLength = Math.max(
         maxLength,
         currentLengthDecreasing,
         currentLengthIncreasing
      )
   }

   return maxLength
}
