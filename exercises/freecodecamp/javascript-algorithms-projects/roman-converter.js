let baseCombinations = {
  1: "I",
  4: "IV",
  5: "V",
  9: "IX",
  10: "X",
  40: "XL",
  50: "L",
  90: "XC",
  100: "C",
  400: "CD",
  500: "D",
  900: "CM",
  1000: "M",
  4000: "MMMM",
  5000: "MMMMM",
  9000: "MMMMMM",
};

/**
 * Get a roman unit from a number and base combination.
 * @param {*} num
 * @param {*} base
 *
 * Examples of base:
 *  ['I', 'IV', 'V', 'IX']
 *  ['X', 'XL', 'L', 'XC']
 *  ['C', 'CD', 'D', 'CM']
 *  ['M', 'MMMM', 'MMMMM', 'MMMMMM']
 *
 * @returns Roman number in String
 */
function getRomanNumberFromBase(num, base) {
  let romanNum = "";

  if (num < 4) {
    for (let i = 0; i < num; i++) {
      romanNum += base[0];
    }
  } else if (num === 4) {
    romanNum = base[1];
  } else if (num < 9) {
    romanNum = base[2];
    for (let i = 0; i < num - 5; i++) {
      romanNum += base[0];
    }
  } else if (num === 9) {
    romanNum = base[3];
  }

  return romanNum;
}

function convertToRoman(num) {
  let romanNum = "";
  let numString = num.toString().split("");
  let numLength = numString.length;
  let baseCombinationsArray = Object.values(baseCombinations);

  for (let i = 0; i < numString.length; i++) {
    let currentDigit = parseInt(numString[i]);

    if (numLength === 1) {
      romanNum += getRomanNumberFromBase(
        currentDigit,
        baseCombinationsArray.slice(0, 4)
      );
    } else if (numLength === 2) {
      romanNum += getRomanNumberFromBase(
        currentDigit,
        baseCombinationsArray.slice(4, 8)
      );
    } else if (numLength === 3) {
      romanNum += getRomanNumberFromBase(
        currentDigit,
        baseCombinationsArray.slice(8, 12)
      );
    } else if (numLength === 4) {
      romanNum += getRomanNumberFromBase(
        currentDigit,
        baseCombinationsArray.slice(12, 16)
      );
    }

    numLength--;
  }

  return romanNum;
}

console.log(convertToRoman(136));
console.log(convertToRoman(3999));
