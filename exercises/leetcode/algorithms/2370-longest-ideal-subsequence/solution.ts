function longestIdealString(s: string, k: number): number {
   let n = s.length
   let dp = new Array(26).fill(0)
   let longest = 0

   for (let i = 0; i < n; i++) {
      let current = s.charCodeAt(i) - 'a'.charCodeAt(0)
      let best = 0

      for (let prev = 0; prev < dp.length; prev++) {
         if (Math.abs(prev - current) <= k) {
            best = Math.max(best, dp[prev])
         }
      }

      dp[current] = Math.max(dp[current], best + 1)
      longest = Math.max(longest, dp[current])
   }

   return longest
}
