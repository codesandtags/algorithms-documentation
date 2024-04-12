/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(?)
 * space complexity: O(?)
 */
class Solution {
   makeGood(s) {
      if (s.length <= 1) {
         return s
      }

      const stack = []
      const CASE_DIFFERENCE = 32

      for (const current of s) {
         const last = stack.length > 0 ? stack[stack.length - 1] : ''
         const isSameLetter =
            Math.abs(current.charCodeAt() - last.charCodeAt()) ===
            CASE_DIFFERENCE

         if (last && isSameLetter) {
            stack.pop()
         } else {
            stack.push(current)
         }
      }

      return stack.join('')
   }

   makeGoodV2(s) {
      // Initialize an empty array called 'stack' to simulate a stack data structure.
      let stack = []

      // Iterate through each character 'c' in the input string 's'.
      for (let c of s) {
         // Check if the 'stack' is not empty and the last element in the 'stack'
         // (top of the stack) is equal to the current character 'c' in a
         // case-insensitive manner and they are not the same characters.
         if (
            stack.length > 0 &&
            stack[stack.length - 1].toLowerCase() === c.toLowerCase() &&
            stack[stack.length - 1] !== c
         ) {
            // If the conditions are met, pop the last element from the 'stack'.
            stack.pop()
         } else {
            // If the conditions are not met, push the current character 'c' onto the 'stack'.
            stack.push(c)
         }
      }

      // Convert the elements remaining in the 'stack' to a string and return it.
      return stack.join('')
   }
}

module.exports = Solution
