function chessboardSpace(numberOfGrains) {
   let chessboardSpace = 1
   let placedGrains = 1

   while (placedGrains < numberOfGrains) {
      console.count(`Counting ${numberOfGrains}`)
      placedGrains *= 2
      chessboardSpace++
   }

   return placedGrains
}

for (let days = 1; days <= 100; days++) {
   console.log({
      day: days,
      chessboardSpace: chessboardSpace(days),
   })
}
