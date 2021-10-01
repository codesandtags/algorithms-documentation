const DENOMINATIONS = [
  ["PENNY", 1],
  ["NICKEL", 5],
  ["DIME", 10],
  ["QUARTER", 25],
  ["ONE", 100],
  ["FIVE", 500],
  ["TEN", 1000],
  ["TWENTY", 2000],
  ["ONE HUNDRED", 10000],
];

function checkCashRegister(price, cash, cid) {
  let amountToReturn = Math.round((cash - price) * 100);
  const cashOnHand = {};
  const cashToGive = {};

  cid.forEach((denomination) => {
    cashOnHand[denomination[0]] = Math.round(denomination[1] * 100);
  });

  let index = DENOMINATIONS.length - 1;

  while (index >= 0) {
    const moneyName = DENOMINATIONS[index][0];
    const moneyValue = DENOMINATIONS[index][1];

    if (amountToReturn - moneyValue > 0 && cashOnHand[moneyName] > 0) {
      cashToGive[moneyName] = 0;

      while (cashOnHand[moneyName] > 0 && amountToReturn - moneyValue >= 0) {
        cashOnHand[moneyName] -= moneyValue;
        cashToGive[moneyName] += moneyValue;
        amountToReturn -= moneyValue;
      }
    }
    index--;
  }

  if (amountToReturn === 0) {
    let isRegisterClosed = true;

    Object.keys(cashOnHand).forEach((moneyType) => {
      if (cashOnHand[moneyType] > 0) {
        isRegisterClosed = false;
      }
    });

    if (isRegisterClosed) {
      return { status: "CLOSED", change: cid };
    } else {
      let change = [];
      Object.keys(cashToGive).forEach((key) => {
        change.push([key, cashToGive[key] / 100]);
      });

      return { status: "OPEN", change: change };
    }
  }

  return { status: "INSUFFICIENT_FUNDS", change: [] };
}

// should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}.
console.log(
  checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100],
  ])
);

// should return {status: "INSUFFICIENT_FUNDS", change: []}.
/*
console.log(
  checkCashRegister(19.5, 20, [
    ["PENNY", 0.01],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 1],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0],
  ])
);
*/
