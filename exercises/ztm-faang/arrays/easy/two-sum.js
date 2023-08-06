// Given an array of integers returns the indices of the two numbers
// that add up to a given target

function twoSum(numbers, target) {
   console.log(numbers)

   for (let i = 0; i < numbers.length; i++) {
      let numberToFind = target - numbers[i]

      for (let k = i + 1; k < numbers.length; k++) {
         if (numbers[k] === numberToFind) {
            return [i, k]
         }
      }
   }

   return null
}

var input = '1 2 3 4 5'.split(' ').map(Number) // Output : 3, 4
var target = 11

console.time('solution')
console.log(`Solution : ${twoSum(input, target)}`)
console.timeEnd('solution')

/** 
    Steps for solution:

    #####[ Step 1: Verify the constraints (Edge cases) ]#####
    Q: Are all the numbers positive or can there be negatives?
    A: Positive
    
    Q: Are there duplicate numbers in the array?
    A: No

    Q: Will there always be a solution available?
    A: No

    Q: What do we return if there's no solution?
    A: Just return null

    Q: Can there be multiple pairs that add up to the target?
    A: No, only 1 pair of number will add up to the target

    #####[ Step 2: Write out some test cases ]#####

    [1,3,7,9,2]     t = 11
    [1,2,3,4,5]     t = 25
    []              t = 3
    [5]             t = 8
    [5]             t = 5
    [1,6]           t = 7

    #####[ Step 3: Figure out a solution without code ]#####

    Number to find = Target - nums[p1]

    #####[ Step 4: Write out solution in code ]#####

    #####[ Step 5: Double check for errors ]#####

    #####[ Step 6: Test our code with our test cases ]#####

    #####[ Step 7: Space and time complexity ]#####

    #####[ Step 8: Optimize solution ]#####
     - Reduce the time complexity
     - Increase the space complexity

**/

const findTwoSumOptimized = (numbers, target) => {
   // Validations
   const LENGTH = numbers.length
   const numsMap = {}

   // Traverse array
   for (let p = 0; p < LENGTH; p++) {
      const numberToFind = target - numbers[p]
      const curentMapVal = numsMap[numbers[p]]

      if (curentMapVal > 0) {
         return [curentMapVal, p]
      } else {
         numsMap[numberToFind] = p
      }
   }

   // No solution found
   return null
}
