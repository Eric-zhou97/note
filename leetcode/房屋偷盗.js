//未完成
//https://leetcode-cn.com/problems/Gu0c2T/
var rob = function(nums) {
  const n = nums.length
  const memo = new Array(n).fill(-1)

  const dfs = (i) => {
      if (i >= n) return 0
      if (memo[i] != -1) return memo[i]

      const left = dfs(i + 1)
      const right = dfs(i + 2)

      memo[i] = Math.max(left, right + nums[i])
      return memo[i]
  }

  return dfs(0)
};