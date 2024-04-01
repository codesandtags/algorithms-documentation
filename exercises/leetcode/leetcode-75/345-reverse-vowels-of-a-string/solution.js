/**
 * @param {string} s
 * @return {string}
 *
 * Approach: 2 pointers technique and arrays
 *
 * Time Complexity: O(n), because the worst case it iterates all characters in `s`
 * Space Compleity: O(n), because we need a copy for `s`
 */
var reverseVowels = function (s) {
   // Edge cases
   // - Empty String
   // - Not vowels
   if (s.length === 0 || !s.match(/[aeiou]/i)) {
      return s
   }

   const vowels = /[aeiou]/i
   const array = s.split('')
   let first = 0
   let last = s.length - 1

   // Two pointers technique
   while (first < last) {
      // Increment until it finds the first vowel
      while (first < last && !array[first].match(vowels)) {
         first++
      }

      // Decrement until it finds the last vowel to swap
      while (first < last && !array[last].match(vowels)) {
         last--
      }

      // Swap vowels
      ;[array[first], array[last]] = [array[last], array[first]]

      // Increment and decrement two pointers
      first++
      last--
   }

   return array.join('')
}
