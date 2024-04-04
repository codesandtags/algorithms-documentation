function sortedSquares(nums: number[]): number[] {
   const squares = nums.map((num) => num * num)
   squares.sort((a, b) => a - b)

   return squares
}
