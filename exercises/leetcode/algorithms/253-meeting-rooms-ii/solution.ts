function minMeetingRooms(intervals: number[][]): number {
   intervals.sort((a, b) => a[0] - b[0])

   const result = intervals.reduce((a: number[][], c: number[]) => {
      const roomIndex = a.findIndex((val) => c[0] >= val[1])
      if (roomIndex === -1) {
         a.push(c)
      } else {
         a[roomIndex][1] = c[1]
      }

      return a
   }, [])

   return result.length
}
