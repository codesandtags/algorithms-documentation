function splitify(str) {
  // Only change code below this line
  return str.split(/[^\w]/gi);

  // Only change code above this line
}
splitify("Hello World,I-am code");

function sentensify(str) {
  // Only change code below this line
  return str.split(/[^\w]/gi).join(" ");

  // Only change code above this line
}
sentensify("May-the-force-be-with-you");
