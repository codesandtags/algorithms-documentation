function countWords(array) {
  const count = {};
  for (const word of array) {
    if (!count[word]) {
      count[word] = 0;
    }

    count[word]++;
  }
  return count;
}

function checkMagazine(magazine, note) {
  const a = countWords(magazine);
  const b = countWords(note);

  for (let word in a) {
    if (b[word] !== undefined) {
      b[word] = b[word] - a[word];
    }
  }

  let total = 0;
  for (let word in b) {
    if (b[word] > 0) {
      console.log("No");
      return;
    }
  }

  console.log("Yes");
}

var magazine = "avtq ekpvq z rdvzf m zu bof pfkzl ekpvq pfkzl bof zu ekpvq ekpvq ekpvq ekpvq z".split(
  " "
);
var note = "m z z avtq zu bof pfkzl pfkzl pfkzl rdvzf rdvzf avtq ekpvq rdvzf avtq".split(
  " "
);

console.log(`The ransom note can be used? ${checkMagazine(magazine, note)}`);
