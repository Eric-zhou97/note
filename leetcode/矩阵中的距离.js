//未完成
//https://leetcode-cn.com/problems/2bCMpM/
var updateMatrix = function(mat) {
  let rows=mat.length,cols=mat[0].length;
  let dp=Array.from(new Array(rows+2),()=>[]);
  for(let i=0;i<dp.length;i++){
      dp[i][0]=dp[i][cols+1]=Infinity;
  }
  for(let j=0;j<cols+2;j++){
      dp[0][j]=dp[rows+1][j]=Infinity;
  }
  for(let i=1;i<rows+1;i++){
      for(let j=1;j<cols+1;j++){
          if(mat[i-1][j-1]==0){
              dp[i][j]=0;
          }else{
              dp[i][j]=Math.min(dp[i-1][j],dp[i][j-1])+1;
          }
      }
  }
  for(let i=rows;i>0;i--){
      for(let j=cols;j>0;j--){
          if(mat[i-1][j-1]==1){
              dp[i][j]=Math.min(dp[i][j],Math.min(dp[i+1][j],dp[i][j+1])+1);
          }
      }
  }
  let ans=[];
  for(let i=0;i<rows;i++){
      ans.push([]);
      for(let j=0;j<cols;j++){
          ans[i][j]=dp[i+1][j+1];
      }
  }
  return ans;
};