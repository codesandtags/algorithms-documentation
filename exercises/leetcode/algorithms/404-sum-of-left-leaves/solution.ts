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

class TreeNode {
   val: number
   left: TreeNode | null
   right: TreeNode | null
   constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
      this.val = val === undefined ? 0 : val
      this.left = left === undefined ? null : left
      this.right = right === undefined ? null : right
   }
}

function sumOfLeftLeaves(root: TreeNode | null): number {
   let sum = 0

   // DFS
   function traverse(node) {
      if (node == null) return 0

      if (node.left && node.left.left === null && node.left.right === null) {
         sum += node.left.val
      }

      traverse(node.left)
      traverse(node.right)
   }

   traverse(root)

   return sum
}
