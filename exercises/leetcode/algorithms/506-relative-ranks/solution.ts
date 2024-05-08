function findRelativeRanks(score: number[]): string[] {
   const medals = ['Gold', 'Silver', 'Bronze']
   const ranking = [...score]
      .sort((a, b) => b - a) // Sort items by descending order
      .reduce((prev, current, index) => {
         prev[current] = index < 3 ? `${medals[index]} Medal` : `${index + 1}`
         return prev
      }, {})

   return score.map((position, index) => ranking[position])
}
