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

function sumNumbers(root: TreeNode | null): number {
   let sum = 0

   function traverse(node, currentPath = '') {
      if (node === null) return

      currentPath += node.val

      // Validation for sum
      if (!node.left && !node.right) {
         sum += Number(currentPath)
      }

      traverse(node.left, currentPath)
      traverse(node.right, currentPath)
   }

   traverse(root)

   return sum
}
