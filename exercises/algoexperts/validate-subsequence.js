// time: O(n)
// space: O(1)
function isValidSubsequence(array, sequence) {
   if (array.length < sequence.length || sequence.length === 0) return false

   let index = 0
   for (let n of array) {
      if (n === sequence[index]) {
         index++
      }
   }

   return sequence.length === index
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence
