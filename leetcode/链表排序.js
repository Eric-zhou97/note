var sortList = function(head) {
  if(head==null){
      return null;
  }
  let point=head;
  let arr=[];
  while(point!=null){
      arr.push(point.val);
      point=point.next;
  }
  arr.sort((a,b)=>{return a-b;})
  point=head;
  // let i=0;
  // while(point!=null){
  //     point.val=arr[i];
  //     point=point.next;
  //     i++;
  // }
  arr.map((item)=>{
      point.val=item;
      point=point.next;
  })
  return head;
};

//另解，分治法
var sortList = function (head) {
  if (!head || head.next === null) return head;
  // 使用快慢指针找到中间节点
  let slow = head,
    fast = head.next;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
  }
  // 将链表分成两半并返回后半部分链表的头节点
  let newList = slow.next;
  slow.next = null;

  // 对前后两个链表进行排序
  let left = sortList(head);
  let right = sortList(newList);
  // 将排序好的两个有序链表合并为一个链表
  let res = new ListNode(-1);
  let nHead = res;
  // 合并链表只需要调整指针的指向
  // 两个链表哪个节点的值小就先指向它
  while (left !== null && right !== null) {
    if (left.val < right.val) {
      nHead.next = left;
      left = left.next;
    } else {
      nHead.next = right;
      right = right.next;
    }
    nHead = nHead.next;
  }
  nHead.next = left === null ? right : left;
  return res.next;
};
