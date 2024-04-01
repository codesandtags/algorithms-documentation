function lengthOfLastWord(s: string): number {
   const words = s.trim().split(/\s+/)
   const lastWord = words.pop()

   if (lastWord) {
      return lastWord.length
   }

   return 0
}
