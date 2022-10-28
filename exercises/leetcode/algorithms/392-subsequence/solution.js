/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
   if (s.length > t.length) return false

   let index = 0

   for (let c of t) {
      if (s[index] === c) index++
   }

   return index >= s.length
}

isSubsequence('abc', 'a') // false
isSubsequence('aaaaaa', 'bbaaaa') // false
isSubsequence('ace', 'abcde') // true
isSubsequence('aec', 'abcde') // false
