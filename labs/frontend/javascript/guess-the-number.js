function guessTheNumber(totalNumbers) {
   console.log(`Let's guess your number!`)
   const calculateHalf = (size) => {
      if (size === 1) return size

      return Math.floor(size / 2)
   }
   let numbers = new Array(totalNumbers).fill(0).map((n, i) => i + 1)
   let selectionIndex = calculateHalf(numbers.length)
   let attempts = 0

   console.log(`We are going to play with this numbers: \n ${numbers}`)

   return {
      play: function (answer) {
         if (numbers.length === 1) {
            console.log(`Sorry but I won, your number is: ${numbers[0]}`)
         }

         if (answer === 'higher') {
            numbers = numbers.slice(selectionIndex)
         } else {
            numbers = numbers.slice(0, selectionIndex)
         }

         selectionIndex = calculateHalf(numbers.length)
         console.log(
            `[${++attempts}] Is your number ${numbers[selectionIndex - 1]}?`
         )
      },
      start: function () {
         console.log(
            `I am going to guess your number in ${
               Math.floor(Math.log2(numbers.length)) + 1
            } attempts`
         )
         console.log(
            `[${++attempts}] Is your number ${numbers[selectionIndex - 1]}?`
         )
      },
   }
}

// 10
const game = guessTheNumber(10)
game.start()
