function findNumbers(nums: number[]): number {
   let totalEvenNumbers = 0

   for (let number of nums) {
      if (String(number).length % 2 === 0) {
         totalEvenNumbers++
      }
   }

   return totalEvenNumbers
}
