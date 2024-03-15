const Solution = require('./problem')

describe('Find non-duplicate number instances', () => {
   let solution = null

   beforeEach(() => {
      solution = new Solution()
   })

   test('Finds length ', () => {
      expect(solution.remove([2, 3, 3, 3, 6, 9, 9])).toBe(4)
   })
})
