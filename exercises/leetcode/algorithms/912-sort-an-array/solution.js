/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArray = function (nums) {
   let tempArr = Array(nums.length).fill(0)

   // Function to merge two sub-arrays in sorted order.
   let merge = (left, mid, right) => {
      // Calculate the start and sizes of two halves.
      let start1 = left
      let start2 = mid + 1
      let n1 = mid - left + 1
      let n2 = right - mid

      // Copy elements of both halves into a temporary array.
      for (let i = 0; i < n1; i++) {
         tempArr[start1 + i] = nums[start1 + i]
      }
      for (let i = 0; i < n2; i++) {
         tempArr[start2 + i] = nums[start2 + i]
      }

      // Merge the sub-arrays 'in tempArray' back into the original array 'arr' in sorted order.
      let i = 0,
         j = 0,
         k = left
      while (i < n1 && j < n2) {
         if (tempArr[start1 + i] <= tempArr[start2 + j]) {
            nums[k] = tempArr[start1 + i]
            i += 1
         } else {
            nums[k] = tempArr[start2 + j]
            j += 1
         }
         k += 1
      }

      // Copy remaining elements
      while (i < n1) {
         nums[k] = tempArr[start1 + i]
         i += 1
         k += 1
      }
      while (j < n2) {
         nums[k] = tempArr[start2 + j]
         j += 1
         k += 1
      }
   }

   // Recursive function to sort an array using merge sort
   let mergeSort = (left, right) => {
      if (left >= right) {
         return
      }
      let mid = Math.floor((left + right) / 2)
      // Sort first and second halves recursively.
      mergeSort(left, mid)
      mergeSort(mid + 1, right)
      // Merge the sorted halves.
      merge(left, mid, right)
   }

   mergeSort(0, nums.length - 1)
   return nums
}
