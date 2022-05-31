//优化
//双方都为null也相等，这时退出返回null也是ok的
var getIntersectionNode = function(headA, headB) {
  let a = headA, b = headB
  while(a !== b) {
      a = a !== null ? a.next : headB
      b = b !== null ? b.next : headA
  }
  return a
};



var getIntersectionNode = function(headA, headB) {
  let pA=headA,pB=headB;
  let flag=0;
  while(pA!=null){
      if(pA==pB){
          return pA;
      }
      pA=pA.next;
      pB=pB.next;
      flag=0;
      if(pA==null){
          pA=headB;
          flag++;
      }
      if(pB==null){
          if(flag==1){
              return null;
          }
          pB=headA;
          flag++;
      }
  }
  return null;
};