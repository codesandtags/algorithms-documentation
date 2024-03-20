const Solution = require('./problem')

describe('Decimal to Binary', () => {
   let solution = null

   beforeEach(() => {
      solution = new Solution()
   })

   test('decimalToBinary should correctly convert decimal to binary', () => {
      expect(solution.decimalToBinary(2)).toBe('10')
      expect(solution.decimalToBinary(8)).toBe('1000')
      expect(solution.decimalToBinary(18)).toBe('10010')
   })

   test('decimalToBinary should return "0" for an input of 0', () => {
      expect(solution.decimalToBinary(0)).toBe('0')
   })

   test('decimalToBinary should return "1" for an input of 1', () => {
      expect(solution.decimalToBinary(1)).toBe('1')
   })
})
