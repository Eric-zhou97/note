var subarraySum = function(nums, k) {
  if(!nums.length){
      return 0;
  }
  let l=0;r=0;
  let sum=nums[0];
  let count=0;
  while(r<nums.length){
      while(sum>k&&l<=r){
          sum=sum-nums[l++];
      }
      if(l<=r&&sum==k){
          count++;
      }
      r++;
      sum=sum+sum[r];
  }
  return count;
};