function reverseWords(s: string): string {
   const words = s.trim().split(/\s+/)

   return words.reverse().join(' ')
}
