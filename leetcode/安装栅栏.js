//安装栅栏
//未解决.js
//https://leetcode-cn.com/problems/erect-the-fence/
function orientation(p, q, r) {
  return (q[1] - p[1]) * (r[0] - q[0]) - (q[0] - p[0]) * (r[1] - q[1]);
}
function distance(p, q) {
  return (p[0] - q[0]) * (p[0] - q[0]) + (p[1] - q[1]) * (p[1] - q[1]);
}

/**
* @param {number[][]} trees
* @return {number[][]}
*/
var outerTrees = function(trees) {
  let n = trees.length;

  if (n < 4) return trees; // 小于4每个点都在边界

  // 选择 y 坐标最小的点为起始点，如果有相同的最小 y 坐标，我们选择 x 坐标最小的
  let lb = trees[0]; // 查找最左下点
  for (let i = 1; i < n; i++) {
      if (trees[i][1] < lb[1]
          || (trees[i][1] === lb[1] && trees[i][0] === lb[0])
      ) {
          lb = trees[i];
      }
  }

  trees.sort((a, b) => {
      let diff = orientation(lb, a, b) - orientation(lb, b, a);
      return diff === 0
          ? distance(lb, a) - distance(lb, b)
          : diff > 0 ? 1 : -1;
  });

  let i = n - 1;
  while (i >= 0 && orientation(lb, trees[n - 1], trees[i]) === 0) {
      i--;
  }
  for (let l = i + 1, h = n - 1; l < h; l++, h--) {
      let temp = trees[l];
      trees[l] = trees[h];
      trees[h] = temp;
  }
  let stack = [
      trees[0],
      trees[1]
  ];
  for (let j = 2; j < n; j++) {
      top = stack.pop();
      while (orientation(stack[stack.length - 1], top, trees[j]) > 0) {
          top = stack.pop();
      }
      stack.push(top);
      stack.push(trees[j]);
  }

  return stack;
};
