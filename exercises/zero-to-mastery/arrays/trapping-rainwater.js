/**
 * Given an array of integers representing an elevation map,
 * where the width of each bar is 1, return how much
 * rainwater can be trapped.
 */

// Time: O(n)
// Space: O(1)
function getTrappedRainwaterOptimized(heights) {
   let left = 0,
      right = heights.length - 1,
      totalWater = 0,
      maxLeft = 0,
      maxRight = 0

   while (left < right) {
      if (heights[left] <= heights[right]) {
         if (heights[left] >= maxLeft) {
            maxLeft = heights[left]
         } else {
            totalWater += maxLeft - heights[left]
         }
         left++
      } else {
         if (heights[right] >= maxRight) {
            maxRight = heights[right]
         } else {
            totalWater += maxRight - heights[right]
         }
         right--
      }
   }

   return totalWater
}

// Time: O(n^2)
// Space: O(1)
const getTrappedRainwaterBruteForce = function (heights) {
   let totalWater = 0

   for (let p = 0; p < heights.length; p++) {
      let leftP = p,
         rightP = p,
         maxLeft = 0,
         maxRight = 0

      while (leftP >= 0) {
         maxLeft = Math.max(maxLeft, heights[leftP])
         leftP--
      }

      while (rightP < heights.length) {
         maxRight = Math.max(maxRight, heights[rightP])
         rightP++
      }

      const currentWater = Math.min(maxLeft, maxRight) - heights[p]

      if (currentWater >= 0) {
         totalWater += currentWater
      }
   }

   return totalWater
}

module.exports = {
   getTrappedRainwaterBruteForce,
   getTrappedRainwaterOptimized,
}
