var minimumDifference = function(nums, k) {
  //极端情况，优化时间复杂度
  if (k == 1) return 0;
  nums.sort((a,b)=>{
      return a-b;
  })
  let min=Infinity;
  for(let i=0;i+k-1<nums.length;i++){
      if(nums[i+k-1]-nums[i]<min){
          min=nums[i+k-1]-nums[i];
      }
  }
  return min;
};