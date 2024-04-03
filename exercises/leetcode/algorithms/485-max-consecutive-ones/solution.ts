function findMaxConsecutiveOnes(nums: number[]): number {
   let maxConsequtives = 0
   let currentCount = 0
   let index = 0
   const length = nums.length

   while (index < length) {
      // Start moving the window
      if (nums[index] === 1) {
         currentCount++
      } else {
         maxConsequtives = Math.max(maxConsequtives, currentCount)
         currentCount = 0
      }
      index++
   }

   return Math.max(maxConsequtives, currentCount)
}
