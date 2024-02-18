const Solution = require('./problem')

describe('Left and Right Sum Differences', () => {
   test('findDifferenceArray', () => {
      const solution = new Solution()
      expect(solution.findDifferenceArray([2, 5, 1, 6])).toEqual([12, 5, 1, 8])
      expect(solution.findDifferenceArray([1, 2, 3, 4, 5])).toEqual([
         14, 11, 6, 1, 10,
      ])
   })
})
