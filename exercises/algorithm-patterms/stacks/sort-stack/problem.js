/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(n^2)
 * space complexity: O(n)
 */
class Solution {
   sortStack(stack) {
      // Create an empty temporary stack.
      let tempStack = []

      // Continue the process until the original stack is empty.
      while (stack.length) {
         // Pop an element from the original stack.
         let temp = stack.pop()

         // While the temporary stack is not empty and the top element
         // of the temporary stack is greater than the current element,
         // push elements from the temporary stack back to the original stack.
         while (tempStack.length && tempStack[tempStack.length - 1] > temp) {
            stack.push(tempStack.pop())
         }

         // Push the current element onto the temporary stack in its sorted position.
         tempStack.push(temp)
      }

      // Return the sorted stack stored in the temporary stack.
      return tempStack
   }
}

module.exports = Solution
