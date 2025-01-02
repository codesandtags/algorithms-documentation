const removeDuplicates = function (nums) {
   if (!nums.length) return 0

   let k = 0

   for (let i = 0; i < nums.length; i++) {
      if (k < 2 || nums[i] > nums[k - 2]) {
         nums[k] = nums[i]
         k++
      }
   }

   return k
}
