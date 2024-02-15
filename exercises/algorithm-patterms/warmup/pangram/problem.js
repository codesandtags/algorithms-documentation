/**
 * @param {string} sentence
 * @return {boolean} if it is a pangram
 *
 * time complexity: O(n + a)
 * space complexity: O(n)
 */
class Solution {
   // Function to check if given sentence is pangram
   checkIfPangram(sentence) {
      const seen = new Set()

      // Convert sentence to lowercase and iterate through each character
      for (const character of sentence.toLowerCase()) {
         // Check if character is a letter
         if (character.match(/[a-z]/i)) {
            seen.add(character)
         }
      }

      return seen.size === 26
   }

   checkIfPangramInitial(sentence) {
      const alphabet = 'abcdefghijklmnopqrstuvwxyz'
      const frequencySentence = new Array(...sentence.toLowerCase()).reduce(
         (frequency, current) => {
            const character = current

            if (!frequency.has(character)) {
               frequency.set(character, 0)
            }

            frequency.set(character, frequency.get(character) + 1)

            return frequency
         },
         new Map()
      )

      for (const letter of alphabet) {
         if (!frequencySentence.has(letter)) {
            return false
         }
      }

      return true
   }
}

module.exports = Solution
