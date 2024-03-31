function sumOfTheDigitsOfHarshadNumber(x: number): number {
   const digits = new String(x).split('').map(Number)
   const digitsSum = digits.reduce((sum, current) => sum + current)
   const isHarshad = x % digitsSum === 0

   return isHarshad ? digitsSum : -1
}
