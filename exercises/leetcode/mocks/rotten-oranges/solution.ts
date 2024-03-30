const EMPTY = 0
const ROTTEN = 2
const FRESH = 1

function isValidSlot(x, y, grid) {
   return (
      x >= 0 &&
      y >= 0 &&
      x < grid.length &&
      y < grid[0].length &&
      grid[x][y] === FRESH
   )
}

function orangesRotting(grid: number[][]): number {
   let fresh = 0
   const queue: [number, number][] = []
   const directions: [number, number][] = [
      [1, 0], // Down
      [-1, 0], // Up
      [0, 1], // Right
      [0, -1], // Left
   ]

   // Find rotten oranges
   for (let i = 0; i < grid.length; i++) {
      for (let k = 0; k < grid[0].length; k++) {
         const currentSlot = grid[i][k]
         if (currentSlot === ROTTEN) {
            queue.push([i, k])
         } else if (currentSlot === FRESH) {
            fresh++
         }
      }
   }

   let minutesPassed = 0

   // BFS to rot neighbors = fresh oranges
   while (queue.length && fresh) {
      let currentLevel = queue.length

      for (let i = 0; i < currentLevel; i++) {
         // Dequeue
         const [x, y] = queue.shift()

         for (let [dx, dy] of directions) {
            const newX = x + dx
            const newY = y + dy

            if (isValidSlot(newX, newY, grid)) {
               grid[newX][newY] = ROTTEN
               fresh--
               queue.push([newX, newY])
            }
         }
      }

      minutesPassed++
   }

   if (fresh !== 0) {
      return -1
   }

   return minutesPassed
}
