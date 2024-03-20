/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(?)
 * space complexity: O(?)
 */
class Solution {
   simplifyPath(path) {
      const stack = []

      // Split the input path string using one or more consecutive '/' characters as a delimiter
      for (const p of path.split(/\/+/)) {
         if (p === '' || p === '.') continue

         if (p === '..') {
            // If the component is '..', pop the last component from the stack
            if (stack.length > 0) {
               stack.pop()
            }
         } else if (p && p !== '.') {
            // If the component is not empty and not '.', push it onto the stack
            stack.push(p)
         }
      }

      // Reconstruct the simplified path by joining components from the stack
      return '/' + stack.join('/')
   }
}

module.exports = Solution
