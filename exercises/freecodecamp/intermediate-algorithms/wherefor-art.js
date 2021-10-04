function whatIsInAName(collection, source) {
  var arr = [];
  // Only change code below this line
  arr = collection.filter((item) => {
    let includeItem = true;

    for (let key of Object.keys(source)) {
      if (!source.hasOwnProperty(key) || item[key] !== source[key]) {
        includeItem = false;
      }
    }

    return includeItem;
  });

  // Only change code above this line
  return arr;
}

whatIsInAName(
  [{ apple: 1, bat: 2 }, { bat: 2 }, { apple: 1, bat: 2, cookie: 2 }],
  { apple: 1, bat: 2 }
);
