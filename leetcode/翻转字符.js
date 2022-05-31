//未完成
//https://leetcode-cn.com/problems/cyJERH/
var minFlipsMonoIncr = function(s) {
  const n = s.length;
  let dp = new Array(2); // dp-路径 滚动数组
  dp[0] = []; // dp[x][0] 记录到当前索引时，将前面的字符全转化为0所需的次数
  dp[1] = []; // dp[x][1] 记录到当前索引时，将前面的字符全转化为1所需的次数
  dp[0][0] = dp[0][1] = 0;
  s[0] == '0'?(dp[0][1]=1):(dp[0][0]=1);

  for(let i=1; i<n;i++) {
      let p0 = dp[(i-1)&1][0];
      let p1 = dp[(i-1)&1][1];
      dp[i&1][0] = p0 + (s[i] == '0'?0:1);
      dp[i&1][1] = Math.min(p0,p1) + (s[i] == '0'?1:0);
  }
  return Math.min(...dp[(n-1) & 1]);
};
