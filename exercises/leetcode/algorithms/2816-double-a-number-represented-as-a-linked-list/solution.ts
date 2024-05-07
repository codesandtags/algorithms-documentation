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

function doubleIt(head: ListNode | null): ListNode | null {
   if (head.val > 4) {
      head = new ListNode(0, head)
   }

   for (let node = head; node != null; node = node.next) {
      node.val = (node.val * 2) % 10

      if (node.next !== null && node.next.val > 4) {
         node.val++
      }
   }

   return head
}
