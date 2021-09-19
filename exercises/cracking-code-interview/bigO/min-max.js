console.time("Recursive Sum");

const sum = (n) => {
  if (n === 1) {
    return 1;
  }
  return n + sum(n - 1);
};

console.log(`Answer for 2000 : ${sum(2000)}`);
console.timeEnd("Recursive Sum");

const numbers = [2, 33, 1, 55, 34343434334, 2, 3, 3, 3, 3, 7, 56, 100, 3];

console.time("Solution2");
const solution2 = (array) => {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  for (let n of array) {
    if (n < min) min = n;
  }

  for (let n of array) {
    if (n > max) max = n;
  }

  // console.log(array);
  console.log(`\n\nmin: ${min}   max: ${max}`);
};
solution2(numbers);
console.timeEnd("Solution2");

console.time("Solution1");
const solution1 = (array) => {
  let min = Number.MAX_VALUE;
  let max = Number.MIN_VALUE;

  for (let n of array) {
    if (n < min) min = n;
    if (n > max) max = n;
  }

  // console.log(array);
  console.log(`\n\nmin: ${min}   max: ${max}`);
};
solution1(numbers);
console.timeEnd("Solution1");
