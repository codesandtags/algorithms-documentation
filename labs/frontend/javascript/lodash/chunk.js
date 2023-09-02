/**
 * @template T
 * @param {Array<T>} array The array to process.
 * @param {number} [size=1] The length of each chunk.
 * @returns {Array<Array<T>>} The new array of chunks.
 */
function chunk(array, size = 1) {
   const chunks = []

   for (let index = 0; index < array.length; index += size) {
      chunks.push(array.slice(index, index + size))
   }

   return chunks
}

module.exports = {
   chunk,
}
