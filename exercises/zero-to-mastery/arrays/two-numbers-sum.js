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

/** 
    Steps for solution:

    #####[ Step 1: Verify the constraints (Edge cases) ]#####
    Q: Are all the numbers positive or can there be negatives?
    A: Positive
    
    Q: Are there duplicate numbers in the array?
    A: No

    Q: Will there always be a solution available?
    A: No

    Q: What do we return if there's no solution?
    A: Just return null

    Q: Can there be multiple pairs that add up to the target?
    A: No, only 1 pair of number will add up to the target

    #####[ Step 2: Write out some test cases ]#####

    [1,3,7,9,2]     t = 11
    [1,2,3,4,5]     t = 25
    []              t = 3
    [5]             t = 8
    [5]             t = 5
    [1,6]           t = 7

    #####[ Step 3: Figure out a solution without code ]#####

    Number to find = Target - nums[p1]

    #####[ Step 4: Write out solution in code ]#####

    #####[ Step 5: Double check for errors ]#####

    #####[ Step 6: Test our code with our test cases ]#####

    #####[ Step 7: Space and time complexity ]#####

    #####[ Step 8: Optimize solution ]#####
     - Reduce the time complexity
     - Increase the space complexity

**/

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
// T = O(N)
// S = O(N)
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
