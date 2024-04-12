function removeDuplicates(s: string): string {
   let stack = []

   for (const current of s) {
      const last = stack.length > 0 ? stack[stack.length - 1] : null

      if (last === current) {
         stack.pop()
         continue
      }

      stack.push(current)
   }

   return stack.join('')
}
