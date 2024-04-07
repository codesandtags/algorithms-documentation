/**
 * @param {string} s
 * @return {string}
 */

function removeInvalidClosing(s, open, close) {
   const finalString = []
   let balance = 0

   for (let i = 0; i < s.length; i++) {
      const current = s[i]

      if (current === open) {
         balance++
      } else if (current === close) {
         if (balance === 0) {
            continue
         }

         balance--
      }

      finalString.push(current)
   }

   return finalString.join('')
}

function minRemoveToMakeValid(s) {
   let result = removeInvalidClosing(s, '(', ')')
   result = removeInvalidClosing([...result].reverse(), ')', '(')

   return [...result].reverse().join('')
}
