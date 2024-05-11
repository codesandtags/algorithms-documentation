/**
 * @param {number[]} arr
 * @param {number} k
 * @return {number[]}
 */
var kthSmallestPrimeFraction = function (arr, k) {
   let left = 0,
      right = 1
   let res = []

   while (left <= right) {
      let mid = left + (right - left) / 2
      let j = 1,
         total = 0,
         num = 0,
         den = 0
      let maxFrac = 0
      const n = arr.length
      for (let i = 0; i < n; i++) {
         while (j < n && arr[i] > arr[j] * mid) {
            j++
         }
         total += n - j
         if (j < n && maxFrac < (arr[i] * 1.0) / arr[j]) {
            maxFrac = (arr[i] * 1.0) / arr[j]
            num = i
            den = j
         }
      }
      if (total === k) {
         res = [arr[num], arr[den]]
         break
      }
      if (total > k) {
         right = mid
      } else {
         left = mid
      }
   }
   return res
}
