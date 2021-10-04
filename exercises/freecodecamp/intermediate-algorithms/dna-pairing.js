/**
 *  https://en.wikipedia.org/wiki/Base_pair
 * https://www.genome.gov/genetics-glossary/Base-Pair
 */

function pairElement(str) {
  //create object for pair lookup
  var pairs = {
    A: "T",
    T: "A",
    C: "G",
    G: "C",
  };
  //split string into array of characters
  var arr = str.split("");
  //map character to array of character and matching pair
  return arr.map((x) => [x, pairs[x]]);
}

pairElement("GCG");
