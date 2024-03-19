const Solution = require('./problem')

describe('Solution', () => {
   test('findMaxOnesRow should return the index of the row with the maximum number of ones', () => {
      const solution = new Solution()
      const matrix = [
         [0, 0, 0, 1],
         [0, 1, 1, 1],
         [1, 1, 1, 1],
         [0, 0, 0, 0],
      ]
      expect(solution.findMaxOnesRow(matrix)).toEqual([2, 4])
   })
})
