var binaryGap = function(n) {
  let max=0,count=-1;
  while(n>0){
      if(n&1==1){
          max=Math.max(max,count+1);
          count=0;
      }else{
          if(count>=0){
              count++;
          }
      }
      n=Math.floor(n/2);
  }
  return max;
};