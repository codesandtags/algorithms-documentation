function divideArray(nums: number[]): boolean {
   const set = new Set<number>()
   for (const num of nums) {
      if (set.has(num)) set.delete(num)
      else set.add(num)
   }
   return set.size === 0
}
