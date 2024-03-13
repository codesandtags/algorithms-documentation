/*
 * @param {array} words
 * @param {string} word1
 * @param {string} word2
 * @return {number} distance
 *
 * time complexity: O(?)
 * space complexity: O(?)
 */
class Solution {
   shortestDistance(words, word1, word2) {
      let distance = Number.MAX_SAFE_INTEGER
      let positionWord1 = -1
      let positionWord2 = -1
      const length = words.length

      for (let index = 0; index < length; index++) {
         // Checks for positions
         positionWord1 = words[index] === word1 ? index : positionWord1
         positionWord2 = words[index] === word2 ? index : positionWord2

         // Calculates distance
         if (positionWord1 !== -1 && positionWord2 !== -1) {
            const currentDistance = Math.abs(positionWord1 - positionWord2)
            distance = Math.min(currentDistance, distance)
         }
      }

      return distance
   }
}

module.exports = Solution
