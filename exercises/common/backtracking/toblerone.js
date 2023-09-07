function combinationsOfToblerone(n, bites) {
   // backtracking
   console.log({
      message: 'Starting',
      n,
      bites,
   })

   const response = []

   function backtrack(start, remaining, comb) {
      console.log({
         message: 'evaluating',
         start,
         remaining,
         comb,
      })
      if (remaining === 0) {
         console.log({
            message: '🔥 Solution',
            solution: [...comb],
         })
         response.push([...comb])

         return
      }

      for (let i = start; i < bites.length; i++) {
         const biteSize = bites[i]
         console.log({
            message: 'Giving a bite',
            biteSize,
         })

         if (remaining - biteSize >= 0) {
            comb.push(biteSize)

            backtrack(i, remaining - biteSize, comb)

            comb.pop()
         }
      }
   }

   backtrack(0, n, [])

   return response
}

console.log({
   solution: combinationsOfToblerone(4, [1, 2, 3]),
})
