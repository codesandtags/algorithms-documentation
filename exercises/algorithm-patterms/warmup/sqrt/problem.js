/*
 * @param {dataType} variableName
 * @return {dataType} description
 *
 * time complexity: O(log(x))
 * space complexity: O(1)
 */
class Solution {
   mySqrt(x) {
      if (x < 0) return NaN
      if (x < 2) return x // return x if it is 0 or 1

      let left = 2
      let right = Math.floor(x / 2) // initialize left and right pointers
      let pivot
      let num // use long to store result of pivot * pivot to prevent overflow
      while (left <= right) {
         // binary search for the square root
         pivot = Math.floor(left + (right - left) / 2) // find the middle element
         num = pivot * pivot
         if (num > x)
            right = pivot - 1 // if pivot * pivot is greater than x, set right to pivot - 1
         else if (num < x)
            left = pivot + 1 // if pivot * pivot is less than x, set left to pivot + 1
         else return pivot // if pivot * pivot is equal to x, return pivot
      }

      return right // return right after the loop
   }
}

module.exports = Solution
