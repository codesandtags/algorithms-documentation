function dropElements(arr, func) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (func(arr[i])) {
      result = arr.slice(i);
      break;
    }
  }

  console.log(result);

  return result;
}

// dropElements([1, 2, 3], function(n) {return n < 3; });
dropElements([1, 2, 3, 4], function (n) {
  return n >= 3;
});

function dropElements2(arr, func) {
  let sliceIndex = arr.findIndex(func);
  return arr.slice(sliceIndex >= 0 ? sliceIndex : arr.length);
}

function dropElements3(arr, func, i = 0) {
  return i < arr.length && !func(arr[i])
    ? dropElements(arr.slice(i + 1), func, i)
    : arr;
}
