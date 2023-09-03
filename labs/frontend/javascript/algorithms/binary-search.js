/**
 * @param {Array<number>} arr The input integer array to be searched.
 * @param {number} target The target integer to search within the array.
 * @return {number} The index of target element in the array, or -1 if not found.
 */
function binarySearch(arr, target) {
   // Step 1: define pointers left and right
   let left = 0
   let right = arr.length - 1

   // Step 2: iterate array until:
   //  1. We found the target and return the index
   //  2. Left is equals or greater than right pointer
   while (left <= right) {
      // Step 3: calculate the middle of the array and select that value
      const middle = Math.floor((left + right) / 2)
      const foundValue = arr[middle]

      // Step 4: middle === target, return the index
      if (foundValue === target) {
         return middle

         // Step 5: if mid value is less than target, we reduce right
      } else if (foundValue < target) {
         left = middle + 1
      } else {
         // Step 6: if mid value is greatr than target, we increase left
         right = middle - 1
      }
   }

   // Step X: If we don't find the target then return -1
   return -1
}

module.exports = binarySearch
