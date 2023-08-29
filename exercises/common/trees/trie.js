/**
 * Trie implementation that allows to store strings and search for them.
 *
 */
class Trie {
   constructor() {
      this.root = {}
      this.endSymbol = '*'
   }

   /**
    * Inserts a word into the trie.
    * @param {string} word
    * @return {void}
    * @example
    * const trie = new Trie()
    * trie.insert('apple')
    **/
   insert(word) {
      let node = this.root

      for (const char of word) {
         // If the letter doesn't exist in the node, create it
         if (!node[char]) {
            node[char] = {}
         }

         node = node[char]
      }

      // Mark the end of the word
      node[this.endSymbol] = true
   }

   /**
    * Return if the word exists in the trie, if not return false.
    * @param {string} word
    * @return {boolean}
    */
   search(word) {
      let node = this.root

      for (const char of word) {
         // If the letter doesn't exist in the node, return false
         if (!node[char]) {
            return false
         }

         node = node[char]
      }

      // If the word exists, the node will have the '*' property set to true
      // at the end of the word
      return !!node[this.endSymbol]
   }

   /**
    * Get all words stored in the trie.
    */
   getWords() {
      const words = []

      function traverse(node, word) {
         for (const char in node) {
            if (char === '*') {
               words.push(word)
            } else {
               traverse(node[char], word + char)
            }
         }
      }

      traverse(this.root, '')

      return words
   }

   /**
    * Returns a list of words that starts with the given prefix.
    * @param {*} prefix
    */
   autocomplete(prefix) {
      let node = this.root

      for (const char of prefix) {
         // If the letter doesn't exist in the node, return false
         if (!node[char]) {
            return []
         }

         node = node[char]
      }

      console.log(node)
      const words = []

      function traverse(node, word) {
         for (const char in node) {
            if (char === '*') {
               words.push(word)
            } else {
               traverse(node[char], word + char)
            }
         }
      }

      traverse(node, prefix)

      return words
   }
}

// Example
const trie = new Trie()

trie.insert('ace')
trie.insert('ace')
trie.insert('act')
trie.insert('bad')
trie.insert('bat')
trie.insert('batter')
trie.insert('bat')
trie.insert('cab')
trie.insert('cat')
trie.insert('a')

console.log({
   trie,
})

// Search word
console.log(trie.search('a'))
console.log(trie.search('ace'))
console.log(trie.search('act'))
console.log(trie.search('ack'))

// Get all words
// console.log(trie.getWords())

// Print trie
// console.log(JSON.stringify(trie, null, 2))

// Autocomplete
console.log({
   autocomplete: trie.autocomplete('ba'),
})
