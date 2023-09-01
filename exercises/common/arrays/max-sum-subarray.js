/**
 * Given an array of integers and a positive integer k, find the maximum sum of any contiguous subarray of length k.
 * Time: O(n)
 * Space: O(1)
 *
 * Use sliding window technique
 */
function maxSumSubarray(arr, k) {
   let left = 0
   let right = 0
   let maxSum = 0
   let windowSum = 0

   while (right < arr.length) {
      windowSum += arr[right]

      console.log({
         arr,
         k,
         left,
         right,
         windowSum,
         maxSum,
      })

      if (right >= k - 1) {
         maxSum = Math.max(maxSum, windowSum)
         windowSum -= arr[left]
         left++
      }

      right++
   }

   return maxSum
}

const arr = [2, 1, 5, 1, 3, 2]
const k = 3
console.log(maxSumSubarray(arr, k)) // Output: 9
