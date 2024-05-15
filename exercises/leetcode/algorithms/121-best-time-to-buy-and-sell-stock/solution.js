/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
   let minPrice = Number.MAX_SAFE_INTEGER
   let maxProfit = 0

   for (const price of prices) {
      minPrice = Math.min(price, minPrice)
      maxProfit = Math.max(maxProfit, price - minPrice)
   }

   return maxProfit
}
