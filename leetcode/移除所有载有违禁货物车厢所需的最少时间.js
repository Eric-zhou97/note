//动态规划，找状态定义与状态转移、
//最值考虑动态规划和贪心
var minimumTime = function(s) {
  // 0 -> left deleted
  // 1 -> middle picked
  // 2 -> right deleted
  // 当字符s[i]被从左侧删除，它前面的字符一定也是被从左侧删除，单次删除的代价为1，总删除的次数为i+1，因此dp[i][0] = i+1；
  // 当字符s[i]被从中间删除，单次删除的代价为2，它前面的字符可以从左侧删除，也可以从中间删除，对应dp[i-1][0]和dp[i-1][1]。此外，从中间删除的元素必须保证s[i] = 1，否则可以选择留下，不用进行删除操作。   
  // 因此：
  // 当s[i] = 1时: dp[i][1] = min(dp[i-1][0], dp[i-1][1]) + 2；
  // 当s[i] = 0时: dp[i][1] = min(dp[i-1][0], dp[i-1][1])；
  // 当字符s[i]被从右侧删除，它前面的字符可以从左侧删除，也可以从中间删除，也可以从右侧删除。单次删除的代价为1，因此：min(dp[i-1][0], dp[i-1][1], dp[i-1][2]) + 1。
  let dp = new Array(s.length).fill(0).map(i => new Array(3).fill(0));
  dp[0][0] = 1, dp[0][1] = s[0] === '1'? 2 : 0, dp[0][2] = 1;
  for (let i=1; i<s.length; i++) {
      dp[i][0] = i+1;
      dp[i][1] = s[i] === '1' ? Math.min(dp[i-1][0], dp[i-1][1])+2 : Math.min(dp[i-1][0], dp[i-1][1]);
      dp[i][2] = Math.min(dp[i-1][0], dp[i-1][1], dp[i-1][2]) + 1;
  }
  return Math.min(...dp[s.length-1]);
};