class Solution:
    def containsDuplicate(self, nums):
        """
        :type nums: List[int]
        :rtype: bool
        """
        duplicates = set()

        for num in nums:
            if num in duplicates:
                return True
            else:
                duplicates.add(num)

        return False
