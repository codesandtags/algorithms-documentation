// Tip: You can use the Array.isArray function to check whether an item
// is a list or an integer.
function productSum(array, level = 1) {
   let sum = 0
   // Step 1: Iterate array
   for (const element of array) {
      // Step 2: Check if the current element in the iteration
      // is an array, if so, then call recursively to the next
      // level
      if (Array.isArray(element)) {
         sum += productSum(element, level + 1)
      } else {
         // Step 3: If the current element is a number, apply the sum
         // with the product of the current level
         sum += element
      }
   }

   // Return the final sume
   return sum * level
}

// Do not edit the line below.
exports.productSum = productSum
