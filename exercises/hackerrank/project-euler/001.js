// https://iq.opengenus.org/sum-of-multiples-of-3-and-5/
// https://www.lasclasesdegonzalo.com/sumarnumeros

function getMultiples3And5(number) {
  let sum = 0;

  for (let i = 1; i < number; i++) {
    if (i % 3 === 0 || i % 5 === 0) {
      sum += i;
    }
  }

  return sum;
}

/**
 * GCD: greatest common divisor
 *
 * Get the greatest common divisor between A & B
 */
function greatestCommonDivisor(a, b) {
  if (b === 0) {
    return a;
  }
  return greatestCommonDivisor(b, a % b);
}

function sumSerieMultiples(number, multiple) {
  number = parseInt(number / multiple);

  return BigInt((number * (1 + number) * multiple) / 2);
}

/**
 * The effienct solution is:  Sum(A)+Sum(B)-Sum(lcm(A, B)).
 *
 * @param {N} number
 */
function getSumMultiplesOfTwoNumbers(A, B, number) {
  number--;

  const commonMultiples = (A * B) / greatestCommonDivisor(A, B);
  return (
    sumSerieMultiples(number, A) +
    sumSerieMultiples(number, B) -
    sumSerieMultiples(number, commonMultiples)
  );
}

// console.log(getMultiples3And5(10)); // 23
// console.log(getMultiples3And5(100)); // 2318

console.log(getSumMultiplesOfTwoNumbers(5, 10, 100)); // 950
console.log(getSumMultiplesOfTwoNumbers(3, 5, 10)); // 23
console.log(getSumMultiplesOfTwoNumbers(3, 5, 100)); // 2318

// Hackerrank solution with BigInt

function main() {
  var t = BigInt(readLine());
  for (var a0 = 0; a0 < t; a0++) {
    var n = BigInt(readLine());
    n = n - 1n;
    var sum = BigInt(0);
    var temp1 = n / 3n,
      temp2 = n / 5n,
      temp3 = n / 15n;

    sum += (3n * temp1 * (temp1 + 1n)) / 2n;
    sum += (5n * temp2 * (temp2 + 1n)) / 2n;
    sum -= (15n * temp3 * (temp3 + 1n)) / 2n;

    console.log(sum.toString().substring(0, sum.toString().length));
  }
}
