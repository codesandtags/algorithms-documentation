const DIRECTIONS = {
   UP: [0, 1],
   DOWN: [0, -1],
   LEFT: [1, 0],
   RIGHT: [-1, 0],
}

/**
 * Using backtracking reviews the board and if the word is found
 * then return a true, if not by default is false.
 */
function exist(board: string[][], word: string): boolean {
   const rows = board.length
   const cols = board[0].length

   for (let row = 0; row < rows; row++) {
      for (let col = 0; col < cols; col++) {
         if (backtrack(board, row, col, word, 0)) {
            return true
         }
      }
   }

   return false
}

function isValidPosition(board, row, col, word, index): boolean {
   return (
      row >= 0 &&
      row < board.length &&
      col >= 0 &&
      col < board[0].length &&
      board[row][col] === word[index]
   )
}

function backtrack(
   board: string[][],
   row: number,
   col: number,
   word: string,
   index: number
): boolean {
   // Step 1: Check the bottom case
   if (index >= word.length) {
      return true
   }

   // Step 2: Check boundaries
   if (!isValidPosition(board, row, col, word, index)) {
      return false
   }

   // Step 3: Explore neighboars using a DFS
   // Mark path before exploration
   board[row][col] = '#'

   for (const direction in DIRECTIONS) {
      const [x, y] = DIRECTIONS[direction]

      if (backtrack(board, row + x, col + y, word, index + 1)) {
         return true
      }
   }

   // Step 4: Clean up and return the result
   board[row][col] = word[index]

   return false
}
