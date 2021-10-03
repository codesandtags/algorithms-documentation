function spinalCase(str) {
  str = str
    .replace(/([A-Z])/g, " $1")
    .replace(/([\W_-]+)/g, " ")
    .trim()
    .replace(/([\s])/g, "-");

  return str.toLowerCase();
}

function spinalCase2(str) {
  // "It's such a fine line between stupid, and clever."
  // --David St. Hubbins

  return str
    .split(/\s|_|(?=[A-Z])/)
    .join("-")
    .toLowerCase();
}

function spinalCase3(str) {
  // Replace low-upper case to low-space-uppercase
  str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
  // Split on whitespace and underscores and join with dash
  return str
    .toLowerCase()
    .split(/(?:_| )+/)
    .join("-");
}

spinalCase("This Is Spinal Tap");
