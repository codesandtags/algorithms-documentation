function runLengthEncoding(string) {
   // Count characters
   let countChars = 1
   let solution = []

   // Traverse String
   for (let index = 1; index < string.length; index++) {
      const currentCharacter = string[index]
      const previousCharacter = string[index - 1]

      if (currentCharacter !== previousCharacter || countChars === 9) {
         solution.push(countChars, previousCharacter)
         countChars = 0
      }

      countChars++
   }

   solution.push(countChars, string[string.length - 1])

   // Evaluate solution and return
   return solution.join('')
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding
