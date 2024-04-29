/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 */
var sumOfDistancesInTree = function (n, edges) {
   let graph = Array.from(
      {
         length: n,
      },
      () => []
   )

   for (let [s, t] of edges) {
      graph[s].push(t)
      graph[t].push(s)
   }

   let count = new Array(n).fill(1)
   let ans = new Array(n).fill(0)

   function dfs1(node, parent) {
      for (let child of graph[node]) {
         if (child !== parent) {
            dfs1(child, node)
            count[node] += count[child]
            ans[node] += ans[child] + count[child]
         }
      }
   }

   function dfs2(node, parent) {
      for (let child of graph[node]) {
         if (child !== parent) {
            ans[child] = n - count[child] + ans[node] - count[child]
            dfs2(child, node)
         }
      }
   }

   dfs1(0, -1)
   dfs2(0, -1)

   return ans
}
