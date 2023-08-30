/**
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

/**
 * Rotate the array to the left by the number of rotations
 * @param {*} rotations
 * @param {*} array
 * @returns {*} array
 *
 * time O(n)
 * space O(1)
 */
function rotateLeft(rotations, array) {
   for (let i = 0; i < rotations; i++) {
      console.count('operations')
      array.push(array.shift())
   }

   return array
}

/**
 * Rotate the array to the left by the number of rotations
 * @param {*} rotations
 * @param {*} array
 * @returns {*} arr
 *
 * time O(n)
 * space O(n)
 */
function rotateLeft(rotations, array) {
   // What happends when the rotations are the same
   // as the length of the array?
   const LENGTH = array.length
   const rotated = []

   // What happends when the rotations are the same
   // as the length of the array?
   if (rotations === LENGTH || rotations % LENGTH === 0) {
      return array
   }

   for (let index = 0; index < LENGTH; index++) {
      const rotatedValue = (index - rotations) % LENGTH
      const rotationIndex =
         rotatedValue < 0 ? rotatedValue + LENGTH : rotatedValue
      rotated[rotationIndex] = array[index]
   }

   return rotated
}
