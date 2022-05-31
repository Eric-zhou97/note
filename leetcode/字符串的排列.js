var permutation = function (s) {
  const n = s.length
  //数组转字符串，字符串转数组
  s = s.split('').sort().join('')
  const result = []
  const used = Array(n).fill(false)
  //全排列
  //未完成
  const dfs = (str) => {
      if (str.length === s.length) {
          result.push(str)
          return
      }
      for (let i = 0; i < n; i++) {
          if (used[i]) continue
          //去重，之前的没在用，代表已经用过了
          if (s[i] === s[i - 1] && !used[i - 1]) continue
          
          used[i] = true
          dfs(str + s[i])
          used[i] = false
      }
  }
  dfs('')
  return result
};