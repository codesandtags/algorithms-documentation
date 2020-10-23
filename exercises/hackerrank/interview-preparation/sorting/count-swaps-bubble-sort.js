// Complete the countSwaps function below.
function countSwaps(n) {
  let swaps = 0;
  let isSorted = false;

  while (!isSorted) {
    isSorted = true;
    for (let i = 0; i < n.length - 1; i++) {
      if (n[i] > n[i + 1]) {
        swap(n, i, i + 1);
        isSorted = false;
        swaps++;
      }
    }
  }

  console.log(`Array is sorted in ${swaps} swaps.`);
  console.log(`First Element: ${n[0]}`);
  console.log(`Last Element: ${n[n.length - 1]}`);
}
