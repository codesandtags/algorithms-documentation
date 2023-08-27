/**
 * Takes a string and returns true if the braces in the string are balanced.
 * @param {*} string
 *
 * time: O(n)
 * space: O(n)
 */
function linterBraces(string) {
   const stack = []
   const openBraces = ['(', '[', '{']
   const closeBraces = [')', ']', '}']
   const bracePairs = {
      '(': ')',
      '[': ']',
      '{': '}',
   }

   for (let i = 0; i < string.length; i++) {
      const char = string[i]

      if (openBraces.includes(char)) {
         stack.push(char)
      } else if (closeBraces.includes(char)) {
         const top = stack.pop()
         if (bracePairs[top] !== char) {
            return false
         }
      }
   }

   return stack.length === 0
}

module.exports = linterBraces
