/*
A classic example of a backtracking algorithm is solving a Sudoku puzzle.
Backtracking algorithms try to build a solution to a computational
problem incrementally, one small piece at a time.
When they realize that the current solution cannot possibly lead
to a successful end, they backtrack to try another path.

Trade-offs of Backtracking

Pros:
- Versatility: Backtracking algorithms are a straightforward way to solve complex combinatorial problems, such as puzzles, crosswords, and game solving.
- Simplicity: They are relatively simple to implement for problems where the solution space is not excessively large.

Cons:
- Performance: Backtracking can be very slow for problems with a large solution space because it explores each possibility, one by one. Its time complexity can be exponential in the worst case.
- Space Complexity: Although not always as significant as time complexity, backtracking can also consume a substantial amount of memory in storing the states or configurations of the problem being solved.
 */

function isSafe(board, row, col, num) {
   for (let x = 0; x < board.length; x++) {
      if (board[row][x] === num || board[x][col] === num) {
         return false
      }
   }
   const startRow = row - (row % 3),
      startCol = col - (col % 3)

   for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
         if (board[i + startRow][j + startCol] === num) {
            return false
         }
      }
   }
   return true
}

function solveSudoku(board) {
   let row = -1
   let col = -1
   let isEmpty = true
   for (let i = 0; i < 9; i++) {
      for (let j = 0; j < 9; j++) {
         if (board[i][j] === 0) {
            row = i
            col = j
            isEmpty = false
            break
         }
      }
      if (!isEmpty) {
         break
      }
   }
   if (isEmpty) {
      return true
   }
   for (let num = 1; num <= 9; num++) {
      if (isSafe(board, row, col, num)) {
         board[row][col] = num
         if (solveSudoku(board)) {
            return true
         }
         board[row][col] = 0
      }
   }
   return false
}

let board = [
   [5, 3, 0, 0, 7, 0, 0, 0, 0],
   [6, 0, 0, 1, 9, 5, 0, 0, 0],
   [0, 9, 8, 0, 0, 0, 0, 6, 0],
   [8, 0, 0, 0, 6, 0, 0, 0, 3],
   [4, 0, 0, 8, 0, 3, 0, 0, 1],
   [7, 0, 0, 0, 2, 0, 0, 0, 6],
   [0, 6, 0, 0, 0, 0, 2, 8, 0],
   [0, 0, 0, 4, 1, 9, 0, 0, 5],
   [0, 0, 0, 0, 8, 0, 0, 7, 9],
]

if (solveSudoku(board)) {
   console.log('Sudoku solved successfully!')
   console.log(board)
} else {
   console.log('No solution exists.')
}
