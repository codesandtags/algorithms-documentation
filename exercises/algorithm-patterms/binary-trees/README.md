# Binary Trees

## Fundamental Concepts

-  Root Node: The node at the top of the tree. It is the node from where the whole tree originates. For any tree traversal operation, this node serves as the starting point.
-  Nodes: All the elements in the tree, including the root, are nodes, and each node has a unique value and may have child nodes connected to it.
-  Parent Node: A node in a tree that has one or more child nodes connected to it.
-  Child Node: Nodes that are directly connected to a parent node.
-  Sibling Nodes: Nodes that share the same parent node.
-  Ancestor Nodes: All the nodes in the path from a specific node to the root node.
-  Descendant Nodes: All the nodes reachable from a specific node down to the leaves.
-  Leaf Node: Nodes in the tree that do not have any children.
-  Subtree: A smaller tree within the main tree, consisting of a node and its descendants.

## Types of Trees

-  Binary Tree: A tree in which each node has at most two children, referred to as the left child and the right child.
-  Binary Search Tree (BST): A binary tree in which the left child of a node contains only nodes with values less than the node's value, and the right child contains only nodes with values greater than the node's value.
-  Balanced Binary Tree: A binary tree in which the height of the left and right subtrees of any node differ by at most one.
-  Full Binary Tree: A binary tree in which each node has either zero or two children.

## ADT (Abstract Data Type) Operations

-  Insertion: Adding a new node to the tree.
-  Deletion: Removing a node from the tree.
-  Search: Finding a specific node in the tree.
-  Traversal: Visiting all the nodes in the tree in a specific order.
   -  In Order: Left, Root, Right
   -  Pre Order: Root, Left, Right
   -  Post Order: Left, Right, Root
-  Height: The number of edges on the longest path from the root node to a leaf node.
-  Depth: The number of edges on the path from the root node to a specific node.
-  Level: The level of a node is the number of edges on the path from the root node to that node.
-  Diameter: The number of nodes on the longest path between two leaf nodes in the tree.
-  Lowest Common Ancestor (LCA): The lowest node in the tree that has both nodes as descendants.

## What to do when BTS are not balanced?

-  AVL Tree: A self-balancing binary search tree in which the heights of the two child subtrees of any node differ by at most one.
-  Red-Black Tree: A self-balancing binary search tree in which each node has an extra bit for denoting the color of the node.
-  B-Tree: A self-balancing tree data structure that maintains sorted data and allows searches, sequential access, insertions, and deletions in logarithmic time.
-  Splay Tree: A self-adjusting binary search tree in which recently accessed elements are quick to access again.
