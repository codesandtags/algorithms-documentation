class Solution {
   constructor() {
      // Initialize two arrays, 'main' and 'aux', for stack implementation
      this.main = []
      this.aux = []
   }

   push(val) {
      // Push the value into 'aux' array
      this.aux.push(val)
      // Move all elements from 'main' to 'aux', effectively reversing the order
      while (this.main.length !== 0) {
         this.aux.push(this.main.shift())
      }
      // Swap 'main' and 'aux' arrays to maintain the correct stack order
      ;[this.main, this.aux] = [this.aux, this.main]
   }

   pop() {
      // Pop and return the top element from 'main' array, which simulates popping from the stack
      return this.main.shift()
   }
}

// Testing
let stack = new Solution()
stack.push(1)
stack.push(2)
stack.push(3)
console.log(stack.pop()) // Should print 3 (last pushed element)
console.log(stack.pop()) // Should print 2 (element pushed before 3)
