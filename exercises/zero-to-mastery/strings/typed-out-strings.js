/**
 * Given two Strings, S and T, return if they equal when both are typed out.
 *
 * Any '#' that appears counts as a backspace
 *
 * time: O(a+b)
 * space: O(a+b)
 *
 * @param {*} str1
 * @param {*} str2
 */

function getFinalString(str) {
   const LENGHT = str.length
   let finalStr = ''

   for (let i = 0; i < LENGHT; i++) {
      if (str[i] === '#') {
         // removes the last character
         finalStr = finalStr.slice(0, -1)
      } else {
         finalStr += str[i]
      }
   }

   return finalStr
}

function getFinalStringV2(str) {
   const LENGHT = str.length
   let finalStr = []

   for (let i = 0; i < LENGHT; i++) {
      if (str[i] !== '#') {
         finalStr.push(str[i])
      } else {
         finalStr.pop()
      }
   }

   return finalStr.join('')
}

function getFinalStringV3(str) {
   const LENGHT = str.length
   let finalString = ''

   for (let i = LENGHT - 1; i >= 0; i--) {
      if (str[i] === '#') {
         i -= 1
         continue
      } else {
         finalString = str[i] + finalString
      }
   }

   return finalString
}

function verifyTypedOutStrings(str1, str2) {
   if (str1 === str2) return true

   // iterate both strings to get the final results
   return getFinalStringV3(str1) === getFinalStringV3(str2)
}

module.exports = {
   verifyTypedOutStrings,
}
