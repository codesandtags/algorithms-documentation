/**
 * Selection sort algorithm
 * 
 * time O(n^2)
 * space O(1) 
 * @param {*} array 
 * @returns 
 */
function selectionSort(array) {
  const LENGTH = array.length;

  for (let i = 0; i < LENGTH - 1; i++) {
    let lowestNumberIndex = i;
    for (let k = i + 1; k < LENGTH; k++) {
      if (array[k] < array[lowestNumberIndex]) {
        lowestNumberIndex = k;
      }
    }

    if (lowestNumberIndex != i) {
      let temp = array[i];
      array[i] = array[lowestNumberIndex];
      array[lowestNumberIndex] = temp;
    }
  }
  return array;
}

module.exports = selectionSort
