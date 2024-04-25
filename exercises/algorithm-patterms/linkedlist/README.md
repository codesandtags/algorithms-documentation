# Linked List

## Types

-  Singly Linked List
-  Doubly Linked List
-  Circular Linked List
-  Skip List
-  Unrolled Linked List
-

## Operations

1. **Insert**: Insertion in a singly linked list can be of three types:

-  At the Beginning - O(1): Add a new node before the current head of the list.
-  At the End - O(n): Traverse the list to the last node and add the new node after it.
-  After a Given Node - O(n): Traverse the list to the desired node and insert the new node after it.

2. **Delete**: To delete a node:

-  From the Beginning - O(1): Set the second node as the new head.
-  From the End - O(n): Traverse the list and remove the reference to the last node.
-  A Given Node - O(n): Traverse to the node before the one to delete, then remove the reference to the node-to-delete.

3. **Search** - O(n)

-  Traverse the list from the head, comparing each node's data with the search value until a match is found or the end of the list is reached.

## Implementation Singly Linked List

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node

    def print_list(self):
        cur_node = self.head
        while cur_node:
            print(cur_node.data)
            cur_node = cur_node.next
```

```javascript
class Node {
   constructor(data) {
      this.data = data
      this.next = null
   }
}

class LinkedList {
   constructor() {
      this.head = null
   }

   append(data) {
      const newNode = new Node(data)
      if (!this.head) {
         this.head = newNode
         return
      }
      let lastNode = this.head
      while (lastNode.next) {
         lastNode = lastNode.next
      }
      lastNode.next = newNode
   }

   printList() {
      let curNode = this.head
      while (curNode) {
         console.log(curNode.data)
         curNode = curNode.next
      }
   }
}
```

## Implementation Doubly Linked List

```python
class Node:
    def __init__(self, data):
        self.data = data
        self.next = None
        self.prev = None

class DoublyLinkedList:
    def __init__(self):
        self.head = None

    def append(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
            return
        last_node = self.head
        while last_node.next:
            last_node = last_node.next
        last_node.next = new_node
        new_node.prev = last_node

    def print_list(self):
        cur_node = self.head
        while cur_node:
            print(cur_node.data)
            cur_node = cur_node.next
```

```javascript
class Node {
   constructor(data) {
      this.data = data
      this.next = null
      this.prev = null
   }
}

class DoublyLinkedList {
   constructor() {
      this.head = null
   }

   append(data) {
      const newNode = new Node(data)
      if (!this.head) {
         this.head = newNode
         return
      }
      let lastNode = this.head
      while (lastNode.next) {
         lastNode = lastNode.next
      }
      lastNode.next = newNode
      newNode.prev = lastNode
   }

   printList() {
      let curNode = this.head
      while (curNode) {
         console.log(curNode.data)
         curNode = curNode.next
      }
   }
}
```
