const Solution = require('./problem')

describe('valid valindrome', () => {
   test('is a valid palindrome', () => {
      const text = 'A man, a plan, a canal, Panama!'
      const solution = new Solution()

      expect(solution.isPalindrome(text)).toBe(true)
   })

   test('is not a valid palindrome', () => {
      const text = 'The man, a plan, a canal, Panama!'
      const solution = new Solution()

      expect(solution.isPalindrome(text)).toBe(false)
   })

   test('is not a valid palindrome with only characters', () => {
      const text = '.,'
      const solution = new Solution()

      expect(solution.isPalindrome(text)).toBe(false)
   })
})
