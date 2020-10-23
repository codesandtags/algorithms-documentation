// Complete the primality function below.
function primality(n) {
  if (n < 2 || (n % 2 == 0 && n !== 2)) return "Not prime";

  let isPrime = true;
  let length = parseInt(Math.sqrt(n));

  for (let i = 2; i <= length; i++) {
    if (n % i == 0) {
      return "Not prime";
    }
  }

  return "Prime";
}
