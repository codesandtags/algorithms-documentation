function lengthOfLongestSubstring(s: string): number {
   let char_set = new Set()
   let maxLength = 0,
      start = 0,
      end = 0

   // Traverse the string with the end pointer
   while (end < s.length) {
      // If the character is not in the set, it's a unique character for the current substring
      if (!char_set.has(s[end])) {
         char_set.add(s[end])
         maxLength = Math.max(maxLength, end - start + 1)
         end++
      } else {
         // If we find a repeating character, remove the character at the start pointer and move the start pointer
         char_set.delete(s[start])
         start++
      }
   }

   return maxLength
}
