function countSteps(curr: number, next: number, ringLength: number): number {
   const stepsBetween = Math.abs(curr - next)
   const stepsAround = ringLength - stepsBetween
   return Math.min(stepsBetween, stepsAround)
}

function findRotateSteps(ring: string, key: string): number {
   const ringLen = ring.length
   const keyLen = key.length
   let curr: number[] = new Array(ringLen)
   let prev: number[] = new Array(ringLen).fill(0)
   // For each occurrence of the character at keyIndex of key in ring
   // Stores minimum steps to the character from ringIndex of ring
   for (let keyIndex = keyLen - 1; keyIndex >= 0; keyIndex--) {
      curr.fill(Number.MAX_VALUE)
      for (let ringIndex = 0; ringIndex < ringLen; ringIndex++) {
         for (let charIndex = 0; charIndex < ringLen; charIndex++) {
            if (ring.charAt(charIndex) === key.charAt(keyIndex)) {
               curr[ringIndex] = Math.min(
                  curr[ringIndex],
                  1 +
                     countSteps(ringIndex, charIndex, ringLen) +
                     prev[charIndex]
               )
            }
         }
      }
      prev = [...curr] // Clone the current array to previous
   }
   return prev[0]
}
