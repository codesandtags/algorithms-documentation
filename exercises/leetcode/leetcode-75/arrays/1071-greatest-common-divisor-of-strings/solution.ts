// https://leetcode.com/problems/greatest-common-divisor-of-strings
function gcd(x: number, y: number) {
   if (y == 0) {
      return x
   }

   return gcd(y, x % y)
}

function gcdOfStrings(str1: string, str2: string): string {
   // Check if they have non-zero GCD string
   if (str1 + str2 !== str2 + str1) {
      return ''
   }

   // Get the GCD of the two lengths
   const gcdLength = gcd(str1.length, str2.length)
   return str1.substring(0, gcdLength)
}
