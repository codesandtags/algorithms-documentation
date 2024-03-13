const Solution = require('./problem')

describe('valid anagram', () => {
   test('is a valid anagram', () => {
      const solution = new Solution()

      expect(solution.isAnagram('listen', 'listen')).toBe(true)
      expect(solution.isAnagram('silent', 'listen')).toBe(true)
   })

   test('is not a valid anagram', () => {
      const solution = new Solution()

      expect(solution.isAnagram('hello', 'world')).toBe(false)
      expect(solution.isAnagram('rat', 'car')).toBe(false)
   })
})
