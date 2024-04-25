// class DLNode {
//     constructor(val, next = null, prev = null) {
//         this.val = val;
//         this.next = next;
//         this.prev = prev;
//     }
// }

class Solution {
   isPalindrome(head) {
      if (!head || !head.next) return true

      let tail = head
      while (tail.next) tail = tail.next // Find the tail of the doubly linked list

      let start = head
      let end = tail

      while (start !== end && start.prev !== end) {
         if (start.val !== end.val) return false // Compare the values at start and end pointers
         start = start.next
         end = end.prev
      }

      return true
   }
}

// Test the algorithm with example inputs
const solution = new Solution()

// Test case 1
const head1 = new DLNode(1)
head1.next = new DLNode(2)
head1.next.prev = head1
head1.next.next = new DLNode(1)
head1.next.next.prev = head1.next
console.log(solution.isPalindrome(head1)) // Expected: true

module.exports = Solution
