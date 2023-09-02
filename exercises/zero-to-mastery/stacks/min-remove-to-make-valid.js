/*
 * Given a string s of '(' , ')' and lowercase English characters.
 * we need to remove the less number of parentheses ( '(' or ')',
 * in any positions ) so that the resulting parentheses string is valid
 * and return any valid string.
 *
 * @param {string} string
 * @returns {string} the string with the minimum number of parentheses removed
 *
 * Rules and edge cases:
 * Formally, a parentheses string is valid if and only if:
 * 1. It is the empty string, contains only lowercase characters, or
 * 2. It can be written as AB (A concatenated with B), where A and B are valid strings, or
 * 3. It can be written as (A), where A is a valid string.
 *
 * @example
 * minRemoveToMakeValid("lee(t(c)o)de)") => "lee(t(c)o)de"
 * minRemoveToMakeValid("a)b(c)d") => "ab(c)d"
 * minRemoveToMakeValid("))((") => ""
 * minRemoveToMakeValid("(a(b(c)d)") => "a(b(c)d)"
 *
 * time complexity: O(n)
 * space complexity: O(n)
 */
function minRemoveToMakeValid(string) {
   const LENGTH = string.length

   if (LENGTH === 0) {
      return ''
   }

   const result = string.split('')
   const stack = []
   const hash = {
      '(': ')',
      ')': '(',
   }

   for (let index = 0; index < LENGTH; index++) {
      const character = string[index]

      if (character === '(') {
         stack.push(index)
      } else if (character === ')' && stack.length > 0) {
         stack.pop()
      } else if (character === ')') {
         result[index] = ''
      }
   }

   while (stack.length > 0) {
      const index = stack.pop()
      result[index] = ''
   }

   return result.join('')
}

console.log(minRemoveToMakeValid('lee(t(c)o)de)'))

console.log(minRemoveToMakeValid('(codes))and(tags)'))

console.log(minRemoveToMakeValid('))(('))
