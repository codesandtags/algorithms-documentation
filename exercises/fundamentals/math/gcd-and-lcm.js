function gcd(a, b) {
  if (b === 0) return a;

  return gcd(b, a % b);
}

function lcm(a, b) {
  return (a * b) / gcd(a, b);
}

console.log(gcd(12, 16));
console.log(gcd(12, 8));

console.log(lcm(6, 7));
console.log(lcm(12, 30));
