const getCountSocks = (socks) => {
  return socks.reduce((acc, current) => {
    if (acc[current] === undefined) {
      acc[current] = 0;
    }
    acc[current]++;

    return acc;
  }, {});
};

const getTotalPairSocks = (countSocks) => {
  return Object.values(countSocks)
    .map((socks) => Math.floor(socks / 2))
    .reduce((total, current) => {
      return total + current;
    }, 0);
};

// Complete the sockMerchant function below.
function sockMerchant(n, ar) {
  // Constraints
  if (n >= 1 && n <= 100 && ar.length >= 1 && ar.length <= 100) {
    return getTotalPairSocks(getCountSocks(ar));
  }

  return 0;
}
