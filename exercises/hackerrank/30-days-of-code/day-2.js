function solve(mealCost, tipPercent, taxPercent) {
  //Enter your code here
  let tip = parseFloat((mealCost * tipPercent) / 100);
  let tax = parseFloat((mealCost * taxPercent) / 100);
  let totalCost = Math.round(mealCost + tip + tax);

  console.log(totalCost);
}
