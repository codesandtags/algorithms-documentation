function flippingBits(n) {
  let binaryNumberIn32Bits = Number(n).toString(2).padStart(32, 0);

  console.log("Before : ", binaryNumberIn32Bits);
  let flippedBits = binaryNumberIn32Bits
    .split("")
    .map((n) => (n === "1" ? "0" : "1"))
    .join("");

  console.log("After  : ", flippedBits);

  return parseInt(flippedBits, 2);
}

var number = 9;
console.log(`The flipping ${number} is ${flippingBits(number)}`);
