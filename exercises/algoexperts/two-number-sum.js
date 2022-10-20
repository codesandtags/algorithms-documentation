// Solution 1
// Time: O(n)
// Space: O(n)
function twoNumberSum(array, targetSum) {
   const nums = {}

   for (let n of array) {
      const current = targetSum - n
      if (nums[current]) {
         return [n, current]
      }
      nums[n] = true
   }

   return []
}

// Solution 2
// Time: O(n^2)
// Space: O(1)
function twoNumberSum(array, targetSum) {
   for (let i = 0; i < array.length; i++) {
      const firstNum = array[i]
      for (let k = i + 1; k < array.length; k++) {
         const secondNum = array[k]
         if (firstNum + secondNum === targetSum) {
            return [firstNum, secondNum]
         }
      }
   }

   return []
}

// Solution 3
// Space: O(n long n)
// Time: O(n)
function twoNumberSum(array, targetSum) {
   // Write your code here.
   array.sort((a, b) => a - b)

   let left = 0
   let right = array.length - 1
   while (left < right) {
      let currentSum = array[left] + array[right]
      if (currentSum === targetSum) {
         return [array[left], array[right]]
      } else if (currentSum < targetSum) {
         left += 1
      } else {
         right -= 1
      }
   }
   return []
}
