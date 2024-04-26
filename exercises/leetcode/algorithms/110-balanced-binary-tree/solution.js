var isBalanced = function (root) {
   function getHeight(node) {
      if (node === null) {
         return 0
      }
      let leftHeight = getHeight(node.left)
      let rightHeight = getHeight(node.right)

      if (
         leftHeight === -1 ||
         rightHeight === -1 ||
         Math.abs(leftHeight - rightHeight) > 1
      ) {
         return -1
      }
      return Math.max(leftHeight, rightHeight) + 1
   }
   return getHeight(root) !== -1
}
