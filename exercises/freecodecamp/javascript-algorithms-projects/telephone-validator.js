/**
 * ^
 *  (1.?) // prefix 1
 *  (\d{3}|\(\d{3}\)) // area code 3 digits or 3 digits in parentheses
 *  [-.\s]?\d{3} // first 3 digits
 *  [-.\s]?\d{4} // last 4 digits
 * $
 */
function telephoneCheck(str) {
  return /^(1.?)?(\d{3}|\(\d{3}\))[-.\s]?\d{3}[-.\s]?\d{4}$/.test(str);
}

console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
console.log(telephoneCheck("1 (555) 555-5555"));
console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("2(757)622-7382"));
