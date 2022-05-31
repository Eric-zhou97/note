// 给你一个下标从 0 开始的整数数组 nums ，该数组的大小为 n ，请你计算 nums[j] - nums[i] 能求得的 最大差值 ，其中 0 <= i < j < n 且 nums[i] < nums[j] 。
// 返回 最大差值 。如果不存在满足要求的 i 和 j ，返回 -1 。
//单循环获得最大差值
//当前值与前最小值的差值最大化
var maximumDifference = function(nums) {
  let min = nums[0],res=-1;
  for(let i = 1; i < nums.length; i ++){
      if(min > nums[i]){
          min = nums[i];
      }else{
          res = Math.max(nums[i]-min,res);
      }
  }
  //不能等于
  if(res == 0){
      return -1;
  }
  return res;
};