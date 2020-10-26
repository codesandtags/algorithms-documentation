function processData(input) {
  let inputs = input.split("\n");
  let words = inputs.slice(1);

  for (let word of words) {
    let odds = "";
    let evens = "";

    for (let i = 0; i < word.length; i++) {
      if (i % 2 == 0) {
        evens += word.charAt(i);
      } else {
        odds += word.charAt(i);
      }
    }

    console.log(evens + " " + odds);
  }
}
