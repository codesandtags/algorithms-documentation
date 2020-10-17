/**
 * https://www.hackerrank.com/challenges/ctci-array-left-rotation/problem?h_l=interview&playlist_slugs%5B%5D=interview-preparation-kit&playlist_slugs%5B%5D=arrays
 */

// Complete the rotLeft function below.
function rotLeft(array, rotations) {
  for (let i = 0; i < rotations; i++) {
    array.push(array.shift());
  }

  return array;
}
