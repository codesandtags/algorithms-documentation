/**
 * @param {any} thisArg
 * @param {...*} boundArgs
 * @return {Function}
 */
function myBind(thisArg, ...boundArgs) {
   const originalMethod = this

   return function (...args) {
      return originalMethod.apply(thisArg, [...boundArgs, ...args])
   }
}

Function.prototype.myBind = myBind
