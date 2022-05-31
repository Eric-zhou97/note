//未完成
//滑动窗口（不用多重循环）
//动态规划未看
var maxSumOfThreeSubarrays = function(nums, k) {
  const ans = [0, 0, 0];
      let sum1 = 0, maxSum1 = 0, maxSum1Idx = 0;
      let sum2 = 0, maxSum12 = 0, maxSum12Idx1 = 0, maxSum12Idx2 = 0;
      let sum3 = 0, maxTotal = 0;
      for (let i = k * 2; i < nums.length; ++i) {
          sum1 += nums[i - k * 2];
          sum2 += nums[i - k];
          sum3 += nums[i];
          if (i >= k * 3 - 1) {
              if (sum1 > maxSum1) {
                  maxSum1 = sum1;
                  maxSum1Idx = i - k * 3 + 1;
              }
              if (maxSum1 + sum2 > maxSum12) {
                  maxSum12 = maxSum1 + sum2;
                  maxSum12Idx1 = maxSum1Idx;
                  maxSum12Idx2 = i - k * 2 + 1;
              }
              if (maxSum12 + sum3 > maxTotal) {
                  maxTotal = maxSum12 + sum3;
                  ans[0] = maxSum12Idx1;
                  ans[1] = maxSum12Idx2;
                  ans[2] = i - k + 1;
              }
              sum1 -= nums[i - k * 3 + 1];
              sum2 -= nums[i - k * 2 + 1];
              sum3 -= nums[i - k + 1];
          }
      }
      return ans;
  };