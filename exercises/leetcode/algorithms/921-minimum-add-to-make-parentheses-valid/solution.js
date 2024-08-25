/**
 * @param {string} s
 * @return {number}
 */
var minAddToMakeValid = function (s) {
   let balance = 0,
      counter = 0
   for (let c of s) {
      // Increment or decrement balance based on parenthesis
      balance += c === '(' ? 1 : -1
      // Check for unmatched closing parenthesis
      if (balance === -1) {
         counter++ // Count each unmatched ')'
         balance++ // Adjust balance for each counted ')'
      }
   }
   return counter + balance // Total adjustments needed
}
