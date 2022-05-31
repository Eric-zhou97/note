//未完成
//https://leetcode-cn.com/problems/YaVDxD/
var findTargetSumWays = function(nums, target) {
  let count = 0;
  const backtrack = (nums, target, index, sum) => {
      if (index === nums.length) {
          if (sum === target) {
              count++;
          }
      } else {
          backtrack(nums, target, index + 1, sum + nums[index]);
          backtrack(nums, target, index + 1, sum - nums[index]);
      }
  }
  
  backtrack(nums, target, 0, 0);
  return count;
};