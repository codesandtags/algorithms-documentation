class Stack {
   constructor() {
      this.items = []
   }

   /**
    * Pushes an item onto the top of the stack.
    * @param {*} item The item to be pushed onto the stack.
    * @return {number} The new length of the stack.
    */
   push(item) {
      const length = this.items.length
      this.items[length] = item

      return this.items.length
   }

   /**
    * Remove an item at the top of the stack.
    * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
    */
   pop() {
      if (!this.isEmpty()) {
         const length = this.items.length
         const value = this.items[length - 1]
         this.items.length = length - 1
         // Alternative is using a splice

         return value
      }

      return undefined
   }

   /**
    * Determines if the stack is empty.
    * @return {boolean} `true` if the stack has no items, `false` otherwise.
    */
   isEmpty() {
      return this.items.length === 0
   }

   /**
    * Returns the item at the top of the stack without removing it from the stack.
    * @return {*} The item at the top of the stack if it is not empty, `undefined` otherwise.
    */
   peek() {
      if (!this.isEmpty()) {
         return this.items[this.items.length - 1]
      }

      return undefined
   }

   /**
    * Returns the number of items in the stack.
    * @return {number} The number of items in the stack.
    */
   length() {
      return this.items.length
   }
}

module.exports = Stack
