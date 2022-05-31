//贪心的思路
var largestSumAfterKNegations = function(nums, k) {
  nums.sort((a,b)=>{
      return Math.abs(b)-Math.abs(a);
  })
  let len=nums.length-1;
  let sum=0;
  for(let i=0;i<=len;i++){
      if(k>0&&nums[i]<0){
          sum+=-nums[i];
          k--;
      }else{
          sum+=nums[i];
      }
  }
  if(k%2==1){
      sum-=Math.abs(nums[len]<<1);
  }
  return sum;
};