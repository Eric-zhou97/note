var minimumFinishTime = function(tires, changeTime, numLaps) {
  let costs = Array(numLaps + 1).fill(Infinity)
  costs[0] = 0
  //数学确定边界17
  //先预处理，然后通过最小值压缩
  for (let l = 1; l <= 17; l++) {
      // let times = tires.map(([f, r]) => f * r ** (l - 1))
      let c = l - 1
      //等比数列求和
      let times = tires.map(([f, r]) => f * (1 - r**(c + 1))/(1 - r))
      // a0 * (1 - q**(n + 1))/(1 - q)
      costs[l] = Math.min(...times)
  }
  // console.log(costs)
  
  let dp = Array(numLaps + 1).fill(0)
  for (let i = 1; i <= numLaps; i++) {
      dp[i] = costs[i];
      for (let l = 1; l <= 17 && l < i; l++) {
          dp[i]=Math.min(dp[i],changeTime + dp[l] + dp[i - l]);
      }
  }
  return dp[numLaps]
};