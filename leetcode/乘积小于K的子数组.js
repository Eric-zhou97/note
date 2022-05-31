//加一个数看看可能性变化
//乘积
//注意，这样可以的条件之一是nums是正整数
var numSubarrayProductLessThanK = function(nums, k) {
  if(nums.length==0){
      return 0;
  }
  let l=0;r=0;
  let count=0;
  let temp=nums[0];
  while(r<nums.length){
      while(temp>=k&&l<=r){
          temp=temp/nums[l++];
      }
      //长度为1，可能行为1，长度为2，可能性为3，长度为3，可能性为6。每增加一单位长度，增加该长度的可能性    
      if(l<=r){
          count=count+r-l+1;
      }
      r++; 
      temp=temp*nums[r];
  }
  return count;
};