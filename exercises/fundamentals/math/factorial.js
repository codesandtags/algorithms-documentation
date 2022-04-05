/**
 * https://en.wikipedia.org/wiki/Factorial
 *
 * In mathematics, the factorial of a non-negative integer n, denoted by n!, is the product of all positive integers less than or equal to n:
 *
 * n! = 1 * 2 * 3 * ... * n
 */

function factorial(n) {
  if (n < 0) return -1;
  if (n <= 1) return 1;

  return n * factorial(n - 1);
}

function getFactorialGivenANumber(n) {
  let factorial = 1;
  for (let i = 1; i <= n; i++) {
    factorial *= i;
  }

  return factorial;
}

console.log(factorial(20));

console.log(getFactorialGivenANumber(20));
