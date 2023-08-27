function binarySearch(arr, target) {
   let left = 0
   let right = arr.length - 1

   while (left <= right) {
      const mid = Math.floor((left + right) / 2)
      console.log({
         left,
         right,
         mid,
      })

      if (arr[mid] === target) {
         return mid // Element found, return its index
      } else if (arr[mid] < target) {
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

const result = binarySearch(sortedArray, target)

if (result !== -1) {
   console.log(`Element ${target} found at index ${result}`)
} else {
   console.log(`Element ${target} not found in the array`)
}
