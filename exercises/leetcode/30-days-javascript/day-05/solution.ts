/*
 * time O(n)
 * space O(n)
 */
function map(arr: number[], fn: (n: number, i: number) => number): number[] {
   const arrayMapped = []
   const length = arr.length

   for (let index = 0; index < length; index++) {
      arrayMapped[index] = fn(arr[index], index)
   }

   return arrayMapped
}
