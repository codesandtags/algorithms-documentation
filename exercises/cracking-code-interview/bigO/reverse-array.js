const data = new Array(20).fill(null).map((v, i) => i + 1);

console.log(data);
console.time("Solution1");
const reverseArray1 = (arr) => {
  let newArray = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    newArray.push(arr[i]);
  }

  return newArray;
};

console.log(reverseArray1(data));
console.timeEnd("Solution1");

//------------------------------------------------------------------------------

console.time("Solution2");
const reverseArray2 = (arr) => {
  let newArray = [];

  for (let i = 0; i < arr.length; i++) {
    newArray.unshift(arr[i]);
  }

  return newArray;
};

console.log(reverseArray2(data));
console.timeEnd("Solution2");

//------------------------------------------------------------------------------

console.time("Solution3");
const reverseArray3 = (arr) => {
  let newArray = [];

  for (let i = 0; i < arr.length / 2; i++) {
    const tempElement = arr[i];
    const lastPosition = arr.length - 1 - i;
    newArray[i] = arr[lastPosition];
    newArray[lastPosition] = tempElement;
  }

  return newArray;
};

console.log(reverseArray3(data));
console.timeEnd("Solution3");
