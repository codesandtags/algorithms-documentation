/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
function flatten(value) {
   // Step 1: Base case
   if (value.length === 1 && !Array.isArray(value[0])) return value

   // Apply recursion
   const elements = []
   for (const element of value) {
      // When current element is an Array
      // we need to recursively extract the inner elements
      if (Array.isArray(element)) {
         elements.push(...flatten(element))
      } else {
         // Add the current elements to the final array
         elements.push(element)
      }
   }

   return elements
}

module.exports = flatten
