function maximumHappinessSum(happiness: number[], k: number): number {
   let totalHappinessSum = 0
   happiness.sort((a, b) => b - a)

   for (let i = 0; i < k; i++) {
      totalHappinessSum += Math.max(happiness[i] - i, 0)
   }

   return totalHappinessSum
}
