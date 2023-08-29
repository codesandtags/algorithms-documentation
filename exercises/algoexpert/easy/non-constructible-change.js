function nonConstructibleChange(coins) {
   coins.sort((a, b) => a - b) // ascendent
   let minimumChange = 0

   for (let coin of coins) {
      if (coin > minimumChange + 1) {
         break
      }
      minimumChange += coin
   }

   return minimumChange + 1
}

// Do not edit the line below.
exports.nonConstructibleChange = nonConstructibleChange
