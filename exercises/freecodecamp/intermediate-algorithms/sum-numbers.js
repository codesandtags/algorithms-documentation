function sumAll(arr) {
  let sum = 0;

  for (let n = Math.min(...arr); n <= Math.max(...arr); n++) {
    sum += n;
  }

  return sum;
}

sumAll([1, 4]);
