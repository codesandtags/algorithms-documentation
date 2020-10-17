/**
 * https://www.hackerrank.com/challenges/counting-valleys/problem
 */

function countingValleys(steps, path) {
  let valleys = 0;
  let seaLevel = 0;

  for (let i = 0; i < path.length; i++) {
    seaLevel = path[i] === "U" ? ++seaLevel : --seaLevel;
    // console.log(seaLevel);
    if (path[i] === "U" && seaLevel === 0) {
      valleys++;
    }
  }

  return valleys;
}

countingValleys(8, "UDDDUDUU"); // 1
countingValleys(8, "DDUUUUDD"); // 1
