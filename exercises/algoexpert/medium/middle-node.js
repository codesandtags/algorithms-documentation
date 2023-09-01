// This is an input class. Do not edit.
class LinkedList {
   constructor(value) {
      this.value = value
      this.next = null
   }
}

exports.LinkedList = LinkedList

function middleNode(linkedList) {
   // iterate and calculate the total nodes
   let currentNode = linkedList
   let totalNodes = 0

   while (currentNode) {
      totalNodes++
      currentNode = currentNode.next
   }

   let middleNode = linkedList
   let middle = Math.floor(totalNodes / 2)

   console.log({ middle })

   for (let i = 0; i < middle; i++) {
      middleNode = middleNode.next
   }

   return middleNode
}

/*
 * Usually middle node is the half of the list
 * so having a fast node that move twices of the slow now
 * I will have the middle node when the fast node finishes
 */
function middleNode(linkedList) {
   // Using slow and fast pointers technique
   let slowNode = linkedList
   let fastNode = linkedList

   while (fastNode && fastNode.next) {
      slowNode = slowNode.next // 1 node at time
      fastNode = fastNode.next.next // 2 nodes at time
   }

   return slowNode
}

// Do not edit the line below.
exports.middleNode = middleNode
