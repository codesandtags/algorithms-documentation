function divisibleSumPairs(n, k, numbers) {
  let pairs = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let x = 0; x < numbers.length; x++) {
      const sum = numbers[i] + numbers[x];
      const isValidPair = sum % k === 0 && i < x;

      if (isValidPair) {
        pairs++;
      }
    }
  }

  return pairs;
}
