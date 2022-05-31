//01背包，压缩空间
var canPartition = function(nums) {
  let sum=0;
  for(let n of nums){
      sum=sum+n;
  }
  if(sum %2==1){
      return false;
  }
  sum=sum/2;
  let dp=new Array(sum+1).fill(false);
  dp[0]=true;
  for(let i=1;i<nums.length;i++){
      //该数只出现一次，从后往前，防止自身影响自身
      for(let j=sum;j>=nums[i];j--){
          dp[j]=dp[j]||dp[j-nums[i]];
      }
  }
  return dp[sum];
};