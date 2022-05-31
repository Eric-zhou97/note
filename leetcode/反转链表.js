var reverseList = function(head) {
  let cur=head;
  let pre=null;
  while(cur){
      let next=cur.next;
      cur.next=pre;
      pre=cur;
      cur=next;
  }
  return pre;
};