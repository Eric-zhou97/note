//注意，这样可以的条件之一是nums是正整数
var minSubArrayLen = function(target, nums) {
  if(nums.length==0){
      return 0;
  }
  let l=0;r=0;
  let sum=nums[0];
  let min=10**5;
  while(r<nums.length&&l<=r){
      if(sum>=target&&l<r){
          min=Math.min(min,r-l+1);
          sum=sum-nums[l];
          l++;
      }else if(sum>=target&&l==r){
          return 1;
      }else if(sum<target){
          r++;
          sum=sum+nums[r];
      }
  }
  if(min==10**5){
      return 0;
  }
  return min;
};

//另解，不一定好，思路不一样
var minSubArrayLen = function(target, nums) {
  let left=0
  let right=0
  let minLen=Infinity
  let sum=0
  let n=nums.length
  while(right<n){
      sum+=nums[right]
      while(sum>=target){
          minLen=Math.min(minLen,right-left+1)
          sum-=nums[left]
          left++
      }
      right++
  }
  return minLen==Infinity?0:minLen
};