/**
 * @param {number} initialValue
 * @return {Function}
 */
function makeCounter(initialValue = 0) {
   let count = initialValue - 1

   return function counter() {
      count += 1

      return count
   }
}

module.exports = makeCounter
