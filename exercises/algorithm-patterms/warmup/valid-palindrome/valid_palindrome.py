class Solution:
    def isValidPalindrome(self, s: str):
        i, j = 0, len(s) - 1 # initialize two pointers, one at the start and one at the end of the string

        while i < j: # continue until the two pointers cross over
            while i < j and not s[i].isalnum(): # move i forward until a letter or digit is found
                i += 1
            while i < j and not s[j].isalnum(): # move j backward until a letter or digit is found
                j -= 1

        # compare the characters at i and j after converting them to lowercase
        if s[i].lower() != s[j].lower():
            return False # if they are not equal, the string is not a palindrome
        i += 1 # move i forward
        j -= 1 # move j backwards

        return True # if the two pointers have crossed over, the string is a palindrome

