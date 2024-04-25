/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
function deleteMiddle(head) {
   if (!head.next) return null

   let middle = getMiddle(head)
   middle.next = middle.next.next

   return head
}

function getMiddle(head) {
   let fast = head.next.next
   let slow = head

   while (fast && fast.next) {
      fast = fast.next.next
      slow = slow.next
   }

   return slow
}
