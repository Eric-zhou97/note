//未完成
//https://leetcode-cn.com/problems/IY6buf/
var isInterleave = function(s1, s2, s3) {
  const n = s1.length;
  const m = s2.length;
  if(n+m!=s3.length) return false;
  // dp 路径
  let dp = new Array(n+1).fill(0).map(()=>new Array(m+1).fill(false));
  // dp[i][j] : 长度为[i+j]的s3前缀 能否由 长度为i的s1前缀 与 长度为j的s2前缀 交织组成
  // 先处理一下 i/j 取0 的情况
  dp[0][0] = true;
  for(let i=1;i<n+1;i++) {
      if(s1[i-1]==s3[i-1]) dp[i][0] = true;
      else break;
  }
  for(let j=1;j<m+1;j++) {
      if(s2[j-1]==s3[j-1]) dp[0][j] = true;
      else break;
  }
  for(let i=1;i<n+1;i++) {
      for(let j=1;j<m+1;j++) {
          dp[i][j] = (s1[i-1] == s3[i+j-1] && dp[i-1][j]) || (s2[j-1] == s3[i+j-1] && dp[i][j-1])
      }
  }
  return dp[n][m];
};