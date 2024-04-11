/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
   const n = deck.length
   const result = new Array(n).fill(0)

   let skip = false
   let indexInDeck = 0
   let indexInResult = 0

   // Sort deck in ascendent order
   deck.sort((a, b) => a - b)

   // Runs algorithm
   while (indexInDeck < n) {
      if (result[indexInResult] === 0) {
         if (!skip) {
            result[indexInResult] = deck[indexInDeck]
            indexInDeck++
         }
         skip = !skip
      }
      indexInResult = (indexInResult + 1) % n
   }

   return result
}
