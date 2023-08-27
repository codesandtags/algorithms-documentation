/**
 * Identify if one array is a subset of another
 * @param {*} array1
 * @param {*} array2
 *
 * return true if any of the arrays is subset of the other
 * time complexity: O(n^2)
 * space complexity: O(1)
 */
function findSubset(array1, array2) {
   if (array1.length === 0 || array2.length === 0) {
      return false
   }

   let largerArray, smallerArray

   if (array1.length > array2.length) {
      largerArray = array1
      smallerArray = array2
   } else {
      largerArray = array2
      smallerArray = array1
   }

   for (let i = 0; i < smallerArray.length; i++) {
      let foundMatch = false
      for (let j = 0; j < largerArray.length; j++) {
         // console.count('steps')
         if (smallerArray[i] === largerArray[j]) {
            foundMatch = true
            break
         }
      }

      if (!foundMatch) {
         return false
      }
   }

   return true
}

/*
 * Identify if one array is a subset of another
 * @param {*} array1
 * @param {*} array2
 *
 * return true if any of the arrays is subset of the other
 * time complexity: O(n)
 * space complexity: O(n)
 */
function findSubsetHash(array1, array2) {
   if (array1.length === 0 || array2.length === 0) {
      return false
   }

   let largerArray, smallerArray

   if (array1.length > array2.length) {
      largerArray = array1
      smallerArray = array2
   } else {
      largerArray = array2
      smallerArray = array1
   }

   const hash = {}

   for (let i = 0; i < largerArray.length; i++) {
      hash[largerArray[i]] = true
   }

   for (let i = 0; i < smallerArray.length; i++) {
      // console.count('steps')
      if (!hash[smallerArray[i]]) {
         return false
      }
   }

   return true
}

module.exports = {
   findSubset,
   findSubsetHash,
}
