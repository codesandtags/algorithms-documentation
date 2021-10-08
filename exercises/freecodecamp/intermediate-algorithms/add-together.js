function addTogether(...args) {
  if (args.every((n) => typeof n === "number")) {
    if (args.length == 1) {
      return (n) => {
        if (typeof n === "number") return args[0] + n;
      };
    }

    return args[0] + args[1];
  }
}

function addTogether2() {
  const [first, second] = arguments;
  if (typeof first !== "number") return undefined;
  if (second === undefined) return (second) => addTogether(first, second);
  if (typeof second !== "number") return undefined;
  return first + second;
}
