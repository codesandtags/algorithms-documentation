/**
 * Quick Sort:
 * 
 * Quick sort is a divide and conquer algorithm. 
 * It picks an element as pivot and partitions the given 
 * array around the picked pivot.
 * 
 * The key process in quickSort is partition().
 * 
 * Target Complexity:
 * time O(n log n)
 * space O(log n)
 * 
 * @param {*} array 
 */
function quickSort(array) {
  if (array.length < 2) {
    return array;
  }

  const pivot = array[array.length - 1];
  const leftArray = [];
  const rightArray = [];

  for (let i = 0; i < array.length - 1; i++) {
    if (array[i] < pivot) {
      leftArray.push(array[i]);
    } else {
      rightArray.push(array[i]);
    }
  }

  if (leftArray.length > 0 && rightArray.length > 0) {
    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  } else if (leftArray.length > 0) {
    return [...quickSort(leftArray), pivot];
  } else {
    return [pivot, ...quickSort(rightArray)];
  }
}

module.exports = quickSort;