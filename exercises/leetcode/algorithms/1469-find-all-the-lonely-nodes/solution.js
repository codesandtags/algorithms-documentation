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
 * @return {number[]}
 */
var getLonelyNodes = function (root) {
   let lonelyNodes = []
   let queue = [
      {
         node: root,
         isLonely: false,
      },
   ]

   while (queue.length > 0) {
      const item = queue.shift()
      if (item.node === null) {
         continue
      }

      const { node, isLonely } = item

      if (isLonely) {
         lonelyNodes.push(node.val)
      }

      if (node.right !== null) {
         queue.push({
            node: node.right,
            isLonely: node.left === null,
         })
      }

      if (node.left !== null) {
         queue.push({
            node: node.left,
            isLonely: node.right === null,
         })
      }
   }

   return lonelyNodes
}
