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
var removeNodes = function (head) {
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
