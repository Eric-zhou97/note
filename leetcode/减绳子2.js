//n很大，需要取模
var cuttingRope = function(n) {
  let mod=1000000007
  if(n==2){
    return 1;
  }
  if(n==3){
    return 2;
  }
  let ans=1;
  let len=Math.floor(n/3)-1;
  if(n%3==0){
    ans=3;
  }
  if(n%3==1){
    ans=4;
  }
  if(n%3==2){
    ans=6;
  }
  for(let i=1;i<=len;i++){
    ans=(ans*3)%mod;
  }
  return ans;
};