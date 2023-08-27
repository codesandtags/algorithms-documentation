/**
 * Fibonacci implementation that returns list of numbers
 * time: O(N)
 * space: O(N)
 **/
function getNthFib(n) {
   const numbers = [0, 1]

   for (let i = 2; i <= n; i++) {
      numbers.push(numbers[i - 2] + numbers[i - 1])
   }

   return numbers[n - 1]
}

// Do not edit the line below.
exports.getNthFib = getNthFib
