//未完成
//https://leetcode-cn.com/problems/21dk04/
var numDistinct = function(s, t) {
  const m = s.length, n = t.length;
  if (m < n) {
      return 0;
  }
  const dp = new Array(m + 1).fill(0).map(() => new Array(n + 1).fill(0));
  for (let i = 0; i <= m; i++) {
      dp[i][n] = 1;
  }
  for (let i = m - 1; i >= 0; i--) {
      for (let j = n - 1; j >= 0; j--) {
          if (s[i] == t[j]) {
              dp[i][j] = dp[i + 1][j + 1] + dp[i + 1][j];
          } else {
              dp[i][j] = dp[i + 1][j];
          }
      }
  }
  return dp[0][0];
};