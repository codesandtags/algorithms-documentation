/*
 * Given a doubly linked list, list nodes and also child property that can
 *  point to a separate doubly linked list, write a function that flattens.
 *  the list so that all nodes appear in a single-level, doubly linked list.
 *  The order should be from left to right.
 *
 * @param {Node} head
 * @return {Node}
 *
 * time complexity: O(n)
 * space complexity: O(1)
 */

class Node {
   constructor(value) {
      this.value = value
      this.next = null
      this.prev = null
      this.child = null
   }

   append(value) {
      if (value === null || value === undefined) {
         throw new TypeError('The value cannot be null or undefined.')
      }

      const node = new Node(value)

      if (this.head === null) {
         this.head = node
         this.tail = node
      } else {
         this.tail.next = node
         node.prev = this.tail
         this.tail = node
      }

      return this
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

function mergeDoubleLinkedList(head) {
   if (head === null) {
      return head
   }

   let current = head

   while (current !== null) {
      if (current.child !== null) {
         const tail = current.child

         while (tail.next !== null) {
            tail = tail.next
         }

         tail.next = current.next

         if (current.next !== null) {
            current.next.prev = tail
         }

         current.next = current.child
         current.child.prev = current
         current.child = null
      }

      current = current.next
   }

   return head
}

// Example usage:
const node1 = new Node(1)
const node2 = new Node(2)
const node3 = new Node(3)
const node4 = new Node(4)
const node5 = new Node(5)
const node6 = new Node(6)

const node7 = new Node(7)
const node8 = new Node(8)
const node9 = new Node(9)

const node10 = new Node(10)
node10.append(11)

// Connecting nodes
console.log(node10)
