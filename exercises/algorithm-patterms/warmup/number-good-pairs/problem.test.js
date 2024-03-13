const Solution = require('./problem')

describe('Number of good pairs', () => {
   test('Valid number of good pairs', () => {
      const solution = new Solution()

      expect(solution.numGoodPairs([1, 2, 3, 1, 1, 3])).toBe(4)
   })

   test('There is not good pairs', () => {
      const solution = new Solution()

      expect(solution.numGoodPairs([1, 2, 3])).toBe(0)
   })

   test('Repeated digits', () => {
      const solution = new Solution()

      expect(solution.numGoodPairs([1, 1, 1, 1])).toBe(6)
   })
})
