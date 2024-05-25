function connectSticks(sticks: number[]): number {
   const minHeap = sticks.sort((a, b) => a - b)
   let cost = 0

   // Continue until there's only one stick left
   while (minHeap.length > 1) {
      const first = minHeap.shift() // Get the smallest stick
      const second = minHeap.shift() // Get the second smallest stick

      // Combine the two sticks
      const combined = first + second
      cost += combined

      addToSortedArray(minHeap, combined)
   }

   return cost
}

function addToSortedArray(array: number[], item: number) {
   let i = 0
   while (i < array.length && array[i] < item) {
      i++
   }
   array.splice(i, 0, item)
}
