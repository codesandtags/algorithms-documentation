function getFrequency(arr) {
  return arr.reduce((frequency, current) => {
    if (frequency[current] === undefined) frequency[current] = 0;
    frequency[current]++;

    return frequency;
  }, {});
}

function migratoryBirds(birds) {
  const birdsFrequencySortedDest = Object.entries(getFrequency(birds)).sort(
    (a, b) => {
      return b[1] - a[1];
    }
  );
  console.log(birdsFrequencySortedDest);

  if (birdsFrequencySortedDest[0][1] > birdsFrequencySortedDest[1][1]) {
    return birdsFrequencySortedDest[0][0];
  }

  return Math.min(
    birdsFrequencySortedDest[0][0],
    birdsFrequencySortedDest[1][0]
  );
}

function migratoryBirds2(birds) {
  let max = 0;
  let maxBird = 0;
  const birdsFrequency = Object.entries(getFrequency(birds));

  for (let bird of birdsFrequency) {
    if (bird[1] > max) {
      max = bird[1];
      maxBird = bird[0];
    }
  }

  return maxBird;
}

// var birds = '1 2 3 4 5 4 3 2 1 3 4'.split(' ').map(Number);
var birds = "1 4 4 4 5 3".split(" ").map(Number);

console.time("solution");
console.log(`Solution : `, migratoryBirds(birds));
console.timeEnd("solution");
