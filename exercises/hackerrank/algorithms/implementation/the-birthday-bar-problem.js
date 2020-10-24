function birthday(s, d, m) {
  let ways = 0;
  let currentRuningSum = 0;

  for (let i = 0; i < s.length; i++) {
    currentRuningSum += s[i];

    if (i >= m - 1) {
      ways = currentRuningSum === d ? ways + 1 : ways;
      currentRuningSum -= s[i - (m - 1)];
    }
  }

  return ways;
}

let s = [1, 1, 1, 1, 1];
let d = 3;
let m = 2;

console.log(
  `The number of ways to divide the chocolate are: ${birthday(s, d, m)}`
);
