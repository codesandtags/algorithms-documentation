/**
 * @param {number[]} happiness
 * @param {number} k
 * @return {number}
 */
var maximumHappinessSum = function (happiness, k) {
   let length = happiness.length
   let totalHappinessSum = 0

   happiness.sort((a, b) => b - a)
   let turns = 0

   for (let i = 0; i < k; i++) {
      totalHappinessSum += Math.max(happiness[i] - turns, 0)
      turns++
   }

   return totalHappinessSum
}
