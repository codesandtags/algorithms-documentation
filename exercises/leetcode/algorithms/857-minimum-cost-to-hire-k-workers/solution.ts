class Worker {
   quality: number
   wage: number
   ratio: number

   constructor(quality: number, wage: number) {
      this.quality = quality
      this.wage = wage
      this.ratio = wage / quality
   }
}

function mincostToHireWorkers(
   quality: number[],
   wage: number[],
   k: number
): number {
   const n: number = quality.length
   const workers: Worker[] = []

   for (let i = 0; i < n; i++) {
      workers.push(new Worker(quality[i], wage[i]))
   }
   workers.sort((a, b) => a.ratio - b.ratio)

   let ans: number = Number.MAX_SAFE_INTEGER
   let sumq: number = 0
   const pool: number[] = []

   for (const worker of workers) {
      pool.push(worker.quality)
      sumq += worker.quality

      if (pool.length > k) {
         pool.sort((a, b) => b - a)
         sumq -= pool.shift()!
      }

      if (pool.length === k) {
         ans = Math.min(ans, sumq * worker.ratio)
      }
   }

   return ans
}
