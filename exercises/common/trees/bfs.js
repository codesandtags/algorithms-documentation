/**
 * Util class to represent a Binary Tree Node and an example
 * that will be used in other files
 */

class Node {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }
}

class BinaryTreeNode {
   constructor() {
      this.root = null
   }

   insert(value) {
      const newNode = new Node(value)

      if (this.root === null) {
         this.root = newNode
      } else {
         let currentNode = this.root

         while (true) {
            if (value < currentNode.value) {
               // Left
               if (!currentNode.left) {
                  currentNode.left = newNode
                  return this
               }

               currentNode = currentNode.left
            } else {
               // Right
               if (!currentNode.right) {
                  currentNode.right = newNode
                  return this
               }

               currentNode = currentNode.right
            }
         }
      }
   }
}

// Breadth First Search util function
function bfs(tree) {
   let currentNode = tree.root
   let list = []
   let queue = []
   queue.push(currentNode)

   while (queue.length > 0) {
      currentNode = queue.shift()
      console.log({
         currentNode: currentNode.value,
      })
      list.push(currentNode.value)

      if (currentNode.left) {
         queue.push(currentNode.left)
      }

      if (currentNode.right) {
         queue.push(currentNode.right)
      }
   }

   return list
}

// Depth First Search util function - pre order
function dfsPreOrder(tree) {
   let currentNode = tree.root
   let list = []

   function traverse(node) {
      console.log({
         node: node.value,
      })
      list.push(node.value)

      if (node.left) {
         traverse(node.left)
      }

      if (node.right) {
         traverse(node.right)
      }
   }

   traverse(currentNode)

   return list
}

// Depth First Search util function - in order
function dfsInOrder(tree) {
   let currentNode = tree.root
   let list = []

   function traverse(node) {
      if (node.left) {
         traverse(node.left)
      }

      console.log({
         node: node.value,
      })
      list.push(node.value)

      if (node.right) {
         traverse(node.right)
      }
   }

   traverse(currentNode)

   return list
}

// Depth First Search util function - post order
function dfsPostOrder(tree) {
   let currentNode = tree.root
   let list = []

   function traverse(node) {
      if (node.left) {
         traverse(node.left)
      }

      if (node.right) {
         traverse(node.right)
      }

      console.log({
         node: node.value,
      })
      list.push(node.value)
   }

   traverse(currentNode)

   return list
}

// Invert Tree
function invertTree(tree) {
   let currentNode = tree.root

   function traverse(node) {
      if (node.left) {
         traverse(node.left)
      }

      if (node.right) {
         traverse(node.right)
      }

      const temp = node.left
      node.left = node.right
      node.right = temp
   }

   traverse(currentNode)

   return tree
}

// Add values to the binary tree
//       5
//    3      7
//  1   4   8   10
const tree = new BinaryTreeNode()
tree.insert(5)
tree.insert(3)
tree.insert(7)
tree.insert(1)
tree.insert(4)
tree.insert(8)
tree.insert(10)
console.log(tree)

// Traverse the tree using BFS
console.log('\nBFS')
bfs(tree)

// Traverse the tree using DFS - pre order
console.log('DFS - pre order')
dfsPreOrder(tree)

// Traverse the tree using DFS - in order
console.log('DFS - in order')
dfsInOrder(tree)

// Traverse the tree using DFS - post order
console.log('DFS - post order')
dfsPostOrder(tree)

// Invert Tree using DFS - post order
invertTree(tree)

console.log('\nBFS')
bfs(tree)

module.exports = {
   tree,
   BinaryTreeNode,
}
