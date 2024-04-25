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

function mergeTwoLists(
   list1: ListNode | null,
   list2: ListNode | null
): ListNode | null {
   let dummy: ListNode = new ListNode()
   let current: ListNode = dummy

   while (list1 && list2) {
      if (list1.val <= list2.val) {
         current.next = list1
         list1 = list1.next
      } else {
         current.next = list2
         list2 = list2.next
      }
      current = current.next
   }

   current.next = list1 || list2

   return dummy.next
}
