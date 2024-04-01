// https://leetcode.com/problems/merge-strings-alternately/
function mergeAlternately(word1: string, word2: string): string {
   let mergedWords = ''
   const length = Math.max(word1.length, word2.length)

   for (let p = 0; p < length; p++) {
      if (p < word1.length) mergedWords += word1[p]
      if (p < word2.length) mergedWords += word2[p]
   }

   return mergedWords
}
