function isSubsequence(s: string, t: string): boolean {
   if (s.length > t.length) return false

   let index = 0

   for (let c of t) {
      if (index >= s.length) break
      if (s[index] === c) index++
   }

   return index >= s.length
}
