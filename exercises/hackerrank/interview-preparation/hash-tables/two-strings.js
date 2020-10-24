function twoStrings(s1, s2) {
  for (const letter of s1) {
    if (s2.indexOf(letter) >= 0) {
      return "YES";
    }
  }
  return "NO";
}

twoStrings("hello", "world"); // YES
twoStrings("hi", "world"); // NO
