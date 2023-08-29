// time: O(n)
// space: O(1)
function isValidSubsequence(array, sequence) {
   if (array.length < sequence.length) return false

   let index = 0
   for (let n of array) {
      if (index >= sequence.length) return true
      if (n === sequence[index]) {
         index++
      }
   }

   return sequence.length === index
}

// Do not edit the line below.
exports.isValidSubsequence = isValidSubsequence
