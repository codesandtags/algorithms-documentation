function specialArray(nums: number[]): number {
   const sorted = nums.sort((a, b) => a - b)
   for (let i = 1; i <= sorted.length; i++) {
      if (i === greaterThan(i, sorted)) return i
   }
   return -1
}

function greaterThan(num: number, sorted: number[]) {
   for (let i = 0; i < sorted.length; i++) {
      if (sorted[i] >= num) {
         return sorted.length - i
      }
   }
}
