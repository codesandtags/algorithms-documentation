const Solution = require('./problem')

describe('Sort Stack', () => {
   let solution = null

   beforeEach(() => {
      solution = new Solution()
   })

   test('Sort stack properly', () => {
      expect(solution.sortStack([34, 3, 31, 98, 92, 23])).toEqual([
         3, 23, 31, 34, 92, 98,
      ])
   })
})
