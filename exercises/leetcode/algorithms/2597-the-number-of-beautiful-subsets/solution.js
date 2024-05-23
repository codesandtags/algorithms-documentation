var isSafe = function (nums, part, j, k) {
   for (let i = 0; i < part.length; i++) {
      if (Math.abs(nums[j] - part[i]) == k) {
         return false
      }
   }

   return true
}
let count = 0

var beautifulSubsets = function (nums, k) {
   count = 0
   part = []

   var subSetArr = function (i) {
      if (i >= nums.length) {
         count++
         return
      }
      if (isSafe(nums, part, i, k)) {
         part.push(nums[i])
         subSetArr(i + 1)
         part.pop()
      }
      subSetArr(i + 1)
   }

   subSetArr(0)
   return count - 1
}
