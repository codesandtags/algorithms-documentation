const {
   getTrappedRainwaterBruteForce,
   getTrappedRainwaterOptimized,
} = require('./trapping-rainwater')

describe('Trapping Rainwater', () => {
   describe('getTrappedRainwaterBruteForce', () => {
      test('should return 0 for empty array', () => {
         expect(getTrappedRainwaterBruteForce([])).toEqual(0)
      })

      test('should return 0 for array of 0s', () => {
         expect(getTrappedRainwaterBruteForce([0, 0, 0, 0, 0])).toEqual(0)
      })

      test('should return 0 for array of 0s with 1 in the middle', () => {
         expect(getTrappedRainwaterBruteForce([0, 0, 1, 0, 0])).toEqual(0)
      })

      test('should return 1 for array of 0s with 1 in the middle', () => {
         expect(getTrappedRainwaterBruteForce([0, 1, 0, 0, 0])).toEqual(0)
      })

      test('should return 8 for a given array', () => {
         expect(
            getTrappedRainwaterBruteForce([0, 1, 0, 1, 2, 1, 0, 3, 1, 0, 1, 2])
         ).toEqual(8)
      })
   })

   describe('getTrappedRainwaterOptimized', () => {
      test('should return 0 for empty array', () => {
         expect(getTrappedRainwaterOptimized([])).toEqual(0)
      })

      test('should return 0 for array of 0s', () => {
         expect(getTrappedRainwaterOptimized([0, 0, 0, 0, 0])).toEqual(0)
      })

      test('should return 0 for array of 0s with 1 in the middle', () => {
         expect(getTrappedRainwaterOptimized([0, 0, 1, 0, 0])).toEqual(0)
      })

      test('should return 1 for array of 0s with 1 in the middle', () => {
         expect(getTrappedRainwaterOptimized([0, 1, 0, 0, 0])).toEqual(0)
      })

      test('should return 8 for a given array', () => {
         expect(
            getTrappedRainwaterOptimized([0, 1, 0, 1, 2, 1, 0, 3, 1, 0, 1, 2])
         ).toEqual(8)
      })
   })
})
