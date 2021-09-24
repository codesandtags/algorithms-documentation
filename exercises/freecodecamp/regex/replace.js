"Churrita Te Quiero".replace(/(\w+)\s(\w+)\s(\w+)/, "$2 $3 $1");

let str = "one two three";
let fixRegex = /(one) (two) (three)/; // Change this line
let replaceText = "$3 $2 $1"; // Change this line
let result = str.replace(fixRegex, replaceText);

// Trim example
"   Hello, World!  ".replace(/^\s+|\s+$/g, "");
