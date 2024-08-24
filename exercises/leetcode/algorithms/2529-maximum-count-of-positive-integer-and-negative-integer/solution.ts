function maximumCount(nums: number[]): number {
   let maxNegatives = 0
   let maxPositives = 0

   for (let num of nums) {
      if (num === 0) continue

      if (num > 0) {
         maxPositives++
      } else {
         maxNegatives++
      }
   }

   return Math.max(maxPositives, maxNegatives)
}
