/*
 * Given an array of integers sorted in ascending order
 * return the starting and ending index of a given target
 * value in an array, i.e. [x, y]
 *
 * @param {array} array
 * @param {number} target
 * @returns {array} [x, y]
 *
 * @example
 * const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15, 17]
 * const target = 7
 *
 * const result = binarySearchRange(sortedArray, target)
 * console.log(result) // [3, 3]
 *
 * @timecomplexity O(log n)
 * @spacecomplexity O(1)
 */
function binarySearchRange(array, target) {
   let left = 0
   let right = array.length - 1

   while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      const foundValue = array[mid]

      if (foundValue === target) {
         let start = mid
         let end = mid

         while (array[start] === target) {
            start--
         }

         while (array[end] === target) {
            end++
         }

         return [start + 1, end - 1]
      } else if (foundValue < target) {
         left = mid + 1
      } else {
         right = mid - 1
      }
   }

   return [-1, -1]
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 7, 7, 9, 11, 13, 15, 17]
const target = 7

console.log('\nBinary search range')
console.log({
   sortedArray,
   target,
})

// Exist value
console.log({
   result: binarySearchRange(sortedArray, target),
})

// Don't exist value
console.log({
   result: binarySearchRange(sortedArray, 10),
})

// Same index
const sortedArray2 = [1, 3, 5, 7, 9, 11, 13, 15, 17]
console.log({
   result: binarySearchRange(sortedArray, target),
})

// Same index
const repeatedValues = [4, 4, 4, 4, 4, 4]
console.log({
   result: binarySearchRange(repeatedValues, 4),
})
