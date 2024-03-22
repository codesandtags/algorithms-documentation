type Counter = {
   increment: () => number
   decrement: () => number
   reset: () => number
}

function createCounter(init: number): Counter {
   let counter = init || 0

   function increment() {
      return ++counter
   }
   function decrement() {
      return --counter
   }
   function reset() {
      counter = init
      return counter
   }

   return {
      increment,
      decrement,
      reset,
   }
}

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */
