// class Node {
//     constructor(val, next = null) {
//         this.val = val;
//         this.next = next;
//     }
// }

class Solution {
   mergeTwoLists(l1, l2) {
      // Initialize a dummy node and a current pointer
      let dummy = new Node(-1)
      let current = dummy

      // Traverse through both lists until one is exhausted
      while (l1 && l2) {
         // Compare nodes and append the smaller one to current
         if (l1.val < l2.val) {
            current.next = l1
            l1 = l1.next
         } else {
            current.next = l2
            l2 = l2.next
         }
         current = current.next
      }

      // Append the remaining nodes from the non-empty list
      current.next = l1 || l2

      // Return the merged sorted list
      return dummy.next
   }
}

// Main method for testing
let solution = new Solution()

// Create the first example Node instances
let list1 = new Node(1, new Node(2, new Node(3)))
let list2 = new Node(1, new Node(4))

// Call mergeTwoLists method and print the result
let result = solution.mergeTwoLists(list1, list2)
while (result) {
   console.log(result.val)
   result = result.next
}
