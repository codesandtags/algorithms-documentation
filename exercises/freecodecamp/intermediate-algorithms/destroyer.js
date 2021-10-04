function destroyer(arr, ...destroy) {
  return arr.filter((item) => !destroy.includes(item));
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3);
