const sum = require('./sum-closure')

describe('sum', () => {
   test('one number', () => {
      expect(sum(1)()).toBe(1)
   })

   test('two numbers', () => {
      // @ts-ignore
      expect(sum(1)(2)()).toBe(3)
   })
})
