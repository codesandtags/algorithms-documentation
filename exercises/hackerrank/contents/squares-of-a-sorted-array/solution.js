// https://www.hackerrank.com/contests/coding-gym-mo0419/challenges/squares-of-a-sorted-array
function processData(input) {
   let inputs = input.split('\n')
   let length = inputs[0]
   let array = inputs[1].split(' ')

   const sortedSquares = Array(length)
   let leftIndex = 0
   let rightIndex = length - 1

   for (let index = length - 1; index >= 0; index--) {
      let leftSquared = Math.pow(array[leftIndex], 2)
      let rightSquared = Math.pow(array[rightIndex], 2)

      if (leftSquared > rightSquared) {
         sortedSquares[index] = leftSquared
         leftIndex++
      } else {
         sortedSquares[index] = rightSquared
         rightIndex--
      }
   }

   console.log(sortedSquares.join(' '))
}

process.stdin.resume()
process.stdin.setEncoding('ascii')
_input = ''
process.stdin.on('data', function (input) {
   _input += input
})

process.stdin.on('end', function () {
   processData(_input)
})
