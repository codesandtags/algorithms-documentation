/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
   let count = 0
   let seenJewels = new Set([...jewels])

   for (const stone of stones) {
      if (seenJewels.has(stone)) {
         count++
      }
   }

   return count
}
