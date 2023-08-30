function selectionSort(array) {
   const LENGTH = array.length

   // Step 1: Split the array into two subarrays
   for (let i = 0; i < LENGTH; i++) {
      // Step 2: Find the smallest number in the second subarray
      let lowestNumberIndex = i
      for (let k = i; k < LENGTH; k++) {
         if (array[k] < array[lowestNumberIndex]) {
            lowestNumberIndex = k
         }
      }

      // Step 3: Select the number and swap
      if (lowestNumberIndex != i) {
         /*
      const tmp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = tmp;
      */

         // Using ES6+ destructuring
         ;[array[i], array[lowestNumberIndex]] = [
            array[lowestNumberIndex],
            array[i],
         ]
      }
   }

   return array
}

// Do not edit the line below.
exports.selectionSort = selectionSort
