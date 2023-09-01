/**
 * Technique 1: Using 2 pointers, left and right
 * @param {string} str
 *
 * @returns {boolean} true if the string is a palindrome, false otherwise
 */
function isAPalindrome(str) {
   let left = 0
   let right = str.length - 1

   while (left < right) {
      if (str[left] !== str[right]) {
         return false
      }

      left++
      right--
   }

   return true
}

console.log({
   word: 'racecar',
   isAPalindrome: isAPalindrome('racecar'),
})
console.log({
   word: 'aba',
   isAPalindrome: isAPalindrome('aba'),
})

/**
 * Technique 2: Starting at middle and expanding outwards
 * @param {string} str
 *
 * @returns {boolean} true if the string is a palindrome, false otherwise
 */
function isAPalindrome2(str) {
   const middle = Math.floor(str.length / 2)

   for (let i = 0; i < middle; i++) {
      if (str[i] !== str[str.length - 1 - i]) {
         return false
      }
   }

   return true
}

console.log('\n\n')
console.log({
   word: 'racecar',
   isAPalindrome2: isAPalindrome2('racecar'),
})

console.log({
   word: 'aba',
   isAPalindrome2: isAPalindrome2('aba'),
})
console.log({
   word: 'abba',
   isAPalindrome2: isAPalindrome2('abba'),
})

/**
 * Technique 3: Reverse the string and compare each character
 * @param {string} str
 *
 * @returns {boolean} true if the string is a palindrome, false otherwise
 */
function isAPalindrome3(str) {
   const reversed = str.split('').reverse().join('')

   return str === reversed
}

console.log('\n\n')
console.log({
   word: 'racecar',
   isAPalindrome3: isAPalindrome3('racecar'),
})

console.log({
   word: 'aba',
   isAPalindrome3: isAPalindrome3('aba'),
})
console.log({
   word: 'abba',
   isAPalindrome3: isAPalindrome3('abba'),
})

/**
 * Technique 4: Replace all special characters and spaces and compare
 * @param {string} str
 *
 * @returns {boolean} true if the string is a palindrome, false otherwise
 */
function isAPalindrome4(str) {
   const regex = /[^\w]/g
   const cleaned = str.toLowerCase().replace(regex, '')
   console.log({
      cleaned,
   })

   let left = 0
   let right = cleaned.length - 1

   while (left < right) {
      if (cleaned[left] !== cleaned[right]) {
         return false
      }

      left++
      right--
   }

   return true
}

console.log('\n\n')
console.log({
   word: 'racecar',
   isAPalindrome4: isAPalindrome4('racecar'),
})
console.log({
   word: 'aba',
   isAPalindrome4: isAPalindrome4('aba'),
})

console.log({
   word: 'A man a plan, a canal: Panama',
   isAPalindrome4: isAPalindrome4('A man a plan, a canal: Panama'),
})

console.log({
   word: 'there 1 2 1 e-r e h t ',
   isAPalindrome4: isAPalindrome4('there 1 2 1 e-r e h t '),
})

/*
 * Check if the string is almost a palindrome by removing one character
 * @param {string} str
 * @returns {boolean} true if the string is almost a palindrome, false otherwise
 * time complexity: O(n)
 * space complexity: O(1)
 **/
function isAlmostPalindrome(str) {
   let left = 0
   let right = str.length - 1

   while (left < right) {
      if (str[left] !== str[right]) {
         // remove left
         const leftStr = str.substring(0, left) + str.substring(left + 1)
         const rightStr = str.substring(0, right) + str.substring(right + 1)

         return isAPalindrome(leftStr) || isAPalindrome(rightStr)
      }

      left++
      right--
   }

   return true
}

// Examples
console.log('\n\n')
console.log({
   word: 'racecar',
   isAlmostPalindrome: isAlmostPalindrome('racecar'),
})
console.log({
   word: 'abca',
   isAlmostPalindrome: isAlmostPalindrome('abca'),
})
console.log({
   word: 'abccdba',
   isAlmostPalindrome: isAlmostPalindrome('abccdba'),
})
console.log({
   word: 'abdccba',
   isAlmostPalindrome: isAlmostPalindrome('abdccba'),
})
console.log({
   word: 'abdccdeecccba',
   isAlmostPalindrome: isAlmostPalindrome('abdccdeecccba'),
})
