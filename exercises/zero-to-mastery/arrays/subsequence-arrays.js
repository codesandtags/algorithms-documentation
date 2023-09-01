/*
 * @params {array} array1
 * @params {array} array2
 *
 * Rules:
 * If array is empty then return false
 *
 *
 * @returns {boolean} true if any of the arrays is subset of the other
 */
function checkSubsequenceArrays(array1, array2) {
   // If array is empty then return false
   if (array1.length === 0 || array2.length === 0) {
      return false
   }

   let largerArray, smallerArray

   // Find which array is larger
   if (array1.length > array2.length) {
      largerArray = array1
      smallerArray = array2
   } else {
      largerArray = array2
      smallerArray = array1
   }

   // Create a hash with the larger array
   const hash = {}

   // Add all elements from larger array to hash
   for (let i = 0; i < largerArray.length; i++) {
      hash[largerArray[i]] = true
   }

   // Iterate smaller array and check if all elements are in hash
   for (let i = 0; i < smallerArray.length; i++) {
      // If element is not in hash then return false
      if (!hash[smallerArray[i]]) {
         return false
      }
   }

   // If all elements are in hash then return true
   return true
}
