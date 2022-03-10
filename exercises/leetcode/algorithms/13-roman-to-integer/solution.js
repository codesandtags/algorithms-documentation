/**
 * https://leetcode.com/problems/roman-to-integer/
 * @param {string} s
 * @return {number}
 */
/**
 * @param {string} s
 * @return {number}
 *
 * time: O(N)
 * space: O(1)
 */
var romanToInt = function (s) {
  const romanNumbers = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let romanInteger = 0;

  for (let n = s.length - 1; n >= 0; n--) {
    let current = romanNumbers[s[n]];
    let last = romanNumbers[s[n + 1]];

    romanInteger =
      current < last ? romanInteger - current : romanInteger + current;
  }

  return romanInteger;
};

// Use Cases
console.log(romanToInt("III")); // 3
console.log(romanToInt("I")); // 1
console.log(romanToInt("VI")); // 6
console.log(romanToInt("IV")); // 4
console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 1994
