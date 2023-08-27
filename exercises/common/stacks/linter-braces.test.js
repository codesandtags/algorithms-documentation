const linterBraces = require('./linter-braces')

describe('Linter Braces', () => {
   test('returns true for balanced braces', () => {
      expect(linterBraces('()')).toBe(true)
      expect(linterBraces('[]')).toBe(true)
      expect(linterBraces('{}')).toBe(true)
      expect(linterBraces('()[]{}')).toBe(true)
      expect(linterBraces('([])')).toBe(true)
      expect(linterBraces('([]){}')).toBe(true)
      expect(linterBraces('([]){[]}')).toBe(true)
      expect(linterBraces('([]){[]}{[]}')).toBe(true)
      expect(linterBraces('([]){[]}{[]}{[]}')).toBe(true)
      expect(linterBraces('([]){[]}{[]}{[]}{[]}')).toBe(true)
   })

   test('returns false for unbalanced braces', () => {
      expect(linterBraces('(')).toBe(false)
      expect(linterBraces(')')).toBe(false)
      expect(linterBraces('[')).toBe(false)
      expect(linterBraces(']')).toBe(false)
      expect(linterBraces('{')).toBe(false)
      expect(linterBraces('}')).toBe(false)
      expect(linterBraces('([)')).toBe(false)
      expect(linterBraces('([)]')).toBe(false)
   })
})
