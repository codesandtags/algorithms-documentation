/**
 * @template T, U
 * @param { (value: T, index: number, array: Array<T>) => U } callbackFn
 * @param {any} [thisArg]
 * @return {Array<U>}
 */
Array.prototype.myMap = function (callbackFn, thisArg) {
   const results = new Array(this.length)

   this.forEach((value, index) => {
      if (Object.hasOwn(this, index)) {
         results[index] = callbackFn.call(thisArg, value, index, this)
      }
   })

   return results
}
