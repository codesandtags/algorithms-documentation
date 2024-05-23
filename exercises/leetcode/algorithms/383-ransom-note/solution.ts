function canConstruct(ransomNote: string, magazine: string): boolean {
   // Create an object to store character frequencies from the magazine
   let charCount = new Map<string, number>()

   // Populate the object with character frequencies from the magazine
   for (let char of magazine) {
      charCount[char] = (charCount[char] || 0) + 1
   }

   // Check if the ransom note can be constructed
   for (let char of ransomNote) {
      if (!charCount[char] || charCount[char] === 0) {
         return false
      }
      charCount[char]--
   }

   return true
}
