function myReplace(str, before, after) {
  after = /^[A-Z]/.test(before)
    ? `${after[0].toUpperCase()}${after.substr(1)}`
    : `${after[0].toLowerCase()}${after.substr(1)}`;

  return str.replace(before, after);
}

myReplace("A quick brown fox jumped over the lazy dog", "jumped", "leaped");
