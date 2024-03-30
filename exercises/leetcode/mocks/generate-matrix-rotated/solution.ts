enum Direction {
   Right,
   Down,
   Left,
   Up,
}

function generateMatrixImproved(n: number): number[][] {
   const matrix: number[][] = Array.from(
      {
         length: n,
      },
      () => Array(n).fill(0)
   )
   let num = 1
   let directions = Direction.Right
   let top = 0,
      bottom = n - 1,
      left = 0,
      right = n - 1

   while (top <= bottom && left <= right) {
      switch (directions) {
         case Direction.Right:
            for (let i = left; i <= right; i++) {
               matrix[top][i] = num++
            }
            top++
            directions = Direction.Down
            break
         case Direction.Down:
            for (let i = top; i <= bottom; i++) {
               matrix[i][right] = num++
            }
            right--
            directions = Direction.Left
            break
         case Direction.Left:
            for (let i = right; i >= left; i--) {
               matrix[bottom][i] = num++
            }
            bottom--
            directions = Direction.Up
            break
         case Direction.Up:
            for (let i = bottom; i >= top; i--) {
               matrix[i][left] = num++
            }
            left++
            directions = Direction.Right
            break
      }
   }

   return matrix
}

function generateMatrix(n: number): number[][] {
   const matrix: number[][] = Array.from(
      {
         length: n,
      },
      () => Array(n).fill(0)
   )
   let num = 1

   // Directions
   let top = 0,
      bottom = n - 1,
      left = 0,
      right = n - 1

   while (left <= right && top <= bottom) {
      // Start moving right
      for (let r = left; r <= right; r++) {
         matrix[top][r] = num++
      }
      top++
      // Move down
      for (let d = top; d <= bottom; d++) {
         matrix[d][right] = num++
      }
      right--
      // Move left
      for (let l = right; l >= left; l--) {
         matrix[bottom][l] = num++
      }
      bottom--
      // Move up
      for (let u = bottom; u >= top; u--) {
         matrix[u][left] = num++
      }
      left++
   }

   return matrix
}
