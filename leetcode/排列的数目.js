//未完成
//https://leetcode-cn.com/problems/D0F0SV/
var combinationSum4 = function(nums, target) {
  const dp = new Array(target + 1).fill(0);
  dp[0] = 1;
  for (let i = 1; i <= target; i++) {
      for (const num of nums) {
          if (num <= i) {
              dp[i] += dp[i - num];
          }
      }
  }
  return dp[target];
};