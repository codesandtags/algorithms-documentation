function longestCommonPrefix(strs: string[]): string {
   const N = strs.length
   if (N === 0) return ''

   let prefix = strs[0]

   for (let index = 1; index < N; index++) {
      while (!strs[index].startsWith(prefix)) {
         // Reduces the prefix
         prefix = prefix.slice(0, prefix.length - 1)
      }

      if (prefix === '') return ''
   }

   return prefix
}
