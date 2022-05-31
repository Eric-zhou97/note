// https://leetcode-cn.com/problems/minimum-height-trees/
// 未完成
var findMinHeightTrees = function(n, edges) {
  const ans = [];
  if (n === 1) {
      ans.push(0);
      return ans;
  }
  const adj = new Array(n).fill(0).map(() => new Array());
  for (const edge of edges) {
      adj[edge[0]].push(edge[1]);
      adj[edge[1]].push(edge[0]);
  }

  const parent = new Array(n).fill(-1);
  /* 找到与节点 0 最远的节点 x */
  const x = findLongestNode(0, parent, adj);
  /* 找到与节点 x 最远的节点 y */
  let y = findLongestNode(x, parent, adj);
  /* 求出节点 x 到节点 y 的路径 */
  const path = [];
  parent[x] = -1;
  while (y !== -1) {
      path.push(y);
      y = parent[y];
  }
  const m = path.length;
  if (m % 2 === 0) {
      ans.push(path[Math.floor(m / 2) - 1]);
  }
  ans.push(path[Math.floor(m / 2)]);
  return ans;
}

const findLongestNode = (u, parent, adj) => {
  const n = adj.length;
  const queue = [];
  const visit = new Array(n).fill(false);
  queue.push(u);
  visit[u] = true;
  let node = -1;

  while (queue.length) {
      const curr = queue.shift();
      node = curr;
      for (const v of adj[curr]) {
          if (!visit[v]) {
              visit[v] = true;
              parent[v] = curr;
              queue.push(v);
          }
      }
  }
  return node;
};

//另解
var findMinHeightTrees = function (n, edges) {
  let adjacent = [];
  let indegrees = [];
  for (let i = 0; i < n; i++) {
      adjacent.push([]);
      indegrees.push(0);
  }

  // 初始化邻接表（二维数组）和入度（一维数组）
  edges.forEach(edge => {
      adjacent[edge[0]].push(edge[1]);
      adjacent[edge[1]].push(edge[0]);
      indegrees[edge[0]]++;
      indegrees[edge[1]]++;
  });

  // 取得入度为1的顶点集
  let collection = [];
  indegrees.forEach((item, index) => {
      if (item === 1) {
          collection.push(index);
      }
  });

  while (collection.length) {
      let temp = [];
      // 对每个入度为1的顶点，将其指向的顶点入度减1
      // 如果指向顶点的入度刚好减为1，则加入temp数组
      collection.forEach(vertex => {
          adjacent[vertex].forEach(lineTo => {
              if (--indegrees[lineTo] === 1) {
                  temp.push(lineTo);
              }
          });
      });
      
      // temp数组为空，运行结束，返回最后一轮的collection，即是答案
      if (!temp.length) {
          return collection;
      }

      // 不为空，则作交换，下一轮继续
      collection = temp;
  }
  return [0];
}