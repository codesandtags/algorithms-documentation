// https://leetcode.com/problems/search-in-a-binary-search-tree
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

/**
 * Time: O(H) = Tree height = O(logN) average
 * Space: O(H) = Tree height = O(logN) average
 */
function searchBST(root: TreeNode | null, val: number): TreeNode | null {
   if (root === null || root.val === val) return root

   if (val < root.val) {
      return searchBST(root.left, val)
   }

   return searchBST(root.right, val)
}
