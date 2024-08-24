/**
 * @param {number} divisor1
 * @param {number} divisor2
 * @param {number} uniqueCnt1
 * @param {number} uniqueCnt2
 * @return {number}
 */

function gcd(a, b) {
   return b == 0 ? a : gcd(b, a % b)
}

function l(a, b) {
   return (a * b) / gcd(a, b)
}

var minimizeSet = function (divisor1, divisor2, uniqueCnt1, uniqueCnt2) {
   let left = 1
   let right = Number.MAX_SAFE_INTEGER // Use MAX_SAFE_INTEGER instead of MAX_VALUE
   let lcm = l(divisor1, divisor2)
   let ans

   while (left <= right) {
      // Correct the binary search condition
      let mid = Math.floor((left + right) / 2)
      let a = mid - Math.floor(mid / divisor1)
      let b = mid - Math.floor(mid / divisor2)
      let c =
         mid -
         Math.floor(mid / divisor1) -
         Math.floor(mid / divisor2) +
         Math.floor(mid / lcm)

      if (
         a >= uniqueCnt1 &&
         b >= uniqueCnt2 &&
         a + b - c >= uniqueCnt1 + uniqueCnt2
      ) {
         ans = mid
         right = mid - 1
      } else {
         left = mid + 1
      }
   }

   return ans
}
