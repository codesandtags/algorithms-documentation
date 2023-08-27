/*
 * Check if a year is a leap year
 * @param {number} year
 * @return {boolean}
 * @example
 * isLeapyear(2016) // true
 * isLeapyear(2018) // false
 * isLeapyear(2020) // true
 * isLeapyear(2100) // false
 * isLeapyear(2400) // true
 * isLeapyear(240000) // true
 * isLeapyear(240001) // false
 **/
function isLeapyear(year) {
   return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0)
}
