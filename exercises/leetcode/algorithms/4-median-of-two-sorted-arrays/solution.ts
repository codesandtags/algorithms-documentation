function findMedianSortedArrays(nums1: number[], nums2: number[]): number {
   // Ensure nums1 is the smaller array for efficient binary search
   if (nums1.length > nums2.length) {
      return findMedianSortedArrays(nums2, nums1)
   }

   const totalLength = nums1.length + nums2.length
   const isEven = totalLength % 2 === 0

   // Two pointers for each array
   let pointer1 = 0,
      pointer2 = 0
   let current = 0,
      last = 0 // To track the last two elements for median calculation

   // Iterate until the median position is reached
   for (let count = 0; count <= Math.floor(totalLength / 2); count++) {
      last = current

      // Move pointers and track current value
      if (pointer1 === nums1.length) {
         current = nums2[pointer2++]
      } else if (
         pointer2 === nums2.length ||
         nums1[pointer1] < nums2[pointer2]
      ) {
         current = nums1[pointer1++]
      } else {
         current = nums2[pointer2++]
      }
   }

   // Median calculation based on total length being odd or even
   return isEven ? (current + last) / 2.0 : current
}
