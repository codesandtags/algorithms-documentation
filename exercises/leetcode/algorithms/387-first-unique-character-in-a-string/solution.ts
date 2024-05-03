function firstUniqChar(s: string): number {
   // Create a hashmap to store the frequency of each character
   let freq = {}

   // Traverse the string to populate the hashmap with character frequencies
   for (let c of s) {
      freq[c] = (freq[c] || 0) + 1
   }

   // Traverse the string again to find the first unique character
   for (let i = 0; i < s.length; i++) {
      if (freq[s[i]] === 1) {
         return i
      }
   }

   // If no unique character is found, return -1
   return -1
}
