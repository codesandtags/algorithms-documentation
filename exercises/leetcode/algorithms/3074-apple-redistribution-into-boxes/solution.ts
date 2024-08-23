function minimumBoxes(apple: number[], capacity: number[]): number {
   // Sort the array from largest to smallest.
   capacity.sort((a, b) => b - a)

   let totalNumOfApples = apple.reduce((total, current) => total + current, 0)

   for (let i = 0; i < capacity.length; i++) {
      totalNumOfApples -= capacity[i]
      if (totalNumOfApples <= 0) {
         return i + 1
      }
   }

   return capacity.length
}
