/**
 * Merge Sort
 *
 * Trade-offs:
 * Pros:
 * - Good for large data sets because it has a predictable time
 * complexity of O(n log n).
 * Cons:
 * - It requires additional memory for the temporary arrays used
 * during the merge process, which can be a drawback for very large datasets.
 *
 */

function merge(left, right) {
   let arr = []
   while (left.length && right.length) {
      if (left[0] < right[0]) {
         arr.push(left.shift())
      } else {
         arr.push(right.shift())
      }
   }
   return [...arr, ...left, ...right]
}

function mergeSort(array) {
   const half = array.length / 2
   if (array.length < 2) {
      return array
   }
   const left = array.splice(0, half)
   return merge(mergeSort(left), mergeSort(array))
}

let numbers = [39, 27, 11, 4, 24, 32, 8, 12]
let sortedNumbers = mergeSort(numbers)
console.log(sortedNumbers) // [4, 8, 11, 12, 24, 27, 32, 39]
