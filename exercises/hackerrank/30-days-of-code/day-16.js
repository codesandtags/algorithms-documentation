function main() {
  const S = readLine();

  try {
    const N = eval(S);
    console.log(N);
  } catch (error) {
    console.log("Bad String");
  }
}
