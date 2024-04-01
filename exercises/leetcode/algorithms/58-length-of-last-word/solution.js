/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
   const words = s.trim().split(/\s+/)
   const lastWord = words.pop()

   if (lastWord) {
      return lastWord.length
   }

   return 0
}
