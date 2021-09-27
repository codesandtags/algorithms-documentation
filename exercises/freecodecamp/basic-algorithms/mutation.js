function mutation(arr) {
  return arr[1]
    .toLowerCase()
    .split("")
    .every(function (letter) {
      return arr[0].toLowerCase().indexOf(letter) != -1;
    });
}

function mutation2(arr) {
  const a = arr[0].toLowerCase();
  const b = arr[1].toLowerCase();

  for (let c of b) {
    if (a.indexOf(c) < 0) return false;
  }

  return true;
}

console.log(mutation2(["hello", "neo"]));
