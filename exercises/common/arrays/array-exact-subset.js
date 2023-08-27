/**
 * Receive two arrays and evaluates if one is a exact subset of the other,
 * example:
 *
 * [1, 2, 3] is a exact subset of [1, 2, 3, 4, 5, 6]
 * [1, 2, 3, 4] is a exact subset of [1, 2, 3, 4, 5, 6]
 *
 * [1, 2, 4] is not a exact subset of [1, 2, 3, 4, 5, 6]
 *
 * @param {*} array1
 * @param {*} array2
 *
 * time complexity: O(n)
 * space complexity: O(n)
 */
function arrayExactSubset(arr1, arr2) {
   const largerArray = arr1.length >= arr2.length ? arr1 : arr2
   const smallerArray = arr1.length < arr2.length ? arr1 : arr2

   return largerArray.join('').indexOf(smallerArray.join('')) !== -1
}

module.exports = arrayExactSubset
