/*
 * Returns the max substring without repeating characters
 * If string is empty then return 0
 * If string has only one element or there are not characteres repeated
 * the return is 1
 *
 * @param {string} string to evaluate
 * @returns {number} max length of substring found.
 *
 * Time complexity: O(n)
 * Space complexity: O(n)
 */
function maxSubstring(string) {
   const LENGTH = string.length
   let index = 0
   let maxSubstring = 0
   let seenCharacters = new Set()

   while (index < LENGTH) {
      const character = string[index]

      if (!seenCharacters.has(character)) {
         seenCharacters.add(character)
      } else {
         seenCharacters.clear()
      }

      maxSubstring = Math.max(maxSubstring, seenCharacters.size)

      index++
   }

   return maxSubstring
}

/*
 * Returns the max substring without repeating characters
 * If string is empty then return 0
 * If string has only one element or there are not characteres repeated
 * the return is 1
 *
 * @param {string} string to evaluate
 * @returns {number} max length of substring found.
 * time complexity: O(n^2)
 * space complexity: O(1)
 */
function maxSubstringV2(string) {
   const LENGTH = string.length
   let index = 0
   let maxSubstring = 0
   let chunk = ''

   while (index < LENGTH) {
      const character = string[index]

      if (chunk.indexOf(character) < 0) {
         chunk += character
      } else {
         chunk = ''
      }

      maxSubstring = Math.max(maxSubstring, chunk.length)

      index++
   }

   return maxSubstring
}

/*
 * Returns the max substring without repeating characters
 * If string is empty then return 0
 * If string has only one element or there are not characteres repeated
 * the return is 1
 *
 * @param {string} string to evaluate
 * @returns {number} max length of substring found.
 *
 * example: 'abcbac' => 'abc' => 3
 * example: 'abcbda' => 'cbda' => 4
 *
 * time complexity: O(n)
 * space complexity: O(1)
 **/
function lengthOfLongestSubstring(string) {
   // Edge cases
   // If string is empty or it only has 1 character
   // then return the length of the string
   if (string.length <= 1) {
      return string.length
   }

   let longest = 0
   let left = 0
   let seemChars = {}

   for (let right = 0; right < string.length; right++) {
      const currentChar = string[right]
      const previusSeenChar = seemChars[currentChar]

      if (previusSeenChar >= left) {
         left = previusSeenChar + 1
      }

      seemChars[currentChar] = right
      longest = Math.max(longest, right - left + 1)
   }

   return longest
}
