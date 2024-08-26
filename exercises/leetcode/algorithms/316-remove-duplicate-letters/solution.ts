function removeDuplicateLetters(s: string): string {
   let count = {}
   let present = new Set()
   let result = []

   // Count the frequency of each character
   for (let char of s) {
      count[char] = (count[char] || 0) + 1
   }

   for (let char of s) {
      if (!present.has(char)) {
         // Ensure smallest lexicographical order
         while (
            result.length > 0 &&
            char < result[result.length - 1] &&
            count[result[result.length - 1]] > 0
         ) {
            present.delete(result.pop())
         }
         result.push(char)
         present.add(char)
      }
      count[char]-- // Decrease the frequency
   }

   // Building the result string
   return result.join('')
}
