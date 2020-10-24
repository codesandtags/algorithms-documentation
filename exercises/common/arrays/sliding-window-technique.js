/**
 * Get the max sum subarray of a fixed k
 *
 * Example:
 *  [4, 2, 1, 7, 8, 1, 2, 8, 0];
 */

function findMaxSumSubArrayOld(array, k) {
  let maxValue = 0;
  let currentSum = 0;

  for (let i = 0; i < array.length - 3; i++) {
    const subArray = array.slice(i, i + k);
    currentSum = subArray.reduce((acc, current) => acc + current, 0);
    maxValue = Math.max(currentSum, maxValue);
  }

  return maxValue;
}

function findMaxSumSubarray(array, k) {
  let maxValue = 0;
  let currentRunningSum = 0;

  for (let i = 0; i < array.length; i++) {
    currentRunningSum += array[i];

    if (i >= k - 1) {
      maxValue = Math.max(maxValue, currentRunningSum);
      currentRunningSum -= array[i - (k - 1)];
    }
  }

  return maxValue;
}

let array = [4, 2, 1, 7, 8, 1, 2, 8, 0];
let k = 3;

console.time("Execution");
console.log("The max sum subarray is ", findMaxSumSubarray(array, k));
//console.log("The max sum subarray is ", findMaxSumSubArrayOld(array, k));
console.timeEnd("Execution");
