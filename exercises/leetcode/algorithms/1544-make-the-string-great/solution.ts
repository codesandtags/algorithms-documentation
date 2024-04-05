function isBad(last: string, current: string): boolean {
   return Math.abs(last.charCodeAt(0) - current.charCodeAt(0)) === 32
}

/**
 * Considering that each letter in ASCII has a difference of 32 numbers. i.e.
 *
    a = 97, A = 65
    b = 98, B = 66
    c = 99, C = 67
    d = 100, D = 68
 */
function makeGood(s: string): string {
   if (s.length < 2) return s

   let result: string[] = []

   for (let current of s) {
      const last = result.length > 0 && result[result.length - 1]

      if (last && isBad(last, current)) {
         result.pop()
      } else {
         result.push(current)
      }
   }

   return result.join('')
}
