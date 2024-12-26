function majorityElement(nums: number[]): number {
   let frequency: { [key: number]: number } = {}

   for (const n of nums) {
      frequency[n] = (frequency[n] || 0) + 1
   }

   for (let num in frequency) {
      if (frequency[num] > nums.length / 2) {
         return Number(num)
      }
   }

   return 0
}

function majorityElement(nums: number[]): number {
   nums.sort((a, b) => a - b)
   return nums[Math.floor(nums.length / 2)]
}

function majorityElement(nums: number[]): number {
   let count = 0
   let candidate: number | null = null

   for (let num of nums) {
      if (count == 0) {
         candidate = num
      }
      count += num == candidate ? 1 : -1
   }

   return candidate as number
}
