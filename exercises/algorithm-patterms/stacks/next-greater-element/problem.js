/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(?)
 * space complexity: O(?)
 */
class Solution {
   nextLargerElement(arr) {
      let stack = [] // Initialize an empty stack to store indices of elements
      let res = new Array(arr.length).fill(-1) // Initialize a result array with -1 values

      // Iterate through the input array from right to left
      for (let i = arr.length - 1; i >= 0; i--) {
         while (stack.length && stack[stack.length - 1] <= arr[i]) {
            // While the stack is not empty and the element at the top of the stack
            // is less than or equal to the current element, pop elements from the stack
            stack.pop()
         }

         if (stack.length) {
            // If the stack is not empty after popping, it means the current element
            // has found its next larger element
            res[i] = stack[stack.length - 1]
         }

         // Push the current element's index onto the stack
         stack.push(arr[i])
      }

      return res // Return the result array containing the next larger elements
   }
}

module.exports = Solution
