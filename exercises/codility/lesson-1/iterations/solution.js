/**
 * This solution is part of the Codility lessons
 *
 * https://app.codility.com/programmers/lessons/1-iterations/binary_gap/
 */

const getLongestGap = (gapsIndex) => {
  var result = [];

  for (let index = gapsIndex.length - 1; index > 0; index--) {
    if (index > 0) {
      result.push(gapsIndex[index] - gapsIndex[index - 1] - 1);
    }
  }

  return result.length > 0 ? Math.max(...result) : 0;
};

function getBinaryGap(N) {
  if (N === parseInt(N, 10) && N >= 1 && N <= 2147483647) {
    const binaryNumber = Number(N).toString(2);
    const binaryArray = binaryNumber.split("");
    const gapsIndex = [];
    let currentIndex = binaryArray.indexOf("1");

    while (currentIndex !== -1) {
      gapsIndex.push(currentIndex);
      currentIndex = binaryArray.indexOf("1", currentIndex + 1);
    }
    return getLongestGap(gapsIndex);
  }
  return 0;
}

console.log(getBinaryGap(9)); // 2
console.log(getBinaryGap(1041)); // 5
console.log(getBinaryGap(15)); // 0
console.log(getBinaryGap(32)); // 0
