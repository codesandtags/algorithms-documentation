function beautifulArray(N: number): number[] {
   // Base case: if N is 1, return an array with a single element [1]
   if (N === 1) return [1]

   // Recursively construct the beautiful array for odd and even parts
   let odd = beautifulArray(Math.ceil(N / 2))
   let even = beautifulArray(Math.floor(N / 2))

   // Initialize the result array of size N
   let result = new Array(N)

   // Transform and populate the odd part in the result
   for (let i = 0; i < odd.length; i++) {
      result[i] = 2 * odd[i] - 1 // Each odd element is 2*value - 1
   }

   // Transform and populate the even part in the result
   for (let i = 0; i < even.length; i++) {
      result[odd.length + i] = 2 * even[i] // Each even element is 2*value
   }

   return result
}
