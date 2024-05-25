function wordBreak(s: string, wordDict: string[]): string[] {
   const wordSet = new Set(wordDict)
   const memo: Map<number, string[][]> = new Map()

   function _wordBreak_topdown(start: number): string[][] {
      if (memo.has(start)) {
         return memo.get(start)!
      }

      const result: string[][] = []
      if (start === s.length) {
         result.push([])
         return result
      }

      for (let endIndex = start + 1; endIndex <= s.length; endIndex++) {
         const word = s.substring(start, endIndex)
         if (wordSet.has(word)) {
            const subSentences = _wordBreak_topdown(endIndex)
            for (const subSentence of subSentences) {
               result.push([word, ...subSentence])
            }
         }
      }

      memo.set(start, result)
      return result
   }

   const sentences = _wordBreak_topdown(0)

   return sentences.map((words) => words.join(' '))
}
