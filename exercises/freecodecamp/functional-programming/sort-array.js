function alphabeticalOrder(arr) {
  // Only change code below this line

  return arr.sort((a, b) => {
    return a === b ? "0" : a > b ? 1 : -1;
  });
  // Only change code above this line
}

console.log(alphabeticalOrder(["a", "d", "c", "a", "z", "g"]));
