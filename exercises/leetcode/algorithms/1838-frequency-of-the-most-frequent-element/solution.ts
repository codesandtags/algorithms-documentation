function maxFrequency(nums: number[], k: number): number {
   const compareFn: CompareFn<number> = (a, b) => a - b
   heapify(nums, compareFn)

   let max = 0
   let prev = 0
   let i = nums.length
   for (let j = i; j > 0; max = Math.max(max, i - j)) {
      k -= (i - j) * (nums[0] - prev)
      prev = nums[0]
      while (k < 0) {
         k += prev - nums[--i]
      }
      nums[0] = nums[--j]
      sinkDown(nums, compareFn, 0, j)
      nums[j] = prev
   }

   return max
}

type CompareFn<T> = (a: T, b: T) => number

function heapify<T>(array: T[], compareFn: CompareFn<T>): void {
   for (let i = (array.length - 1) >> 1; i >= 0; --i) {
      sinkDown(array, compareFn, i)
   }
}

function sinkDown<T>(
   heap: T[],
   compareFn: CompareFn<T>,
   i: number,
   N = heap.length
): void {
   const value = heap[i]

   const M = --N / 2
   while (i < M) {
      let child = (i << 1) + 1
      if (child < N && compareFn(heap[child], heap[child + 1]) >= 0) {
         ++child
      }
      if (compareFn(value, heap[child]) <= 0) {
         break
      }
      heap[i] = heap[child]
      i = child
   }

   heap[i] = value
}
