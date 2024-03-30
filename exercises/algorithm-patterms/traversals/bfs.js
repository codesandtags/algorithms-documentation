/*
BFS is an algorithm for traversing or searching tree or graph data
structures. It starts at the tree root and explores all of the
neighbor nodes at the present depth prior to moving on to the
nodes at the next depth level.

Trade-offs:

Pros:
 - Perfect for finding the shortest path on unweighted graphs.
Cons:
- Can consume a lot of memory if the breadth of the tree/graph is large.
 */

function bfs(root) {
   let result = []
   let queue = [root]
   while (queue.length > 0) {
      let currentNode = queue.shift()
      result.push(currentNode.value)
      if (currentNode.left) queue.push(currentNode.left)
      if (currentNode.right) queue.push(currentNode.right)
   }
   return result
}

// Define a simple Node class for our binary tree
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
root.left = new Node(2)
root.right = new Node(3)
root.left.left = new Node(4)
root.left.right = new Node(5)

// Perform BFS traversal
const result = bfs(root)
console.log(result) // Expected output: [1, 2, 3, 4, 5]
