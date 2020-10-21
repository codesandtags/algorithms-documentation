// 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
// the pattern of the sequence is that each value is the sum of the 2 previous values, that means that for N=5 → 2+3

let operations = 0;
let operationsMemoized = 0;

function fibonacci(n) {
  operations++;
  if (n < 2) {
    return n;
  }

  return fibonacci(n - 2) + fibonacci(n - 1);
}

function fibonacciMemoized() {
  const cache = {};

  return function fib(n) {
    if (n in cache) {
      return cache[n];
    }

    operationsMemoized++;
    if (n < 2) {
      return n;
    }

    cache[n] = fib(n - 2) + fib(n - 1);
    return cache[n];
  };
}

const fibMemoized = fibonacciMemoized();

// fibonacci(2); // 1
// fibonacci(5); // 5
// fibonacci(8); // 21
// fibonacci(12); // 144

console.time("Fibonacci recursive");
console.log("Fib:", fibonacci(40)); // 102334155
console.timeEnd("Fibonacci recursive");

console.time("Fibonacci memoized");
console.log("Fib:", fibMemoized(40)); // 102334155
console.timeEnd("Fibonacci memoized");
