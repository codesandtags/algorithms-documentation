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

function removeLeafNodes(
   root: TreeNode | null,
   target: number
): TreeNode | null {
   if (root === null) return null

   // 1. Visit left children
   root.left = removeLeafNodes(root.left, target)
   // 2. Visit right children
   root.right = removeLeafNodes(root.right, target)
   // 3. Check current node and leaf
   if (root.left === null && root.right === null && root.val === target) {
      return null
   }

   return root
}
