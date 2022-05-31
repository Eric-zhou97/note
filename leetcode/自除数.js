var selfDividingNumbers = function(left, right) {
  let ans=[];
  lable: for(let i=left;i<=right;i++){
      let temp=i;
      while(temp>0){
          let point=temp%10;
          temp=Math.floor(temp/10);
          if(point==0 || i%point!=0){
              continue lable;
          }
      }
      ans.push(i);
  }
  return ans;
};