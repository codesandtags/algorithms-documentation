// returns the alphabetically smallest string tha can be obtained by removing exactly one letter
/**
 * I used the benefits of the language, given tha JavaScript sorts
 * the arrays based in the Unicode value, and it allows to get the smallest
 * string in a simple and easy way
 **/
function getSmallestString(words) {
  words.sort();

  return words[0];
}

function solution(S) {
  if (S.length <= 2 || S.length >= 100000) {
    return "Unexpected length for S";
  }

  const words = [];

  for (let i = 0; i < S.length; i++) {
    const letters = [...S];
    letters.splice(i, 1);
    const word = letters.join("");

    words.push(word);
  }

  return getSmallestString(words);
}
