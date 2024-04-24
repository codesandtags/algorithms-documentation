function tribonacci(n: number): number {
   const sequence = [0, 1, 1]

   if (n < sequence.length) {
      return sequence[n]
   }

   for (let th = sequence.length; th <= n; th++) {
      sequence[th] = sequence[th - 1] + sequence[th - 2] + sequence[th - 3]
   }

   return sequence[n]
}
