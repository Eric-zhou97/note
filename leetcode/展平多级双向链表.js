/**
 * // Definition for a Node.
 * function Node(val,prev,next,child) {
 *    this.val = val;
 *    this.prev = prev;
 *    this.next = next;
 *    this.child = child;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var flatten = function(head) {
  const stack = [], result = head;
  let pre = new Node(1, null, head, null);
  head && stack.push(head);
  for (;stack.length;) {
      const pop = stack.pop();
      pop.prev = pre;
      pre.next = pop;
      pre = pop;
      pop.next && stack.push(pop.next);
      //子链表后进先出
      if (pop.child) {
          stack.push(pop.child);
          pop.child = null;
      }
  }
  result && (result.prev = null);
  return result;
};