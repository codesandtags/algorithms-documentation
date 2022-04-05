function bubbleSort(list) {
  let sortedLastIndex = list.length - 1;
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0; i < sortedLastIndex; i++) {
      console.log("Hello", list[i]);
      if (list[i] > list[i + 1]) {
        [list[i], list[i + 1]] = [list[i + 1], list[i]];
        sorted = false;
      }
      sortedLastIndex--;
    }
  }

  return list;
}

bubbleSort([65, 55, 45, 35, 25, 15, 10]);
