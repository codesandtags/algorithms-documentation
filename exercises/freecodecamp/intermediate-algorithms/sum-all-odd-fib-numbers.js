let fibCache = {};

function fib(n) {
  if (n === 0) return 0;
  if (n === 1) return 1;
  if (fibCache[n]) {
    return fibCache[n];
  }

  fibCache[n] = fib(n - 1) + fib(n - 2);

  return fibCache[n];
}

function sumFibs(num) {
  let nums = [];

  for (let i = 1, f = 1; f <= num; i++) {
    f = fib(i);
    if (f % 2 !== 0 && f <= num) {
      nums.push(f);
    }
  }

  console.log(nums);
  return nums.reduce((acc, n) => acc + n, 0);
}

//console.time("sumFibs");
//console.log(sumFibs(4000000));
//console.timeEnd("sumFibs");

function sumFibs2(num) {
  // Perform checks for the validity of the input
  if (num <= 0) return 0;

  // Create an array of fib numbers till num
  const arrFib = [1, 1];
  let nextFib = 0;

  // We put the new Fibonacci numbers to the front so we
  // don't need to calculate the length of the array on each
  while ((nextFib = arrFib[0] + arrFib[1]) <= num) {
    arrFib.unshift(nextFib);
  }

  // We filter the array to get the odd numbers and reduce them to get their sum.
  return arrFib.filter((x) => x % 2 != 0).reduce((a, b) => a + b);
}

function sumFibs3(num) {
  let prevNumber = 0;
  let currNumber = 1;
  let result = 0;
  while (currNumber <= num) {
    if (currNumber % 2 !== 0) {
      result += currNumber;
    }
    console.log("current => ", currNumber);
    currNumber += prevNumber;
    prevNumber = currNumber - prevNumber;
  }

  return result;
}

sumFibs3(10);
