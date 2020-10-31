// Complete the whatFlavors function below.
function whatFlavors(cost, money) {
  const map = new Map();
  for (let i = 0; i < cost.length; i++) {
    const target = money - cost[i];
    if (map.has(target)) {
      console.log(map.get(target), i + 1);
      break;
    }
    map.set(cost[i], i + 1);
  }
}
