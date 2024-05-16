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

enum Properties {
   FALSE = 0,
   TRUE = 1,
   OR = 2,
}

function evaluateTree(root: TreeNode | null): boolean {
   if (root.val === Properties.TRUE) return true
   if (root.val === Properties.FALSE) return false

   if (root.val === Properties.OR) {
      return evaluateTree(root.left) || evaluateTree(root.right)
   }

   return evaluateTree(root.left) && evaluateTree(root.right)
}
