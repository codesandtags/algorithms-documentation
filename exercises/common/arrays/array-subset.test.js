const { findSubset, findSubsetHash } = require('./array-subset')

describe('findSubset v1', () => {
   test('empty arrays', () => {
      expect(findSubset([], [])).toBe(false)
   })

   test('array 1 is subset of array 2', () => {
      expect(findSubset([1, 2], [1, 2, 3])).toBe(true)
   })

   test('array 2 is subset of array 1', () => {
      expect(findSubset([1, 2, 3], [1, 2])).toBe(true)
   })

   test('array 1 is not subset of array 2', () => {
      expect(findSubset([1, 2, 3], [1, 2, 4])).toBe(false)
   })

   test('array 2 is not subset of array 1', () => {
      expect(findSubset([1, 2, 4], [1, 2, 3])).toBe(false)
   })
})

describe('findSubset v2', () => {
   test('empty arrays', () => {
      expect(findSubsetHash([], [])).toBe(false)
   })

   test('array 1 is subset of array 2', () => {
      expect(findSubsetHash([1, 2], [1, 2, 3])).toBe(true)
   })

   test('array 2 is subset of array 1', () => {
      expect(findSubsetHash([1, 2, 3], [1, 2])).toBe(true)
      expect(
         findSubsetHash(['a', 'b', 'c', 'd', 'd', 'e', 'f'], ['b', 'd', 'f'])
      ).toBe(true)
   })

   test('array 1 is not subset of array 2', () => {
      expect(findSubsetHash([1, 2, 3], [1, 2, 4])).toBe(false)
   })

   test('array 2 is not subset of array 1', () => {
      expect(findSubsetHash([1, 2, 4], [1, 2, 3])).toBe(false)
   })
})
