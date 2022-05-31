//未完成
//https://leetcode-cn.com/problems/omKAoA/submissions/
var minCut = function (s) {
  const n = s.length;
  // 二维数组isPal来保存整个字符串的回文情况
  const isPal = new Array(n).fill(false).map(() => new Array(n).fill(false));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = i; j < n; j++) {
      if (s[i] === s[j] && (j - i <= 1 || isPal[i + 1][j - 1])) {
        isPal[i][j] = true;
      }
    }
  }
  // dp[i]：范围是[0, i]的回文子串，最少分割次数是dp[i]
  const dp = new Array(n).fill(0);
  for (let i = 0; i < n; i++) dp[i] = i; // 初始化 dp[i]的最大值其实就是i，也就是把每个字符分割出来]
  for (let i = 1; i < n; i++) {
    if (isPal[0][i]) {// 判断是不是回文子串
      dp[i] = 0;
      continue;
    }
    /* 
        如果要对长度为[0, i]的子串进行分割，分割点为j。
        那么如果分割后，区间[j + 1, i]是回文子串，那么dp[i] 就等于 dp[j] + 1。
        这里可能有同学就不明白了，为什么只看[j + 1, i]区间，不看[0, j]区间是不是回文子串呢？
        那么在回顾一下dp[i]的定义： 范围是[0, i]的回文子串，最少分割次数是dp[i]。
        [0, j]区间的最小切割数量，我们已经知道了就是dp[j]。
        此时就找到了递推关系，当切割点j在[0, i] 之间时候，dp[i] = dp[j] + 1;
        本题是要找到最少分割次数，所以遍历j的时候要取最小的dp[i]。dp[i] = Math.min(dp[i], dp[j] + 1);
    */
    for (let j = 0; j < i; j++) {
      if (isPal[j + 1][i]) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }
  return dp[n - 1];
};