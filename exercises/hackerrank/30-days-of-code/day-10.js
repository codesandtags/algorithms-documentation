function main() {
  const n = parseInt(readLine(), 10);
  let answer = n
    .toString(2)
    .split(0)
    .reduce((max, num) => {
      if (num.length >= max.length) {
        max = num;
      }
      return max;
    }).length;

  console.log(answer);
}
