/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(?)
 * space complexity: O(?)
 */
class Solution {
   removeOld(arr) {
      const length = arr.length

      if (length <= 1) return length

      let left = 0
      let right = 1
      let uniquesLength = 1

      while (right < length) {
         if (arr[left] === arr[right]) {
            right++
         } else if (arr[left] !== arr[right]) {
            uniquesLength++
            left = right
            right++
         }
      }

      return uniquesLength
   }

   // Define a method called "remove" that takes an array 'arr' as input.
   remove(arr) {
      // Initialize a variable 'nextNonDuplicate' to keep track of the index of the next non-duplicate element.
      let nextNonDuplicate = 1

      // Initialize a variable 'i' to iterate through the array.
      let i = 0

      // Start a while loop to iterate through the elements of the array 'arr'.
      while (i < arr.length) {
         // Check if the element at 'nextNonDuplicate - 1' index is not equal to the current element at 'i' index.
         if (arr[nextNonDuplicate - 1] !== arr[i]) {
            // If they are not equal, it means a new non-duplicate element is found.
            // Set the element at 'nextNonDuplicate' index to the current element at 'i' index.
            arr[nextNonDuplicate] = arr[i]

            // Increment 'nextNonDuplicate' to prepare for the next non-duplicate element.
            nextNonDuplicate += 1
         }

         // Increment the iterator 'i' to move to the next element in the array.
         i += 1
      }

      // After processing the array, 'nextNonDuplicate' represents the length of the modified array with duplicates removed.
      // Return 'nextNonDuplicate' as the result.
      return nextNonDuplicate
   }
}

module.exports = Solution
