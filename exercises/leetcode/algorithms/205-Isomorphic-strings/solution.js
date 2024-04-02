function isIsomorphic(s, t) {
   for (i in s) {
      if (s.indexOf(s[i]) !== t.indexOf(t[i])) return false
   }

   return true
}
