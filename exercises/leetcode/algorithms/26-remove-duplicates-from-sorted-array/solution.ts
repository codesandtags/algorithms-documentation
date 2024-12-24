function removeDuplicates(nums: number[]): number {
   let nextNonDuplicate = 1
   let index = 0
   const length = nums.length

   while (index < length) {
      if (nums[nextNonDuplicate - 1] !== nums[index]) {
         nums[nextNonDuplicate] = nums[index]
         nextNonDuplicate++
      }

      index++
   }

   return nextNonDuplicate
}
