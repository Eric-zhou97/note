//并查集
var numEnclaves = function(grid) {
  const m = grid.length, n = grid[0].length;
  const uf = new UnionFind(grid);
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (grid[i][j] === 1) {
              //二维转一维
              const index = i * n + j;
              if (j + 1 < n && grid[i][j + 1] === 1) {
                  uf.union(index, index + 1);
              }
              if (i + 1 < m && grid[i + 1][j] === 1) {
                  uf.union(index, index + n);
              }
          }
      }
  }
  let enclaves = 0;
  for (let i = 1; i < m - 1; i++) {
      for (let j = 1; j < n - 1; j++) {
          if (grid[i][j] === 1 && !uf.isOnEdge(i * n + j)) {
              enclaves++;
          }
      }
  }
  return enclaves;
}

class UnionFind {
  constructor(grid) {
      const m = grid.length, n = grid[0].length;
      this.parent = new Array(m * n).fill(0);
      this.onEdge = new Array(m * n).fill(false);
      for (let i = 0; i < m; i++) {
          for (let j = 0; j < n; j++) {
              if (grid[i][j] === 1) {
                  const index = i * n + j;
                  this.parent[index] = index;
                  if (i === 0 || i === m - 1 || j === 0 || j === n - 1) {
                      this.onEdge[index] = true;
                  }
              }
          }
      }
  }

  find(i) {
      if (this.parent[i] !== i) {
          this.parent[i] = this.find(this.parent[i]);
      }
      return this.parent[i];
  }

  union(x, y) {
      const rootx = this.find(x);
      const rooty = this.find(y);
      if (rootx !== rooty) {
            this.parent[rooty] = rootx;
            this.onEdge[rootx] |= this.onEdge[rooty];
      }
  }

  isOnEdge(i) {
      return this.onEdge[this.find(i)];
  }
}


//另解
//深度优先，广度优先也可
var numEnclaves = function(grid) {
  const n = grid.length, m = grid[0].length;
  let res = 0;
  for(let i = 0; i < n; i++) {
      dfs(grid, i, 0);
      dfs(grid, i, m - 1);
  }

  for(let j = 0; j < m; j++) {
      dfs(grid, 0, j);
      dfs(grid, n - 1, j);
  }

  for(let i = 0; i < n; i++) {
      for(let j = 0; j < m; j++) {
          if(grid[i][j] == 1) {
              res++;
          }
      }
  }

  return res;


  function dfs(grid, i, j) {
      if(i < 0 || j < 0 || i >= n || j >= m) {
          return;
      }

      if(grid[i][j] == 0) {
          return;
      }

      grid[i][j] = 0;

      dfs(grid, i - 1, j);
      dfs(grid, i + 1, j);
      dfs(grid, i, j - 1);
      dfs(grid, i, j + 1);
  }
};