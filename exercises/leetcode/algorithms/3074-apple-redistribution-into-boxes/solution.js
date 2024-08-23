/**
 * @param {number[]} apples
 * @param {number[]} boxCapacities
 * @return {number}
 */
var minimumBoxes = function (apples, boxCapacities) {
   // Sort the box capacities in ascending order to use the largest boxes last
   boxCapacities.sort((a, b) => a - b)
   let totalApples = apples.reduce((acc, curr) => acc + curr, 0)

   // Start from the largest box and subtract its capacity from the total apples until all apples are accounted for
   let i = boxCapacities.length - 1
   while (i >= 0 && totalApples > 0) {
      totalApples -= boxCapacities[i]
      i--
   }

   // The number of boxes used is the difference between the total number of boxes and the remaining boxes
   return boxCapacities.length - i - 1
}
