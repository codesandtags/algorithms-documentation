/**
 Do not return anything, modify s in-place instead.
 */

function reverseAllLetters(s: string[], left, right): void {
   while (left < right) {
      const tmp = s[left]
      s[left++] = s[right]
      s[right--] = tmp
   }
}

function reverseEachWord(s: string[]): void {
   let n = s.length
   let start = 0
   let end = 0

   while (start < n) {
      while (end < n && s[end] != ' ') {
         end++
      }
      reverseAllLetters(s, start, end - 1)
      start = end + 1
      end++
   }
}

function reverseWords(s: string[]): void {
   reverseAllLetters(s, 0, s.length - 1)
   reverseEachWord(s)
}
