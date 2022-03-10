/**
 * https://leetcode.com/problems/palindrome-number/
 * @param {number} x
 * @return {boolean}
 *
 * time: O(n)
 * space: O(1)
 */
var isPalindrome = function (x) {
  const numbers = [...x.toString()];
  const N = numbers.length;

  for (let p = 0; p < N / 2; p++) {
    if (numbers[p] !== numbers[N - 1 - p]) {
      return false;
    }
  }
  return true;
};

/*
console.log(isPalindrome(123)); // false
console.log(isPalindrome(121)); // true
console.log(isPalindrome(1111)); // true
console.log(isPalindrome(11111)); // true
console.log(isPalindrome(115411)); // false
console.log(isPalindrome(-123)); // false
*/

var isPalindromeImproved = function (x) {
  if (x < 0 || (x % 10 == 0 && x != 0)) {
    return false;
  }

  let head = x;
  let tail = 0;

  while (head > tail) {
    tail = tail * 10 + (head % 10);
    head = Math.floor(head / 10);
  }

  return head === tail || head === Math.floor(tail / 10);
};

/*
console.log(isPalindromeImproved(123)); // false
console.log(isPalindromeImproved(121)); // true
console.log(isPalindromeImproved(11111)); // true
console.log(isPalindromeImproved(115411)); // false
console.log(isPalindromeImproved(9999)); // true
*/

function reverseNumber(number) {
  if (number <= 0) {
    return number;
  }

  while (number > 0) {
    console.log(number % 10);
    number = Math.floor(number / 10);
  }
}

reverseNumber(1234567890);
