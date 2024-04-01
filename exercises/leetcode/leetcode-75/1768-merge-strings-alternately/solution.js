// https://leetcode.com/problems/merge-strings-alternately/

/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function (word1, word2) {
   let mergedWords = ''
   let length = Math.max(word1.length, word2.length)

   for (let p = 0; p < length; p++) {
      if (p < word1.length) mergedWords += word1[p]
      if (p < word2.length) mergedWords += word2[p]
   }

   return mergedWords
}
