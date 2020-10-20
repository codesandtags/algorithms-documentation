function reverseStringRecursive(str) {
  return str === ""
    ? ""
    : reverseStringRecursive(str.substr(1)) + str.charAt(0);
}

reverseStringRecursive("This is sparta"); // atraps si sihT
