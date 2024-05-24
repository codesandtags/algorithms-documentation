/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
   let count = 0
   let seen = new Set(arr)

   for (const num of arr) {
      if (seen.has(num + 1)) {
         count++
      }
   }

   return count
}
