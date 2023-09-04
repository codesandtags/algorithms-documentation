/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
   if (s.length !== t.length) {
      return false
   }

   const lettersS = {}
   const lettersT = {}

   for (let index = 0; index < s.length; index++) {
      lettersS[s[index]] = 1 + (lettersS[s[index]] || 0)
      lettersT[t[index]] = 1 + (lettersT[t[index]] || 0)
   }

   // Check frequency
   for (const letter in lettersS) {
      if (lettersS[letter] !== lettersT[letter]) {
         return false
      }
   }

   return true
}

var isAnagramSorted = function (s, t) {
   const sSorted = [...s].sort()
   const tSorted = [...t].sort()

   return sSorted === tSorted
}
