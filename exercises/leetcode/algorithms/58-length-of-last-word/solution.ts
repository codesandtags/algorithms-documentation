function lengthOfLastWord(s: string): number {
   const words = s.trim().split(/\s/)

   return words.pop()?.length || 0
}
