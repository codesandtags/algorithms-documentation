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
 * @return {boolean}
 */
const AND = 3
const OR = 2
const TRUE = 1
const FALSE = 0

var evaluateTree = function (root) {
   if (root.val === TRUE) return true
   if (root.val === FALSE) return false

   if (root.val === OR) {
      return evaluateTree(root.left) || evaluateTree(root.right)
   }

   return evaluateTree(root.left) && evaluateTree(root.right)
}
