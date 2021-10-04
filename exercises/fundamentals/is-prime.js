/**
 * https://en.wikipedia.org/wiki/Prime_number
 *
 * A prime number (or a prime) is a natural number greater than 1 that is not a product of two smaller natural numbers. A natural number greater than 1 that is not prime is called a composite number.
 */

function isPrime(n) {
  for (let x = 2; x * x <= n; x++) {
    if (n % x === 0) {
      return false;
    }
  }

  return true;
}

// Tests
// Iterate numbers from 2 to 1000
let primeNumbers = [];
let compositeNumbers = [];

for (let i = 2; i <= 1000; i++) {
  if (isPrime(i)) {
    primeNumbers.push(i);
  } else {
    compositeNumbers.push(i);
  }
}

console.log(`Total (${primeNumbers.length}) Prime numbers: ${primeNumbers}`);
console.log(
  `Total (${compositeNumbers.length}) Composite numbers: ${compositeNumbers}`
);
