function removeStars(s: string): string {
   const stack = []

   for (let char of s) {
      if (char === '*') {
         stack.pop()
      } else {
         stack.push(char)
      }
   }

   return stack.join('')
}
