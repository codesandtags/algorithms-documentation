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

/**
 *
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
function backspaceCompare(S, T) {
   let p1 = S.length - 1
   let p2 = T.length - 1

   while (p1 >= 0 || p2 >= 0) {
      if (S[p1] === '#' || T[p2] === '#') {
         if (S[p1] === '#') {
            let backCount = 2

            while (backCount > 0) {
               p1 -= 1
               backCount -= 1

               if (S[p1] === '#') {
                  backCount += 2
               }
            }
         }

         if (T[p2] === '#') {
            let backCount = 2

            while (backCount > 0) {
               p2 -= 1
               backCount -= 1

               if (T[p2] === '#') {
                  backCount += 2
               }
            }
         }
      } else {
         if (S[p1] !== T[p2]) {
            return false
         } else {
            p1 -= 1
            p2 -= 1
         }
      }
   }

   return true
}

module.exports = {
   verifyTypedOutStrings,
}
