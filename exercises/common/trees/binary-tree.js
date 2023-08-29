const treeNode = require('./tree-node')

/**
 * Representation of a Binary Tree
 */
class BinaryTree {
   constructor() {
      this.root = null
   }

   insert(node) {
      if (this.root === null) {
         this.root = node
      } else {
         let currentNode = this.root

         while (true) {
            if (node.value < currentNode.value) {
               // Left
               if (!currentNode.left) {
                  currentNode.left = node
                  return this
               }

               currentNode = currentNode.left
            } else {
               // Right
               if (!currentNode.right) {
                  currentNode.right = node
                  return this
               }

               currentNode = currentNode.right
            }
         }
      }
   }

   traverseDFSInorder(node = this.root) {
      if (node === null) {
         return
      }

      this.traverseDFSInorder(node.left)
      console.log(node.value)
      this.traverseDFSInorder(node.right)
   }

   traverseDFSPreOrder(node = this.root) {
      if (node === null) return

      console.log(node.value)
      this.traverseDFSPreOrder(node.left)
      this.traverseDFSPreOrder(node.right)
   }

   traverseDFSPostOrder(node = this.root) {
      if (node === null) return

      this.traverseDFSPostOrder(node.left)
      this.traverseDFSPostOrder(node.right)
      console.log(node.value)
   }

   lookup(target, node = this.root) {
      if (node == null) {
         console.log('Not found')
         return null
      }

      if (node.value === target) {
         console.log('Found')
         return node
      } else if (target < node.value) {
         // go left
         return this.lookup(target, node.left)
      } else if (target > node.value) {
         // go right
         return this.lookup(target, node.right)
      }
   }

   getMaxValue(node = this.root, maxValue = 0) {
      if (node === null) return maxValue

      maxValue = Math.max(node.value, maxValue)

      return Math.max(
         this.getMaxValue(node.left, maxValue),
         this.getMaxValue(node.right, maxValue)
      )
   }
}

// Examples
// Imbalance tree
console.log('\nImbalanced tree')
const binaryTree = new BinaryTree()
binaryTree.insert(new treeNode(1))
binaryTree.insert(new treeNode(2))
binaryTree.insert(new treeNode(3))
binaryTree.insert(new treeNode(4))
binaryTree.insert(new treeNode(5))
console.log(binaryTree)

console.log('\n In order')
binaryTree.traverseDFSInorder()
console.log('\n Pre order')
binaryTree.traverseDFSPreOrder()
console.log('\n Post order')
binaryTree.traverseDFSPostOrder()

console.log('\n Lookup for existing value')
console.log({
   result: binaryTree.lookup(3),
})
console.log('\n Lookup for non-existing value')
console.log({
   result: binaryTree.lookup(6),
})

// Balanced tree
const binaryTreeBalanced = new BinaryTree()
binaryTreeBalanced.insert(new treeNode(3))
binaryTreeBalanced.insert(new treeNode(2))
binaryTreeBalanced.insert(new treeNode(4))
binaryTreeBalanced.insert(new treeNode(1))
binaryTreeBalanced.insert(new treeNode(5))

console.log('\nBalanced tree')
console.log(binaryTreeBalanced)
console.log('\n In order')
binaryTreeBalanced.traverseDFSInorder()
console.log('\n Pre order')
binaryTreeBalanced.traverseDFSPreOrder()
console.log('\n Post order')
binaryTreeBalanced.traverseDFSPostOrder()

console.log({
   result: binaryTreeBalanced.lookup(3),
})
console.log({
   result: binaryTreeBalanced.lookup(6),
})

// Example traversal

// Example searching

// Example max value
console.log({
   maxValue: binaryTreeBalanced.getMaxValue(),
})
