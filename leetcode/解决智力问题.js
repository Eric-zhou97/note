//从后往前的变种0/1背包问题
//一维数组的0/1背包，f[x]代表使用了x容量后的最大价值，每个物品只有一次，因此逆序
var mostPoints = function(questions) {
  let dp=new Array(questions.length+1).fill(0);
  for(let i=questions.length-1;i>=0;i--){
      let temp=Math.min(i+questions[i][1]+1,questions.length);
      dp[i]=Math.max(dp[i+1],questions[i][0]+dp[temp]);
  }
  return dp[0];
};