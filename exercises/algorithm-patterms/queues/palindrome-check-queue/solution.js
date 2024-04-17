class Solution {
   checkPalindrome(s) {
      // Remove all non-alphanumeric characters and convert to lowercase
      s = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
      let deque = []

      for (let i = 0; i < s.length; i++) {
         deque.push(s[i])
      }

      // Continue until there is 0 or 1 character left
      while (deque.length > 1) {
         // Remove and compare characters from both ends
         if (deque.shift() !== deque.pop()) {
            return false
         }
      }
      return true
   }
}

let sol = new Solution()
console.log(sol.checkPalindrome('madam')) // returns: true
console.log(sol.checkPalindrome('openai')) // returns: false
console.log(sol.checkPalindrome('A man a plan a canal Panama')) // returns: true
