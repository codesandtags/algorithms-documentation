var numbers = [2, 3, 4, 5, 7, 7];

function hasDuplicate(numbers) {
  const N = numbers.length;
  let steps = 0;

  for (let i = 0; i < N; i++) {
    for (let k = 0; k < N; k++) {
      steps++;
      console.log(steps);
      if (i !== k && numbers[i] === numbers[k]) {
        return true;
      }
    }
  }

  console.log(steps);
  return false;
}

hasDuplicate(numbers);

function hasDuplicateLinear() {
  const N = numbers.length;
  const existingNumbers = [];
  let steps = 0;

  for (let i = 0; i < N; i++) {
    steps++;
    console.log(steps);
    if (existingNumbers[numbers[i]] === 1) {
      return true;
    } else {
      existingNumbers[numbers[i]] = 1;
    }
  }

  console.log(steps);
  return false;
}

hasDuplicateLinear(numbers);
