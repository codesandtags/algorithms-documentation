function reversePrefix(word: string, ch: string): string {
   let firstOccurrence = word.indexOf(ch)

   if (firstOccurrence === -1) {
      return word
   }

   firstOccurrence++
   const reversedPrefix = [...word.substring(0, firstOccurrence)]
      .reverse()
      .join('')

   return reversedPrefix.concat(word.substring(firstOccurrence))
}
