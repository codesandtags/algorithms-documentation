/***
 * Complete the getMoneySpent function below.
 * https://www.hackerrank.com/challenges/electronics-shop/problem?isFullScreen=true
 * time: O(k * d)
 * space: O(1)
 **/
function getMoneySpent(keyboards, drives, b) {
  keyboards.sort((a, b) => (a > b ? -1 : 1));
  drives.sort((a, b) => (a < b ? -1 : 1));
  let max = -1;

  for (let pk = 0; pk < keyboards.length; pk++) {
    for (let pd = 0; pd < drives.length; pd++) {
      if (keyboards[pk] + drives[pd] > b) break;
      if (keyboards[pk] + drives[pd] > max) {
        max = keyboards[pk] + drives[pd];
      }
    }
  }

  return max;
}

console.log(getMoneySpent([40, 50, 60], [5, 8, 12], 60)); // 58
console.log(getMoneySpent([3, 1], [5, 2, 8], 10)); // 9
console.log(getMoneySpent([4], [5], 5)); // -1
