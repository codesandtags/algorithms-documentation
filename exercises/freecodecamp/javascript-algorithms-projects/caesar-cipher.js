function rot13(str) {
  const alphabet = [..."ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
  const rotation = 13;
  let result = "";

  for (let i = 0; i < str.length; i++) {
    const index = alphabet.indexOf(str[i]);

    result +=
      index === -1 ? str[i] : alphabet[(index + rotation) % alphabet.length];
  }

  return result;
}

console.log(rot13("SERR PBQR PNZC"));
