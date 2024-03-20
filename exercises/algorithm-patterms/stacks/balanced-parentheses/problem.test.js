const Solution = require('./problem')

describe('Balanced parentheses', () => {
   let solution = null

   beforeEach(() => {
      solution = new Solution()
   })

   test('should return true for balanced parentheses', () => {
      expect(solution.isValid('()')).toBe(true)
      expect(solution.isValid('()[]{}')).toBe(true)
      expect(solution.isValid('{[]}')).toBe(true)
   })

   test('should return false for unbalanced parentheses', () => {
      expect(solution.isValid('(]')).toBe(false)
      expect(solution.isValid('([)]')).toBe(false)
      expect(solution.isValid('{')).toBe(false)
   })
})
