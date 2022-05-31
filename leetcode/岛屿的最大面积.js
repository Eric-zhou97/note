//未完成
//https://leetcode-cn.com/problems/ZL6zAn/
var maxAreaOfIsland = function(grid) {
  const n = grid.length;
  const m = grid[0].length;
  let res = 0;

  // 将每一个岛屿 看成 图的每一个节点
  // 记录每一个节点的颜色： 1：未访问，0：被访问过了
  let colors = new Array(n).fill(0).map(()=>new Array(m).fill(1));
  for(let i=0;i<n;i++) {
      for(let j=0;j<m;j++) {
          if(grid[i][j]==1) {
              let result = dfs(i,j);
          (result>res) && (res = result);
          }
      }
  }
  return res;

  // dfs
  function dfs(i,j) {
      if(i<0 || i>=n || j<0 || j>=m) return 0;
      
      let result = 0;
      const num = grid[i][j];
      const color = colors[i][j];
      colors[i][j] = 0;
      if(num && color) {
          result += dfs(i+1,j);
          result += dfs(i-1,j);
          result += dfs(i,j+1);
          result += dfs(i,j-1);
          result ++;
      }
      return result;
  }
};