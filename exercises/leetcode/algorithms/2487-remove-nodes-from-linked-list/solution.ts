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

function removeNodes(head: ListNode | null): ListNode | null {
   let cur = head
   let stack = []

   while (cur !== null) {
      while (stack.length > 0 && stack[stack.length - 1].val < cur.val) {
         let a = stack.pop()
      }
      stack.push(cur)
      cur = cur.next
   }

   let nxt = null
   while (stack.length > 0) {
      cur = stack.pop()
      cur.next = nxt
      nxt = cur
   }

   return cur
}
