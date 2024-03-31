/**
 * Function that traverses the DOM and returns an array of all the elements in the document.
 */
function traverseDOM() {
   const elements = []
   const rootNode = document.body

   function traverse(node) {
      // Base case
      if (!node || node.nodeType !== Node.ELEMENT_NODE) {
         return
      }

      // To do some logic here and push elements to the array
      elements.push(node)

      for (const child of node.children) {
         traverse(child)
      }
   }

   traverse(rootNode)

   return elements
}
