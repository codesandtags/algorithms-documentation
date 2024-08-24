/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
   let left = 0,
      right = s.length - 1

   while (left < right) {
      if (s[left] !== s[right]) {
         // Check if either substring is a palindrome
         return (
            isPalindrome(s, left + 1, right) || isPalindrome(s, left, right - 1)
         )
      }
      left++
      right--
   }
   return true // String is already a palindrome
}

// Helper method to check if a substring is a palindrome
function isPalindrome(s, left, right) {
   while (left < right) {
      if (s[left++] !== s[right--]) {
         return false
      }
   }
   return true
}
