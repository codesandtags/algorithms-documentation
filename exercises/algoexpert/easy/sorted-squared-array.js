// Time: O(n Log n)
// Space: O(n)
function sortedSquaredArray(array) {
   return array.map((number) => number * number).sort((a, b) => a - b)
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray

function sortedSquaredArray(array) {
   const sortedSquares = Array(array.length)
   let length = array.length
   let smallerValueIndex = 0
   let largerValueIndex = length - 1

   for (let index = length - 1; index >= 0; index--) {
      let smallerValue = array[smallerValueIndex]
      let largerValue = array[largerValueIndex]

      if (Math.abs(smallerValue) > Math.abs(largerValue)) {
         sortedSquares[index] = smallerValue * smallerValue
         smallerValueIndex++
      } else {
         sortedSquares[index] = largerValue * largerValue
         largerValueIndex--
      }
   }

   return sortedSquares
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray

function sortedSquaredArray(array) {
   let length = array.length
   const sortedSquares = Array(length)
   let leftIndex = 0
   let rightIndex = length - 1

   for (let index = length - 1; index >= 0; index--) {
      let leftSquared = Math.pow(array[leftIndex], 2)
      let rightSquared = Math.pow(array[rightIndex], 2)

      if (leftSquared > rightSquared) {
         sortedSquares[index] = leftSquared
         leftIndex++
      } else {
         sortedSquares[index] = rightSquared
         rightIndex--
      }
   }

   return sortedSquares
}

// Do not edit the line below.
exports.sortedSquaredArray = sortedSquaredArray
