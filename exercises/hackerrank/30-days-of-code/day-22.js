// Start of function Node
function Node(data) {
  this.data = data;
  this.left = null;
  this.right = null;
} // End of function Node

// Start of function BinarySearchTree
function BinarySearchTree() {
  this.insert = function (root, data) {
    if (root === null) {
      this.root = new Node(data);

      return this.root;
    }

    if (data <= root.data) {
      if (root.left) {
        this.insert(root.left, data);
      } else {
        root.left = new Node(data);
      }
    } else {
      if (root.right) {
        this.insert(root.right, data);
      } else {
        root.right = new Node(data);
      }
    }

    return this.root;
  };

  // Start of function getHeight
  this.getHeight = function (root) {
    if (root === null) {
      return -1;
    }

    let leftHeight = this.getHeight(root.left);
    let rightHeight = this.getHeight(root.right);

    return (leftHeight > rightHeight ? leftHeight : rightHeight) + 1;
  }; // End of function getHeight

  this.traversePreOrder = function (node, list) {
    list.push(node.data);
    if (node.left) {
      this.traversePreOrder(node.left, list);
    }
    if (node.right) {
      this.traversePreOrder(node.right, list);
    }
    return list;
  };
}

let values = [3, 5, 2, 1, 4, 6, 7];
let bst = new BinarySearchTree();
let root = null;

for (let number of values) {
  root = bst.insert(root, number);
}

// console.log(bst.traversePreOrder(root, []));
console.log(bst.getHeight(root));
