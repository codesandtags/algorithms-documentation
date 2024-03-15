class Solution:
    def mySqrt(self, x: int) -> int:
        if x < 2:
            return x # return x if it is 0 or 1

        left, right = 2, x // 2 # initialize left and right pointers
        pivot = 0
        num = 0 # use int to store result of pivot * pivot to prevent overflow
        while left <= right: # binary search for the square root
            pivot = left + (right - left) // 2 # find the middle element
            num = pivot * pivot
            if num > x:
                right = pivot - 1 # if pivot * pivot is greater than x, set right to pivot - 1
            elif num < x:
                left = pivot + 1 # if pivot * pivot is less than x, set left to pivot + 1
            else:
                return pivot # if pivot * pivot is equal to x, return pivot
        return right # return right after the loop

