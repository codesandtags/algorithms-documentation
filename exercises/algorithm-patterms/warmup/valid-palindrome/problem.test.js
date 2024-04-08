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

// FILEPATH: /Users/etcode/Documents/codesandtags/projects/algorithms-documentation/exercises/algorithm-patterms/stacks/reverse-string/problem.test.js

const Solution = require('./problem')

describe('reverse string', () => {
   test('reverses a string', () => {
      const input = 'Hello, World!'
      const solution = new Solution()

      expect(solution.reverseString(input)).toBe('!dlroW ,olleH')
   })

   test('reverses an empty string', () => {
      const input = ''
      const solution = new Solution()

      expect(solution.reverseString(input)).toBe('')
   })

   test('reverses a string with special characters', () => {
      const input = 'Hello, @World!'
      const solution = new Solution()

      expect(solution.reverseString(input)).toBe('!dlroW@ ,olleH')
   })
})
