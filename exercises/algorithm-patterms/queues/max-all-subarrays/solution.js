class Solution {
   // Define a function named printMax that takes an array 'arr' and an integer 'k'.
   printMax(arr, k) {
      let deque = [] // Create an empty array to act as a deque.
      let result = [] // Create an empty array to store the result.
      let n = arr.length // Get the length of the input array.

      // Loop through each element in the input array.
      for (let i = 0; i < n; i++) {
         // While the deque is not empty and the current element is greater than or equal to the element at the end of the deque, remove elements from the end of the deque.
         while (deque.length && arr[i] >= arr[deque[deque.length - 1]]) {
            deque.pop()
         }

         // Add the current element's index to the end of the deque.
         deque.push(i)

         // If the index at the front of the deque is less than the current index minus 'k' plus 1, remove it from the front.
         if (deque[0] < i - k + 1) {
            deque.shift()
         }

         // If the current index is greater than or equal to 'k' minus 1, add the maximum element in the current window to the 'result' array.
         if (i >= k - 1) {
            result.push(arr[deque[0]])
         }
      }

      return result // Return the 'result' array containing the maximum elements in each subarray of size 'k'.
   }
}

// Create an instance of the Solution class.
let solution = new Solution()

// Define the input array and 'k' value.
let arr = [12, 1, 78, 90, 57, 89, 56]
let k = 3

// Call the 'printMax' method and store the result.
let result = solution.printMax(arr, k)

// Print the result.
console.log(result)
