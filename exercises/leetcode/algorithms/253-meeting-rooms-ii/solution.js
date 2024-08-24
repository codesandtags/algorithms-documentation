/**
 * @param {number[][]} intervals
 * @return {number}
 */
var minMeetingRooms = function (intervals) {
   // Base case: If there are no intervals, no rooms are needed.
   if (intervals.length === 0) return 0

   // Create separate arrays for start times and end times
   let start = []
   let end = []

   // Populate start and end time arrays from the given intervals
   for (let i = 0; i < intervals.length; i++) {
      start.push(intervals[i][0])
      end.push(intervals[i][1])
   }

   // Sort the start and end times
   start.sort((a, b) => a - b)
   end.sort((a, b) => a - b)

   // Pointers for start and end arrays
   let startPointer = 0
   let endPointer = 0

   // This variable will keep track of rooms currently in use
   let usedRooms = 0

   // Iterate through all the meetings by their start times
   while (startPointer < intervals.length) {
      // If the start time of the current meeting is greater than or equal to the end time of the
      // earliest ending meeting, a room has been vacated and can be reused
      if (start[startPointer] >= end[endPointer]) {
         usedRooms -= 1
         endPointer += 1
      }

      // For each meeting start, a room is required
      usedRooms += 1
      startPointer += 1
   }

   // The maximum number of rooms used at any point is the answer
   return usedRooms
}
