let primeCache = {
  1: true,
  2: true,
};

function isPrime(n) {
  if (n <= 1) return false;
  if (n <= 3) return true;
  if (primeCache.hasOwnProperty(n)) return primeCache[n];

  console.log(primeCache);

  for (let x = 2; x * x <= n; x++) {
    console.log(`number: ${n}, calculating: ${x}`);
    if (n % x === 0) {
      primeCache[n] = false;
      return primeCache[n];
    }
  }

  primeCache[n] = true;
  return primeCache[n];
}

function sumPrimes(num) {
  let sum = 0;

  console.time("primes");
  for (let i = 2; i <= num; i++) {
    let isP = isPrime(i);
    if (isP) {
      console.log(`isPrime ${i} : ${isP}`);
      sum += i;
    }
  }
  console.timeEnd("primes");

  return sum;
}

// console.log(sumPrimes(977));

console.log(sumPrimes(100));
