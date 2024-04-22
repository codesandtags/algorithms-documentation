const FULL_SQUARE = 4

function checkLeft(
   grid: number[][],
   row: number,
   col: number,
   perimeter: number
): number {
   return row > 0 && grid[row - 1][col] === 1 ? perimeter - 2 : perimeter
}

function checkUp(
   grid: number[][],
   row: number,
   col: number,
   perimeter: number
): number {
   return col > 0 && grid[row][col - 1] === 1 ? perimeter - 2 : perimeter
}

function islandPerimeter(grid: number[][]): number {
   let perimeter = 0

   for (let rows = 0; rows < grid.length; rows++) {
      for (let cols = 0; cols < grid[0].length; cols++) {
         if (grid[rows][cols] === 1) {
            perimeter += FULL_SQUARE
            perimeter = checkLeft(grid, rows, cols, perimeter)
            perimeter = checkUp(grid, rows, cols, perimeter)
         }
      }
   }

   return perimeter
}
