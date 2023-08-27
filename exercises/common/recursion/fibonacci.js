/*
https://en.wikipedia.org/wiki/Fibonacci_sequence
Fibonacci sequence
fib 0 => 0
fib 1 => 1
fib 2 => 1
fib 3 => 2
fib 4 => 3
fib 5 => 5
fib 6 => 8
fib 7 => 13
fib 8 => 21
fib 9 => 34
fib 10 => 55
*/
function fibonacciRecursion(n) {
   if (n <= 2) {
      return n
   }
   return fibonacciRecursion(n - 2) + fibonacciRecursion(n - 1)
}

function fibonacciLoop(n) {
   const nums = [0, 1]

   for (let index = 2; index <= n; index++) {
      nums[index] = nums[index - 2] + nums[index - 1]
   }

   return nums[n]
}

function fibonacciBitnet(n) {
   var sqRootOf5 = Math.sqrt(5)

   var Phi = (1 + sqRootOf5) / 2
   var phi = (1 - sqRootOf5) / 2

   return Math.round((Math.pow(Phi, n) - Math.pow(phi, n)) / sqRootOf5)
}

function fibonacciMemoization(n, memo = {}) {
   if (memo[n]) {
      return memo[n]
   }

   if (n <= 2) {
      return 1
   }

   memo[n] =
      fibonacciMemoization(n - 1, memo) + fibonacciMemoization(n - 2, memo)

   return memo[n]
}

for (let i = 0; i < 15; i++) {
   console.log({
      [i]: fibonacciRecursion(i),
   })
}

for (let i = 0; i < 15; i++) {
   console.log({
      [i]: fibonacciLoop(i),
   })
}

for (let i = 0; i < 15; i++) {
   console.log({
      [i]: fibonacciBitnet(i),
   })
}

for (let i = 0; i < 15; i++) {
   console.log({
      [i]: fibonacciMemoization(i),
   })
}
