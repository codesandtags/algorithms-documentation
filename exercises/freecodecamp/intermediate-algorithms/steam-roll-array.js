function steamrollArray(arr) {
  let result = [];

  for (let e of arr) {
    result = result.concat(Array.isArray(e) ? steamrollArray(e) : e);
  }

  return result;
}

function steamrollArray2(arr) {
  const flat = [].concat(...arr);
  return flat.some(Array.isArray) ? steamrollArray(flat) : flat;
}

function steamrollArray3(arr, flatArr = []) {
  const elem = arr.pop();
  return elem
    ? !Array.isArray(elem)
      ? steamrollArray(arr, [elem, ...flatArr])
      : steamrollArray(arr.concat(elem), flatArr)
    : flatArr;
}

steamrollArray([1, [2], [3, [[4]]]]);
