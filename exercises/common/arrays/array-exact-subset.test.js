const arrayExactSubset = require('./array-exact-subset')

describe('array-exact-subset', () => {
   test('empty arrays', () => {
      expect(arrayExactSubset([], [])).toBe(true)
   })

   test('array 1 is subset of array 2', () => {
      expect(arrayExactSubset([1, 2], [1, 2, 3])).toBe(true)
   })

   test('array 2 is subset of array 1', () => {
      expect(arrayExactSubset([1, 2, 3], [1, 2])).toBe(true)
   })

   test('array 1 is not subset of array 2', () => {
      expect(arrayExactSubset([1, 2, 3], [1, 2, 4])).toBe(false)
   })

   test('array 2 is not subset of array 1', () => {
      expect(arrayExactSubset([1, 2, 4], [1, 2, 3])).toBe(false)
   })

   test('array 1 is not a exact subset of array 2', () => {
      expect(arrayExactSubset([2, 3, 5], [1, 2, 3, 4, 5, 6])).toBe(false)
   })

   test('array 1 is a exact subset of array 2', () => {
      expect(arrayExactSubset([1, 2, 3, 4], [1, 2, 3, 4, 5, 6])).toBe(true)
   })
})
