/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
   const th = { 0: 0, 1: 1, 2: 1 }

   function dp(i) {
      if (i in th) {
         return th[i]
      }

      th[i] = dp(i - 1) + dp(i - 2) + dp(i - 3)
      return th[i]
   }

   return dp(n)
}

/**
 * @param {number} n
 * @return {number}
 */
var tribonacci = function (n) {
   if (n < 3) {
      return n > 0 ? 1 : 0
   }

   let a = 0,
      b = 1,
      c = 1

   for (let i = 0; i < n - 2; i++) {
      const tmp = a + b + c
      a = b
      b = c
      c = tmp
   }

   return c
}
