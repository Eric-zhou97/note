var insert = function(head, insertVal) {
  let node = new Node(insertVal,null)
  if(head==null){
      node.next = node
      return node
  }
  let cur = head
  //特殊情况先讨论
  //查找链表中最大的节点
  while(cur.val<=cur.next.val){
      cur = cur.next
      //如果所有值都相等就结束循环
      if(cur==head){
          break
      }
  }
  //cur指向链表中最大节点，cur.next指向最小节点，如果node.val最小或最大就插入二者中间
  if(node.val<=cur.next.val||node.val>=cur.val){
      node.next = cur.next
      cur.next = node
      return head
  }
  //否则cur指向最小节点
  cur = cur.next
  //找到刚好大于node的节点
  while(node.val>cur.next.val){
      cur = cur.next
  }
  //插入到cur节点之后
  node.next = cur.next
  cur.next = node
  return head
};