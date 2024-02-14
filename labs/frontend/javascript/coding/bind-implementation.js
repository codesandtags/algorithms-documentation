/**
 * @param {any} thisArg
 * @param {...*} boundArgs
 * @return {Function}
 */
function myBind(thisArg, ...boundArgs) {
   const originalFunction = this

   if (typeof originalFunction !== 'function') {
      throw new TypeError('This function must be called on a function')
   }

   return function (...args) {
      return originalFunction.apply(thisArg, [...boundArgs, ...args])
   }
}

Function.prototype.myBind = myBind
