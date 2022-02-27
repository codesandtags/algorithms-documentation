/**
 * Given an array of intergers, return the indices of the numbers that add up to a given target
 *
 * Examples:
 * [1, 3, 7, 9, 2]    target = 11   result = [3, 4]
 * [1, 3, 7, 9, 2]    target = 99   result = null
 * []      target = 0   result = null
 * [1]     target = 1   result = null
 * [1,2]   target = 3   result = [0, 1]
 */

// https://leetcode.com/problems/two-sum/

// Brute solution
// T = O(N^2)
// S = O(1)
const getTwoNumbersSum = (nums, target) => {
  if (nums.length < 2) return null;

  for (let p1 = 0; p1 < nums.length; p1++) {
    const numberToFind = target - nums[p1];
    for (let p2 = p1 + 1; p2 < nums.length; p2++) {
      if (numberToFind === nums[p2]) {
        return [p1, p2];
      }
    }
  }

  return null;
};

console.info(getTwoNumbersSum([1, 3, 7, 9, 2], 11));
console.info(getTwoNumbersSum([1, 3, 7, 9, 2], 99));
console.info(getTwoNumbersSum([], 0));
console.info(getTwoNumbersSum([1], 1));
console.info(getTwoNumbersSum([1, 2], 3));

// Optmized solution
const getTwoNumbersOpmitzed = (nums, target) => {
  const numsMap = {};

  for (let p = 0; p < nums.length; p++) {
    const currentMapVal = numsMap[nums[p]];

    if (currentMapVal >= 0) {
      return [currentMapVal, p];
    }

    const numberToFind = target - nums[p];
    numsMap[numberToFind] = p;
  }

  return null;
};

console.info(getTwoNumbersOpmitzed([1, 3, 7, 9, 2], 11));
console.info(getTwoNumbersOpmitzed([1, 3, 7, 9, 2], 99));
console.info(getTwoNumbersOpmitzed([], 0));
console.info(getTwoNumbersOpmitzed([1], 1));
console.info(getTwoNumbersOpmitzed([1, 2], 3));
