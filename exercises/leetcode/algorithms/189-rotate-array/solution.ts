/**
 Do not return anything, modify nums in-place instead.
 */
function rotate(nums: number[], k: number): void {
   let n = nums.length
   let copy: number[] = Array(n)

   for (let i = 0; i < n; i++) {
      copy[(i + k) % n] = nums[i]
   }

   for (let i = 0; i < n; i++) {
      nums[i] = copy[i]
   }
}
