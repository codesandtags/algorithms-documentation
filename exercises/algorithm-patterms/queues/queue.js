class Node {
   // Node class for storing data and the reference to the next node
   constructor(data) {
      this.data = data
      this.next = null
   }
}

class Queue {
   // Queue class using linked list
   constructor() {
      this.front = null
      this.rear = null
      this.size = 0
   }

   // Add an element to the rear of the queue
   enqueue(data) {
      let newNode = new Node(data)
      if (this.rear === null) {
         this.front = this.rear = newNode
      } else {
         this.rear.next = newNode
         this.rear = newNode
      }
      this.size++
   }

   // Remove an element from the front of the queue
   dequeue() {
      if (this.front === null) {
         return null
      }
      let temp = this.front
      this.front = this.front.next
      if (this.front === null) {
         this.rear = null
      }
      this.size--
      return temp.data
   }

   // Get the front element of the queue
   peek() {
      if (this.front === null) {
         return null
      }
      return this.front.data
   }

   // Check if the queue is empty
   isEmpty() {
      return this.size === 0
   }

   // Get the number of elements in the queue
   getSize() {
      return this.size
   }
}

// Example usage
const queue = new Queue()

// Enqueue elements
queue.enqueue(1)
queue.enqueue(2)
queue.enqueue(3)

// Display front element
console.log('Front element:', queue.peek())
// Dequeue and display the dequeued element
console.log('Dequeued:', queue.dequeue())
// Display front element again
console.log('Front element:', queue.peek())
// Display the size of the queue
console.log('Queue size:', queue.getSize())
