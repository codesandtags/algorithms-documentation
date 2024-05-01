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
 * @param {number} target
 * @return {number}
 */
var closestValue = function (root, target) {
   let closest = root.val

   while (root) {
      const diffTarget = Math.abs(closest - target)
      const diffVal = Math.abs(root.val - target)

      if (
         diffVal < diffTarget ||
         (diffVal === diffTarget && root.val < closest)
      ) {
         closest = root.val
      }

      // Decide the direction to traverse.
      root = target < root.val ? root.left : root.right
   }

   return closest
}
