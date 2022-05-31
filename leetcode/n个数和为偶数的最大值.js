var maxmiumScore = function(cards, cnt) {
  cards.sort((a,b)=>{
      return a-b;
  })
  let i=cards.length-1;
  let ans=0;
  while(i>=0&&cnt>0){
      ans=ans+cards[i];
      i--;
      cnt--;
  }
  if(ans%2==0){
      return ans;
  }
  
  let temp=i;
  let res=ans;
  //去偶数换奇数
  let j=i+1;
  while(j<cards.length&&cards[j]%2==1){
      j++;
  }
  while(i>=0&&cards[i]%2==0){
      i--;
  }
  if(j>=cards.length){
      ans=0;
  }else if(i>=0){
      ans=ans-cards[j]+cards[i];
  }else{
      ans=0;
  }
  
  
  //去奇数换偶数
  j=temp+1;
  i=temp;
  while(j<cards.length&&cards[j]%2==0){
      j++;
  }
  while(i>=0&&cards[i]%2==1){
      i--;
  }

  
  if(j>=cards.length){
      return ans;
  }else if(i>=0){
      return Math.max(ans,res-cards[j]+cards[i]);
  }else{
      return ans;
  }
  
};