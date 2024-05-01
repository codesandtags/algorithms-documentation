/**
 * @param {string} word
 * @param {character} ch
 * @return {string}
 */
var reversePrefix = function (word, ch) {
   let firstOccurrence = word.indexOf(ch)

   if (firstOccurrence === -1) {
      return word
   }

   firstOccurrence++
   let prefix = word.substring(0, firstOccurrence)
   let result = ''
   let index = prefix.length - 1

   while (index >= 0) {
      result = result.concat(prefix[index])
      index--
   }

   result = result.concat(word.substring(firstOccurrence))

   return result
}
