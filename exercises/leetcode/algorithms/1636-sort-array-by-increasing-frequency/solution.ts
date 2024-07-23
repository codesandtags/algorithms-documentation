function frequencySort(nums: number[]): number[] {
   const freq = new Map<number, number>()

   for (const num of nums) {
      freq.set(num, (freq.get(num) || 0) + 1)
   }

   return nums.sort((a, b) => freq.get(a) - freq.get(b) || b - a)
}
