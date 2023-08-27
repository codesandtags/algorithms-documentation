/**
 * @param {Function} func
 * @return {Function}
 */
function curry(func) {
   // Step 1: return a function. Here we have the concept of closure
   return function curried(...args) {
      // Step 2: if the number of arguments passed in is greater than
      // or equal to the number of arguments the function expects,
      // then call the function. Concept of arity.
      if (args.length >= func.length) {
         return func.apply(this, args)
      }

      // Step 3: otherwise, return a function that will take the
      // remaining arguments
      return (arg) =>
         arg === undefined
            ? curried.apply(this, args)
            : curried.apply(this, [...args, arg])
   }
}

module.exports = curry
