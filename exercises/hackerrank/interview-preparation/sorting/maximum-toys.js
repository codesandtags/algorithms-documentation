function maximumToys(prices, budget) {
  let sum = 0;
  let toys = 0;
  prices.sort((a, b) => a - b);

  for (let price of prices) {
    // console.log(`sum ${sum} budget ${budget}`);
    if (sum + price <= budget) {
      sum = sum + price;
      toys++;
    }
  }

  return toys;
}

//var prices = '1 12 5 111 200 1000 10'.split(' ').map(Number);
//var k = 50;

var prices = "1 2 3 4".split(" ").map(Number);
var k = 7;
