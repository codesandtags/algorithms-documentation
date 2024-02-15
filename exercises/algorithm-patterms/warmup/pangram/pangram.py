class Solution:
    def checkIfPangram(self, sentence):
        seen = set() # Create a set to store unique characters

        # Convert sentence to lowercase and iterate over each character
        for currChar in sentence.lower():
            if currChar.isalpha():
                seen.add(currChar) # Add the character to set

        # Return true if set size is 26 (total number of alphabets)
        return len(seen) == 26

    def checkIfPangramInitial(self, sentence):
        """
        :type sentence: str
        :rtype: bool
        :time complexity: O(n)
        :space complexity: O(n)
        """
        alphabet = set('abcdefghijklmnopqrstuvwxyz')

        for char in sentence.lower():
            if char in alphabet:
                alphabet.remove(char)

        return len(alphabet) == 0


