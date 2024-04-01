function swap(first: number, last: number, array: string[]): void {
   ;[array[first], array[last]] = [array[last], array[first]]
}

function reverseVowels(s: string): string {
   let first = 0
   let last = s.length - 1
   let letters = s.split('')
   const vowels = /[aeiou]/i

   while (first < last) {
      while (first < s.length && !letters[first].match(vowels)) {
         first++
      }
      while (last >= 0 && !letters[last].match(vowels)) {
         last--
      }
      if (first < last) {
         swap(first++, last--, letters)
      }
   }

   return letters.join('')
}
