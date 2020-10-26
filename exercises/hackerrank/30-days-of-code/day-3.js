function main() {
  const n = parseInt(readLine(), 10);
  let ans = "Weird"; // By Default is Werid as an odd number

  if (n % 2 == 0) {
    // If n is even and in the inclusive range of 2 to 5, print Not Weird
    // If n is even and greater than 20, print Not Weird
    if ((n >= 2 && n <= 5) || n > 20) {
      ans = "Not Weird";
    } else {
      ans = "Weird";
    }
  }

  console.log(ans);
}
