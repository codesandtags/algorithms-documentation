const Solution = require('./problem')

describe('Next Greater Element', () => {
   let solution = null

   beforeEach(() => {
      solution = new Solution()
   })

   test('Finds next greater element for array', () => {
      expect(solution.nextLargerElement([4, 5, 2, 25])).toEqual([5, 25, 25, -1])
   })
})
