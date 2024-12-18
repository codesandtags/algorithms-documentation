function removeElement(nums: number[], val: number): number {
   let writer = 0

   for (let reader = 0; reader < nums.length; reader++) {
      if (nums[reader] !== val) {
         nums[writer++] = nums[reader]
      }
   }

   return writer
}
