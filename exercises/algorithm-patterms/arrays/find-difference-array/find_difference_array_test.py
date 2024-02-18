from find_difference_array import Solution

def test_find_difference_array_of_empty_array():
    s = Solution()
    assert s.find_difference_array([]) == []

def test_find_difference_array():
    s = Solution()
    assert s.find_difference_array([2, 5, 1, 6]) == [12, 5, 1, 8]
