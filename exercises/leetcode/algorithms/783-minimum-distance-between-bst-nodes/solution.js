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
var minDiffInBST = function (root) {
   let values = []
   let minDiff = Number.MAX_SAFE_INTEGER

   function inOrder(root) {
      if (!root) return

      inOrder(root.left)
      values.push(root.val)
      inOrder(root.right)
   }

   inOrder(root)

   for (let i = 1; i < values.length; i++) {
      minDiff = Math.min(minDiff, Math.abs(values[i] - values[i - 1]))
   }

   return minDiff
}
