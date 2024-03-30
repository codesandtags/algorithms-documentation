/*
A simpler and commonly used example to illustrate backtracking is the N-Queens puzzle. The N-Queens puzzle is a classic problem where you need to place N chess queens on an N×N chessboard so that no two queens threaten each other. This means that no two queens can be in the same row, column, or diagonal.

Problem Explanation

Goal: Place N queens on an N×N chessboard.
Constraints: No two queens can be on the same row, column, or diagonal.

Approach
The solution uses backtracking by placing a queen in a row and moving onto the next row recursively. If a conflict is detected (i.e., two queens can attack each other), the algorithm backtracks, moving the previous queen to a new position.

Explanation

Initialization: An empty board is created, represented by a 2D array filled with . to indicate empty spaces.

Recursion and Backtracking:

The placeQueens function tries to place a queen on each row. For each row, it tries every column by checking if placing a queen there is safe (isSafe function).
If it's safe, the queen is placed (Q), and the function recursively tries to place a queen in the next row.
If placing a queen leads to a situation where no further queens can be placed without conflict, the function backtracks, removing the last placed queen (replaces Q with .), and tries the next column.
Solution Accumulation: Once all queens are placed (i.e., when row === board.length), the current board configuration is added to the list of solutions.
Completion: The process repeats until all possible board configurations are tried. The function returns all successful configurations.

Trade-offs of this Approach
Pros:
- Universal: The backtracking algorithm is a general approach that can solve constraint satisfaction problems.
- Space Efficient: It uses a single board to try all configurations, modifying its state as it progresses through the solution space.

Cons:
- Time Complexity: The algorithm has an exponential time complexity, as it explores the entire solution space in the worst case.
- Scalability: For large values of N, the number of possible board configurations becomes vast, making the algorithm impractical.
 */

function solveNQueens(n) {
   const board = Array.from({ length: n }, () => Array(n).fill('.'))
   const solutions = []
   placeQueens(board, 0, solutions)
   return solutions
}

function placeQueens(board, row, solutions) {
   if (row === board.length) {
      const copy = board.map((r) => r.join(''))
      solutions.push(copy)
      return
   }

   for (let col = 0; col < board.length; col++) {
      if (isSafe(board, row, col)) {
         board[row][col] = 'Q' // Place queen
         placeQueens(board, row + 1, solutions)
         board[row][col] = '.' // Remove queen (backtrack)
      }
   }
}

function isSafe(board, row, col) {
   for (let i = 0; i < row; i++) {
      if (board[i][col] === 'Q') {
         return false // Check column
      }
   }
   for (let i = row, j = col; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] === 'Q') {
         return false // Check left diagonal
      }
   }
   for (let i = row, j = col; i >= 0 && j < board.length; i--, j++) {
      if (board[i][j] === 'Q') {
         return false // Check right diagonal
      }
   }
   return true
}

const solutions = solveNQueens(4)
console.log(solutions) // Display all solutions
