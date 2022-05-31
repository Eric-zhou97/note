//未完成
//https://leetcode-cn.com/problems/bP4bmD/submissions/
var allPathsSourceTarget = function(graph) {
  const stack = [], ans = [];

  const dfs = (graph, x, n) => {
      if (x === n) {
          ans.push(stack.slice());
          return;
      }
      for (const y of graph[x]) {
          stack.push(y);
          dfs(graph, y, n);
          stack.pop();
      }
  }

  stack.push(0);
  dfs(graph, 0, graph.length - 1);
  return ans;
};
