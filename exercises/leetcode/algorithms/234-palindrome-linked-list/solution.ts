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

function getReversed(head: ListNode | null): ListNode {
   let prev = null
   let current = head

   while (current) {
      let next = current.next
      current.next = prev
      prev = current
      current = next
   }

   return prev
}

function getHalf(head) {
   let fast = head
   let slow = head

   while (fast.next != null && fast.next.next != null) {
      fast = fast.next.next
      slow = slow.next
   }

   return slow
}

function isPalindrome(head: ListNode | null): boolean {
   if (!head || !head.next) return true

   let start = head
   let end = getReversed(getHalf(head))

   while (start && end) {
      if (start.val !== end.val) return false
      start = start.next
      end = end.next
   }

   return true
}
