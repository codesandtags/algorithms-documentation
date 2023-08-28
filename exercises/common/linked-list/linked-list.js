/**
 * Represents a node in a doubly linked list.
 */
class Node {
   constructor(value) {
      this.value = value
      this.next = null
      this.prev = null
   }
}

/**
 * Represents a doubly linked list.
 */
class LinkedList {
   /**
    * Initializes a new doubly linked list.
    */
   constructor() {
      this.head = null
      this.tail = null
   }

   /**
    * Adds a node to the end of the list.
    * @param {any} value The value to add.
    * @returns {LinkedList} The list.
    * @throws {TypeError} Thrown when the value is null or undefined.
    * @timecomplexity O(1)
    * @spacecomplexity O(1)
    * @example
    * const list = new LinkedList()
    * list.append(1)
    * list.append(2)
    **/
   append(value) {
      if (value === null || value === undefined) {
         throw new TypeError('The value cannot be null or undefined.')
      }

      const node = new Node(value)

      if (this.head === null) {
         this.head = node
         this.tail = node
      } else {
         this.tail.next = node
         node.prev = this.tail
         this.tail = node
      }

      return this
   }

   /**
    * Adds a node to the beginning of the list.
    * @param {any} value The value to add.
    * @returns {LinkedList} The list.
    * @throws {TypeError} Thrown when the value is null or undefined.
    * @timecomplexity O(1)
    * @spacecomplexity O(1)
    * @example
    * const list = new LinkedList()
    * list.prepend(1)
    * list.prepend(2)
    * list.prepend(3)
    **/
   prepend(value) {
      if (value === null || value === undefined) {
         throw new TypeError('The value cannot be null or undefined.')
      }

      const node = new Node(value)

      if (this.head === null) {
         this.head = node
         this.tail = node
      } else {
         this.head.prev = node
         node.next = this.head
         this.head = node
      }

      return this
   }

   traverse() {
      let currentNode = this.head
      while (currentNode) {
         const value = currentNode.value
         console.log({
            value,
         })
         currentNode = currentNode.next
      }
   }

   reverse() {
      let currentNode = this.head
      let prevNode = null
      let nextNode = null

      while (currentNode) {
         nextNode = currentNode.next
         currentNode.next = prevNode
         currentNode.prev = nextNode
         prevNode = currentNode
         currentNode = nextNode
      }

      this.tail = this.head
      this.head = prevNode
   }

   values() {
      const values = []
      let currentNode = this.head
      while (currentNode) {
         values.push(currentNode.value)
         currentNode = currentNode.next
      }

      return values
   }
}

const linkedList = new LinkedList()
linkedList.append('a')
linkedList.append('b')
linkedList.append('c')
linkedList.append('d')
linkedList.append('e')

console.log({
   linkedList,
   values: linkedList.values(),
})

linkedList.reverse()

console.log({
   linkedList,
   values: linkedList.values(),
})
