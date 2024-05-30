/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var findSmallestSetOfVertices = function (n, edges) {
   const nodesWithIncoming = new Set()

   // Identify nodes with incoming edges
   for (let edge of edges) {
      nodesWithIncoming.add(edge[1])
   }

   const result = []
   // Find nodes without incoming edges
   for (let i = 0; i < n; i++) {
      if (!nodesWithIncoming.has(i)) {
         result.push(i)
      }
   }

   return result
}
