/*
 * This only works with sorted arrays
 * time: O(Log N)
 * space: O(1)
 */
function binarySearch(array, target) {
   // Step 1: Identify the half of the array
   // Step 2: Define 2 pointers for left and right
   let left = 0
   let right = array.length

   // Step 3: Compare values with the target until
   //   left pointer is equals or greater than right
   while (left <= right) {
      // Calculate the middle on each iteration
      const middle = Math.floor((left + right) / 2)

      if (array[middle] === target) {
         return middle
      } else if (array[middle] < target) {
         // If left value if less than target increases left pointer
         left = middle + 1
      } else {
         // If not reduces right pointer
         right = middle - 1
      }
   }

   // Step 4: If comparison finishes and there is no
   // any match, by default it returns -1
   return -1
}

// Do not edit the line below.
exports.binarySearch = binarySearch
