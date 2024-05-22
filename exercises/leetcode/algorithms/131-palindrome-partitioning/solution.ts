function partition(s: string): string[][] {
   const res: string[][] = []
   dfs(s, [], res)
   return res
   function dfs(s: string, path: string[], res: string[][]) {
      if (!s.length) {
         res.push(path)
         return
      }
      for (let i = 0; i < s.length; i++) {
         const cur = s.substr(0, i + 1)
         if (isPalindrome(cur)) {
            dfs(s.substr(i + 1), [...path, cur], res)
         }
      }
   }
   function isPalindrome(s: string) {
      let lo = 0,
         hi = s.length - 1
      while (lo < hi) {
         if (s[lo++] != s[hi--]) return false
      }
      return true
   }
}
