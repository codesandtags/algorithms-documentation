function getFrequency(s) {
  const frequency = {};

  for (const l of s) {
    if (frequency[l] === undefined) {
      frequency[l] = 0;
    }
    frequency[l]++;
  }

  return frequency;
}

function isValid(s) {
  const frequency = getFrequency(s);
  let deletions = 0;
  let lastFrequency;

  for (let letter in frequency) {
    if (lastFrequency === undefined) {
      lastFrequency = frequency[letter];
      continue;
    }

    if (lastFrequency !== frequency[letter]) {
      console.log("Different");
      if (++deletions > 1) {
        return "NO";
      }
    }
  }

  return "YES";
}

// isValid('aabbcd'); // NO
// isValid('aabbccddeefghi'); // NO
isValid("abcdefghhgfedecba"); // YES
