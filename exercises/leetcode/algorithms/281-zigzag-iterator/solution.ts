class ZigzagIterator {
   queue

   constructor(v1: number[], v2: number[]) {
      this.queue = []

      if (v1.length > 0) {
         this.queue.push([v1, 0])
      }

      if (v2.length > 0) {
         this.queue.push([v2, 0])
      }
   }

   next(): number {
      const [arr, index] = this.queue.shift()
      const value = arr[index]

      if (index < arr.length - 1) {
         this.queue.push([arr, index + 1])
      }

      return value
   }

   hasNext(): boolean {
      return this.queue.length > 0
   }
}

/**
 * Your PeekingIterator object will be instantiated and called as such:
 * var obj = new PeekingIterator(iterator)
 * while (obj.hasNext()) ret.push(obj.next());
 */
