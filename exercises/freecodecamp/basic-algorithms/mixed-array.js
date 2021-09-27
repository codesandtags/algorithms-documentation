function frankenSplice(arr1, arr2, n) {
  let mixed = [...arr2.slice(0, n), ...arr1, ...arr2.slice(n)];

  return mixed;
}

// Should return [4, 1, 2, 3, 5]
console.log(frankenSplice([1, 2, 3], [4, 5], 1));
