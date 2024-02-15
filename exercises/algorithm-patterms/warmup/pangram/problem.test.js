const Solution = require('./problem')

describe('Pangram', () => {
   test('Is a pangram', () => {
      const solution = new Solution()
      const sentence = 'The quick brown fox jumps over the lazy dog'

      expect(solution.checkIfPangram(sentence)).toBe(true)
   })

   test('Is NOT a pangram', () => {
      const solution = new Solution()
      const sentence = 'This is not a pangram'

      expect(solution.checkIfPangram(sentence)).toBe(false)
   })
})
