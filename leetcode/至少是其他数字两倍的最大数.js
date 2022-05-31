var dominantIndex = function(nums) {
  let second=0,max=0,ans=0;
  for(let i=0;i<nums.length;i++){
      //有两种情况，原最大值变为第二大的
      if(nums[i]>max){
          second=max;
          max=nums[i];
          ans=i;
      }
      //新的数是第二大的
      if(nums[i]>second&&nums[i]<max){
          second=nums[i];
      }
  }
  if(max>=2*second){
      return ans;
  }else{
      return -1;
  }
};


//数据范围很小的时候，可能更快一点
var dominantIndex = function(nums) {
  let sortNums = [...nums].sort((a,b) => {return a - b})
  let res = nums.indexOf(sortNums[nums.length - 1])
  if(sortNums[nums.length-2] * 2 > sortNums[nums.length - 1]){
      res = -1
  }
  return res
};