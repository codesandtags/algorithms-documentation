const Solution = require('./problem')

describe('Shortest Word Distance', () => {
   test('Shortest word distance in array with unique values', () => {
      const solution = new Solution()
      words = [
         'the',
         'quick',
         'brown',
         'fox',
         'jumps',
         'over',
         'the',
         'lazy',
         'dog',
      ]
      word1 = 'fox'
      word2 = 'dog'

      expect(solution.shortestDistance(words, word1, word2)).toBe(5)
   })

   test('Shorts word distance with repeated values in array', () => {
      const solution = new Solution()
      words = ['a', 'c', 'd', 'b', 'a']
      word1 = 'a'
      word2 = 'b'

      expect(solution.shortestDistance(words, word1, word2)).toBe(1)
   })
})
