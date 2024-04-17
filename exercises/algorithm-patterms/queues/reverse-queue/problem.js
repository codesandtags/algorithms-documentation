class Solution {
   // Method to reverse the order of elements in the queue.
   reverseQueue(queue) {
      // Create an empty stack using an array.
      let stack = []

      // Transfer all elements from the queue to the stack.
      // This will reverse their order because stacks follow LIFO order.
      while (queue.length !== 0) {
         // Remove the front element from the queue and add it to the stack.
         stack.push(queue[0])
         queue.shift()
      }

      // Transfer all elements back from the stack to the queue.
      // The order of elements will now be reversed in the queue.
      while (stack.length !== 0) {
         // Remove the top element from the stack and add it to the queue.
         queue.push(stack.pop())
      }
      return queue
   }
}

// Create an instance of the Solution class.
let solution = new Solution()

let queue = []
// Add some elements to the queue.
queue.push(1, 2, 3, 4, 5)

// Call the method to reverse the order of elements in the queue.
solution.reverseQueue(queue)

// Log the reversed queue to the console.
console.log(queue)
