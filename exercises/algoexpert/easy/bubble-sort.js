/**
 * time: O(N^2)
 * space: O(1)
 **/
function bubbleSort(array) {
   // Step 1: Iterates each element on the array
   // and compare with the rest of elements
   const LENGTH = array.length
   for (let i = 0; i < LENGTH; i++) {
      for (let k = i; k < LENGTH; k++) {
         if (array[i] > array[k]) {
            // Step 2: If left element is less than right element
            // swap both elements
            const tmp = array[i]
            array[i] = array[k]
            array[k] = tmp
         }
      }
   }

   // Step 4: Return sorted array
   return array
}

// Do not edit the line below.
exports.bubbleSort = bubbleSort
