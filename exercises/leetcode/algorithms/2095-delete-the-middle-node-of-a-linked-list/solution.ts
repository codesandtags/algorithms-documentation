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

function getMiddle(head: ListNode) {
   let fast = head.next.next
   let slow = head

   while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
   }

   return slow
}

function deleteMiddle(head: ListNode | null): ListNode | null {
   if (!head.next) return null

   let middle = getMiddle(head)
   middle.next = middle.next.next

   return head
}
