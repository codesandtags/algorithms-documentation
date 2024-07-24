function sortJumbled(mapping: number[], nums: number[]): number[] {
   const map = new Map<number, number>()
   nums.forEach((item) => {
      let x = ''
      let t = item
      while (t) {
         x = mapping[t % 10] + x
         t = Math.trunc(t / 10)
      }
      map.set(item, x ? +x : mapping[item])
   })
   return nums.sort((a, b) => map.get(a) - map.get(b))
}
