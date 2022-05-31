//未完成
//https://leetcode-cn.com/problems/0i0mDW/
var minPathSum = function(grid) {
  const m = grid.length, n = grid[0].length

  // 状态转移
  for (let i = 0; i < m ; i++) {
      for (let j = 0; j < n ; j++) {
          if (i == 0 && j != 0) {
              grid[i][j] = grid[i][j] + grid[i][j - 1]
          } else if (i != 0 && j == 0) {
              grid[i][j] = grid[i][j] + grid[i - 1][j]
          } else if (i != 0 && j != 0) {
              grid[i][j] = grid[i][j] + Math.min(grid[i - 1][j], grid[i][j - 1])
          }
      }
  }

  // 返回结果
  return grid[m - 1][n - 1]
}