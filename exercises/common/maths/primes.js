// https://dev.to/priyanka__488/number-theory-primality-test-in-o-sqrt-n-dde
function isPrime(n) {
  if (n <= 2) return true;

  for (let i = 2; i * i <= n; i++) {
    if (n % i === 0) return false;
  }

  return true;
}

function getPrimes(n) {
  let primes = [];

  for (let i = 2; i <= n; i++) {
    if (isPrime(i)) {
      // console.log('n PRIME => ', i);
      primes.push(i);
    }
  }

  return primes;
}

// Eficient solution: https://es.wikipedia.org/wiki/Criba_de_Erat%C3%B3stenes
function sieveOfEratosthenes(n) {
  let sieve = new Array(n).fill(true);
  let length = Math.sqrt(n);
  let primes = [];

  // Creates the sieveOfEratosthenes
  for (let i = 2; i < length; i++) {
    if (sieve[i]) {
      for (let k = i * i; k < n; k += i) {
        // console.log(`${k} is multiple of ${i}`);
        sieve[k] = false;
      }
    }
  }

  // Iterates the sieve and get the primes
  for (let i = 2; i < n; i++) {
    if (sieve[i]) {
      primes.push(i);
    }
  }

  return primes;
}

// 1.000.000
var N = 10000000;
console.time("primes");
console.log(`Primes for ${N}`);
//console.log(`Primes with normal algorithm:`, getPrimes(N));
console.log(`Primes with sieve Of Erastothenes : `, sieveOfEratosthenes(N));
console.timeEnd("primes");
