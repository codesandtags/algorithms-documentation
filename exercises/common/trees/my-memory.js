class TreeNode {
   constructor(value) {
      this.value = value
      this.left = null
      this.right = null
   }
}

class BinaryTree {
   constructor() {
      this.root = null
      this.left = null
      this.right = null
   }

   insert(value) {
      // Step 1: Check does not have any value, set the root with a value
      if (this.root === null) {
         // Step 2: If not, set root to new node
         this.root = new TreeNode(value)
      } else {
         // Step 4: iterate through the tree and find the correct position for the new node
         let currentNode = this.root

         while (true) {
            if (value <= currentNode.value) {
               if (!currentNode.left) {
                  currentNode.left = new TreeNode(value)
                  return this
               }

               currentNode = currentNode.left
            } else {
               if (!currentNode.right) {
                  currentNode.right = new TreeNode(value)

                  return this
               }

               currentNode = currentNode.right
            }
         }
         // Step 5: If value is less than current node, go left
         // Step 6: If value is greater than current node, go right
      }
   }

   bfs() {
      // Step 1: Check if the root is null, if so then return nothing
      let currentNode = this.root

      if (currentNode === null) {
         return
      }

      // Step 2: Create a queue to start evaluating each node and put the root
      const queue = [currentNode]

      // Step 3: While there are values in queue iterate
      while (queue.length > 0) {
         currentNode = queue.shift()

         // Step 4: I show the value
         console.log(currentNode.value)

         // Step 5: If I have any nodes, I enqueue the values
         if (currentNode.left) {
            queue.push(currentNode.left)
         }

         if (currentNode.right) {
            queue.push(currentNode.right)
         }
      }
   }

   dfs(node = this.root) {
      // Step 1: Check if root is null, if so return nothing
      if (node === null) {
         return null
      }

      // In Order implementation
      this.dfs(node.left)
      console.log(node.value)
      this.dfs(node.right)
      // Step 3: Call recursively the left side
      // Step 2: Show the current value
      // Step 4: Call recursively the right side
   }
}

const myTree = new BinaryTree()
myTree.insert(3)
myTree.insert(5)
myTree.insert(2)
myTree.insert(1)
myTree.insert(8)

console.log(myTree)

// Traverse using BFS
// Expected result
// 3, 2, 5, 1, 8
console.log('\n Traverse using BFS')
myTree.bfs()

// Traverse using DFS
// Expected result:
// 1, 2, 3, 5, 8
console.log('\n Traverse using DFS')
myTree.dfs()
