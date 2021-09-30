const squareList = (arr) => {
  // Only change code below this line
  return arr.filter((n) => n > 0 && n % 1 === 0).map((n) => n * n);
  // Only change code above this line
};

const squaredIntegers = squareList([-3, 4.8, 5, 3, -3.2]);
console.log(squaredIntegers);
