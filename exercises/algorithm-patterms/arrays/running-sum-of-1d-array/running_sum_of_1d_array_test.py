from running_sum_of_1d_array import Solution

def test_running_sum_of_empty_array():
    s = Solution()
    assert s.runningSum([]) == []

def test_running_sum_of_single_element_array():
    s = Solution()
    assert s.runningSum([1]) == [1]

def test_running_sum_of_array():
    s = Solution()
    assert s.runningSum([1, 2, 3, 4]) == [1, 3, 6, 10]
    assert s.runningSum([1, 1, 1, 1, 1]) == [1, 2, 3, 4, 5]
    assert s.runningSum([3, 1, 2, 10, 1]) == [3, 4, 6, 16, 17]

def test_running_sum_of_negative_array():
    s = Solution()
    assert s.runningSum([-1, -2, -3, -4]) == [-1, -3, -6, -10]
