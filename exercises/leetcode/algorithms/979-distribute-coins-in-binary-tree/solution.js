/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var distributeCoins = function (root) {
   let numMoves = 0

   function dfs(node) {
      if (!node) return 0
      const left = dfs(node.left)
      const right = dfs(node.right)
      numMoves += Math.abs(left) + Math.abs(right)
      return node.val - 1 + left + right
   }
   dfs(root)

   return numMoves
}
