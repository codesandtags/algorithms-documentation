/**
 * https://www.hackerrank.com/challenges/s10-basic-statistics/problem
 *
 * In this challenge, we practice calculating the mean, median, and mode. Check out the
 * Tutorial tab for learning materials and an instructional video!
 *
 * Mean = AVG
 * Median =
 * Mode =
 */

const getMean = (numbers) => {
  return (
    numbers.reduce((accumulator, current) => {
      return accumulator + current;
    }, 0) / numbers.length
  );
};

const sorterAsc = (a, b) => {
  if (a < b) return -1;
  if (a > b) return 1;
  return 0;
};

const getMediam = (numbers) => {
  const sortedNumbers = numbers.sort(sorterAsc);

  if (sortedNumbers.length % 2 !== 0) {
    const half = Math.floor(sortedNumbers.length / 2);
    return sortedNumbers[half];
  } else {
    const half = sortedNumbers.length / 2;
    return (sortedNumbers[half] + sortedNumbers[half - 1]) / 2;
  }
};

const getMode = (numbers) => {
  const countNumbers = numbers.reduce((count, current) => {
    if (count[current] === undefined) {
      count[current] = 0;
    }
    count[current]++;
    return count;
  }, {});

  let max = 0;
  let mode = 0;
  for (let number in countNumbers) {
    if (countNumbers[number] > max) {
      max = countNumbers[number];
      mode = number;
    }
  }

  return mode;
};

function processData(input) {
  const inputs = input.split("\n");
  const elements = parseInt(inputs[0]);
  const numbers = inputs[1].split(" ").map((n) => parseInt(n));

  // Constraints
  if (elements >= 10 && elements <= 2500 && elements === numbers.length) {
    // Answers
    console.log(getMean(numbers));
    console.log(getMediam(numbers));
    console.log(getMode(numbers));
    return;
  }

  console.log("ERROR");
}

process.stdin.resume();
process.stdin.setEncoding("ascii");
_input = "";
process.stdin.on("data", function (input) {
  _input += input;
});

process.stdin.on("end", function () {
  processData(_input);
});
