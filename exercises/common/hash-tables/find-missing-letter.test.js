const findMissingLetter = require('./find-missing-letter')

describe('findMissingLetter', () => {
   test('empty string', () => {
      expect(findMissingLetter('')).toBe('a')
   })

   test('string with one letter', () => {
      expect(findMissingLetter('b')).toBe('a')
   })

   test('should return "f" for "the quick brown box jumps over a lazy dog"', () => {
      expect(
         findMissingLetter('the quick brown box jumps over a lazy dog')
      ).toBe('f')
   })
})
