/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
   const currentColor = image[sr][sc]

   if (currentColor !== color) {
      dfsFill(image, sr, sc, currentColor, color)
   }

   return image
}

/**
 * Apply recursivelly the fill to the image using the input
 */
function dfsFill(image, row, col, color, newColor) {
   if (image[row][col] === color) {
      image[row][col] = newColor
      if (row >= 1) dfsFill(image, row - 1, col, color, newColor)
      if (col >= 1) dfsFill(image, row, col - 1, color, newColor)
      if (row + 1 < image.length) dfsFill(image, row + 1, col, color, newColor)
      if (col + 1 < image[0].length)
         dfsFill(image, row, col + 1, color, newColor)
   }
}
