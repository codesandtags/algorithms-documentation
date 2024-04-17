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
const BASE = 97 // a
function getLetterFromNumber(n: number): string {
   return String.fromCharCode(n + BASE)
}

function smallestFromLeaf(root: TreeNode | null): string {
   let smallestString = ''

   // DFS
   function traverse(node: TreeNode | null, currentPath = '') {
      if (!node) return
      currentPath = getLetterFromNumber(node.val) + currentPath

      if (node.left === null && node.right === null) {
         if (smallestString === '' || smallestString > currentPath) {
            smallestString = currentPath
         }
      }

      traverse(node.left, currentPath)
      traverse(node.right, currentPath)
   }

   traverse(root, smallestString)

   return smallestString
}
