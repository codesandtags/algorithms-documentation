function palindrome(str) {
  const letters = str
    .toLowerCase()
    .replace(/[^a-z0-9]/gi, "")
    .split("");

  for (let i = 0; i < letters.length; i++) {
    if (letters[i] !== letters[letters.length - i - 1]) {
      return false;
    }
  }

  return true;
}

palindrome("eye");
palindrome("1 eye for of 1 eye.");
