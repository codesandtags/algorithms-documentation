function findMaxValue(grid: number[][], x: number, y: number): number {
   let maxNumber: number = 0

   for (let i = x; i < x + 3; i++) {
      for (let j = y; j < y + 3; j++) {
         maxNumber = Math.max(maxNumber, grid[i][j])
      }
   }

   return maxNumber
}

function largestLocal(grid: number[][]): number[][] {
   const N = grid.length
   const BOUNDARY = N - 2
   const maxLocal = Array.from({ length: BOUNDARY }, () =>
      Array(BOUNDARY).fill(0)
   )

   for (let x = 0; x < BOUNDARY; x++) {
      for (let y = 0; y < BOUNDARY; y++) {
         maxLocal[x][y] = findMaxValue(grid, x, y)
      }
   }

   return maxLocal
}
