function insertionSort(array) {
   const LENGTH = array.length

   for (let i = 1; i < LENGTH; i++) {
      let k = i
      while (k > 0 && array[k] < array[k - 1]) {
         // Option using: ES6+ destructuring assigment to make swaps
         // ;[array[k], array[k - 1]] = [array[k - 1], array[k]]

         // Option using a temp variable to make swaps
         const tmp = array[k]
         array[k] = array[k - 1]
         array[k - 1] = tmp

         k -= 1
      }
   }

   return array
}

// Do not edit the line below.
exports.insertionSort = insertionSort
