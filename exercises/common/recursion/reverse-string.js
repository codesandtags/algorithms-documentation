function reverseStringRecursive(str) {
  return str === ""
    ? ""
    : reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

reverseStringRecursive("This is sparta"); // atraps si sihT


function reverseString(message) {
  // Base
  if (message.length <= 1) {
      return message;
  }

  // Return recursion
  return reverseString(message.substr(1)) + message.charAt(0);
}

console.log(reverseString(message));