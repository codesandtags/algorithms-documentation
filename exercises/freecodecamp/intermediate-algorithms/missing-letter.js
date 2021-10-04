function fearNotLetter(str) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  const first = alphabet.indexOf(str[0]);
  const last = alphabet.indexOf(str[str.length - 1]);

  for (let i = first, k = 0; i <= last; i++, k++) {
    if (alphabet[i] !== str[k]) {
      return alphabet[i];
    }
  }

  return undefined;
}

function fearNotLetter2(str) {
  for (let i = 1; i < str.length; ++i) {
    if (str.charCodeAt(i) - str.charCodeAt(i - 1) > 1) {
      return String.fromCharCode(str.charCodeAt(i - 1) + 1);
    }
  }
}

console.log(fearNotLetter("bcdf"));

fearNotLetter("abcdefghijklmnq");
