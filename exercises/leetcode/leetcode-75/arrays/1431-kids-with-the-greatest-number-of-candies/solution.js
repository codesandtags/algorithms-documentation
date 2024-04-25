/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function (candies, extraCandies) {
   let maxCandies = 0

   for (totalCandies of candies) {
      maxCandies = Math.max(totalCandies, maxCandies)
   }

   const result = []

   for (totalCandies of candies) {
      result.push(totalCandies + extraCandies >= maxCandies)
   }

   return result
}
