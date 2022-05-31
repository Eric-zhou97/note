var pacificAtlantic = function(heights) {
  const m = heights.length, n = heights[0].length;
  const pacificVisited = new Array(m).fill(0).map(() => new Array(n).fill(false));
  const atlanticVisited = new Array(m).fill(0).map(() => new Array(n).fill(false));
  const res = [];
  const dfs = (r, c, visited) => {
      if (visited[r][c]) return;
      visited[r][c] = true;

      if (pacificVisited[r][c] && atlanticVisited[r][c] === true) {
          res.push([r, c]);
      }

      if (r - 1 >= 0 && heights[r - 1][c] >= heights[r][c]) dfs(r - 1, c, visited);
      if (r + 1 < m && heights[r + 1][c] >= heights[r][c]) dfs(r + 1, c, visited);
      if (c - 1 >= 0 && heights[r][c - 1] >= heights[r][c]) dfs(r, c - 1, visited);
      if (c + 1 < n && heights[r][c + 1] >= heights[r][c]) dfs(r, c + 1, visited);
  }

  //从海边上，向内探索
  for (let i = 0; i < m; i++) {
      dfs(i, 0, pacificVisited);
      dfs(i, n - 1, atlanticVisited);
  }
  for (let j = 0; j < n; j++) {
      dfs(0, j, pacificVisited);
      dfs(m - 1, j, atlanticVisited);
  }
  return res;
};