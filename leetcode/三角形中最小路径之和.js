//未完成
//https://leetcode-cn.com/problems/IlPe0q/
var minimumTotal = function(triangle) {
  let n = triangle.length;
  // 原数组优化 dp 空间
  for(let i=0;i<n;i++) {
      let m = triangle[i].length;
      for(let j=0;j<m;j++) {
          if(j>0 && j<m-1) triangle[i][j] = triangle[i][j] + Math.min(triangle[i-1][j-1],triangle[i-1][j]);
          else if(j>0) triangle[i][j] = triangle[i][j] + triangle[i-1][j-1];
          else if(j<m-1) triangle[i][j] = triangle[i][j] + triangle[i-1][j];
      }
  }
  let result = Infinity;
  // 比较一下最底层的路径和中，哪个是最小的
  for(let num of triangle[n-1]) {
      if(result>num) result = num;
  }
  return result;
};