require('./bind-implementation')

describe('Function.prototype.myBind', () => {
   const person = {
      name: 'John',
      getName() {
         return this.name
      },
      dummy(a, b, c) {
         return [a, b, c]
      },
      greeting(prefix, message) {
         return `${prefix} ${this.name}, ${message}`
      },
   }

   test('Function.prototype.myBind is a function', () => {
      expect(typeof Function.prototype.myBind).toBe('function')
   })

   test('`this` is bound', () => {
      const unboundGetName = person.getName

      // expect(() => {
      //    unboundGetName()
      // }).toThrow()

      const getName = person.getName.myBind(person)
      expect(getName()).toBe(person.name)
   })

   test('args can be bound', () => {
      const dummy = person.dummy.myBind(person, 2, 3, 5)
      expect(dummy()).toStrictEqual([2, 3, 5])
   })
})
