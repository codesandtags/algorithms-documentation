function minOperations(nums: number[], k: number): number {
   nums.forEach((num) => {
      k ^= num
   })
   return countOnes(k)
}
function countOnes(n: number) {
   let result = 0
   while (n > 0) {
      result += n & 1
      n = n >> 1
   }
   return result
}
