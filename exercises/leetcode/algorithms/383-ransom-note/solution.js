/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
   // Create an object to store character frequencies from the magazine
   let charCount = {}

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
