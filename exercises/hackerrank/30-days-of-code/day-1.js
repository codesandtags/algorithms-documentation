function main() {
  var i = 4;
  var d = 4.0;
  var s = "HackerRank ";
  /* Declare second integer, double, and String variables. */
  /* Read and save an integer, double, and String to your variables.*/
  const secondInteger = parseInt(readLine());
  const secondDouble = parseFloat(readLine());
  const secondString = readLine();

  /* Print the sum of both integer variables on a new line. */
  console.log(i + secondInteger);

  /* Print the sum of the double variables on a new line. */
  console.log((d + secondDouble).toFixed(1));

  /* Concatenate and print the String variables on a new line; 
    the 's' variable above should be printed first. */
  console.log(s + secondString);
}
