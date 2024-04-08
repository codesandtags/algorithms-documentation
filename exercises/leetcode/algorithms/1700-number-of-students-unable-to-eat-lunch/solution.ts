/**
 * Total Sandwiches == Total Students
 */
function countStudents(students: number[], sandwiches: number[]): number {
   let trackCycle = 0

   while (students.length > 0 && sandwiches.length > 0) {
      const student = students.shift()
      const sandwich = sandwiches[0]

      if (student === sandwich) {
         sandwiches.shift()
         trackCycle = 0
      } else if (student) {
         students.push(student)
         trackCycle++
      }

      if (trackCycle > students.length) {
         break
      }
   }

   return students.length
}
