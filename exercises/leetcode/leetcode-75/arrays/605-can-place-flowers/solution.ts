function canPlaceFlowers(flowerbed: number[], n: number): boolean {
   let count = 0
   const length = flowerbed.length

   for (let i = 0; i < length; i++) {
      if (flowerbed[i] === 0) {
         const isEmptyLeftPlot = i === 0 || flowerbed[i - 1] === 0
         const isEmptyRightPlot = i === length - 1 || flowerbed[i + 1] === 0

         if (isEmptyLeftPlot && isEmptyRightPlot) {
            flowerbed[i] = 1
            count++

            if (count >= n) {
               return true
            }
         }
      }
   }

   return count >= n
}
