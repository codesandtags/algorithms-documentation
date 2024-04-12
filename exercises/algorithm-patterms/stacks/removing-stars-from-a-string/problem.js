/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(?)
 * space complexity: O(?)
 */
class Solution {
   removeStars(s) {
      const stack = []

      for (let char of s) {
         if (char === '*') {
            stack.pop()
         } else {
            stack.push(char)
         }
      }

      return stack.join('')
   } // TODO: Implement solution
}

module.exports = Solution
