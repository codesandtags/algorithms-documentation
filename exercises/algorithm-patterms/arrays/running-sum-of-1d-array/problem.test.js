const Solution = require('./problem')

describe('runningSum 1d', () => {
   test('Sum empty array', () => {
      const solution = new Solution()
      expect(solution.runningSum([])).toEqual([])
   })

   test('Sum single element array', () => {
      const solution = new Solution()
      expect(solution.runningSum([1])).toEqual([1])
   })

   test('Sum five element array', () => {
      const solution = new Solution()
      expect(solution.runningSum([1, 2, 3, 4, 5])).toEqual([1, 3, 6, 10, 15])
   })

   test('Sum five element array with negative numbers', () => {
      const solution = new Solution()
      expect(solution.runningSum([1, 2, -3, 4, 5])).toEqual([1, 3, 0, 4, 9])
   })
})
