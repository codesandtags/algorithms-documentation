/**
 * @template T
 * @param { (value: T) => boolean } callbackFn
 * @param {any} [thisArg]
 * @return {Array<T>}
 */
Array.prototype.myFilter = function (callbackFn, thisArg) {
   const LENGHT = this.length
   const results = []

   for (let index = 0; index < LENGHT; index++) {
      const element = this[index]
      if (
         Object.hasOwn(this, index) &&
         callbackFn.call(thisArg, element, index, this)
      ) {
         results.push(element)
      }
   }

   return results
}

module.exports = Array.prototype.myFilter
