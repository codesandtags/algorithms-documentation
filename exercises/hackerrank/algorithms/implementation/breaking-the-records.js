// Complete the breakingRecords function below.
function breakingRecords(scores) {
  if (scores.length < 2) return [0, 0];

  let highest = 0;
  let lowest = 0;
  let min = scores[0];
  let max = min;

  for (let score of scores) {
    if (score < min) {
      min = score;
      lowest++;
    }
    if (score > max) {
      max = score;
      highest++;
    }
  }

  return [highest, lowest];
}
