/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
function debounce(func, wait) {
   // Step 1: variable to track the timeout id
   let timeoutId = null

   // Step 2: return a function that will call the
   // function passed in as `func`
   return function () {
      // Step 3: clear the timeout if it exists
      if (timeoutId) {
         clearTimeout(timeoutId)
      }

      // Step 4: set a new timeout
      timeoutId = setTimeout(() => {
         func.apply(this, arguments)
      }, wait)
   }
}

module.exports = debounce
