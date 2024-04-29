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

function getLonelyNodes(root: TreeNode | null): number[] {
   let lonelyNodes = []

   function traverse(node, isLonely) {
      if (!node) return

      if (isLonely) {
         lonelyNodes.push(node.val)
      }

      traverse(node.left, node.right === null)
      traverse(node.right, node.left === null)
   }

   traverse(root, false)

   return lonelyNodes
}
