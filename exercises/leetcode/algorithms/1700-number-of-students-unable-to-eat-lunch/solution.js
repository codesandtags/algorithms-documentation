/**
 * @param {number[]} students
 * @param {number[]} sandwiches
 * @return {number}
 */
CIRCULAR_SANDWICH = 0
SQUARE_SANDWICH = 1

var countStudents = function (students, sandwiches) {
   let circularStudentsCount = 0
   let squareStudentsCount = 0

   for (const sandwichStudent of students) {
      if (sandwichStudent == CIRCULAR_SANDWICH) {
         circularStudentsCount++
      } else {
         squareStudentsCount++
      }
   }

   for (const sandwich of sandwiches) {
      if (sandwich === CIRCULAR_SANDWICH && circularStudentsCount === 0) {
         return squareStudentsCount
      }

      if (sandwich === SQUARE_SANDWICH && squareStudentsCount === 0) {
         return circularStudentsCount
      }

      if (sandwich === CIRCULAR_SANDWICH) {
         circularStudentsCount--
      } else {
         squareStudentsCount--
      }
   }

   return 0
}
