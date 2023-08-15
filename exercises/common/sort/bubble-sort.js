/**
 * Returns a sorted array using bubble sort algorithm
 * 
 * time O(n^2)
 * space O(1)
 * @param {*} array 
 */
function bubbleSort(array) {
  // console.log('bubbleSort', array);
  const LENGTH = array.length;

  for (let i = 0; i < LENGTH; i++) {
    for (let k = 0; k < LENGTH - i; k++) {
      if (array[k] > array[k + 1]) {
        const temp = array[k];
        array[k] = array[k + 1];
        array[k + 1] = temp;
      }
    }
  }

  return array;
}

module.exports = bubbleSort;