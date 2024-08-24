/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
   var beg = 0,
      end = x,
      ans = 0

   while (beg <= end) {
      var mid = Math.floor((beg + end) / 2)

      if (mid * mid > x) {
         end = mid - 1
      } else {
         // mid*mid <= x
         ans = mid
         beg = mid + 1
      }
   }
   return ans
}
