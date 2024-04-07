/**
 * Remove invalids parentheses
 */
function getPrevalidatedString(
   s: string,
   open: string,
   close: string
): {
   openSeen: number
   balance: number
   preValidatedString: string
} {
   let balance = 0
   let openSeen = 0

   const preValidatedString = []
   for (let i = 0; i < s.length; i++) {
      const current = s[i]

      if (current === open) {
         balance++
         openSeen++
      } else if (current === close) {
         if (balance === 0) {
            continue
         }
         balance--
      }

      preValidatedString.push(current)
   }

   return {
      balance,
      openSeen,
      preValidatedString: preValidatedString.join(''),
   }
}

/**
 * Remove rightmost additional parentheses
 */
function removeAdditionalOpenParentheses(
   s: string,
   openToKeep: number,
   open: string
): string {
   let result = ''

   for (let i = 0; i < s.length; i++) {
      const current = s[i]

      if (current === open) {
         openToKeep--

         if (openToKeep < 0) {
            continue
         }
      }

      result += current
   }

   return result
}

function minRemoveToMakeValid(s: string): string {
   const OPEN = '('
   const CLOSE = ')'

   let { openSeen, balance, preValidatedString } = getPrevalidatedString(
      s,
      OPEN,
      CLOSE
   )

   let openToKeep = openSeen - balance

   return removeAdditionalOpenParentheses(preValidatedString, openToKeep, OPEN)
}
