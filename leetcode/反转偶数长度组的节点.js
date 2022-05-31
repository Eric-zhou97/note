//画图
var reverseList = function(head) {
  let prev = null;
  let curr = head;
  while (curr) {
      const next = curr.next;
      curr.next = prev;
      prev = curr;
      curr = next;
  }
  return prev;
};

var reverseEvenLengthGroups = function(head) {
  let now = 1;
  let flag = true;
  let slow = new ListNode();
  slow.next = head;
  let ret = slow;
  let fast = head;
  
  while (fast) {
      // 走
      let old = slow;
      // 走了几步
      let tmp = 0;
      while ((tmp < now) && fast) {
          fast = fast.next;
          slow = slow.next;
          tmp ++;
      }
      // 要翻了..
      if ((tmp % 2 == 0)) {
          slow.next = null;
          let origin = old.next;
          old.next = reverseList(origin);
          origin.next = fast;
          slow = origin;
      }
      now ++;
      flag = !flag;
  }
  return ret.next;
};