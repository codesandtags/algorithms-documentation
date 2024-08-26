/**
 * @param {string} num
 * @return {string}
 */
var largestPalindromic = function (num) {
   let firstHalf = [] // Array to store first half of the palindrome
   let frequency = Array(10).fill(0) // Frequency array for digits 0-9

   // Count the frequency of each digit in the input number
   for (let ch of num) {
      let val = ch - '0'
      frequency[val]++
   }

   let middle = -1 // Variable to store the middle digit if needed

   // Iterate from the highest digit (9) to the lowest (0)
   for (let i = 9; i >= 0; i--) {
      if (frequency[i] != 0 && (i != 0 || firstHalf.length > 0)) {
         let count = frequency[i]
         while (count > 1) {
            firstHalf.push(i) // Append the digit to firstHalf
            count -= 2 // Use two of the digit for the first half
         }
         if (count == 1 && middle == -1) {
            middle = i // Assign the middle digit if it's the largest odd-count digit
         }
      }
   }

   let secondHalf = [...firstHalf].reverse() // Create secondHalf as a reversed copy of firstHalf
   if (middle != -1) firstHalf.push(middle) // Append the middle digit if it exists
   firstHalf = firstHalf.concat(secondHalf) // Append the reversed first half to firstHalf

   return firstHalf.length > 0 ? firstHalf.join('') : '0' // Return the final palindrome or "0"
}
