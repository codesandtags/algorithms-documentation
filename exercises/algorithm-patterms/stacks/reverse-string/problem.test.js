const Solution = require('./problem')

describe('{ProblemName}', () => {
   let solution = null

   beforeEach(() => {
      solution = new Solution()
   })

   test('should correctly reverse the string', () => {
      expect(solution.reverseString('Hello, World!')).toBe('!dlroW ,olleH')
      expect(solution.reverseString('OpenAI')).toBe('IAnepO')
      expect(solution.reverseString('Stacks are fun!')).toBe('!nuf era skcatS')
   })

   test('should return the same string for a single character input', () => {
      expect(solution.reverseString('a')).toBe('a')
   })

   test('should return an empty string for an empty string input', () => {
      expect(solution.reverseString('')).toBe('')
   })
})
