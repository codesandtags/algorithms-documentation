function removeDuplicates(nums: number[]): number {
   if (nums.length === 0) {
      return 0
   }

   let i = 1
   let j = 1
   let count = 1

   while (i < nums.length) {
      if (nums[i] === nums[i - 1]) {
         count++
         if (count > 2) {
            i++
            continue
         }
      } else {
         count = 1
      }
      nums[j] = nums[i]
      j++
      i++
   }

   return j
}
