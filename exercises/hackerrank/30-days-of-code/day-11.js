function getSumHourglass(arr) {
  var sum = 0;
  arr.forEach((row) => {
    row.forEach((num, i) => {
      sum += num;
    });
  });

  return sum;
}

function main() {
  let arr = Array(6);

  for (let i = 0; i < 6; i++) {
    arr[i] = readLine()
      .split(" ")
      .map((arrTemp) => parseInt(arrTemp, 10));
  }

  let border = 2,
    firstTime = true,
    maxSum = 0;
  for (let i = 0; i < arr.length - border; i++) {
    for (let x = 0; x < arr.length - border; x++) {
      let hourglass = [],
        sum = 0;

      hourglass[0] = [arr[i][x], arr[i][x + 1], arr[i][x + 2]];
      hourglass[1] = [arr[i + 1][x + 1]];
      hourglass[2] = [arr[i + 2][x], arr[i + 2][x + 1], arr[i + 2][x + 2]];
      sum = getSumHourglass(hourglass);

      if (sum >= maxSum || firstTime) {
        maxSum = sum;
        firstTime = false;
      }
    }
  }

  console.log(maxSum);
}
