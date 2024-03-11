/*
 * @param {string} s
 * @return {boolean} if it is a valid palindrome
 *
 * time complexity: O(n/2)
 * space complexity: O(1)
 */

class Solution {
   isAlpha(c) {
      return c.match(/[a-z0-9]/gi)
   }

   isPalindrome(s) {
      let i = 0,
         j = s.length - 1 // initialize two pointers, one at the start and one at the end of the string
      s = s.toLowerCase()
      while (i < j) {
         // continue until the two pointers cross over
         while (i < j && !this.isAlpha(s[i])) {
            // move i forward until a letter or digit is found
            i++
         }
         while (i < j && !this.isAlpha(s[j])) {
            // move j backward until a letter or digit is found
            j--
         }
         // compare the characters at i and j after converting them to lowercase
         if (!this.isAlpha(s[i]) || !this.isAlpha(s[j]) || s[i] !== s[j])
            return false // if they are not equal, the string is not a palindrome
         i++ // move i forward
         j-- // move j backwards
      }
      return true // if the two pointers have crossed over, the string is a palindrome
   }

   isPalindromeInitial(s) {
      let result = s.toLowerCase().replace(/[^a-z0-9]/gi, '')
      let first = 0
      let last = result.length - 1

      while (first < last) {
         if (result[first] !== result[last]) {
            return false
         }

         first++
         last--
      }

      return true
   }
}

module.exports = Solution
