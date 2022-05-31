//要考虑边界
var addTwoNumbers = function(l1, l2) {
  let s1=[],s2=[];
  while(l1!=null){
      s1.push(l1.val);
      l1=l1.next;
  }
  while(l2!=null){
      s2.push(l2.val);
      l2=l2.next;
  }
  let sum=0,carry=0,temp1=0,temp2=0;
  let pre=null;
  while(s1.length||s2.length){
      temp1=s1.length?s1.pop():0;
      temp2=s2.length?s2.pop():0;
      let sum=temp1+temp2+carry;
      carry=0;
      if(sum>=10){
          sum=sum-10;
          carry=1;
      }
      let point=new ListNode(sum);
      point.next=pre;
      pre=point;
  }
  //最后的进位
  if(carry==1){
      let point=new ListNode(1);
      point.next=pre;
      return point;
  }
  return pre;
};