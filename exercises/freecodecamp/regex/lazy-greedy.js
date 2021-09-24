let word = "titanic";
let greedy = /t[a-z]*i/;
let lazy = /t[a-z]*?i/;

console.log(word.match(greedy));
console.log(word.match(lazy));

// Lazy: How do extract all small chunks which start in t and ends in i
"titanic titiriteri tropicaninia tamal tamaleria tequiero".match(
  /\bt[a-z]*?i/gi
);

// Greedy: How do extract all longest chunks which start in t and ends in i
"titanic titiriteri tropicaninia tamal tamaleria tequiero".match(/t[a-z]*i/gi);
