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
 * @return {string}
 */
var smallestFromLeaf = function (root) {
   let actualLower = null

   function preOrder(node, actualPath = '') {
      if (!node) {
         return
      }

      actualPath = String.fromCharCode(97 + node.val) + actualPath

      if (!node.left && !node.right) {
         if (!actualLower || actualPath <= actualLower) {
            actualLower = actualPath
         }
         return
      }

      preOrder(node.left, actualPath)
      preOrder(node.right, actualPath)
   }

   preOrder(root)
   return actualLower
}
