const Solution = require('./problem')

describe('Contains duplicates', () => {
   test('There are no duplicates', () => {
      const solution = new Solution()
      const nums = [1, 2, 3, 4, 5]
      expect(solution.containsDuplicate(nums)).toBe(false)
   })

   test('There are duplicates', () => {
      const solution = new Solution()
      const nums = [1, 2, 3, 4, 5, 1]
      expect(solution.containsDuplicate(nums)).toBe(true)
   })
})
