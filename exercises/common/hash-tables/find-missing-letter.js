/**
 * Accepts a string that contains all the letters of the alphabet
 * except one and returns the missing letter
 *
 * @param {*} message
 *
 * @returns {string}
 */
function findMissingLetter(message) {
   const alphabet = 'abcdefghijklmnopqrstuvwxyz'

   const hash = {}

   for (let i = 0; i < message.length; i++) {
      hash[message[i]] = true
   }

   for (let i = 0; i < alphabet.length; i++) {
      if (!hash[alphabet[i]]) {
         return alphabet[i]
      }
   }
}

module.exports = findMissingLetter
