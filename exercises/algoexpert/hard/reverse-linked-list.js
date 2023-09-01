// This is an input class. Do not edit.
class LinkedList {
   constructor(value) {
      this.value = value
      this.next = null
   }
}

function reverseLinkedList(head) {
   let prevNode = null
   let nextNode = null
   let currentNode = head

   while (currentNode) {
      nextNode = currentNode.next
      currentNode.next = prevNode
      prevNode = currentNode
      currentNode = nextNode
   }

   return prevNode
}

// Do not edit the lines below.
exports.LinkedList = LinkedList
exports.reverseLinkedList = reverseLinkedList
