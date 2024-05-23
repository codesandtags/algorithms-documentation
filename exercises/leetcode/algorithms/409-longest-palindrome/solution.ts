function longestPalindrome(s: string): number {
   let freq_map = new Map<string, number>()

   // Populate the hashmap with character frequencies
   for (let c of s) {
      freq_map[c] = (freq_map[c] || 0) + 1
   }

   let length = 0
   let oddFound = false

   // Calculate the palindrome length
   for (let freq of Object.values(freq_map)) {
      if (freq % 2 === 0) {
         length += freq
      } else {
         length += freq - 1
         oddFound = true
      }
   }

   // Add the central character if any odd frequency was found
   if (oddFound) length++

   return length
}
