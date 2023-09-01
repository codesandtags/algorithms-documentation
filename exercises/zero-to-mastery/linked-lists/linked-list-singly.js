class Node {
   constructor(value) {
      this.value = value
      this.next = null
   }
}

class LinkedList {
   constructor() {
      this.head = null
      this.tail = null
   }

   append(value) {
      const node = new Node(value)

      if (this.head === null) {
         this.head = node
         this.tail = node
      } else {
         this.tail.next = node
         this.tail = node
      }

      return this
   }

   traverse() {
      let currentNode = this.head
      while (currentNode) {
         const value = currentNode.value
         console.log({
            value,
         })
         currentNode = currentNode.next
      }
   }
}

// Create a singly linked list from 1 to 5.
const list = new LinkedList()
list.append(1)
list.append(2)
list.append(3)

console.log('Original list:')
list.traverse()

// Create a function that reverses a singly linked list.
function reverseLinkedList(list) {
   let currentNode = list.head
   let prevNode = null
   let nextNode = null

   while (currentNode) {
      nextNode = currentNode.next
      currentNode.next = prevNode
      prevNode = currentNode
      currentNode = nextNode
   }

   list.tail = list.head
   list.head = prevNode
}

reverseLinkedList(list)
console.log('Reversed list:')
list.traverse()
