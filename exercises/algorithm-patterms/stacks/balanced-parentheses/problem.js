/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(?)
 * space complexity: O(?)
 */
class Solution {
   isValid(s) {
      // Creating a stack to keep track of opening parentheses
      let stack = []

      // Iterating through each character in the input string
      for (let c of s) {
         // If the character is an opening parenthesis, push it onto the stack
         if (c === '(' || c === '{' || c === '[') {
            stack.push(c)
         } else {
            // If stack is empty and we have a closing parenthesis, the string is not balanced
            if (!stack.length) return false

            // Pop the top character from the stack
            let top = stack.pop()

            // If the character is a closing parenthesis, check whether
            // it corresponds to the most recent opening parenthesis
            if (c === ')' && top !== '(') return false
            if (c === '}' && top !== '{') return false
            if (c === ']' && top !== '[') return false
         }
      }
      // If the stack is empty, all opening parentheses had a corresponding closing match
      return !stack.length
   }
}

module.exports = Solution
