function uniteUnique(...arr) {
  return arr.reduce((uniques, current) => {
    return uniques.concat(current.filter((item) => !uniques.includes(item)));
  }, []);
}

function uniteUnique2(...arrays) {
  //make an array out of the given arrays and flatten it (using the spread operator)
  const flatArray = [].concat(...arrays);

  // create a Set which clears any duplicates since it's a regular set and not a multiset
  return [...new Set(flatArray)];
}

function uniteUnique(...arr) {
  return [...new Set([].concat(...arr))];
}

uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]);

console.log(uniteUnique([1, 3, 2], [5, 2, 1, 4], [2, 1]));
