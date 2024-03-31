/***
 * Traverse DOM and return elements that matches a
 * a given property and value
 *
 * @param {string} property
 * @param {string} value
 * @returns {Array<Element>}
 */
export default function getElementsByStyle(property, value) {
   const elements = []
   const rootNode = document.body

   // Traverse dom
   function traverse(node) {
      // Base case
      if (!node || node.nodeType !== Node.ELEMENT_NODE) {
         return
      }

      // Compute styles for element
      const computedStyle = window.getComputedStyle(node)

      if (computedStyle.getPropertyValue(property) === value) {
         elements.push(node)
      }

      for (const child of node.children) {
         traverse(child)
      }
   }

   traverse(rootNode)

   return elements
}
