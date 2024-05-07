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
var doubleIt = function (head) {
   if (head.val > 4) {
      head = new ListNode(0, head)
   }

   for (node = head; node != null; node = node.next) {
      node.val = (node.val * 2) % 10

      if (node.next !== null && node.next.val > 4) {
         node.val++
      }
   }

   return head
}
