//星型图，一个节点连其它所有节点，特殊情况
var findCenter = function(edges) {
  return (edges[0][0] == edges[1][0] || edges[0][0] == edges[1][1]) ? edges[0][0] : edges[0][1];
}; 