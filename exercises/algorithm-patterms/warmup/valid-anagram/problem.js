/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(?)
 * space complexity: O(?)
 */
class Solution {
   isAnagram(s, t) {
      if (s.length !== t.length) {
         return false
      }

      // Calculate frequencies
      // If both words are the same length, then we could iterate any
      const frequencyMap = {}

      for (let index = 0; index < s.length; index++) {
         frequencyMap[s[index]] = (frequencyMap[s[index]] || 0) + 1
         frequencyMap[t[index]] = (frequencyMap[t[index]] || 0) - 1
      }

      for (let char in frequencyMap) {
         if (frequencyMap[char] !== 0) {
            return false
         }
      }

      return true
   }
}

module.exports = Solution
