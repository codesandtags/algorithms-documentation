function findDifference(nums1: number[], nums2: number[]): number[][] {
   const [seemA, seemB] = [new Set<number>(nums1), new Set<number>(nums2)]
   const result = Array<number>(2)
      .fill(0)
      .map((_) => [])

   for (let num of seemA) {
      if (!seemB.has(num)) {
         result[0].push(num)
      }
   }

   for (let num of seemB) {
      if (!seemA.has(num)) {
         result[1].push(num)
      }
   }

   return result
}
