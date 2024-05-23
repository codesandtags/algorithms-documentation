function largestUniqueNumber(nums: number[]): number {
   let freq = new Map<number, number>()

   // Populate the hashmap with number frequencies
   for (const num of nums) {
      freq.set(num, (freq.get(num) || 0) + 1)
   }

   let maxUnique = -1
   // Traverse the hashmap to find the largest unique number
   freq.forEach((value, key) => {
      if (value === 1) {
         maxUnique = Math.max(maxUnique, key)
      }
   })

   return maxUnique
}
