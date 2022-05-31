var luckyNumbers  = function(matrix) {
  const m = matrix.length, n = matrix[0].length;
  const minRow = new Array(m).fill(Number.MAX_SAFE_INTEGER);
  const maxCol = new Array(n).fill(0);
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          //将最大最小用数组存起来，在一次遍历后生成
          minRow[i] = Math.min(minRow[i], matrix[i][j]);
          maxCol[j] = Math.max(maxCol[j], matrix[i][j]);
      }
  }
  const ret = [];
  for (let i = 0; i < m; i++) {
      for (let j = 0; j < n; j++) {
          if (matrix[i][j] === minRow[i] && matrix[i][j] === maxCol[j]) {
              ret.push(matrix[i][j]);
          }
      }
  }
  return ret;
};
