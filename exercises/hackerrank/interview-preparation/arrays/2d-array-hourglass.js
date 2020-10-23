function getHourGlass(a) {
  const length = a.length;
  let max = undefined;

  for (let row = 0; row <= length - 3; row++) {
    for (let col = 0; col <= length - 3; col++) {
      const hourglass = [];
      // Top Hourglass
      hourglass.push(a[row][col]);
      hourglass.push(a[row][col + 1]);
      hourglass.push(a[row][col + 2]);
      // Middle Hourglass
      hourglass.push(a[row + 1][col + 1]);
      // Bottom Hourglass
      hourglass.push(a[row + 2][col]);
      hourglass.push(a[row + 2][col + 1]);
      hourglass.push(a[row + 2][col + 2]);

      const sum = hourglass.reduce((total, current) => total + current, 0);

      if (max === undefined) {
        max = sum;
      }

      if (sum > max) {
        max = sum;
      }
    }
  }

  return max;
}

var input1 = `-1 -1 0 -9 -2 -2
-2 -1 -6 -8 -2 -5
-1 -1 -1 -2 -3 -4
-1 -9 -2 -4 -4 -5
-7 -3 -3 -2 -9 -9
-1 -3 -1 -2 -4 -5`;

var array = input1
  .split("\n")
  .map((row) => row.split(" ").map((n) => Number(n)));

console.log(`The max hourglass is : ${getHourGlass(array)}`);
