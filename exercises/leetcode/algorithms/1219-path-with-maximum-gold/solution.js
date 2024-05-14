function getMaximumGold(grid) {
   let maxGold = 0

   const rows = grid.length
   const cols = grid[0].length

   // Iterate over each cell in the grid
   for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
         // If the cell contains gold, start DFS from this cell
         if (grid[i][j] > 0) {
            dfs(grid, i, j, 0)
         }
      }
   }

   function dfs(grid, row, col, currentGold) {
      // Check for out-of-bounds or empty cell
      if (
         row < 0 ||
         row >= rows ||
         col < 0 ||
         col >= cols ||
         grid[row][col] === 0
      ) {
         return
      }

      // Add the gold in the current cell to the current total
      currentGold += grid[row][col]
      // Update the maximum gold collected
      maxGold = Math.max(maxGold, currentGold)

      // Save the gold amount in the current cell and mark it as visited by setting it to 0
      const temp = grid[row][col]
      grid[row][col] = 0

      // Explore all 4 possible directions (up, down, left, right)
      dfs(grid, row - 1, col, currentGold)
      dfs(grid, row + 1, col, currentGold)
      dfs(grid, row, col - 1, currentGold)
      dfs(grid, row, col + 1, currentGold)

      // Restore the gold amount in the current cell
      grid[row][col] = temp
   }

   return maxGold
}
