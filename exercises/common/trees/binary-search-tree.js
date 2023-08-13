class Node {
   constructor(value) {
      this.left = null
      this.right = null
      this.value = value
   }
}

class BinarySearchTree {
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

   lookup(value) {
      if (!this.root) {
         return false
      } else {
         let currentNode = this.root
         while (currentNode) {
            if (value < currentNode.value) {
               // console.log('Left');
               currentNode = currentNode.left
            } else if (value > currentNode.value) {
               // console.log('Right');
               currentNode = currentNode.right
            } else if (value === currentNode.value) {
               // console.log('Found');
               return true
            }
         }

         return false
      }
   }

   remove(value) {
      let currentNode = this.root
      let parentNode = null

      while (currentNode) {
         if (value < currentNode.value) {
            parentNode = currentNode
            currentNode = currentNode.left
         } else if (value > currentNode.value) {
            parentNode = currentNode
            currentNode = currentNode.right
         } else if (value === currentNode.value) {
            // There is no right child
            if (currentNode.right === null) {
               if (parentNode === null) {
                  this.root = currentNode.left
               } else {
                  // If parent > current value, make current left child a child of parent
                  if (currentNode.value < parentNode.value) {
                     parentNode.left = currentNode.left

                     // If parent < current value, make left child a right child of parent
                  } else if (currentNode.value > parentNode.value) {
                     parentNode.right = currentNode.left
                  }
               }

               // There is a right child which doesn't have a left child
            } else if (currentNode.right.left === null) {
               // If parent = null, root is now right child
               if (parentNode === null) {
                  this.root = currentNode.left
               }
               // If parent > current, make right child of the left the parent
               else {
                  currentNode.right.left = currentNode.left

                  if (currentNode.value < parentNode.value) {
                     parentNode.left = currentNode.right
                  } else if (currentNode.value > parentNode.value) {
                     parentNode.right = currentNode.right
                  }
               }
            } else {
               // Find the right child's left most child
               let leftmost = currentNode.right.left
               let leftmostParent = currentNode.right

               while (leftmost.left !== null) {
                  leftmostParent = leftmost
                  leftmost = leftmost.left
               }

               // Parent's left subtree is now leftmost's right subtree
               leftmostParent.left = leftmost.right
               leftmost.left = currentNode.left
               leftmost.right = currentNode.right

               if (parentNode === null) {
                  this.root = leftmost
               } else {
                  if (currentNode.value < parentNode.value) {
                     parentNode.left = leftmost
                  } else if (currentNode.value > parentNode.value) {
                     parentNode.right = leftmost
                  }
               }
            }
            return this
         }
      }
   }

   toJSON() {
      return JSON.parse(JSON.stringify(this.root))
   }

   breadthFirstSearch() {
      let currentNode = this.root
      let list = []
      let queue = []
      queue.push(currentNode)

      while (queue.length > 0) {
         currentNode = queue.shift()
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

   depthFirstSearchInOrder() {
      function traverseInOrder(node, list) {
         if (node.left) {
            traverseInOrder(node.left, list)
         }

         list.push(node.value)

         if (node.right) {
            traverseInOrder(node.right, list)
         }

         return list
      }

      return traverseInOrder(this.root, [])
   }

   depthFirstSearchPreOrder() {
      function traversePreOrder(node, list) {
         list.push(node.value)

         if (node.left) {
            traversePreOrder(node.left, list)
         }

         if (node.right) {
            traversePreOrder(node.right, list)
         }

         return list
      }

      return traversePreOrder(this.root, [])
   }

    depthFirstSearchPostOrder() {
        function traversePostOrder(node, list) {
            if (node.left) {
                traversePostOrder(node.left, list)
            }

            if (node.right) {
                traversePostOrder(node.right, list)
            }

            list.push(node.value)

            return list
        }

        return traversePostOrder(this.root, [])
    }
}

module.exports = {
   BinarySearchTree,
   Node,
}
