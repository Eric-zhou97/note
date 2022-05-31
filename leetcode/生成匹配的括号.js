//二选一递归枚举
var generateParenthesis = function(n) {
  let res = [];
  function dfs(str, left, right) {
      if(str.length === n * 2) {
          res.push(str);
          return;
      }
      if (left < n) dfs(str+'(', left+1, right);
      if (right < n && right<left) dfs(str+')', left, right+1);
  }
  dfs('', 0, 0)
  return res;
};