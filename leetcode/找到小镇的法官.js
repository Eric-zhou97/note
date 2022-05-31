var findJudge = function(n, trust) {
  let arr=new Array(n+1).fill(0);
  for(let temp of trust){
      arr[temp[0]]=-1;
      if(arr[temp[1]]>=0){
          arr[temp[1]]++;
      }
  }
  let ans=-1;
  for(let i=1;i<=n;i++){
      if(arr[i]==n-1){
          if(ans==-1){
              ans=i;
          }else{
              return -1;
          }
      }
  }
  return ans;
};