function repeatStringNumTimes(str, num) {
  let repeatedStr = "";

  while (num > 0) {
    repeatedStr += str;
    num--;
  }

  return repeatedStr;
}

function repeatStringNumTimesRecursion(str, num) {
  return num > 0 ? str + repeatStringNumTimesRecursion(str, num - 1) : "";
}

console.log(repeatStringNumTimes("abc", 3));
