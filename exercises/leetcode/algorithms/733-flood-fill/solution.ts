function floodFill(
   image: number[][],
   sr: number,
   sc: number,
   color: number
): number[][] {
   const currentColor = image[sr][sc]
   if (currentColor !== color) {
      // Apply recursivelly the fill to the image using the input
      dfsFill(image, sr, sc, currentColor, color)
   }

   return image
}

function dfsFill(
   image: number[][],
   row: number,
   col: number,
   color: number,
   newColor: number
) {
   if (image[row][col] === color) {
      image[row][col] = newColor
      if (row >= 1) dfsFill(image, row - 1, col, color, newColor)
      if (col >= 1) dfsFill(image, row, col - 1, color, newColor)
      if (row + 1 < image.length) dfsFill(image, row + 1, col, color, newColor)
      if (col + 1 < image[0].length)
         dfsFill(image, row, col + 1, color, newColor)
   }
}
