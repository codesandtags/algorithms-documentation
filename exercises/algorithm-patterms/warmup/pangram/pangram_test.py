from pangram import Solution

def test_is_pangram():
    s = Solution()
    assert s.checkIfPangram('The quick brown fox jumps over the lazy dog') == True

def test_is_not_pangram():
    s = Solution()
    assert s.checkIfPangram('This is not a pangram') == False

def test_is_pangram_with_uppercase():
    s = Solution()
    assert s.checkIfPangram('TheQuickBrownFoxJumpsOverTheLazyDog') == True