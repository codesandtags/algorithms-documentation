const Solution = require('./problem')

describe('Sqrt', () => {
   let solution = null

   beforeEach(() => {
      solution = new Solution()
   })

   test('Finds sqrt of 4', () => {
      expect(solution.mySqrt(4)).toBe(2)
   })

   test('Finds sqrt of 9', () => {
      expect(solution.mySqrt(9)).toBe(3)
   })

   test('Finds sqrt of 1', () => {
      expect(solution.mySqrt(1)).toBe(1)
   })

   test('Finds sqrt of 0', () => {
      expect(solution.mySqrt(0)).toBe(0)
   })

   test('Finds sqrt of 8', () => {
      expect(solution.mySqrt(8)).toBe(2)
   })

   test('Returns NaN for negative numbers', () => {
      expect(solution.mySqrt(-1)).toBeNaN()
   })
})
