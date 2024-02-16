class Solution:
    def runningSum(self, nums):
        """
        :type nums: List[int]
        :rtype: List[int]
        :time complexity: O(n), where n is the length of the input array
        :space complexity: O(1), excluding the space used to store the output
        """
        # Edge case
        if not nums or len(nums) == 0:
            return []

        # Initialize the running sum array
        running_sum = [0] * len(nums)
        running_sum[0] = nums[0]

        # Calculate the running sum
        for index in range(1, len(nums)):
            running_sum[index] = nums[index] + running_sum[index - 1]

        return running_sum


