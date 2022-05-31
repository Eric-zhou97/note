//各处的临界条件判断要仔细
var nodesBetweenCriticalPoints = function(head) {
  let index=0;
  let point=head.next;
  let pre=head,next=null;
  let ans=[-1,-1];
  let first=-1,bef=-1;
  let min=100000
  while(point.next){
      index++;
      next=point.next;
      if((point.val<pre.val&&point.val<next.val)||(point.val>pre.val&&point.val>next.val)){
          if(first==-1){
              first=index;
          }
          if(min>index-bef&&bef!=-1){
              min=index-bef;
          }
          bef=index;
      }
      pre=point;
      point=point.next
  }
  if(min!=100000){
      ans[0]=min;
  }
  if(bef-first!=0){
      ans[1]=bef-first;
  }
  return ans;
};