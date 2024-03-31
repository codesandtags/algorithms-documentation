/**
 * Problem: https://leetcode.com/contest/weekly-contest-284/problems/find-all-k-distant-indices-in-an-array/
 *
 * @param {number[]} nums
 * @param {number} key
 * @param {number} k
 * @return {number[]}
 */
var findKDistantIndices = function (nums, key, k) {
  const N = nums.length;
  const KDistant = new Set();
  let times = 0;

  for (let i = 0; i < N; i++) {
    for (let j = 0; j < N || nums[j] === key; j++) {
      if (nums[j] !== key) continue;
      const value = Math.abs(i - j);
      if (value <= k) {
        KDistant.add(i);
      }
    }
  }

  const answer = [...KDistant];
  answer.sort((a, b) => (a > b ? 1 : -1));
  return answer;
};

console.log(findKDistantIndices([3, 4, 9, 1, 3, 9, 5], 9, 1)); // [1,2,3,4,5,6]
console.log(findKDistantIndices([2, 2, 2, 2, 2], 2, 2)); // [1,2,3,4,5,6]

/**
    console.log({
        i,
        j,
        value,
        k,
    }); 
 **/
