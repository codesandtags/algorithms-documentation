class Solution:
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        :time complexity: O(n)
        :space complexity: O(n)
        """
        duplicates = set()

        for num in nums:
            if num in duplicates:
                return True
            duplicates.add(num)

        return False
