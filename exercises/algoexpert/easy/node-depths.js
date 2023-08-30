function nodeDepths(root, level = 0) {
   if (root === null) {
      return 0
   }

   return (
      level +
      +nodeDepths(root.left, level + 1) +
      nodeDepths(root.right, level + 1)
   )
}

// This is the class of the input binary tree.
class BinaryTree {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }
}

// Do not edit the line below.
exports.nodeDepths = nodeDepths
