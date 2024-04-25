function isDigit(char): boolean {
   return !isNaN(char)
}

function decodeString(s: string): string {
   const charStack: string[] = []
   const numStack: number[] = []
   let currentNum: number = 0
   let currentString: string = ''

   for (let char of s) {
      if (isDigit(char)) {
         currentNum = currentNum * 10 + parseInt(char)
      } else if (char === '[') {
         numStack.push(currentNum)
         charStack.push(currentString)
         currentNum = 0
         currentString = ''
      } else if (char === ']') {
         const count = numStack.pop() || 0
         const prevString = charStack.pop()
         currentString = `${prevString}${currentString.repeat(count)}`
      } else {
         currentString += char
      }
   }
   return currentString
}
