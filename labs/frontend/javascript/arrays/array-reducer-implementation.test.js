require('./array-reducer-implementation')

const add = (prev, curr) => prev + curr

describe('Array.prototype.myReduce', () => {
   test('add numbers', () => {
      expect([-4, 10].myReduce(add, 0)).toEqual(6)
   })

   test('add strings', () => {
      expect(['b', 'c', 'd'].myReduce(add, '')).toEqual('bcd')
   })
})
