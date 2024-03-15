const Solution = require('./problem')

describe('Target Sum', () => {
   let solution = null

   beforeEach(() => {
      solution = new Solution()
   })

   test('Finds a target', () => {
      const arr = [1, 2, 3, 4, 6]
      const target = 6

      expect(solution.search(arr, target)).toEqual([1, 3])
   })

   test('Does not find a target', () => {
      const arr = [2, 5, 9, 11]
      const target = 6

      expect(solution.search(arr, target)).toEqual([-1, -1])
   })
})
