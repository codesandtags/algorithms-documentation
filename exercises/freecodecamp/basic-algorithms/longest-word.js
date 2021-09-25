function findLongestWordLength(str) {
  const words = str.split(" ").map((word) => word.length);

  return Math.max(...words);
}

console.log(
  findLongestWordLength("The quick brown fox jumped over the lazy dog")
);
