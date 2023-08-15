/**
 * Insertion sort: 
 * You could use this algorithm if you were sorting live 
 * data as it comes in, with small data sets, or if you
 * were sorting an array that was almost sorted already.
 * 
 * time O(n^2)
 * space O(1)
 * @param {*} array 
 */
function insertionSort(array) {
  const LENGTH = array.length;

  for (let i = 1; i < LENGTH; i++) {
    if (array[i] < array[0]) {
      // move number to the first position
      array.unshift(array.splice(i, 1)[0]);
    } else {
      // find where number should go
      for (let k = 1; k < i; k++) {
        if (array[i] > array[k - 1] && array[i] < array[k]) {
          // move number to the right spot
          array.splice(k, 0, array.splice(i, 1)[0]);
        }
      }
    }
  }

  return array;
}

module.exports = insertionSort