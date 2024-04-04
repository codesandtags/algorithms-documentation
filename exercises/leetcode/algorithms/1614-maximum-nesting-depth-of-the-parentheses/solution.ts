function maxDepth(s: string): number {
   let maxDepthLevel = 0
   let parentheses: string[] = []

   for (let i = 0; i < s.length; i++) {
      if (s[i] === '(') {
         parentheses.push('(')
      } else if (s[i] === ')') {
         parentheses.pop()
      }

      maxDepthLevel = Math.max(maxDepthLevel, parentheses.length)
   }

   return maxDepthLevel
}
