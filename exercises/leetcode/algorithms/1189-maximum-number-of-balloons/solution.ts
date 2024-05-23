function maxNumberOfBalloons(text: string): number {
   // Create an object to store character frequencies
   let charCount = {}

   for (const char of text) {
      charCount[char] = charCount[char] || 0
      charCount[char] += char === 'l' || char === 'o' ? 0.5 : 1
   }

   let minCount = Number.POSITIVE_INFINITY

   for (const char of 'balon') {
      minCount = Math.min(minCount, charCount[char] || 0)
   }

   return Math.floor(minCount)
}
