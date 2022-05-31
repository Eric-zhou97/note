var removeNthFromEnd = function(head, n) {
  let first=head;
  while(n>0){
      n--;
      first=first.next;
  }
  let last=head;
  //删除头节点的情况
  if(first==null){
      return head.next;
  }
  while(first.next!=null){
      first=first.next;
      last=last.next;
  }
  last.next=last.next.next;
  return head;
};