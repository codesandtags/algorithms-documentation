function isIsomorphic(s: string, t: string): boolean {
   if (s.length !== t.length) return false

   const mapSToT = {}
   const mapTToS = {}

   for (let i = 0; i < s.length; i++) {
      const charS = s[i]
      const charT = t[i]

      if (
         (mapSToT[charS] && mapSToT[charS] !== charT) ||
         (mapTToS[charT] && mapTToS[charT] !== charS)
      ) {
         return false
      }

      mapSToT[charS] = charT
      mapTToS[charT] = charS
   }

   return true
}
