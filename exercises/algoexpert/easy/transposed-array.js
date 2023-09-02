function transposeMatrix(matrix) {
   // Get columsn and rows
   const rows = matrix.length
   const columns = matrix[0].length

   // Create a new array and transpose every element
   const transposed = new Array(columns).fill(null).map(() => [])

   // Add items
   for (let row = 0; row < rows; row++) {
      for (let column = 0; column < columns; column++) {
         transposed[column][row] = matrix[row][column]
      }
   }

   return transposed
}

// Do not edit the line below.
exports.transposeMatrix = transposeMatrix
