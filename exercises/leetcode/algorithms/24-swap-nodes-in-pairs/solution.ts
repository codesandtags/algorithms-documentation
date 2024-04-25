/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function swapPairs(head: ListNode | null): ListNode | null {
   // Initialize a dummy node to maintain the new head of the list after swapping.
   let dummy = new ListNode()
   dummy.next = head
   // Previous node to maintain the node previous to the current pair being swapped.
   let previous = dummy

   // Continue swapping until no pairs are left.
   while (head && head.next) {
      // Initialize the first and second nodes of the pair to be swapped.
      let firstNode = head
      let secondNode = head.next

      // Adjust the pointers to perform the swap.
      firstNode.next = secondNode.next
      secondNode.next = firstNode
      previous.next = secondNode

      // Move to the next pair.
      head = firstNode.next
      previous = firstNode
   }
   // Return the new head of the list after swapping.
   return dummy.next
}
