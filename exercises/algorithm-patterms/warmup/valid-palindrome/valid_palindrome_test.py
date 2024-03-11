from valid_palindrome import Solution

def test_is_valid_palindrome():
    s = Solution()
    assert s.isValidPalindrome('A man, a plan, a canal, Panama!') == True

def test_is_not_pangram():
    s = Solution()
    assert s.isValidPalindrome('race a car') == False

def test_is_pangram_with_uppercase():
    s = Solution()
    assert s.isValidPalindrome('Was it a car or a cat I saw?') == True