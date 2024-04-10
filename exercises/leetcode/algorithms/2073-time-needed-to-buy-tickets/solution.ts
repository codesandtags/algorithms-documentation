function timeRequiredToBuy(tickets: number[], k: number): number {
   let n = tickets.length
   let time = 0

   for (let i = 0; i < n; i++) {
      if (i <= k) {
         time += Math.min(tickets[k], tickets[i])
      } else {
         time += Math.min(tickets[k] - 1, tickets[i])
      }
   }

   return time
}
