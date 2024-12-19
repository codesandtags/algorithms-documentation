/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
   // Make a copy of the first m elements of nums1.
   let nums1Copy = nums1.slice(0, m)
   let p1 = 0
   let p2 = 0
   // Compare elements from nums1Copy and nums2 and write the smallest to nums1.
   for (let p = 0; p < m + n; p++) {
      // We also need to ensure that p1 and p2 aren't over the boundaries
      // of their respective arrays.
      if (p2 >= n || (p1 < m && nums1Copy[p1] < nums2[p2])) {
         nums1[p] = nums1Copy[p1++]
      } else {
         nums1[p] = nums2[p2++]
      }
   }
}
