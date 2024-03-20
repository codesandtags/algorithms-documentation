/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(?)
 * space complexity: O(?)
 */
class Solution {
   decimalToBinary(num) {
      // Initialize an empty array called 'stack' to store binary digits
      let stack = []

      // Continue looping until 'num' becomes 0
      while (num > 0) {
         // Calculate the remainder when 'num' is divided by 2 and push it onto the stack
         stack.push(num % 2)

         // Update 'num' by performing integer division by 2 (removing the least significant bit)
         num = Math.floor(num / 2)
      }

      if (stack.length === 0) {
         return '0'
      }

      // Reverse the order of binary digits in the stack and join them into a binary string
      return stack.reverse().join('')
   }
}

module.exports = Solution
