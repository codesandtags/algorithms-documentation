function diffArray(arr1, arr2) {
  var newArr = [];

  for (let item of arr1) {
    if (arr2.indexOf(item) === -1) {
      newArr.push(item);
    }
  }

  for (let item of arr2) {
    if (arr1.indexOf(item) === -1) {
      newArr.push(item);
    }
  }

  return newArr;
}

function diffArray2(arr1, arr2) {
  return arr1
    .concat(arr2)
    .filter((item) => !arr1.includes(item) || !arr2.includes(item));
}

function equalsArray(arr1, arr2) {
  return arr1.concat(arr2).reduce((acc, item) => {
    if (arr1.includes(item) && arr2.includes(item) && !acc.includes(item)) {
      acc.push(item);
    }

    return acc;
  }, []);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
console.log(
  diffArray2(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
console.log(
  equalsArray(
    ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"],
    ["diorite", "andesite", "grass", "dirt", "dead shrub"]
  )
);
