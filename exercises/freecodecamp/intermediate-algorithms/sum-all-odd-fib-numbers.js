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

console.time("sumFibs");
console.log(sumFibs(75024));
console.timeEnd("sumFibs");
