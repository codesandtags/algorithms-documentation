/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {Array<U>}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
   const noInitialValue = initialValue === undefined
   const length = this.length

   if (noInitialValue && this.length === 0) {
      throw new Error(' Reduce of empty array with no initial value')
   }

   let accumulator = noInitialValue ? this[0] : initialValue
   let starIndex = noInitialValue ? 1 : 0

   for (let k = starIndex; k < length; k++) {
      if (Object.hasOwn(this, k)) {
         accumulator = callbackFn(accumulator, this[k], k, this)
      }
   }

   return accumulator
}
