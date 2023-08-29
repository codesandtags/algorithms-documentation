// Do not edit the class below except for the
// populateSuffixTrieFrom and contains methods.
// Feel free to add new properties and methods
// to the class.
class SuffixTrie {
   constructor(string) {
      this.root = {}
      this.endSymbol = '*'
      this.populateSuffixTrieFrom(string)
   }

   populateSuffixTrieFrom(string) {
      // Step 1: Iterate string and add nodes
      // Add also all posible combinations
      const LENGTH = string.length

      for (let i = 0; i < LENGTH; i++) {
         let node = this.root
         for (let k = i; k < LENGTH; k++) {
            const letter = string[k]
            if (!node[letter]) {
               node[letter] = {}
            }

            node = node[letter]
         }
         node[this.endSymbol] = true
      }
   }

   contains(string) {
      let node = this.root

      for (const letter of string) {
         // If node does not matches it does not exist
         if (!(letter in node)) {
            return false
         }
         node = node[letter]
      }

      return this.endSymbol in node
   }
}

// Do not edit the line below.
exports.SuffixTrie = SuffixTrie
