//未完成
//https://leetcode-cn.com/problems/2AoeFn/
var uniquePaths = function(m, n) {
  var dp=new Array();
  dp[0]=new Array();
  for(let i=0;i<n;i++)dp[0][i]=1;
  for(let i=1;i<m;i++){
      dp[i]=new Array();
      dp[i][0]=1;
  }
  for(let i=1;i<m;i++){
      for(let j=1;j<n;j++){
          dp[i][j]=dp[i-1][j]+dp[i][j-1];
      }
  }
  return dp[m-1][n-1];
};