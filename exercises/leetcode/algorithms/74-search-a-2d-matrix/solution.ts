function searchMatrix(matrix: number[][], target: number): boolean {
   for (let i = 0; i < matrix.length; i++) {
      if (matrix[i][0] <= target && matrix[i][matrix[i].length - 1] >= target) {
         return binarySearch(matrix[i], target)
      }
   }

   return false
}

function binarySearch(arr: number[], target: number): boolean {
   let start: number = 0
   let end: number = arr.length

   while (start <= end) {
      const middle: number = Math.floor((start + end) / 2)
      if (arr[middle] === target) {
         return true
      } else if (arr[middle] > target) {
         end = middle - 1
      } else {
         start = middle + 1
      }
   }

   return false
}
