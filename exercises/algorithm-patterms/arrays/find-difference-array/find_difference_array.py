
class Solution:
    def find_difference_array(self, nums):
        """
        :type nums: List[int]
        rtype: List[int]
        :time complexity: O(3n)
        :space complexity: O(3n)
        """
        # Edge case
        if not nums or len(nums) == 0:
            return []

        n = len(nums)
        leftSum = [0] * n
        rightSum = [0] * n
        differenceArray = [0] * n

        # Calculate leftSum array
        leftSum[0] = nums[0]
        for i in range(1, n):
            leftSum[i] = leftSum[i-1] + nums[i]

        # Calculate rightSum array
        rightSum[n-1] = nums[n-1]
        for i in range(n-2, -1, -1):
            rightSum[i] = rightSum[i+1] + nums[i]

        # Calculate differenceArray
        for i in range(n):
            differenceArray[i] = abs(leftSum[i] - rightSum[i])

        return differenceArray

