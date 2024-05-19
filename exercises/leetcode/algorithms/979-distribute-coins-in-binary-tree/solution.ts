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

function distributeCoins(root: TreeNode | null): number {
   let numMoves = 0

   function dfs(node: TreeNode) {
      if (!node) return 0
      const left = dfs(node.left)
      const right = dfs(node.right)
      numMoves += Math.abs(left) + Math.abs(right)
      return node.val - 1 + left + right
   }
   dfs(root)

   return numMoves
}
