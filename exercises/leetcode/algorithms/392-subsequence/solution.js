/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  if (s.length > t.length) return false;

  let index = 0;
  const SL = s.length;

  for (let i = 0; i < t.length || index === SL; i++) {
    if (s[index] === t[i]) index++;
  }

  return index >= SL;
};

isSubsequence("abc", "a"); // false
isSubsequence("aaaaaa", "bbaaaa"); // false
isSubsequence("ace", "abcde"); // true
isSubsequence("aec", "abcde"); // false
