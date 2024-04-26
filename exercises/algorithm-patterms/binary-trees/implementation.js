class Node {
   constructor(value) {
      this.data = value
      this.left = null
      this.right = null
   }
}

class BST {
   constructor() {
      this.root = null
   }

   findMin(node) {
      if (node.left === null) {
         return node
      }
      return this.findMin(node.left)
   }

   deleteNode(root, value) {
      if (root === null) {
         return root
      }

      if (value < root.data) {
         root.left = this.deleteNode(root.left, value)
      } else if (value > root.data) {
         root.right = this.deleteNode(root.right, value)
      } else {
         if (root.left === null) {
            return root.right
         } else if (root.right === null) {
            return root.left
         }

         const temp = this.findMin(root.right)
         root.data = temp.data
         root.right = this.deleteNode(root.right, temp.data)
      }

      return root
   }

   deleteMethod(value) {
      this.root = this.deleteNode(this.root, value)
   }

   insert(value) {
      const newNode = new Node(value)

      if (this.root === null) {
         this.root = newNode
      } else {
         let current = this.root
         let parent = null

         while (current !== null) {
            parent = current
            if (value < current.data) {
               current = current.left
            } else {
               current = current.right
            }
         }

         if (value < parent.data) {
            parent.left = newNode
         } else {
            parent.right = newNode
         }
      }
   }

   search(value) {
      let current = this.root
      while (current !== null) {
         if (current.data === value) {
            return true
         } else if (value < current.data) {
            current = current.left
         } else {
            current = current.right
         }
      }
      return false
   }

   inOrderHelper(node) {
      if (node !== null) {
         this.inOrderHelper(node.left)
         process.stdout.write(node.data + ' ')
         this.inOrderHelper(node.right)
      }
   }

   inOrder() {
      this.inOrderHelper(this.root)
      console.log(' ')
   }

   preOrderHelper(node) {
      if (node !== null) {
         process.stdout.write(node.data + ' ')
         this.preOrderHelper(node.left)
         this.preOrderHelper(node.right)
      }
   }

   preOrder() {
      this.preOrderHelper(this.root)
      console.log(' ')
   }

   postOrderHelper(node) {
      if (node !== null) {
         this.postOrderHelper(node.left)
         this.postOrderHelper(node.right)
         process.stdout.write(node.data + ' ')
      }
   }

   postOrder() {
      this.postOrderHelper(this.root)
      console.log(' ')
   }
}

// Main function
const obj = new BST()
obj.insert(5)
obj.insert(3)
obj.insert(7)
obj.insert(2)
obj.insert(4)
obj.insert(6)
obj.insert(8)

obj.inOrder()
obj.preOrder()
obj.postOrder()

obj.deleteMethod(2)

obj.inOrder()
