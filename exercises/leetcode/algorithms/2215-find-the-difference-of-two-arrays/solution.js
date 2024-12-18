/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function (nums1, nums2) {
   const [seemA, seemB] = [new Set(nums1), new Set(nums2)]
   const result = Array(2)
      .fill(0)
      .map((_) => [])

   for (let num of seemA) {
      if (!seemB.has(num)) {
         result[0].push(num)
      }
   }

   for (let num of seemB) {
      if (!seemA.has(num)) {
         result[1].push(num)
      }
   }

   return result
}
