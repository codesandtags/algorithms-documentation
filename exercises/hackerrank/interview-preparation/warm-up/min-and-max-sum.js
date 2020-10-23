function minAndMaxSum(numbers) {
  let max = 0;
  let min = (sum = numbers.reduce((acc, current) => acc + current, 0));

  for (let n of numbers) {
    if (sum - n > max) {
      max = sum - n;
    }
    if (sum - n < min) {
      min = sum - n;
    }
  }

  console.log(`${min} ${max}`);
}

var x = "1 2 3 4 5".split(" ").map(Number);
minAndMaxSum(x);
