class Worker {
   quality
   wage
   ratio

   constructor(quality, wage) {
      this.quality = quality
      this.wage = wage
      this.ratio = wage / quality
   }
}

/**
 * @param {number[]} quality
 * @param {number[]} wage
 * @param {number} k
 * @return {number}
 */
var mincostToHireWorkers = function (quality, wage, k) {
   const n = quality.length
   const workers = []

   for (let i = 0; i < n; i++) {
      workers.push(new Worker(quality[i], wage[i]))
   }
   workers.sort((a, b) => a.ratio - b.ratio)

   let ans = Number.MAX_SAFE_INTEGER
   let sumq = 0
   const pool = []

   for (const worker of workers) {
      pool.push(worker.quality)
      sumq += worker.quality

      if (pool.length > k) {
         pool.sort((a, b) => b - a)
         sumq -= pool.shift()
      }

      if (pool.length === k) {
         ans = Math.min(ans, sumq * worker.ratio)
      }
   }

   return ans
}
