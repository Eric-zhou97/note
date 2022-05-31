//未完成
//https://leetcode-cn.com/problems/JEj789/
var minCost = function (costs) {
  let dp = new Array(3).fill(0)
  for (let i = 0; i < costs.length; i++) {
      let p1 = costs[i][0] + Math.min(dp[1], dp[2])
      let p2 = costs[i][1] + Math.min(dp[0], dp[2])
      let p3 = costs[i][2] + Math.min(dp[0], dp[1])
      dp = [p1, p2, p3]
  }
  return Math.min(...dp)
};
