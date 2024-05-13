function matrixScore(grid: number[][]): number {
   const rows: number = grid.length
   const cols: number = grid[0].length

   // Toggle rows
   for (let r = 0; r < rows; r++) {
      if (grid[r][0] === 0) {
         for (let c = 0; c < cols; c++) {
            grid[r][c] = 1 - grid[r][c]
         }
      }
   }

   // Count zeroes in columns
   const counts: Map<number, number> = new Map()
   for (let c = 1; c < cols; c++) {
      for (let r = 0; r < rows; r++) {
         if (grid[r][c] === 0) {
            counts.set(c, (counts.get(c) || 0) + 1)
         }
      }
   }

   // Calculate score
   let res: number = rows * Math.pow(2, cols - 1)
   for (let c = 1; c < cols; c++) {
      const count: number = counts.get(c) || 0
      res += Math.max(count, rows - count) * Math.pow(2, cols - c - 1)
   }

   return res
}
