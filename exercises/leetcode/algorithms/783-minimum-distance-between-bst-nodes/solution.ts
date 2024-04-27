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

function minDiffInBST(root: TreeNode | null): number {
   let values: number[] = []

   function inOrder(root: TreeNode | null): void {
      if (!root) return

      inOrder(root.left)
      values.push(root.val)
      inOrder(root.right)
   }
   let minDiff = Number.MAX_SAFE_INTEGER

   inOrder(root)

   for (let i = 1; i < values.length; i++) {
      minDiff = Math.min(minDiff, Math.abs(values[i] - values[i - 1]))
   }

   return minDiff
}
