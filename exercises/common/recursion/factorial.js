function findFactorialRecursive(number) {
  if (number <= 2) {
    return number;
  }

  return number * findFactorialRecursive(number - 1);
}

findFactorialRecursive(5); // 120
findFactorialRecursive(12); //  479001600
