// https://leetcode.com/problems/greatest-common-divisor-of-strings
/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */

function isValid(str1, str2, k) {
   const len1 = str1.length
   const len2 = str2.length

   if (len1 % k > 0 || len2 % k > 0) {
      return false
   } else {
      const base = str1.substring(0, k)
      return (
         str1.replaceAll(base, '') === '' && str2.replaceAll(base, '') === ''
      )
   }
}

var gcdOfStrings = function (str1, str2) {
   const len1 = str1.length
   const len2 = str2.length

   for (let k = Math.min(len1, len2); k >= 1; --k) {
      if (isValid(str1, str2, k)) {
         return str1.substring(0, k)
      }
   }

   return ''
}
