//未理解
var isMatch = function (s, p) {
  //好想直接正则()
  // return new RegExp("^" + p + "$", "g").test(s);

  //递归
  // if (!p) return !s;
  // let fst = false;
  // if (s && (p[0] === s[0] || p[0] === '.')) {
  //   fst = true;
  // }
  // if (p.length >= 2 && p[1] === '*') {
  //   return isMatch(s, p.substr(2)) || (fst && isMatch(s.substr(1), p))
  // } else {
  //   return fst && isMatch(s.substr(1), p.substr(1))
  // }

  // 使用动态规划
  const m = s.length + 1, n = p.length + 1;
  const dp = new Array(m);
  for (let i = 0; i < m; i++) {
    dp[i] = new Array(n);
  }
  // 初始化
  dp[0][0] = 1;
  for (let j = 2; j < n; j += 2)
    //第二个才有可能是*，从开头开始连续*的为真，可为空
    dp[0][j] = dp[0][j - 2] && p.charAt(j - 1) === "*" ? 1 : undefined;
  // 状态转移
  for (let i = 1; i < m; i++) {
    for (let j = 1; j < n; j++) {
      //*代表多个或0个
      if (p.charAt(j - 1) === '*') {
        if (dp[i][j - 2]) dp[i][j] = 1;
        if (dp[i - 1][j] && s.charAt(i - 1) === p.charAt(j - 2)) dp[i][j] = 1;
        if (dp[i - 1][j] && p.charAt(j - 2) === ".") dp[i][j] = 1;
      } else {
        if (dp[i - 1][j - 1] && s.charAt(i - 1) === p.charAt(j - 1)) dp[i][j] = 1;
        if (dp[i - 1][j - 1] && p.charAt(j - 1) === ".") dp[i][j] = 1;
      }
    }
  }
  return dp[m - 1][n - 1] === 1;
};