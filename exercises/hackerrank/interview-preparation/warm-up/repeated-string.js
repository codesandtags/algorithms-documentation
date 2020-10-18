function repeatedString(s, n) {
  const repeated = (s.match(/a/g) || []).length * Math.floor(n / s.length);
  const remainder = n % s.length;
  const remainderCount = (s.substring(0, remainder).match(/a/g) || []).length;

  return repeated + remainderCount;
}
