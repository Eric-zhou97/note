//未完成
//https://leetcode-cn.com/problems/fpTFWP/
var longestIncreasingPath = function(matrix) {
  let rows=matrix.length,cols=matrix[0].length;
  let dp=bucket=Array.from(new Array(rows),()=>[]);
  var dfs=function(x,y,pre){
      if(x<0||x>=rows||y<0||y>=cols){
          return 0;
      }
      let cur=matrix[x][y];
      if(cur<=pre){
          return 0;
      }
      if(dp[x][y]>0){
          return dp[x][y];
      }
      let up=dfs(x-1,y,cur);
      let down=dfs(x+1,y,cur);
      let left=dfs(x,y-1,cur);
      let right=dfs(x,y+1,cur);
      let max=Math.max(up,down,left,right);
      dp[x][y]=max+1;
      return max+1;
  }
  let ans=0;
  for(let i=0;i<rows;i++){
      for(let j=0;j<cols;j++){
          ans=Math.max(ans,dfs(i,j,-1));
      }
  }
  return ans;
};