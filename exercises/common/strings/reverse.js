function reverse(str) {
  if (!str || str.length < 2) return str;

  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

function reverseSimple(str) {
  return str.split("").reverse().join("");
}

const reverseFancy = (str) => [...str].reverse().join("");

console.time("reverse");
console.log(reverse("a"));
console.log(reverse("hi"));
console.log(reverse("This is sparta!"));
console.timeEnd("reverse");

console.time("reverseSimple");
console.log(reverseSimple("a"));
console.log(reverseSimple("hi"));
console.log(reverseSimple("This is sparta!"));
console.timeEnd("reverseSimple");

console.time("reverseFancy");
console.log(reverseFancy("a"));
console.log(reverseFancy("hi"));
console.log(reverseFancy("This is sparta!"));
console.timeEnd("reverseFancy");
