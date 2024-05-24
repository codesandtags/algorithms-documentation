function pickGifts(gifts: number[], k: number): number {
   const maxHeap = gifts.map((gift) => -gift).sort((a, b) => a - b)

   for (let i = 0; i < k; i++) {
      // Remove the first element (the highest negative value) from the array,
      // making it positive again to get the original gift count.
      let current = -maxHeap.shift()

      // Push the remaining number of gifts (after taking some) back into the array
      // as a negative value.
      maxHeap.push(-Math.floor(Math.sqrt(current)))

      // Re-sort the array to maintain the heap property.
      maxHeap.sort((a, b) => a - b)
   }

   // Calculate the sum of the remaining gifts. The use of `-` in front of the
   // reduce function inverts the negative values while summing them up.
   return -maxHeap.reduce((a, b) => a + b, 0)
}
