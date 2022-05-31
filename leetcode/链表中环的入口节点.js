// 假设环节点前的距离为 m,环长度为n，则链表总长度为m+n;
// 快慢指针相遇后，它们一定在距离环节点k处的地方相遇，设快指针走的长度为f,则 f = m + n +k;
// 慢指针设为s, 则 s = m + k;
// 又 f = 2s; 则 n = m + k, 即 n-k = m,就是说它们在距离环节点k处的地方相遇后，再走n-k步，一定会和从head节点走m步的指针相遇
var detectCycle = function(head) {
  let slow = fast = head;
  while (fast !== null && fast.next !== null) {
      slow = slow.next;
      fast = fast.next.next;
      if (slow == fast) {
          slow = head;
          while (slow !== fast) {
              slow = slow.next;
              fast = fast.next;
          }
          return slow;
      }
  }
  return null;
};

//js的特性作弊
var detectCycle = function(head) {
  while(head){
      if(head.flag){
          return head
      }
      head.flag = true
      head = head.next
  }
  return null
};