/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function (arr) {
   // Count occurrences of each number
   const countMap = {}
   for (let num of arr) {
      countMap[num] = (countMap[num] || 0) + 1
   }

   // Check if the occurrences are unique
   const uniqueCounts = new Set()
   for (let count in countMap) {
      if (uniqueCounts.has(countMap[count])) {
         return false
      }
      uniqueCounts.add(countMap[count])
   }
   return true
}
