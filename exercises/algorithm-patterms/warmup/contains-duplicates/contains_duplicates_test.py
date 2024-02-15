from contains_duplicates import Solution

def test_no_duplicates():
    s = Solution()
    assert s.containsDuplicate([1, 2, 3, 4, 5]) == False

def test_duplicates():
    s = Solution()
    assert s.containsDuplicate([1, 2, 3, 4, 5, 1]) == True