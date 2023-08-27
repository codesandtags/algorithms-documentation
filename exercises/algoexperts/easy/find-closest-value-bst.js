function findClosestValueInBst(tree, target) {
   let currentNode = tree
   let closest = Infinity
   let value = 0

   while (currentNode) {
      if (Math.abs(target - currentNode.value) < closest) {
         closest = Math.abs(target - currentNode.value)
         value = currentNode.value
      }

      if (target < currentNode.value) {
         currentNode = currentNode.left
      } else {
         currentNode = currentNode.right
      }
   }

   return value
}

// This is the class of the input tree. Do not edit.
class BST {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }
}

// Do not edit the line below.
exports.findClosestValueInBst = findClosestValueInBst
