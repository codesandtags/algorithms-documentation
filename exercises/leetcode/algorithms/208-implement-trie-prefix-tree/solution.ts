class TrieNode {
   children: Map<string, TrieNode>
   isEnd: boolean

   constructor() {
      this.children = new Map<string, TrieNode>()
      this.isEnd = false
   }
}

class Trie {
   root: TrieNode

   constructor() {
      this.root = new TrieNode()
   }

   insert(word: string): void {
      let currNode = this.root
      for (const char of word) {
         if (!currNode.children.has(char)) {
            currNode.children.set(char, new TrieNode())
         }
         currNode = currNode.children.get(char)
      }
      currNode.isEnd = true
   }

   search(word: string): boolean {
      let currNode = this.root
      for (const char of word) {
         if (!currNode.children.has(char)) {
            return false
         }
         currNode = currNode.children.get(char)
      }
      return currNode.isEnd
   }

   startsWith(prefix: string): boolean {
      let currNode = this.root
      for (const char of prefix) {
         if (!currNode.children.has(char)) {
            return false
         }
         currNode = currNode.children.get(char)
      }
      return true
   }
}
