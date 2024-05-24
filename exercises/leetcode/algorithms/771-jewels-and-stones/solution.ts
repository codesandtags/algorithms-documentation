function numJewelsInStones(jewels: string, stones: string): number {
   let count = 0
   let seenJewels = new Set(jewels)

   for (const stone of stones) {
      if (seenJewels.has(stone)) {
         count++
      }
   }

   return count
}
