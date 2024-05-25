function frequencySort(s: string): string {
   // Build the frequency map
   const freqMap = {}
   for (let char of s) {
      freqMap[char] = (freqMap[char] || 0) + 1
   }

   // Create an array and sort it based on the frequency
   const sortedChars = Object.keys(freqMap).sort(
      (a, b) => freqMap[b] - freqMap[a]
   )

   // Construct the result string
   let result = ''
   for (let char of sortedChars) {
      result += char.repeat(freqMap[char])
   }

   return result
}
