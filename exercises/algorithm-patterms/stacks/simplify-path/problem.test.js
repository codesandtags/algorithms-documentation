const Solution = require('./problem')

describe('Simplify Path', () => {
   let solution = null

   beforeEach(() => {
      solution = new Solution()
   })

   test('simplify a complex path', () => {
      expect(solution.simplifyPath('/a//b////c/d//././/..')).toBe('/a/b/c')
   })
})
