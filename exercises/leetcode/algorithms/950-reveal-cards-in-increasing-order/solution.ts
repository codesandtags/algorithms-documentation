function deckRevealedIncreasing(deck: number[]): number[] {
   const n = deck.length
   const queue: number[] = Array.from({ length: n }, (value, index) => index)

   deck.sort((a, b) => a - b)

   // Put cards at correct index in result
   const result = new Array(n)
   for (let i = 0; i < n; i++) {
      result[queue.shift()] = deck[i]
      queue.push(queue.shift())
   }

   return result
}
