//未完成
//https://leetcode-cn.com/problems/Q91FMA/
var lenLongestFibSubseq = function(arr) {
  const n = arr.length;
  // 动态规划
  let dp = new Array(n);
  let map = new Map(); // key 存数组值，value 存数组下标
  for(let i=0; i<n; i++) {
      map.set(arr[i],i); // 数组严格递增，所以不会有重复
      dp[i] = [];
  }
  // i>j>k  当 dp[i] = dp[j] + dp[k] 的时候  dp[i][j] = dp[j][k] + 1
  // 否则 dp[i][j] = 2; 因为当下一个式子成立时， dp应该取 3
  // 为什么要用 [i][j]  因为到达索引 i 时，它并不是一定存在于一种斐波那契数列中
  // 比如 8 可以是 1 3 4 8 ，也可以是 1 7 8 代表的两种 状态 显然是不同的
  
  let result = 0;
  for(let i=1; i<n; i++) { 
      // 为什么i 不从2开始，j不从1开始： 因为我们要保证每一个dp[j][k]能至少取到 2
      for(let j=0; j<i; j++) {
          let k = map.get(arr[i] - arr[j]);
          if(k<j) {
              dp[i][j] = dp[j][k] +1;
              if(dp[i][j]>result) result = dp[i][j];
          }
          else dp[i][j] = 2;
      }
  }
  return result;
};