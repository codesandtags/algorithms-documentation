function generateBinaryNumbers(n) {
   let queue = ['1'] // Initialize a queue with the first binary number "1".
   let res = [] // Initialize an empty array to store the generated binary numbers.

   while (n--) {
      // Repeat n times to generate binary numbers.
      let s1 = queue.shift() // Dequeue the first binary number in the queue.
      res.push(s1) // Add the dequeued binary number to the result array.

      let s2 = s1 // Copy the dequeued binary number.
      queue.push(s1 + '0') // Enqueue the first generated binary number by adding "0".
      queue.push(s2 + '1') // Enqueue the second generated binary number by adding "1".
   }

   return res
      .map((n) => n.padStart(5, '0'))
      .map((n) => {
         return { n, d: parseInt(n, 2) }
      }) // Return the array of generated binary numbers.
}

generateBinaryNumbers(20)
