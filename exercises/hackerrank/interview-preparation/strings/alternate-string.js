function alternatingCharacters(s) {
  if (s.length < 2) return 0;

  let deletions = 0;
  let lastLetter = s[0];

  for (let i = 1; i < s.length; i++) {
    if (lastLetter === s[i]) {
      deletions++;
    }
    lastLetter = s[i];
  }

  return deletions;
}

alternatingCharacters(AAABBB); // 4
