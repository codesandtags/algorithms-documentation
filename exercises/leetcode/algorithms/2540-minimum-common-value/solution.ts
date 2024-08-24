function getCommon(nums1: number[], nums2: number[]): number {
   let common = -1 // Initialize common variable to track the common value
   let i = 0,
      j = 0

   // Loop until one of the arrays ends
   while (i < nums1.length && j < nums2.length) {
      if (nums1[i] === nums2[j]) {
         // If a common value is found
         common = nums1[i] // Update the common variable
         break // Break out of the loop since we found the minimum common value
      } else if (nums1[i] < nums2[j]) {
         // If current value in nums1 is smaller
         i++ // Move to the next element in nums1
      } else {
         // If current value in nums2 is smaller
         j++ // Move to the next element in nums2
      }
   }

   return common // Return the minimum common value
}
