/**
 * time: O(N/2)
 * space: O(1)
 **/
function isPalindrome(string) {
   // Checks the half of the string and compares
   // its values, if any of its value is not equals
   // then returns it false
   let index = 0
   const length = string.length
   while (index <= length / 2) {
      if (string[index] !== string[length - index - 1]) {
         return false
      }

      index++
   }

   return true
}

// Do not edit the line below.
exports.isPalindrome = isPalindrome
