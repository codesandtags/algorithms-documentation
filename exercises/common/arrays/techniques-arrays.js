/**
 * Techniques to iterate through un array
 */

/**
 * Technique 1: Two pointers
 *
 * Description: Use two pointers to iterate through the array
 *
 * Time: O(n)
 * Space: O(1)
 */
function twoPointers(array) {
   let left = 0
   let right = array.length - 1

   while (left < right) {
      console.log({
         left: array[left],
         right: array[right],
      })
      left++
      right--
   }
}

const array = [7, 1, 2, 6, 4, 3, 2, 88, 1, 2]
console.log('\n Two pointers Technique')
console.log({
   array,
})
twoPointers(array)

/**
 * Technique 2: Sliding window
 *
 * Description: Use two pointers to iterate through the array,
 * like moving a window through the array
 */
function slidingWindow(array, windowSize) {
   let left = 0
   let right = 0

   while (right < array.length) {
      const chunk = array.slice(left, right + 1).reverse()
      console.log({
         windowSize,
         left: `${left} : ${array[left]}`,
         right: `${right} : ${array[right]}`,
         windowSpace: chunk,
      })
      if (right >= windowSize - 1) {
         // Here you can do something with the window
         console.log('--> Moving window -->')
         // Start moving the left side
         left++
      }

      // Move the right side
      right++
   }
}

const arrayEmojis = ['🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🐻', '🐼']
const windowSize = 3
console.log('\n Sliding window Technique')
console.log({
   array: arrayEmojis,
   windowSize,
})

slidingWindow(arrayEmojis, windowSize)

/**
 * Technique 3: Sliding window with a map
 *
 * Description: Use two pointers to iterate through the array,
 * like moving a window through the array
 */
function getMaxSumInArraySubset(array, subsetSize) {
   let left = 0
   let right = 0
   let maxSum = 0
   let windowSum = 0

   while (right < array.length) {
      windowSum += array[right]

      console.log({
         array,
         subsetSize,
         left,
         right,
         windowSum,
         maxSum,
      })

      if (right >= subsetSize - 1) {
         maxSum = Math.max(maxSum, windowSum)
         windowSum -= array[left]
         left++
      }

      right++
   }

   return maxSum
}

// Test getMaxSumInArraySubset
const arrayNumbers = [2, 1, 5, 1, 3, 2]
const subsetSize = 3
console.log('\n getMaxSumInArraySubset Technique')
console.log({
   array: arrayNumbers,
   subsetSize,
   maxSum: getMaxSumInArraySubset(arrayNumbers, subsetSize),
})

getMinSumInArraySubset = (array, subsetSize) => {
   let left = 0
   let right = 0
   let minSum = Infinity
   let windowSum = 0

   while (right < array.length) {
      windowSum += array[right]

      console.log({
         array,
         subsetSize,
         left,
         right,
         windowSum,
         minSum,
      })

      if (right >= subsetSize - 1) {
         minSum = Math.min(minSum, windowSum)
         windowSum -= array[left]
         left++
      }

      right++
   }

   return minSum
}

// Test getMinSumInArraySubset
const arrayNumbers2 = [2, 1, 5, 1, 3, 2]
const subsetSize2 = 2
console.log('\n getMinSumInArraySubset Technique')
console.log({
   array: arrayNumbers2,
   subsetSize: subsetSize2,
   minSum: getMinSumInArraySubset(arrayNumbers2, subsetSize2),
})
