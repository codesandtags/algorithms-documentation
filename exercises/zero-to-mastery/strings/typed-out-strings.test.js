const { verifyTypedOutStrings } = require('./typed-out-strings')

describe('verifyTypedOutStrings()', () => {
   test('should return true when both strings are equals', () => {
      expect(verifyTypedOutStrings('ab#c', 'ab#c')).toBe(true)
   })

   test('should return true when both strings are equals after verify the typed out', () => {
      expect(verifyTypedOutStrings('ab#z', 'az#z')).toBe(true)
   })

   test('should return false when both strings are not equals after verify the typed out', () => {
      expect(verifyTypedOutStrings('abc#d', 'acc#d')).toBe(false)
   })

   test('should return true when after removing several characters both string are equals', () => {
      expect(verifyTypedOutStrings('a###b', 'b')).toBe(true)
   })

   test('should return false when after removing characters both string are not equals', () => {
      expect(verifyTypedOutStrings('Ab#c', 'ab#c')).toBe(false)
   })
})
