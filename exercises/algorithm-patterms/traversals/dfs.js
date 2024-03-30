/* DFS is an algorithm for traversing or searching tree or graph
data structures. The algorithm starts at the root node and explores
as far as possible along each branch before backtracking.

Trade-offs:

Pros:
- Less memory intensive than BFS in wide trees or graphs because it
follows one branch to its conclusion before backtracking.
Cons:
- May not find the shortest path first, unlike BFS.
 */
function dfs(node) {
   let result = []
   function traverse(node) {
      if (!node) return
      result.push(node.value)
      traverse(node.left)
      traverse(node.right)
   }
   traverse(node)
   return result
}

class Node {
   constructor(value, left = null, right = null) {
      this.value = value
      this.left = left
      this.right = right
   }
}

// Construct the binary tree
/*
        1
       / \
      2   3
     / \
    4   5
*/

const root = new Node(1)
root.left = new Node(2, new Node(4), new Node(5))
root.right = new Node(3)

// Perform DFS Pre-Order traversal
const result = dfs(root)
console.log(result) // Expected output: [1, 2, 4, 5, 3]

function dfsInOrder(node) {
   let result = []
   function traverse(node) {
      if (!node) return
      traverse(node.left)
      result.push(node.value)
      traverse(node.right)
   }
   traverse(node)
   return result
}

// Using the same tree structure as before
const inOrderResult = dfsInOrder(root)
console.log(inOrderResult) // Expected output: [4, 2, 5, 1, 3]

function dfsPostOrder(node) {
   let result = []
   function traverse(node) {
      if (!node) return
      traverse(node.left)
      traverse(node.right)
      result.push(node.value)
   }
   traverse(node)
   return result
}

// Using the same tree structure as before
const postOrderResult = dfsPostOrder(root)
console.log(postOrderResult) // Expected output: [4, 5, 2, 3, 1]
