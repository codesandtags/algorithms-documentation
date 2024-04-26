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

function getDepth(node: TreeNode | null): number {
   if (!node) return 0

   const leftDepth = getDepth(node.left)
   if (leftDepth === -1) return -1

   const rightDepth = getDepth(node.right)
   if (rightDepth === -1) return -1

   // Evaluate current state before going deeper
   if (Math.abs(leftDepth - rightDepth) > 1) return -1

   return 1 + Math.max(getDepth(node.left), getDepth(node.right))
}

function isBalanced(root: TreeNode | null): boolean {
   return getDepth(root) !== -1
}
