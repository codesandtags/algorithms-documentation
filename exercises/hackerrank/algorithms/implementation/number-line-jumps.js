// https://www.youtube.com/watch?v=52R2pLDjUBw&list=PLSIpQf0NbcCltzNFrOJkQ4J4AAjW3TSmA
function kangaroo(x1, v1, x2, v2) {
  let canMeet = v2 < v1;

  if (canMeet) {
    console.log(
      `(x2 - x1) % (v2 - v1) = ${x2 - x1} % ${v2 - v1} = ${
        (x2 - x1) % (v2 - v1)
      }`
    );
    let willIntersect = (x1 - x1) % (v2 - v1) === 0;
    if (willIntersect) return "YES";
  }

  return "NO";
}

console.time("solution");
// console.log(`Solution : `, kangaroo(0, 3, 4, 2)); // YES
console.log(`Solution : `, kangaroo(0, 2, 5, 3)); // NO
console.timeEnd("solution");
