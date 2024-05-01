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

function kthSmallest(root: TreeNode | null, k: number): number {
   let count = 0
   let kth = 0

   function inOrderTraverse(node) {
      if (!node) return null

      inOrderTraverse(node.left)
      count++
      if (count === k) {
         kth = node.val
         return
      }
      inOrderTraverse(node.right)
   }

   inOrderTraverse(root)
   return kth
}
