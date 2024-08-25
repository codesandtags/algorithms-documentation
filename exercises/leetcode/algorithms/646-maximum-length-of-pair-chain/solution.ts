function findLongestChain(pairs: number[][]): number {
   // Sort pairs based on their second element in ascending order
   pairs.sort((a, b) => a[1] - b[1])

   // Initialize variables
   let currentEnd = -Infinity // Current end of the chain
   let chainCount = 0 // Count of pairs in the chain

   // Iterate through the sorted pairs
   for (let pair of pairs) {
      // Check if the first element of the pair is greater than the current end
      if (pair[0] > currentEnd) {
         // Update the current end and increment the chain count
         currentEnd = pair[1]
         chainCount++
      }
   }

   return chainCount // Return the maximum chain length
}
