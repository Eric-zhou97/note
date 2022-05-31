//未完成
//https://leetcode-cn.com/problems/M99OJA/
var partition = function(s) {
  // 二维数组，dp[i][j] = 字符i到j是否为回文串。
  // 回溯，在dp数组上跳转寻找回文子串，加入ans，分割完后，加入list，然后弹出一个子串，继续。
  
  //1.校验参数
  if (!s || s.length === 0) return [];
  //2.dp数组
  const n = s.length;
  const dp = new Array(n).fill(true).map(item => item = new Array(n).fill(true));
  for (let i = n - 1; i >= 0; i--) {
      for (let j = i + 1; j < n; j++) {
          dp[i][j] = dp[i + 1][j - 1] && (s.charAt(i) === s.charAt(j));
      }
  }
  //3.回溯
  const list = [];
  const ans = [];
  function dfs (index) {
      if (index === n) {
          list.push(ans.slice(0));
      } else {
          for (let i = index; i < n; i++) {
              if (dp[index][i]) {
                  ans.push(s.substring(index, i + 1));
                  dfs(i + 1);
                  ans.pop();
              }
          }
      }
  }
  dfs(0);
  return list;
};