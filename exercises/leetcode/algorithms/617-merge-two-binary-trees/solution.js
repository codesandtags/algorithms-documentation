/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {TreeNode}
 */
var mergeTrees = function (root1, root2) {
   // If one of the nodes is null, return the other node
   if (root1 === null) return root2
   if (root2 === null) return root1

   // Create a new node with the sum of values of t1 and t2
   let newNode = new TreeNode(root1.val + root2.val)

   // Recursive call for left and right children
   newNode.left = mergeTrees(root1.left, root2.left)
   newNode.right = mergeTrees(root1.right, root2.right)

   return newNode
}
