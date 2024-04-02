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
 * @return {TreeNode}
 */
var invertTree = function (root) {
   function traverseAndInvert(node) {
      if (node == null) return

      const tempNode = node.left
      node.left = node.right
      node.right = tempNode

      traverseAndInvert(node.left)
      traverseAndInvert(node.right)
   }

   traverseAndInvert(root)

   return root
}
