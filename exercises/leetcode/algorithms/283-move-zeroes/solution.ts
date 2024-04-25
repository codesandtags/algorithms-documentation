/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
   let pointer = 0

   for (let index = 0; index < nums.length; index++) {
      if (nums[index] !== 0) {
         nums[pointer++] = nums[index]
      }
   }

   while (pointer < nums.length) {
      nums[pointer++] = 0
   }
}
