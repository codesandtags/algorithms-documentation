/*
 * Binary search algorithm implementation in JavaScript
 * Given an array and a target value, return the index of the target value in the array
 * or -1 if it doesn't exist
 *
 * @param {array} arr
 * @param {number} target
 * @return {number}
 *
 * @example
 * const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]
 * const target = 6
 *
 * const result = binarySearch(sortedArray, target)
 * console.log(result) // -1
 *
 * @timecomplexity O(log n)
 * @spacecomplexity O(1)
 */
function binarySearch(arr, target) {
   let left = 0
   let right = arr.length - 1

   while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const foundValue = arr[mid]
      console.log({
         left,
         mid,
         right,
         target,
         foundValue,
      })

      if (foundValue === target) {
         return mid // Element found, return its index
      } else if (foundValue < target) {
         left = mid + 1 // Search the right half
      } else {
         right = mid - 1 // Search the left half
      }
   }

   return -1 // Element not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]
const target = 6

console.log('\nBinary search')
console.log({
   sortedArray,
   target,
})
const result = binarySearch(sortedArray, target)

if (result !== -1) {
   console.log(`Element ${target} found at index ${result}`)
} else {
   console.log(`Element ${target} not found in the array`)
}
