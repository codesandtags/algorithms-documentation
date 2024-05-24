function maxScoreWords(
   words: string[],
   letters: string[],
   score: number[]
): number {
   const n = words.length
   let ans = 0
   const map = new Map()

   for (let i = 0; i < letters.length; i++) {
      map.set(letters[i], (map.get(letters[i]) || 0) + 1)
   }

   const bt = (i: number, s: number) => {
      if (i <= n) ans = Math.max(ans, s)

      for (let j = i; j < n; j++) {
         let lowest = Infinity
         let curr = s

         for (let i = 0; i < words[j].length; i++) {
            const c = words[j][i]
            map.set(c, map.get(c) - 1)
            lowest = Math.min(lowest, map.get(c))
            curr += score[c.charCodeAt(0) - 97]
         }

         if (lowest >= 0) bt(j + 1, curr)

         for (let i = 0; i < words[j].length; i++) {
            const c = words[j][i]
            map.set(c, map.get(c) + 1)
         }
      }
   }

   bt(0, 0)

   return ans
}
