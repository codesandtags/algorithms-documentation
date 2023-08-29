// This is the class of the input root.
// Do not edit it.
class BinaryTree {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }
}

function calculateBranchSums(node, currentSum, sums) {
   if (node === null) return

   const newSum = currentSum + node.value

   // When there are no more childs the final sum is ready
   if (!node.left && !node.right) {
      sums.push(newSum)
      return
   }

   calculateBranchSums(node.left, newSum, sums)
   calculateBranchSums(node.right, newSum, sums)
}

function branchSums(root) {
   const sums = []
   calculateBranchSums(root, 0, sums)

   return sums
}

// Do not edit the lines below.
exports.BinaryTree = BinaryTree
exports.branchSums = branchSums
