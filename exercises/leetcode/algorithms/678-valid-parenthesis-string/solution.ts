interface Validator<Value> {
   validate(val: Value): boolean
}

enum Char {
   WildCard = '*',
   Opening = '(',
   Closing = ')',
}

class ParenthesisValidator implements Validator<string> {
   constructor() {}

   public validate(val: string): boolean {
      let low = 0
      let high = 0

      for (const char of val) {
         if (char === Char.Opening) low += 1
         else low -= 1

         if (char !== Char.Closing) high += 1
         else high -= 1

         if (high < 0) break
         else low = Math.max(low, 0)
      }

      return low === 0
   }
}

// "Lambda function"
function checkValidString(s: string): boolean {
   // di = ...
   // validator = di.get<Validator>('ParenthesisValidator');

   const validator: Validator<string> = new ParenthesisValidator()

   return validator.validate(s)
}
