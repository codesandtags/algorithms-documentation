/**
 * @param {number[]} nums
 * @return {number}
 */
var largestUniqueNumber = function (nums) {
   let freq = {}

   // Populate the hashmap with number frequencies
   for (let num of nums) {
      freq[num] = (freq[num] || 0) + 1
   }

   let maxUnique = -1
   // Traverse the hashmap to find the largest unique number
   for (let key in freq) {
      if (freq[key] === 1) {
         maxUnique = Math.max(maxUnique, parseInt(key))
      }
   }

   return maxUnique
}
