// This is an input class. Do not edit.
class LinkedList {
   constructor(value) {
      this.value = value
      this.next = null
   }
}

function removeDuplicatesFromLinkedList(linkedList) {
   // Write your code here.
   let currentNode = linkedList

   while (currentNode.next) {
      const nextNode = currentNode.next

      if (currentNode.value == nextNode.value) {
         currentNode.next = nextNode.next
      } else {
         currentNode = currentNode.next
      }
   }

   return linkedList
}

// Do not edit the lines below.
exports.LinkedList = LinkedList
exports.removeDuplicatesFromLinkedList = removeDuplicatesFromLinkedList
