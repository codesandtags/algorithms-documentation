class Solution:
    def function_name(self, s, t):
        """
        :type s: str
        :type t: str
        :rtype: bool
        :time complexity: O(n)
        :space complexity: O(1) worst case: 26 chars
        """
        # Check if the lengths of both strings are equal. If not, return false.
        if len(s) != len(t):
            return False

        # Create a hash map to store the frequency of characters in both strings.
        freq_map = {}
        for i in range(len(s)):
        # Increment the frequency of the character in string s.
            if s[i] in freq_map:
                freq_map[s[i]] += 1
            else:
                freq_map[s[i]] = 1

            # Decrement the frequency of the character in string t.
            if t[i] in freq_map:
                freq_map[t[i]] -= 1
            else:
                freq_map[t[i]] = -1

        # Check if the frequency of all characters is 0.
        for char in freq_map:
            if freq_map[char] != 0:
                return False

        # If all characters have a frequency of 0, this means that 't' is an anagram of 's'.
        return True

