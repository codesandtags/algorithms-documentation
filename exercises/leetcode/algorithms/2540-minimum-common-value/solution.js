/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
function getCommon(nums1, nums2) {
   // Ensure binary search is done on the larger array
   if (nums1.length > nums2.length) {
      return getCommon(nums2, nums1)
   }

   // Search for each element of the smaller array in the larger array
   for (let num of nums1) {
      if (binarySearch(nums2, num)) {
         return num // Return the common element found
      }
   }

   // If no common elements are found, return -1
   return -1
}

function binarySearch(nums, target) {
   let left = 0
   let right = nums.length - 1
   // Continue searching while left pointer is less than or equal to right pointer
   while (left <= right) {
      let mid = left + Math.floor((right - left) / 2) // Calculate the middle index
      if (nums[mid] > target) {
         right = mid - 1 // If target is less than element at mid, search left half
      } else if (nums[mid] < target) {
         left = mid + 1 // If target is greater than element at mid, search right half
      } else {
         return true // Target found
      }
   }
   return false // Target not found
}
