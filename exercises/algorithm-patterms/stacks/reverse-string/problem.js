/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(?)
 * space complexity: O(?)
 */
class Solution {
   reverseString(s) {
      const stack = [...s]
      let reversedString = ''

      while (stack.length > 0) {
         reversedString += stack.pop()
      }

      return reversedString
   }
}

module.exports = Solution
