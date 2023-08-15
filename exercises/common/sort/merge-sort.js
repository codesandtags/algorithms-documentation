/**
 * Merge sort is a divide and conquer algorithm that divides a 
 * list into equal halves until it has two single elements and then merges the sub-lists until the entire list has been reassembled in order. 
 * 
 * The algorithm is as follows:
 * 
 * 1. Find the middle point to divide the array into two halves:
 * middle m = (l+r)/2
 * 2. Call mergeSort for first half:
 * Call mergeSort(arr, l, m)
 * 3. Call mergeSort for second half:
 * Call mergeSort(arr, m+1, r)
 * 4. Merge the two halves sorted in step 2 and 3:
 * Call merge(arr, l, m, r)
 * 
 * time O(n log n)
 * space O(n)
 * @param {*} array 
 */
function mergeSort(array) {
  if (array.length === 1) {
    return array;
  }

  const LENGTH = array.length;
  const middle = Math.floor(LENGTH / 2);
  const left = array.slice(0, middle);
  const right = array.slice(middle);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  const result = [];
  
  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      result.push(left.shift())
    } else {
      result.push(right.shift())
    }
  }

  return result.concat(left, right);
}

module.exports = mergeSort;