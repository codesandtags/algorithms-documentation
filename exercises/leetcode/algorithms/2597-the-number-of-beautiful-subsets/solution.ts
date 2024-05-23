function beautifulSubsets(nums: number[], k: number): number {
   let totCount = 1
   const freqMap: Map<number, Map<number, number>> = new Map()

   // Calculate frequencies based on remainder
   for (let num of nums) {
      let remainder = num % k
      if (!freqMap.has(remainder)) {
         freqMap.set(remainder, new Map())
      }
      const remainderMap = freqMap.get(remainder)!
      remainderMap.set(num, (remainderMap.get(num) || 0) + 1)
   }

   // Iterate through each remainder group
   for (let fr of freqMap.values()) {
      const subsets = Array.from(fr.entries()).sort((a, b) => a[0] - b[0])
      const n = subsets.length
      let currCount = 1
      let next1 = 1
      let next2 = 0

      // Calculate counts for each subset starting from the second last
      for (let i = n - 1; i >= 0; i--) {
         let skip = next1

         let take = (1 << subsets[i][1]) - 1

         if (i + 1 < n && subsets[i + 1][0] - subsets[i][0] === k) {
            take *= next2
         } else {
            take *= next1
         }

         currCount = skip + take
         next2 = next1
         next1 = currCount
      }

      totCount *= currCount
   }

   return totCount - 1
}
