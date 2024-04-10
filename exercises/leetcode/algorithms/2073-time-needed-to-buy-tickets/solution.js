/**
 * @param {number[]} tickets
 * @param {number} k
 * @return {number}
 */
var timeRequiredToBuy = function (tickets, k) {
   let timeInSeconds = 0
   let index = 0
   let currentPerson = tickets[k]

   while (currentPerson > 0) {
      if (index === tickets.length) {
         index = 0
      }

      if (tickets[index] > 0) {
         tickets[index]--
         timeInSeconds++
      }

      if (index === k) {
         currentPerson--
      }

      index++
   }

   return timeInSeconds
}
