/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function mergeTrees(
   root1: TreeNode | null,
   root2: TreeNode | null
): TreeNode | null {
   // If one of the nodes is null, return the other node
   if (root1 === null) return root2
   if (root2 === null) return root1

   // Create a new node with the sum of values of t1 and t2
   let newNode = new TreeNode(root1.val + root2.val)

   // Recursive call for left and right children
   newNode.left = mergeTrees(root1.left, root2.left)
   newNode.right = mergeTrees(root1.right, root2.right)

   return newNode
}
