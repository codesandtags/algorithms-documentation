/*
 * @param {array} nums
 * @return {boolean} true if there are duplicates, false if not
 *
 * space:
 * time:
 */
class Solution {
   containsDuplicate(nums) {
      const duplicates = new Set()

      for (const num of nums) {
         if (duplicates.has(num)) {
            return true
         }
         duplicates.add(num)
      }

      return false
   }
}

module.exports = Solution
