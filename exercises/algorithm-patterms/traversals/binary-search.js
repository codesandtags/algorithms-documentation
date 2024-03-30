/*
Binary Search is a search algorithm that finds the position of a
target value within a sorted array. It compares the target value
to the middle element of the array; if they are unequal, the
half in which the target cannot lie is eliminated and the
search continues on the remaining half until it is successful.

Trade-offs:

Pros:
- Highly efficient for sorted data with a time complexity of O(log n).
Cons:
- The primary limitation is that the data must be sorted.
 */

function binarySearch(arr, x) {
   let start = 0,
      end = arr.length - 1
   while (start <= end) {
      let mid = Math.floor((start + end) / 2)
      if (arr[mid] === x) return mid
      else if (arr[mid] < x) start = mid + 1
      else end = mid - 1
   }
   return -1
}

let arr = [2, 3, 4, 10, 40]
let x = 10
console.log(binarySearch(arr, x)) // 3
