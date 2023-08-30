const LETTERS = 26
const A_CODE = 'a'.charCodeAt(0)
const alphabet = Array.from({ length: LETTERS }, (_, i) =>
   String.fromCharCode(i + A_CODE)
)

const encrypt = (letter, key) => {
   const index = (alphabet.indexOf(letter) + key) % LETTERS

   return alphabet.at(index)
}

/**
 * time O(n)
 * space O(n)
 **/
function caesarCipherEncryptor(string, key) {
   const cipher = []

   for (const letter of string) {
      cipher.push(encrypt(letter, key))
   }

   return cipher.join('')
}

// Do not edit the line below.
exports.caesarCipherEncryptor = caesarCipherEncryptor
