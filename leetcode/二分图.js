//未完成
//https://leetcode-cn.com/problems/vEAB3K/
var isBipartite = function(graph) {
  const n = graph.length;
  if(n<3) return true;
  // 二分图判定： 我们给每一个节点上色，如果他对应边的节点无色，则上另一种色，
  // 如果出现边的节点 有色且与当前色一致，则返回false
  const colors = new Array(n).fill(0); // 0:未上色，1:红色，2:蓝色

  let result = true;
  // 对每一个顶点进行广度优先搜索(有些顶点是单独的，其边为空，所以应该对每一个进行广度优先搜索)
  for(let i=0;i<n;i++) {
      result = BFS(i);
      if(!result) return false;
  }
  return true;

  function BFS(vertex) {
      // 队列 实现 广度优先搜索
  let queue = [];
  let edges = graph[vertex];  // edges 存储边

  while(vertex!=undefined) { // queue 不为空

      if(!colors[vertex]) colors[vertex] = 1; // 无色置为红色

      const color = colors[vertex]; // 记录当前顶点的颜色用于下面的判断

      for(let edge of edges) { // 只将无色节点加入：避免重复加入
          if(!colors[edge]) { // 节点无色，将节点上与当前顶点不同的色，并加入到队列中
              queue.push(edge);
              colors[edge] = color == 1?2:1; // 取相反的颜色
          }
          if(colors[edge]==color) return false;
      }

      vertex = queue.shift();

      edges = graph[vertex];
  }

  return true;
  }
};