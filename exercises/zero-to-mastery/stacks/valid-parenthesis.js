/*
 * Function which evaluates whether a string of parenthesis or brakets is valid or not
 * @param {string} string to evaluate
 * @returns {boolean} true if the string is valid, false otherwise
 *
 * Rules:
 * 1. If string is empty then return true
 * 2. If string has only one element then return false
 * 3. If string has an odd number of elements then return false
 * 4. If string has an even number of elements then return true
 * 5. If string has an even number of elements and the first element is a closing
 * parenthesis or bracket then return false
 *
 * @example
 * isValidParenthesis('()') => true
 * isValidParenthesis('()[]{}') => true
 * isValidParenthesis('(]') => false
 * isValidParenthesis('([)]') => false
 * isValidParenthesis('([{}])') => false
 *
 * time complexity: O(n)
 * space complexity: O(n)
 */
function isValidParenthesis(string) {
   const LENGTH = string.length

   if (LENGTH === 0) {
      return true
   }

   if (LENGTH === 1) {
      return false
   }

   if (LENGTH % 2 !== 0) {
      return false
   }

   if (string[0] === ')' || string[0] === ']' || string[0] === '}') {
      return false
   }

   const stack = []
   const hash = {
      '(': ')',
      '[': ']',
      '{': '}',
   }

   for (let i = 0; i < LENGTH; i++) {
      const character = string[i]

      if (hash[character]) {
         stack.push(character)
      } else {
         const lastElement = stack.pop()

         if (character !== hash[lastElement]) {
            return false
         }
      }
   }

   return stack.length === 0
}

console.log({
   testCase1: isValidParenthesis('()'), // true
   testCase2: isValidParenthesis('()[]{}'), // true
   testCase3: isValidParenthesis('(]'), // false
   testCase4: isValidParenthesis('([)]'), // false
   testCase5: isValidParenthesis('([{}])'), // true
})
