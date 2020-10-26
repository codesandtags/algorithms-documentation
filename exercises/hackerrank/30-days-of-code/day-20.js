function main() {
  var n = parseInt(readLine());
  a = readLine().split(" ");
  a = a.map(Number);
  // Write Your Code Here
  bubbleSort(a);
}

function bubbleSort(numbers) {
  // Track number of elements swapped during a single array traversal
  let numberOfSwaps = 0;

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers.length - 1; j++) {
      // Swap adjacent elements if they are in decreasing order
      if (numbers[j] > numbers[j + 1]) {
        let tmp = numbers[j];
        numbers[j] = numbers[j + 1];
        numbers[j + 1] = tmp;
        numberOfSwaps++;
      }
    }
    // If no elements were swapped during a traversal, array is sorted
    if (numberOfSwaps == 0) {
      break;
    }
  }

  console.log("Array is sorted in " + numberOfSwaps + " swaps.");
  console.log("First Element: " + numbers[0]);
  console.log("Last Element: " + numbers[numbers.length - 1]);
}
