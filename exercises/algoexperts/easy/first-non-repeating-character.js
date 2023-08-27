function firstNonRepeatingCharacter(string) {
   const countChars = {}

   // Add the frequency for each character
   for (const character of string) {
      if (!countChars[character]) {
         countChars[character] = 0
      }
      countChars[character]++
   }

   // Checks the first character that only appears once
   for (let index = 0; index < string.length; index++) {
      if (countChars[string[index]] === 1) {
         return index
      }
   }

   return -1
}

// Do not edit the line below.
exports.firstNonRepeatingCharacter = firstNonRepeatingCharacter
